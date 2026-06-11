// tests/e2e/audit-compat.spec.js
//
// Audit de compatibilité — 5 dimensions :
//   1. Contraste couleur (axe-core color-contrast, WCAG 1.4.3 AA)
//   2. Daltonisme — captures CDP sur écrans clés (inspection visuelle)
//   3. Navigation clavier — focus visible sur chaque élément tabbé
//   4. Zoom 320px — pas de débordement horizontal (basse vision)
//   5. Tailles cibles tactiles — rapport informatif (design non modifié)
//
// Lancer : npx playwright test tests/e2e/audit-compat.spec.js --project=chromium
// Le rapport HTML est écrit dans tests/e2e/reports/audit-compat-YYYY-MM-DD.html

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { generateReport } from './helpers/compat-report.js';

// Mode serial : partage d'état entre tests dans le même worker
test.describe.configure({ mode: 'serial' });

// ─── Rapport partagé ──────────────────────────────────────────────────────────
const report = {
  date: new Date().toISOString(),
  contrast:     [],  // { screen, violations[] }
  vision:       [],  // { screen, type, screenshotB64 }
  keyboard:     [],  // { screen, violations[], total }
  zoom:         [],  // { screen, viewport, hasOverflow, screenshotB64 }
  touchTargets: [],  // { screen, smallTargets[] }
};

// Écrans où capturer les simulations de vision (les plus colorés)
const VISION_SCREENS = new Set(['Accueil', 'Étape 5 — Caractéristiques', 'Étape 7 — Compétences Utiles']);

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function login(page) {
  await page.goto('/');
  await page.fill('input[type="email"]', process.env.E2E_EMAIL);
  await page.fill('input[type="password"]', process.env.E2E_PASSWORD);
  await page.click('button:has-text("Se connecter")');
  await expect(page.locator('text=Mes personnages')).toBeVisible({ timeout: 20_000 });
}

/** Axe-core avec uniquement la règle color-contrast. */
async function checkContrast(page, label) {
  const results = await new AxeBuilder({ page }).withRules(['color-contrast']).analyze();
  const { violations } = results;
  report.contrast.push({ screen: label, violations });

  const blocking = violations.filter(v => ['critical', 'serious'].includes(v.impact));
  if (violations.length > 0) {
    console.log(`\n🎨 [contraste] ${label} — ${violations.length} violation(s)${blocking.length ? `, ${blocking.length} bloquante(s)` : ''}`);
    violations.forEach(v => {
      console.log(`  [${v.impact?.toUpperCase()}] ${v.id}`);
      v.nodes.slice(0, 2).forEach(n => console.log(`    → ${n.target.join(' > ')}`));
    });
  }
  return blocking;
}

/** Captures CDP avec simulation daltonisme (3 profils). */
async function captureVision(page, label) {
  const cdp = await page.context().newCDPSession(page);
  for (const type of ['deuteranopia', 'protanopia', 'achromatopsia']) {
    await cdp.send('Emulation.setEmulatedVisionDeficiency', { type });
    const screenshot = await page.screenshot({ fullPage: false });
    report.vision.push({ screen: label, type, screenshotB64: screenshot.toString('base64') });
  }
  await cdp.send('Emulation.setEmulatedVisionDeficiency', { type: 'none' });
  await cdp.detach();
}

/**
 * Tab x20 sur la page, vérifie que chaque élément focusé a un indicateur visible.
 * Détecte outline (natif) et box-shadow (Tailwind ring-*).
 */
async function checkKeyboard(page, label) {
  await page.evaluate(() => document.body.focus());
  const violations = [];
  const MAX_TABS = 20;

  for (let i = 0; i < MAX_TABS; i++) {
    await page.keyboard.press('Tab');
    await page.waitForTimeout(60);

    const result = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el.tagName === 'BODY') return null;

      const s = window.getComputedStyle(el);
      const outlineVisible =
        s.outlineWidth !== '0px' &&
        s.outlineStyle !== 'none' &&
        s.outlineColor !== 'rgba(0, 0, 0, 0)' &&
        s.outlineColor !== 'transparent';
      const shadowVisible =
        s.boxShadow !== 'none' &&
        s.boxShadow !== '' &&
        !s.boxShadow.startsWith('rgba(0, 0, 0, 0)');

      return {
        tag: el.tagName,
        label: (el.getAttribute('aria-label') || el.textContent || el.getAttribute('title') || '').trim().slice(0, 50),
        hasIndicator: outlineVisible || shadowVisible,
      };
    });

    if (result && !result.hasIndicator) {
      violations.push(`${result.tag} "${result.label}"`);
    }
  }

  report.keyboard.push({ screen: label, violations, total: MAX_TABS });
  if (violations.length > 0) {
    console.log(`\n⌨️  [clavier] ${label} — ${violations.length} sans focus visible`);
    violations.slice(0, 5).forEach(v => console.log(`  → ${v}`));
  }
  return violations;
}

