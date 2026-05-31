// Éclipses solaires et lunaires 1899–1914 visibles depuis l'Europe
// Sources : NASA Five Millennium Canon of Solar/Lunar Eclipses

const eclipses = [
  // ── 1899 ──
  { date: '1899-06-08', type: 'solaire', nature: 'totale',
    visible: 'Amérique du Nord, Océan Atlantique Nord, Europe du Nord-Ouest' },
  { date: '1899-06-23', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie, Australie' },
  { date: '1899-12-03', type: 'solaire', nature: 'annulaire',
    visible: 'Océan Pacifique, Amérique du Sud, Afrique australe' },
  { date: '1899-12-17', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie' },

  // ── 1900 ──
  { date: '1900-05-28', type: 'solaire', nature: 'totale',
    visible: 'Amérique du Nord, Océan Atlantique, Europe de l\'Ouest, Afrique du Nord' },
  { date: '1900-06-13', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie, Australie' },
  { date: '1900-11-22', type: 'solaire', nature: 'annulaire',
    visible: 'Asie, Océanie, Océan Pacifique' },
  { date: '1900-12-06', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie' },

  // ── 1901 ──
  { date: '1901-05-18', type: 'solaire', nature: 'totale',
    visible: 'Océan Indien, Asie du Sud-Est, Océanie' },
  { date: '1901-05-03', type: 'lunaire', nature: 'totale',
    visible: 'Europe, Afrique, Asie, Australie' },
  { date: '1901-10-27', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie' },
  { date: '1901-11-11', type: 'solaire', nature: 'annulaire',
    visible: 'Europe, Afrique du Nord, Moyen-Orient' },

  // ── 1902 ──
  { date: '1902-04-08', type: 'solaire', nature: 'partielle',
    visible: 'Europe, Asie du Nord, Amérique du Nord' },
  { date: '1902-04-22', type: 'lunaire', nature: 'totale',
    visible: 'Europe, Afrique, Asie, Amérique' },
  { date: '1902-10-17', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Amérique' },
  { date: '1902-10-31', type: 'solaire', nature: 'partielle',
    visible: 'Asie, Europe de l\'Est' },

  // ── 1903 ──
  { date: '1903-03-29', type: 'solaire', nature: 'annulaire',
    visible: 'Asie, Océan Pacifique' },
  { date: '1903-04-12', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie, Amérique' },
  { date: '1903-09-21', type: 'solaire', nature: 'totale',
    visible: 'Océan Indien, Afrique australe' },
  { date: '1903-10-06', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie' },

  // ── 1904 ──
  { date: '1904-03-17', type: 'solaire', nature: 'annulaire',
    visible: 'Europe, Afrique du Nord, Moyen-Orient, Asie du Sud' },
  { date: '1904-03-31', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie, Australie' },
  { date: '1904-09-09', type: 'solaire', nature: 'totale',
    visible: 'Amérique du Sud, Océan Atlantique' },
  { date: '1904-09-24', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie, Australie' },

  // ── 1905 ──
  { date: '1905-03-06', type: 'solaire', nature: 'annulaire',
    visible: 'Océanie, Océan Pacifique' },
  { date: '1905-03-19', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie, Amérique' },
  { date: '1905-08-30', type: 'solaire', nature: 'totale',
    visible: 'Europe du Sud, Afrique du Nord, Moyen-Orient' },
  { date: '1905-09-13', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie' },

  // ── 1906 ──
  { date: '1906-02-23', type: 'solaire', nature: 'partielle',
    visible: 'Europe, Afrique du Nord, Asie' },
  { date: '1906-03-08', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie, Amérique' },
  { date: '1906-07-21', type: 'solaire', nature: 'partielle',
    visible: 'Amérique du Sud, Océan Atlantique' },
  { date: '1906-08-20', type: 'solaire', nature: 'partielle',
    visible: 'Asie, Europe de l\'Est' },
  { date: '1906-09-04', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie, Australie' },

  // ── 1907 ──
  { date: '1907-01-14', type: 'solaire', nature: 'totale',
    visible: 'Asie, Océanie' },
  { date: '1907-02-27', type: 'lunaire', nature: 'totale',
    visible: 'Europe, Afrique, Amérique' },
  { date: '1907-07-10', type: 'solaire', nature: 'annulaire',
    visible: 'Amérique du Sud, Océan Atlantique' },
  { date: '1907-08-24', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie, Australie' },

  // ── 1908 ──
  { date: '1908-01-03', type: 'solaire', nature: 'totale',
    visible: 'Océan Pacifique, Amérique du Sud' },
  { date: '1908-02-16', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie, Amérique' },
  { date: '1908-06-28', type: 'solaire', nature: 'annulaire',
    visible: 'Amérique du Nord, Océan Atlantique, Europe de l\'Ouest' },
  { date: '1908-08-12', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie, Australie' },
  { date: '1908-12-23', type: 'solaire', nature: 'hybride',
    visible: 'Amérique du Sud, Afrique' },

  // ── 1909 ──
  { date: '1909-02-05', type: 'lunaire', nature: 'totale',
    visible: 'Europe, Afrique, Asie, Amérique' },
  { date: '1909-06-17', type: 'solaire', nature: 'hybride',
    visible: 'Asie, Océanie, Océan Pacifique' },
  { date: '1909-07-30', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie, Australie' },
  { date: '1909-12-12', type: 'solaire', nature: 'partielle',
    visible: 'Europe, Afrique du Nord, Amérique du Nord' },

  // ── 1910 ──
  { date: '1910-01-25', type: 'lunaire', nature: 'totale',
    visible: 'Europe, Afrique, Asie, Amérique' },
  { date: '1910-05-09', type: 'solaire', nature: 'totale',
    visible: 'Océanie, Asie du Sud-Est' },
  { date: '1910-07-22', type: 'solaire', nature: 'totale',
    visible: 'Océan Pacifique, Amérique du Sud' },
  { date: '1910-11-02', type: 'solaire', nature: 'partielle',
    visible: 'Europe, Moyen-Orient, Asie centrale' },
  { date: '1910-12-27', type: 'lunaire', nature: 'totale',
    visible: 'Europe, Afrique, Asie' },

  // ── 1911 ──
  { date: '1911-04-28', type: 'solaire', nature: 'totale',
    visible: 'Océanie, Océan Pacifique' },
  { date: '1911-06-22', type: 'lunaire', nature: 'totale',
    visible: 'Europe, Afrique, Asie, Australie' },
  { date: '1911-10-22', type: 'solaire', nature: 'annulaire',
    visible: 'Asie, Europe de l\'Est' },
  { date: '1911-12-16', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie' },

  // ── 1912 ──
  { date: '1912-04-17', type: 'solaire', nature: 'hybride',
    visible: 'Amérique du Sud, Océan Atlantique, Europe' },
  { date: '1912-06-11', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie, Australie' },
  { date: '1912-10-10', type: 'solaire', nature: 'totale',
    visible: 'Amérique du Sud, Océan Atlantique' },
  { date: '1912-12-05', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie' },

  // ── 1913 ──
  { date: '1913-04-06', type: 'solaire', nature: 'partielle',
    visible: 'Europe, Asie du Nord, Amérique du Nord' },
  { date: '1913-04-29', type: 'lunaire', nature: 'totale',
    visible: 'Europe, Afrique, Asie, Australie' },
  { date: '1913-08-31', type: 'solaire', nature: 'partielle',
    visible: 'Europe du Nord, Asie' },
  { date: '1913-09-30', type: 'solaire', nature: 'annulaire',
    visible: 'Amérique du Sud, Océan Atlantique' },
  { date: '1913-10-29', type: 'lunaire', nature: 'totale',
    visible: 'Europe, Afrique, Asie, Amérique' },

  // ── 1914 ──
  { date: '1914-03-25', type: 'solaire', nature: 'annulaire',
    visible: 'Afrique australe, Océan Indien' },
  { date: '1914-04-22', type: 'lunaire', nature: 'partielle',
    visible: 'Europe, Afrique, Asie, Australie' },
  { date: '1914-09-17', type: 'solaire', nature: 'partielle',
    visible: 'Europe, Afrique du Nord, Océan Atlantique' },
  { date: '1914-10-16', type: 'lunaire', nature: 'totale',
    visible: 'Europe, Afrique, Asie, Australie' },
];

export default eclipses;
