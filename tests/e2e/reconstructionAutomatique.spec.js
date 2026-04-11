// tests/e2e/reconstructionAutomatique.spec.js
import { test, expect } from '@playwright/test';

test('Crash-test : Reconstruction fidèle de la fiche', async ({ page }) => {
  // 1. On charge l'ADN d'un personnage existant (l'Héritier "Témoin")
  const adnCible = { nom: 'Auguste', typeFee: 'Léporide', force: 3 /* ... */ };

  // 2. Le robot se connecte et lance la Forge
  await page.goto('http://localhost:3000/creator');

  // 3. Étape 1 : Identité
  await page.fill('input[placeholder="Nom humain"]', adnCible.nom);
  await page.click(`button:has-text("${adnCible.typeFee}")`);
  await page.click('button:has-text("Suivant")');

  // 4. Étape Caractéristiques : Le robot clique physiquement sur les "+" !
  const clicsForce = adnCible.force - 1; // On retire la base de 1
  for (let i = 0; i < clicsForce; i++) {
    await page.click('#btn-add-force');
  }
  
  // Et ainsi de suite jusqu'à la modale de Scellage !
  await page.click('text="Sceller mon personnage"');
  
  // 5. Validation : On vérifie que la fiche finale ne présente aucune dette d'XP
  await expect(page.locator('.xp-dispo')).not.toHaveText(/-/);
});