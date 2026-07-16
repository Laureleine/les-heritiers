import 'dotenv/config';
import pg from 'pg';
const { Client } = pg;

const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

await client.connect();

await client.query(`
  CREATE TABLE IF NOT EXISTS cabinet_noms (
    id SERIAL PRIMARY KEY,
    prenom TEXT NOT NULL,
    nom TEXT NOT NULL,
    genre TEXT NOT NULL CHECK (genre IN ('M', 'F'))
  );

  CREATE TABLE IF NOT EXISTS cabinet_backgrounds (
    id SERIAL PRIMARY KEY,
    classe_sociale TEXT NOT NULL,
    profession TEXT NOT NULL,
    genre TEXT NOT NULL CHECK (genre IN ('M', 'F', 'Mixte')),
    age_min INT,
    age_max INT,
    rarete TEXT NOT NULL CHECK (rarete IN ('tres_frequent', 'frequent', 'peu_frequent', 'rare', 'extremement_rare'))
  );

  CREATE TABLE IF NOT EXISTS cabinet_pathologies (
    id SERIAL PRIMARY KEY,
    diagnostic TEXT NOT NULL,
    symptomes TEXT NOT NULL,
    difficulte TEXT NOT NULL,
    notes_historiques TEXT,
    genre_autorise TEXT NOT NULL CHECK (genre_autorise IN ('M', 'F', 'Tous')),
    groupe_cible TEXT NOT NULL CHECK (groupe_cible IN ('Adulte', 'Enfant', 'Vieillard', 'Tous')),
    rarete TEXT NOT NULL
  );
`);
console.log('✓ Tables créées');

await client.query(`DELETE FROM cabinet_noms; DELETE FROM cabinet_backgrounds; DELETE FROM cabinet_pathologies;`);

await client.query(`
  INSERT INTO cabinet_noms (prenom, nom, genre) VALUES
  ('Adèle', 'Garnier', 'F'), ('Blanche', 'Rousseau', 'F'), ('Eugénie', 'Durand', 'F'), ('Marie', 'Dubois', 'F'),
  ('Anatole', 'Petit', 'M'), ('Alphonse', 'Leroy', 'M'), ('Gaston', 'Morel', 'M'), ('Lucien', 'Simon', 'M'),
  ('Aristide', 'Monnier', 'M'), ('Clovis', 'Faure', 'M'), ('Félicien', 'Gérard', 'M'), ('Victor', 'Martin', 'M');
`);
console.log('✓ Noms insérés');

await client.query(`
  INSERT INTO cabinet_backgrounds (classe_sociale, profession, genre, age_min, age_max, rarete) VALUES
  ('Bourgeoise', 'Rentière', 'F', 30, 80, 'frequent'),
  ('Bourgeoise', 'Épouse de magistrat', 'F', 20, 60, 'tres_frequent'),
  ('Ouvrière', 'Blanchisseuse', 'F', 16, 50, 'tres_frequent'),
  ('Bohème', 'Modèle pour peintres', 'F', 16, 30, 'peu_frequent'),
  ('Bourgeois', 'Avoué aux écritures', 'M', 25, 65, 'frequent'),
  ('Bourgeois', 'Rentier / Dandy', 'M', 20, 70, 'peu_frequent'),
  ('Ouvrier', 'Ouvrier typographe (Imprimerie)', 'M', 16, 55, 'tres_frequent'),
  ('Ouvrier', 'Chaudronnier', 'M', 18, 50, 'tres_frequent'),
  ('Ouvrier', 'Chiffonnier de nuit', 'M', 20, 75, 'peu_frequent'),
  ('Aristocrate', 'Comte / Propriétaire terrien', 'M', 35, 80, 'rare'),
  ('Bohème', 'Poète absinthien / Journaliste', 'M', 18, 45, 'peu_frequent');
`);
console.log('✓ Backgrounds insérés');

await client.query(`
  INSERT INTO cabinet_pathologies (diagnostic, symptomes, difficulte, notes_historiques, genre_autorise, groupe_cible, rarete) VALUES
  ('Pox (Syphilis tertiaire / Tabès)', 'Démarche talonnante, crises de douleurs foudroyantes, pupilles immobiles, paranoïa.', 'Difficile', 'Fléau des nuits parisiennes. Traité au mercure (toxique) ou à l''iodure de potassium.', 'M', 'Adulte', 'frequent'),
  ('Absinthisme aigu (Delirium tremens)', 'Tremblements intenses, hallucinations visuelles (animaux, insectes), terreur panique, sueurs.', 'Facile', 'Fréquent chez les ouvriers et la bohème de Montmartre consommant de la "Fée Verte" frelatée.', 'M', 'Adulte', 'frequent'),
  ('Écrasement thoracique (Accident de calèche)', 'Fractures de côtes, crachats de sang mousseux, dyspnée aiguë, cyanose des lèvres.', 'Facile', 'Accident de circulation typique des boulevards parisiens encombrés en 1899.', 'Tous', 'Adulte', 'peu_frequent'),
  ('Folie des grandeurs (Paralysie générale progressive)', 'Propos incohérents, mégalomanie délirante, perte de mémoire, tremblement de la langue.', 'Très difficile', 'Stade ultime et neurologique de la syphilis. Mène inéluctablement à l''asile.', 'M', 'Adulte', 'rare'),
  ('Chlorose (Anémie des jeunes filles)', 'Teint pâle et verdâtre, palpitations, grande lassitude.', 'Facile', 'Le mal des jeunes filles pubères.', 'F', 'Adulte', 'tres_frequent'),
  ('Délire mystique / Hystérie de salon', 'Convulsions théâtrales, mutisme sélectif, extases religieuses soudaines.', 'Très difficile', 'Très popularisé par les leçons de Charcot à la Salpêtrière. Souvent lié à des traumatismes tus.', 'F', 'Adulte', 'peu_frequent'),
  ('Sénilité démente (Gâtisme)', 'Perte d''orientation, incontinence, cris nocturnes, oubli de ses proches.', 'Moyen', 'Aucune structure n''existe, la charge repose entièrement sur les familles.', 'Tous', 'Vieillard', 'frequent'),
  ('Goutte constitutionnelle', 'Orteil tuméfié, rouge, luisant et atrocement douloureux, impossibilité de poser le pied.', 'Facile', 'Maladie des vieillards sédentaires et amateurs de bonne chère et de vin rouge.', 'M', 'Vieillard', 'frequent'),
  ('Affection faélique spontanée (Mal de la Ronce)', 'Pustules argentées exsudant une sève sucrée, somnambulisme en forêt, murmures en langue inconnue.', 'Impossible', 'Pathologie ésotérique. Les médecins scientifiques n''y comprennent rien, l''église crie à la possession.', 'Tous', 'Tous', 'extremement_rare');
`);
console.log('✓ Pathologies insérées');

await client.end();
console.log('✅ Migration cabinet médical terminée');
