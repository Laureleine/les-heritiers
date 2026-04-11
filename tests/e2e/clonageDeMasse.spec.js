import { test, expect } from '@playwright/test';
import archives from '../fixtures/echantillon_heritiers.json';

const DICTIONNAIRE_UI = {
  agilite: "Agilité", constitution: "Constitution", force: "Force", precision: "Précision",
  esprit: "Esprit", perception: "Perception", prestance: "Prestance", sangFroid: "Sang-froid"
};

test.describe('🏭 Usine de Clonage : Tests Data-Driven Intégral', () => {

  for (const adn of archives) {

    test(`Clonage & Scellage de : ${adn.nom} (${adn.typeFee})`, async ({ page }) => {
      test.setTimeout(90000); // On lui donne 90s car il a beaucoup de clics à faire !
      
      // 1. CONNEXION ET LANCEMENT
      await page.goto('http://localhost:3000');
      await page.fill('input[type="email"]', 'ton-compte-test@heritiers.fr');
      await page.fill('input[type="password"]', 'ton-mot-de-passe-secret');
      await page.click('button:has-text("Se connecter")');
      
      const btnDisclaimer = page.locator('button:has-text("J\'ai compris et j\'accepte")');
      await btnDisclaimer.waitFor({ state: 'visible', timeout: 10000 });
      await btnDisclaimer.click();

      const boutonNouveau = page.locator('button:has-text("Nouveau")');
      await expect(boutonNouveau).toBeVisible({ timeout: 10000 });
      await boutonNouveau.click();

      // 2. ÉTAPE 1 : IDENTITÉ
      await expect(page.getByText('Déchiffrage du Nuage...')).toBeHidden({ timeout: 30000 });
      await page.getByPlaceholder('Ex: Arthur Pendragon').fill(adn.nom);
      
      const btnFee = page.getByRole('button', { name: new RegExp(adn.typeFee, 'i') }).first();
      if (!(await btnFee.isVisible())) {
        await page.getByRole('button', { name: /modernes/i }).click();
      }
      await btnFee.click();
      await page.getByRole('button', { name: adn.sexe, exact: true }).click();
      await page.getByRole('button', { name: new RegExp('Choisir :.*', 'i') }).click();
      await page.getByRole('button', { name: 'Suivant' }).click();

      // (Passage des étapes de Magie 2 à 4)
      await page.click('button:has-text("Suivant")'); 
      await page.click('button:has-text("Suivant")'); 
      await page.click('button:has-text("Suivant")'); 

      // 3. ÉTAPE 5 : CARACTÉRISTIQUES
      console.log("👉 Répartition des Caractéristiques...");
      await expect(page.locator('h2:has-text("Caractéristiques")')).toBeVisible();

      for (const [carac, scoreFinalCible] of Object.entries(adn.caracteristiques)) {
        const nomCaracUi = DICTIONNAIRE_UI[carac];
        const caracRow = page.locator('.flex.justify-between.bg-white').filter({ hasText: nomCaracUi });

        const minText = await caracRow.locator('.text-gray-400').first().innerText();
        const regexMatch = minText.match(/Min\s+(\d+)/);
        const minGenetique = regexMatch ? parseInt(regexMatch[#1#]) : 1; 

        const clicsAEffectuer = scoreFinalCible - minGenetique;

        for (let i = 0; i < clicsAEffectuer; i++) {
          await caracRow.locator('button').nth(1).click(); 
          await page.waitForTimeout(100); 
        }
      }
      await page.click('button:has-text("Suivant")');

      // 4. ÉTAPE 6 : PROFILS
      console.log("👉 Configuration des Profils...");
      await expect(page.locator('h3:has-text("Profil Majeur")')).toBeVisible();
      await page.click(`button:has-text("${adn.profils.majeur.nom}")`);
      await page.click(`button:has-text("${adn.profils.mineur.nom}")`);
      await page.click('button:has-text("Suivant")');

      // 5. ÉTAPE 7 : COMPÉTENCES UTILES
      console.log("👉 Répartition des Compétences Utiles...");
      await expect(page.locator('h3:has-text("Compétences Utiles")')).toBeVisible();

      if (adn.competencesLibres && adn.competencesLibres.rangs) {
        for (const [nomComp, clicsAEffectuer] of Object.entries(adn.competencesLibres.rangs)) {
          // On cible la ligne spécifique de la compétence pour cliquer sur son bouton "+"
          const compRow = page.locator('div').filter({ hasText: new RegExp(`^${nomComp}$`, 'i') }).locator('..');
          
          for (let i = 0; i < clicsAEffectuer; i++) {
            // Le bouton "+" est généralement le dernier bouton de la ligne dans ton UI Tailwind
            await compRow.locator('button').last().click();
            await page.waitForTimeout(100); 
          }
        }
      }
      
      // Passage express des étapes 8, 9, 10
      for (let i = 0; i < 3; i++) {
        await page.click('button:has-text("Suivant")');
        await page.waitForTimeout(300);
      }

      // 6. ÉTAPE 11 : LE BILAN ET LE CERBÈRE
      console.log("👉 Sauvegarde et Validation du Sceau...");
      
      // Sauvegarde dans Supabase avant de sceller (Obligatoire pour éviter l'erreur de fantôme)
      await page.getByRole('button', { name: 'Sauvegarder' }).click();
      await expect(page.locator('text=/sauvegardé avec succès/i')).toBeVisible({ timeout: 10000 });
      await page.waitForTimeout(500);

      // On clique sur Vérifier le Sceau
      const boutonSceller = page.locator('button:has-text("Vérifier le Sceau")');
      await expect(boutonSceller).toBeVisible();
      await boutonSceller.click();

      // Si le JSON est parfait, l'Héritier a dépensé ses 10 pts de caracs, 15 pts d'utiles et 10 pts de futiles.
      // La modale finale "Apposer le Sceau Définitif" doit apparaître sans erreur !
      const modaleScellage = page.locator('h3:has-text("Apposer le Sceau Définitif")');
      await expect(modaleScellage).toBeVisible({ timeout: 5000 });
      
      console.log(`✅ TEST RÉUSSI ! L'Héritier ${adn.nom} a passé la douane du Cerbère !`);
    });
  }
});