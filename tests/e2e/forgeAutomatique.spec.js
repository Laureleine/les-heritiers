import { test, expect } from '@playwright/test';

// 🧬 L'ADN CIBLE : Le plan de construction que le robot doit suivre scrupuleusement
const ADN_CIBLE = {
  nom: 'Auguste',
  nomFeerique: 'Oan Pervallon',
  sexe: 'Homme',
  typeFee: 'Léporide',
  caracsAjustements: {
    force: 2,       // Le robot cliquera 2 fois sur le "+" de Force
    prestance: 1,   // Le robot cliquera 1 fois sur le "+" de Prestance
    sangFroid: 1    // Le robot cliquera 1 fois sur le "+" de Sang-Froid
  },
  profilMajeur: 'Érudit',
  profilMineur: 'Aventurier'
};

test('Test E2E : Reconstruction complète et scellage d\'un Léporide', async ({ page }) => {
  // On s'assure d'avoir un temps de réponse généreux pour laisser React calculer les budgets
  test.setTimeout(60000); 

  console.log(`🤖 Démarrage de l'automate pour la forge de ${ADN_CIBLE.nom}...`);

  // 1. CONNEXION & ACCUEIL
  await page.goto('http://localhost:3000');
  
  console.log("👉 Authentification de l'automate...");
  
  // Le robot remplit le formulaire de ton composant Auth.js
  await page.fill('input[type="email"]', 'azghal@free.fr');
  await page.fill('input[type="password"]', 'Testeur01@');
  await page.click('button:has-text("Se connecter")');

  // ✨ LA NOUVELLE INCISION : Le Fantôme accepte les Mentions Légales !
  console.log("👉 Signature du registre légal...");
  const btnDisclaimer = page.locator('button:has-text("J\'ai compris et j\'accepte")');
  // On lui dit d'attendre l'apparition de la modale (qui a une animation fade-in)
  await btnDisclaimer.waitFor({ state: 'visible', timeout: 10000 });
  await btnDisclaimer.click();

  // ✨ LA SÉCURITÉ ABSOLUE
  console.log("👉 Attente de l'ouverture du Grimoire...");
  const boutonNouveau = page.locator('button:has-text("Nouveau")');
  await expect(boutonNouveau).toBeVisible({ timeout: 10000 });
  
  // 2. LANCEMENT DE LA FORGE
  console.log("👉 Clic sur 'Nouveau Personnage'...");
  await boutonNouveau.click();

  // 3. ÉTAPE 1 : IDENTITÉ
  console.log("👉 Étape 1 : Remplissage de l'identité...");
  
  // 3a. On cible l'input avec précision via son placeholder
  await page.getByPlaceholder('Ex: Arthur Pendragon').fill(ADN_CIBLE.nom);
  
  // 3b. On fouille le catalogue pour trouver notre Fée
  console.log("👉 Attente de la dissipation du Nuage (Skeleton)...");
  
  // ✨ LA RÈGLE D'OR E2E : On attend que le chargement soit visuellement terminé !
  // Si le Nuage est rapide, cette ligne passe en 1 milliseconde. Sinon, elle attend jusqu'à 30s.
  await expect(page.getByText('Déchiffrage du Nuage...')).toBeHidden({ timeout: 30000 });

  console.log("👉 Recherche de l'espèce...");
  
  // Un sélecteur ultra-souple : on ignore la casse (majuscule/minuscule) et on prend le premier bouton
  const btnFee = page.getByRole('button', { name: new RegExp(ADN_CIBLE.typeFee, 'i') }).first();
  
  // Puisque le Nuage est chargé, si on ne voit pas la fée, C'EST qu'elle est Moderne !
  if (!(await btnFee.isVisible())) {
    console.log("👉 Espèce introuvable dans les Traditionnelles, bascule sur les Modernes...");
    await page.getByRole('button', { name: /modernes/i }).click();
  }
  
  // La cible est verrouillée, on clique !
  await btnFee.click();

  // 3c. Le panneau est ouvert, le bouton Sexe existe enfin, on clique !
  console.log("👉 Sélection du Sexe...");
  await page.getByRole('button', { name: ADN_CIBLE.sexe, exact: true }).click();
  
  // 3d. On valide l'Héritage (Le grand bouton de Step1.js)
  // On utilise une expression régulière pour ignorer si le nom féminin/masculin change
  await page.getByRole('button', { name: new RegExp('Choisir :.*', 'i') }).click();

  // 3e. On passe à la page suivante (Le bouton global de App.js)
  await page.getByRole('button', { name: 'Suivant' }).click();
  
  // 4. ÉTAPES 2 à 4 : MAGIE ET ATOUTS (On survole pour ce test simple)
  console.log("👉 Traversée des étapes magiques...");
  await page.click('button:has-text("Suivant")'); // Capas
  await page.click('button:has-text("Suivant")'); // Pouvoirs
  await page.click('button:has-text("Suivant")'); // Atouts

  // 5. ÉTAPE 5 : CARACTÉRISTIQUES (Le test du moteur mathématique)
  console.log("👉 Étape 5 : Augmentation des caractéristiques...");
  await expect(page.locator('h2:has-text("Caractéristiques")')).toBeVisible();

  // ✨ LE FIX : On donne un lexique de traduction au robot pour l'UI
  const DICTIONNAIRE_UI = {
    agilite: "Agilité",
    constitution: "Constitution",
    force: "Force",
    precision: "Précision",
    esprit: "Esprit",
    perception: "Perception",
    prestance: "Prestance",
    sangFroid: "Sang-froid" // Le fameux tiret !
  };

  // Le robot va cliquer physiquement sur les boutons '+' selon l'ADN !
  for (const [carac, clics] of Object.entries(ADN_CIBLE.caracsAjustements)) {
    for (let i = 0; i < clics; i++) {
      
      // On traduit la clé de l'ADN en texte affiché à l'écran
      const nomCarac = DICTIONNAIRE_UI[carac];
      
      // On prend le conteneur principal de la ligne
      const caracRow = page.locator('.flex.justify-between.bg-white').filter({ hasText: nomCarac });
      
      // On cible le 2ème bouton (index 1) à l'intérieur de CETTE ligne (le bouton "+")
      await caracRow.locator('button').nth(1).click(); 
      
      // Petit délai pour simuler un humain et laisser le Reducer respirer
      await page.waitForTimeout(300); 
    }
  }

  await page.click('button:has-text("Suivant")');

  // 6. ÉTAPE 6 : PROFILS
  console.log("👉 Étape 6 : Sélection des Profils...");
  await expect(page.locator('h3:has-text("Profil Majeur")')).toBeVisible();
  await page.click(`button:has-text("${ADN_CIBLE.profilMajeur}")`);
  await page.click(`button:has-text("${ADN_CIBLE.profilMineur}")`);
  
  // Remplissage rapide jusqu'à la fin
  for (let i = 0; i < 5; i++) {
    await page.click('button:has-text("Suivant")');
    await page.waitForTimeout(500); // Laisse les transitions se faire
  }

  // 6.5 SAUVEGARDE EN BASE DE DONNÉES (Le passage du Fantôme au Réel)
  console.log("👉 Étape 6.5 : Sauvegarde de l'Héritier dans le Nuage...");
  
  // On clique sur le bouton Sauvegarder présent dans la barre supérieure (CharacterCard/App.js)
  await page.getByRole('button', { name: 'Sauvegarder' }).click();
  
  // On attend OBLIGATOIREMENT la notification de succès de Supabase avant de sceller !
  const notificationSave = page.locator('text=/sauvegardé avec succès/i');
  await expect(notificationSave).toBeVisible({ timeout: 10000 });

  // Petit délai pour laisser React mettre à jour l'ID réel dans le CharacterContext
  await page.waitForTimeout(500);

  // 7. LE CRASH-TEST FINAL : L'ÉCRAN RÉCAPITULATIF ET LE CERBÈRE
  console.log("👉 Étape Bilan : Test du Bouclier Anti-Triche...");
  const boutonSceller = page.locator('button:has-text("Vérifier le Sceau")');
  await expect(boutonSceller).toBeVisible();
  
  await boutonSceller.click();

  console.log("👉 Vérification du refus de scellage (Points manquants)...");
  // Maintenant que le perso est sauvegardé, c'est bien l'erreur mathématique qui va s'afficher !
  const notificationRefus = page.locator('text=/Sceau refusé/i').first();
  await expect(notificationRefus).toBeVisible({ timeout: 5000 });
  
  // On vérifie que la modale de scellage n'existe PAS dans le DOM (Le Cerbère a fait son job)
  const modaleScellage = page.locator('h3:has-text("Apposer le Sceau Définitif")');
  await expect(modaleScellage).toBeHidden();

  console.log("✅ CRASH-TEST RÉUSSI ! Le moteur mathématique a parfaitement bloqué un Héritier incomplet !");
});