/** Simule un viewport étroit, capture + détecte le débordement horizontal. */
async function checkZoom(page, label, width = 320) {
  const vp = page.viewportSize() ?? { width: 1280, height: 720 };
  await page.setViewportSize({ width, height: 812 });
  await page.waitForTimeout(400);

  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth
  );
  const screenshot = await page.screenshot({ fullPage: false });
  report.zoom.push({ screen: label, viewport: width, hasOverflow, screenshotB64: screenshot.toString('base64') });

  await page.setViewportSize(vp);
  await page.waitForTimeout(200);

  if (hasOverflow) console.log(`\n🔍 [zoom] ${label} @${width}px — ⚠️ Débordement horizontal`);
  return hasOverflow;
}

/** Mesure la taille des cibles interactives (rapport informatif seulement). */
async function checkTouchTargets(page, label) {
  const targets = await page.evaluate(() => {
    const els = document.querySelectorAll(
      'button:not([disabled]), a[href], input:not([type="hidden"]):not([disabled]), select'
    );
    return Array.from(els)
      .map(el => {
        const r = el.getBoundingClientRect();
        return {
          tag: el.tagName,
          label: (el.getAttribute('aria-label') || el.textContent || el.getAttribute('title') || '').trim().slice(0, 40),
          w: Math.round(r.width),
          h: Math.round(r.height),
        };
      })
      .filter(t => t.w > 0 && t.h > 0 && (t.w < 44 || t.h < 44))
      .map(t => ({ ...t, severity: (t.w < 24 || t.h < 24) ? 'AA' : 'AAA' }));
  });

  report.touchTargets.push({ screen: label, smallTargets: targets });
  const aaCount = targets.filter(t => t.severity === 'AA').length;
  if (aaCount > 0) console.log(`\n👆 [touch] ${label} — ${aaCount} cible(s) < 24px`);
  return targets;
}

/**
 * Audit complet d'un écran : contraste + clavier + vision (si dans VISION_SCREENS).
 * La navigation vers l'écran est à la charge de l'appelant.
 */
async function auditScreen(page, label, { skipTouch = false } = {}) {
  await page.waitForTimeout(500);
  const contrastBlocking = await checkContrast(page, label);
  const kbViolations = await checkKeyboard(page, label);
  if (!skipTouch) await checkTouchTargets(page, label);
  if (VISION_SCREENS.has(label)) await captureVision(page, label);
  return { contrastBlocking, kbViolations };
}

// ─── Tests ────────────────────────────────────────────────────────────────────

