// tests/e2e/helpers/compat-report.js
//
// Génère un rapport HTML auto-contenu à partir des données collectées par audit-compat.spec.js.
// Sauvegardé dans tests/e2e/reports/audit-compat-YYYY-MM-DD.html (gitignored par /tests).

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const REPORTS_DIR = join(process.cwd(), 'tests/e2e/reports');

const VISION_LABELS = {
  deuteranopia:  'Deutéranopie (rouge-vert, ~8% des hommes)',
  protanopia:    'Protanopie (rouge aveugle)',
  achromatopsia: 'Achromasie (noir et blanc complet)',
};

const IMPACT_COLOR = { critical: '#dc2626', serious: '#ea580c', moderate: '#ca8a04', minor: '#6b7280' };
const IMPACT_ORDER = { critical: 0, serious: 1, moderate: 2, minor: 3 };

function badge(pass, warn = false) {
  if (warn) return '<span style="color:#ca8a04;font-weight:bold">⚠️ WARN</span>';
  return pass
    ? '<span style="color:#16a34a;font-weight:bold">✅ PASS</span>'
    : '<span style="color:#dc2626;font-weight:bold">❌ FAIL</span>';
}

function violationRows(violations) {
  return [...violations]
    .sort((a, b) => (IMPACT_ORDER[a.impact] ?? 9) - (IMPACT_ORDER[b.impact] ?? 9))
    .map(v => {
      const c = IMPACT_COLOR[v.impact] || '#6b7280';
      const nodes = v.nodes.slice(0, 3)
        .map(n => `<code>${n.target.join(' > ')}</code>`)
        .join('<br>');
      return `<tr>
        <td><span style="color:${c};font-weight:bold;text-transform:uppercase">${v.impact}</span></td>
        <td><code>${v.id}</code></td>
        <td style="font-size:0.85em">${v.description}</td>
        <td style="font-size:0.8em">${nodes}</td>
      </tr>`;
    }).join('');
}