test.describe('Audit compatibilité', () => {
  test.setTimeout(600_000);

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('heritiers_disclaimer_accepted', 'true');
    });
    page.on('dialog', dialog => dialog.accept());
  });

  // ── 1. Page de connexion ───────────────────────────────────────────────────
  test('Page de connexion', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await auditScreen(page, 'Connexion');
    await checkZoom(page, 'Connexion');
  });

  // ── 2. Accueil + modale DiceRoller ────────────────────────────────────────
  test('Accueil & modales', async ({ page }) => {
    await login(page);
    await page.waitForTimeout(800);

    await auditScreen(page, 'Accueil');
    await checkZoom(page, 'Accueil');

    // Test clavier modale DiceRoller
    const diceBtn = page.getByRole('button', { name: 'Ouvrir le lanceur de dés' });
    const diceVisible = await diceBtn.isVisible({ timeout: 3_000 }).catch(() => false);
    if (diceVisible) {
      await diceBtn.click();
      await page.waitForTimeout(400);

      // Tab x6 à l'intérieur de la modale
      const modalViolations = [];
      for (let i = 0; i < 6; i++) {
        await page.keyboard.press('Tab');
        await page.waitForTimeout(60);
        const escaped = await page.evaluate(() => {
          const el = document.activeElement;
          return !el || el.tagName === 'BODY' || el === document.documentElement;
        });
        if (escaped) { modalViolations.push(`Focus sorti de la modale après ${i + 1} Tab`); break; }
      }

      // Esc ferme la modale (vérifié via pointer-events-none, indépendant de la transition CSS)
      await page.keyboard.press('Escape');
      await page.waitForTimeout(100);
      const closed = await page.evaluate(() => {
        const dialog = document.querySelector('[role="dialog"]');
        return dialog?.classList.contains('pointer-events-none') ?? false;
      });
      if (!closed) modalViolations.push('Esc ne ferme pas la modale DiceRoller');

      report.keyboard.push({
        screen: 'Modale DiceRoller (focus trap + Esc)',
        violations: modalViolations,
        total: 7,
      });
      console.log(`\n⌨️  [clavier] Modale DiceRoller — ${modalViolations.length === 0 ? '✅ OK' : modalViolations.join(', ')}`);
    }

  });

  // ── 3. Forge — étapes 1 à 11 ──────────────────────────────────────────────
  test('Forge — étapes 1 à 11', async ({ page }) => {
    await login(page);

    // Ouvrir la Forge
    await page.locator('button:has-text("Nouveau")').click();
    await expect(page).toHaveURL(/creator/, { timeout: 10_000 });

    // ── Étape 1 : Héritage (remplir le minimum) ──
    await expect(page.getByPlaceholder('Ex: Arthur Pendragon')).toBeVisible({ timeout: 15_000 });
    await page.getByPlaceholder('Ex: Arthur Pendragon').fill('TestCompat');
    await expect(page.locator('text=Déchiffrage du Nuage...')).toBeHidden({ timeout: 30_000 });
    await page.getByRole('button', { name: /traditionnelles/i }).click();
    await page.waitForTimeout(300);
    const feeBtns = page.locator('.overflow-y-auto').first().locator('button');
    await feeBtns.first().click();
    await page.waitForTimeout(400);
    const sexeBtns = await page.getByRole('button', { name: /^Homme$|^Femme$/ }).all();
    if (sexeBtns.length > 0) await sexeBtns[0].click();
    const btnChoisir = page.getByRole('button', { name: /Choisir :/i });
    if (await btnChoisir.isVisible({ timeout: 3_000 }).catch(() => false)) await btnChoisir.click();

    await auditScreen(page, 'Étape 1 — Héritage', { skipTouch: true });
    await page.getByRole('button', { name: 'Suivant' }).click();

    // ── Étapes 2–10 ──
    const steps = [
      'Étape 2 — Capacités',
      'Étape 3 — Pouvoirs',
      'Étape 4 — Atouts',
      'Étape 5 — Caractéristiques',
      'Étape 6 — Profils',
      'Étape 7 — Compétences Utiles',
      'Étape 8 — Compétences Futiles',
      'Étape 9 — Vie Sociale',
      'Étape 10 — Personnalisation',
    ];
    for (const label of steps) {
      await auditScreen(page, label, { skipTouch: true });
      await page.getByRole('button', { name: 'Suivant' }).click();
    }

    // ── Étape 11 : Bilan ──
    await page.waitForTimeout(800);
    await auditScreen(page, 'Étape 11 — Bilan', { skipTouch: true });

  });

  // ── Rapport HTML ───────────────────────────────────────────────────────────
  test.afterAll(async () => {
    const path = generateReport(report);
    console.log(`\n${'═'.repeat(60)}`);
    console.log(`📊 RÉSUMÉ AUDIT COMPATIBILITÉ`);
    const contrastTotal = report.contrast.reduce((n, s) =>
      n + s.violations.filter(v => ['critical', 'serious'].includes(v.impact)).length, 0);
    const kbTotal = report.keyboard.reduce((n, s) => n + s.violations.length, 0);
    const zoomFails = report.zoom.filter(z => z.hasOverflow).length;
    const touchAA = report.touchTargets.reduce((n, s) =>
      n + s.smallTargets.filter(t => t.severity === 'AA').length, 0);
    console.log(`  🎨 Contraste   : ${contrastTotal === 0 ? '✅ PASS' : `❌ ${contrastTotal} violation(s) bloquante(s)`}`);
    console.log(`  ⌨️  Clavier     : ${kbTotal === 0 ? '✅ PASS' : `❌ ${kbTotal} sans focus visible`}`);
    console.log(`  🔍 Zoom 320px  : ${zoomFails === 0 ? '✅ PASS' : `❌ ${zoomFails} écran(s) avec débordement`}`);
    console.log(`  👆 Touch       : ${touchAA === 0 ? '✅ OK' : `⚠️  ${touchAA} cible(s) < 24px (info)`}`);
    console.log(`  📄 Rapport     : ${path}`);
    console.log('═'.repeat(60));
  });
});