export function generateReport(data) {
  if (!existsSync(REPORTS_DIR)) mkdirSync(REPORTS_DIR, { recursive: true });

  const date = new Date(data.date).toLocaleDateString('fr-FR', {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });

  const totalContrastBlocking = data.contrast.reduce(
    (n, s) => n + s.violations.filter(v => ['critical', 'serious'].includes(v.impact)).length, 0
  );
  const totalKeyboard = data.keyboard.reduce((n, s) => n + s.violations.length, 0);
  const zoomFails     = data.zoom.filter(z => z.hasOverflow).length;
  const touchAA       = data.touchTargets.reduce(
    (n, s) => n + s.smallTargets.filter(t => t.severity === 'AA').length, 0
  );

  // ── Vision screenshots grouped by screen ──────────────────────────────────
  const visionByScreen = {};
  for (const v of data.vision) {
    if (!visionByScreen[v.screen]) visionByScreen[v.screen] = {};
    visionByScreen[v.screen][v.type] = v.screenshotB64;
  }

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Audit Compatibilité — Les Héritiers — ${date}</title>
<style>
  *{box-sizing:border-box}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;margin:0;padding:24px 36px;background:#fafaf9;color:#1c1917;line-height:1.5}
  h1{font-size:1.8rem;color:#78350f;margin-bottom:4px}
  h2{font-size:1.2rem;color:#44403c;border-bottom:2px solid #e7e5e4;padding-bottom:8px;margin-top:40px}
  h3{font-size:0.95rem;color:#57534e;margin:20px 0 8px}
  .meta{color:#78716c;margin-bottom:28px;font-size:0.9rem}
  .grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:16px 0 32px}
  .card{background:#fff;border:1px solid #e7e5e4;border-radius:8px;padding:16px}
  .card-title{font-size:0.78rem;color:#78716c;text-transform:uppercase;letter-spacing:.05em}
  .card-value{font-size:2rem;font-weight:bold;margin:4px 0 6px}
  table{width:100%;border-collapse:collapse;font-size:0.85rem;margin:10px 0}
  th{background:#f5f5f4;text-align:left;padding:8px 12px;font-weight:600;color:#44403c}
  td{padding:8px 12px;border-bottom:1px solid #f5f5f4;vertical-align:top}
  code{background:#f5f5f4;padding:2px 5px;border-radius:3px;font-family:monospace;font-size:0.8em}
  .section-block{background:#fff;border:1px solid #e7e5e4;border-radius:8px;padding:16px 20px;margin-bottom:12px}
  .screen-title{font-weight:600;color:#292524;margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
  .ok{color:#16a34a}
  .note{background:#fef9c3;border:1px solid #fde047;border-radius:6px;padding:10px 14px;font-size:0.82rem;color:#713f12;margin:10px 0 16px}
  .vision-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:10px 0}
  .vision-card{border:1px solid #e7e5e4;border-radius:6px;overflow:hidden}
  .vision-label{padding:7px 10px;background:#f5f5f4;font-size:0.78rem;font-weight:600;color:#57534e}
  .vision-card img{width:100%;display:block}
  .zoom-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:10px 0}
  .zoom-card{border:1px solid #e7e5e4;border-radius:6px;overflow:hidden}
  .zoom-label{padding:7px 10px;font-size:0.82rem;font-weight:600}
  .zoom-ok{background:#f0fdf4;color:#16a34a}
  .zoom-fail{background:#fef2f2;color:#dc2626}
  .zoom-card img{width:100%;display:block}
</style>
</head>
<body>

<h1>🔍 Audit Compatibilité — Les Héritiers</h1>
<p class="meta">Généré le ${date} · Playwright + axe-core · Design non modifié</p>

<!-- ── RÉSUMÉ ── -->
<div class="grid4">
  <div class="card">
    <div class="card-title">Contraste couleur</div>
    <div class="card-value" style="color:${totalContrastBlocking === 0 ? '#16a34a' : '#dc2626'}">${totalContrastBlocking}</div>
    ${badge(totalContrastBlocking === 0)}
    <div style="font-size:0.78rem;color:#78716c;margin-top:4px">violations CRITICAL/SERIOUS</div>
  </div>
  <div class="card">
    <div class="card-title">Navigation clavier</div>
    <div class="card-value" style="color:${totalKeyboard === 0 ? '#16a34a' : '#dc2626'}">${totalKeyboard}</div>
    ${badge(totalKeyboard === 0)}
    <div style="font-size:0.78rem;color:#78716c;margin-top:4px">éléments sans focus visible</div>
  </div>
  <div class="card">
    <div class="card-title">Zoom 320px</div>
    <div class="card-value" style="color:${zoomFails === 0 ? '#16a34a' : '#dc2626'}">${zoomFails}</div>
    ${badge(zoomFails === 0)}
    <div style="font-size:0.78rem;color:#78716c;margin-top:4px">écrans avec débordement</div>
  </div>
  <div class="card">
    <div class="card-title">Cibles tactiles</div>
    <div class="card-value" style="color:${touchAA === 0 ? '#16a34a' : '#ca8a04'}">${touchAA}</div>
    ${badge(touchAA === 0, touchAA > 0)}
    <div style="font-size:0.78rem;color:#78716c;margin-top:4px">cibles &lt; 24px (info)</div>
  </div>
</div>

<!-- ── 1. CONTRASTE ── -->
<h2>1. Contraste couleur (WCAG 1.4.3 AA)</h2>
<div class="note">Règle axe-core <code>color-contrast</code>. Pass = 0 violation CRITICAL ou SERIOUS par écran.</div>
${data.contrast.map(s => {
  const blocking = s.violations.filter(v => ['critical', 'serious'].includes(v.impact));
  const all = [...s.violations].sort((a, b) => (IMPACT_ORDER[a.impact] ?? 9) - (IMPACT_ORDER[b.impact] ?? 9));
  return `<div class="section-block">
    <div class="screen-title">${badge(blocking.length === 0)} <span>${s.screen}</span>
      <span style="font-size:0.8rem;color:#78716c">(${s.violations.length} violation${s.violations.length !== 1 ? 's' : ''})</span>
    </div>
    ${all.length === 0
      ? '<p class="ok" style="margin:4px 0">✅ Aucune violation de contraste</p>'
      : `<table><thead><tr><th>Impact</th><th>Règle</th><th>Description</th><th>Éléments</th></tr></thead>
         <tbody>${violationRows(all)}</tbody></table>`}
  </div>`;
}).join('')}

<!-- ── 2. DALTONISME ── -->
<h2>2. Simulation daltonisme</h2>
<div class="note">Captures via Chrome DevTools Protocol (<code>Emulation.setEmulatedVisionDeficiency</code>). Inspection visuelle — pas de critère pass/fail automatique pour WCAG 1.4.1.</div>
${Object.entries(visionByScreen).map(([screen, types]) => `
<div class="section-block">
  <div class="screen-title">📷 ${screen}</div>
  <div class="vision-grid">
    ${Object.entries(types).map(([type, b64]) => `
    <div class="vision-card">
      <div class="vision-label">${VISION_LABELS[type] || type}</div>
      <img src="data:image/png;base64,${b64}" alt="Simulation ${type} — ${screen}" loading="lazy">
    </div>`).join('')}
  </div>
</div>`).join('')}

<!-- ── 3. CLAVIER ── -->
<h2>3. Navigation clavier</h2>
<div class="note">20 pressions Tab par écran. Violation = élément focusé sans <code>outline</code> ni <code>box-shadow</code> visible. Inclut le test Esc sur les modales.</div>
${data.keyboard.map(s => `
<div class="section-block">
  <div class="screen-title">
    ${badge(s.violations.length === 0)} <span>${s.screen}</span>
    <span style="font-size:0.8rem;color:#78716c">(${s.total - s.violations.length}/${s.total} avec focus visible)</span>
  </div>
  ${s.violations.length === 0
    ? '<p class="ok" style="margin:4px 0">✅ Tous les éléments tabbés ont un indicateur de focus</p>'
    : `<ul style="margin:4px 0;padding-left:20px">${s.violations.map(v => `<li><code>${v}</code></li>`).join('')}</ul>`}
</div>`).join('')}

<!-- ── 4. ZOOM ── -->
<h2>4. Zoom 320px (basse vision / mobile)</h2>
<div class="note">Viewport 320×812px. Pass = aucun débordement horizontal (<code>scrollWidth &gt; innerWidth</code>).</div>
${data.zoom.length === 0 ? '<p>Aucune donnée.</p>' : `
<div class="zoom-grid">
  ${data.zoom.map(z => `
  <div class="zoom-card">
    <div class="zoom-label ${z.hasOverflow ? 'zoom-fail' : 'zoom-ok'}">
      ${z.hasOverflow ? '⚠️ Débordement' : '✅ OK'} — ${z.screen}
    </div>
    <img src="data:image/png;base64,${z.screenshotB64}" alt="Zoom ${z.viewport}px — ${z.screen}" loading="lazy">
  </div>`).join('')}
</div>`}

<!-- ── 5. CIBLES TACTILES ── -->
<h2>5. Tailles cibles tactiles</h2>
<div class="note">Informatif uniquement — le design n'est pas modifié pour ce chantier. WCAG 2.5.8 AA = 24×24px min · WCAG 2.5.5 AAA = 44×44px min.</div>
${data.touchTargets.map(s => {
  const aa = s.smallTargets.filter(t => t.severity === 'AA');
  const aaa = s.smallTargets.filter(t => t.severity === 'AAA');
  return `<div class="section-block">
    <div class="screen-title">
      ${badge(aa.length === 0, aaa.length > 0 && aa.length === 0)} <span>${s.screen}</span>
      <span style="font-size:0.8rem;color:#78716c">(${aa.length} &lt; 24px · ${aaa.length} entre 24–44px)</span>
    </div>
    ${s.smallTargets.length === 0
      ? '<p class="ok" style="margin:4px 0">✅ Toutes les cibles ≥ 44px</p>'
      : `<table><thead><tr><th>Sévérité</th><th>Élément</th><th>Libellé</th><th>Dimensions</th></tr></thead>
         <tbody>${s.smallTargets.slice(0, 20).map(t => `
         <tr>
           <td><span style="color:${t.severity === 'AA' ? '#dc2626' : '#ca8a04'};font-weight:bold">${t.severity}</span></td>
           <td><code>${t.tag}</code></td>
           <td style="font-size:0.82em">${t.label || '(vide)'}</td>
           <td>${t.w}×${t.h}px</td>
         </tr>`).join('')}
         ${s.smallTargets.length > 20 ? `<tr><td colspan="4" style="color:#78716c">… et ${s.smallTargets.length - 20} autres</td></tr>` : ''}
         </tbody></table>`}
  </div>`;
}).join('')}

</body>
</html>`;

  const filename = join(REPORTS_DIR, `audit-compat-${new Date().toISOString().split('T')[0]}.html`);
  writeFileSync(filename, html, 'utf8');
  console.log(`\n📄 Rapport HTML généré : ${filename}`);
  return filename;
}
