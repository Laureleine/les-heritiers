// src/components/Actualite.jsx
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { ArrowLeft, Sun, Moon, Info, ChevronDown, ChevronUp, FileText, Bug, Copy } from '../config/icons';
import eclipses from '../data/eclipses_data';
import { showInAppNotification } from '../utils/SystemeServices';
import { supabase } from '../config/supabase';
import { isSuperAdmin } from '../utils/authRoles';

// --- Constantes de formatage ---
const MONTHS_FR = {
  "01": "Janvier", "02": "Février", "03": "Mars", "04": "Avril",
  "05": "Mai", "06": "Juin", "07": "Juillet", "08": "Août",
  "09": "Septembre", "10": "Octobre", "11": "Novembre", "12": "Décembre"
};

const DAYS_FR = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

// Les 6 champs de la carte météo, dans l'ordre de la grille à l'écran (3 par ligne).
function getMeteoChamps(dailyInfo) {
  return [
    { titre: 'Condition', valeur: dailyInfo.weather_condition },
    { titre: 'Températures', valeur: `${dailyInfo.weather_tmin ?? '?'}°C à ${dailyInfo.weather_tmax ?? '?'}°C` },
    { titre: 'Précipitations', valeur: dailyInfo.weather_precip_mm != null ? `${dailyInfo.weather_precip_mm} mm` : '—' },
    { titre: 'Vents', valeur: dailyInfo.weather_wind_kmh != null ? `${dailyInfo.weather_wind_kmh} km/h` : '—' },
    { titre: 'Lever du soleil', valeur: dailyInfo.sunrise },
    { titre: 'Coucher du soleil', valeur: dailyInfo.sunset },
  ];
}

function chunkerParTrois(items) {
  return [items.slice(0, 3), items.slice(3, 6)];
}

// Repli texte brut (Discord, éditeurs sans rendu HTML) : champs regroupés par ligne
// comme la grille à l'écran, titres soulignés en Markdown (__titre__).
export function formatMeteoTexte(dailyInfo) {
  if (!dailyInfo) return '';
  const rangees = chunkerParTrois(getMeteoChamps(dailyInfo));

  const lignes = [`${dailyInfo.weather_icon} Météo de Paris`, ''];
  for (const rangee of rangees) {
    lignes.push(rangee.map((c) => `__${c.titre}__`).join(' · '));
    lignes.push(rangee.map((c) => c.valeur).join(' · '));
    lignes.push('');
  }
  lignes.push('__Chronique Météorologique Réduite__');
  lignes.push(dailyInfo.weather_desc);
  return lignes.join('\n');
}

function escapeHtml(str) {
  return String(str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Version riche (email, Google Docs, Notion...) : vraie table HTML, valeurs alignées
// pile sous leur titre souligné, quelle que soit la police de destination.
export function formatMeteoHtml(dailyInfo) {
  if (!dailyInfo) return '';
  const rangees = chunkerParTrois(getMeteoChamps(dailyInfo));

  const bordure = 'border:none;border-width:0;';
  const lignesTable = rangees.map((rangee) => `
    <tr>${rangee.map((c) => `<td style="${bordure}padding:4px 20px 2px 0;"><u>${escapeHtml(c.titre)}</u></td>`).join('')}</tr>
    <tr>${rangee.map((c) => `<td style="${bordure}padding:0 20px 14px 0;font-weight:bold;">${escapeHtml(c.valeur)}</td>`).join('')}</tr>`).join('');

  return `<table style="border-collapse:collapse;${bordure}font-family:Georgia,serif;" border="0" cellspacing="0" cellpadding="0">
    <tr><td colspan="3" style="${bordure}font-size:1.2em;font-weight:bold;padding-bottom:10px;">${escapeHtml(dailyInfo.weather_icon)} Météo de Paris</td></tr>
    ${lignesTable}
    <tr><td colspan="3" style="${bordure}padding-top:6px;"><u>Chronique Météorologique Réduite</u></td></tr>
    <tr><td colspan="3" style="${bordure}font-style:italic;padding-top:4px;">${escapeHtml(dailyInfo.weather_desc)}</td></tr>
  </table>`;
}

// Les 3 champs de la carte lunaire, dans l'ordre de la grille à l'écran (une seule rangée).
function getLuneChamps(dailyInfo) {
  return [
    { titre: 'Phase Lunaire', valeur: dailyInfo.moon_phase },
    { titre: 'Surface Visible', valeur: dailyInfo.moon_visible },
    { titre: 'Aspect Céleste', valeur: dailyInfo.moon_aspect },
  ];
}

// Repli texte brut (Discord, éditeurs sans rendu HTML) : mêmes conventions que la météo.
export function formatLuneTexte(dailyInfo) {
  if (!dailyInfo) return '';
  const champs = getLuneChamps(dailyInfo);

  const lignes = [`${dailyInfo.moon_icon} Influence Lunaire`, ''];
  lignes.push(champs.map((c) => `__${c.titre}__`).join(' · '));
  lignes.push(champs.map((c) => c.valeur).join(' · '));
  lignes.push('');
  lignes.push('__Chronique Lunaire & Influence__');
  lignes.push(dailyInfo.moon_desc);
  return lignes.join('\n');
}

// Version riche (email, Google Docs, Notion...) : même table alignée que la météo.
export function formatLuneHtml(dailyInfo) {
  if (!dailyInfo) return '';
  const champs = getLuneChamps(dailyInfo);

  const bordure = 'border:none;border-width:0;';
  const ligneTitres = `<tr>${champs.map((c) => `<td style="${bordure}padding:4px 20px 2px 0;"><u>${escapeHtml(c.titre)}</u></td>`).join('')}</tr>`;
  const ligneValeurs = `<tr>${champs.map((c) => `<td style="${bordure}padding:0 20px 14px 0;font-weight:bold;">${escapeHtml(c.valeur)}</td>`).join('')}</tr>`;

  return `<table style="border-collapse:collapse;${bordure}font-family:Georgia,serif;" border="0" cellspacing="0" cellpadding="0">
    <tr><td colspan="3" style="${bordure}font-size:1.2em;font-weight:bold;padding-bottom:10px;">${escapeHtml(dailyInfo.moon_icon)} Influence Lunaire</td></tr>
    ${ligneTitres}
    ${ligneValeurs}
    <tr><td colspan="3" style="${bordure}padding-top:6px;"><u>Chronique Lunaire & Influence</u></td></tr>
    <tr><td colspan="3" style="${bordure}font-style:italic;padding-top:4px;">${escapeHtml(dailyInfo.moon_desc)}</td></tr>
  </table>`;
}

export default function Actualite({ onBack, userProfile }) {
  const [dateStr, setDateStr] = useState(null);
  const [activeMenu, setActiveMenu] = useState('meteo'); // meteo, lune, chronique, fetes, page1, page2, page3, page4, votes
  const [eventsData, setEventsData] = useState({});
  const [articles, setArticles] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(false);
  const [journalAvailable, setJournalAvailable] = useState(false);
  const [expandedArticles, setExpandedArticles] = useState({});
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('journal-dark-mode') === 'enabled';
  });
  const [dailyInfo, setDailyInfo] = useState(null);
  const [holidaysData, setHolidaysData] = useState([]);
  const [holidaysTypeFilter, setHolidaysTypeFilter] = useState('all');

  // --- Dates pour lesquelles des articles existent en BDD ---
  const [availableArticleDates, setAvailableArticleDates] = useState(new Set());
  const [firstAvailableDate, setFirstAvailableDate] = useState(null);

  // --- États et gestion des votes de numérisation ---
  const [hasVoted, setHasVoted] = useState(false);
  const [voteCount, setVoteCount] = useState(0);
  const [votesList, setVotesList] = useState([]);
  const [loadingVotes, setLoadingVotes] = useState(false);
  const [copieMeteoMsg, setCopieMeteoMsg] = useState(null);
  const [copieLuneMsg, setCopieLuneMsg] = useState(null);

  // --- États du Custom Calendar Popover ---
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [calMonth, setCalMonth] = useState(10); // 0-indexed, 10 = Novembre
  const [calYear, setCalYear] = useState(1899);
  const calendarRef = useRef(null);

  useEffect(() => {
    if (firstAvailableDate) {
      const [y, m] = firstAvailableDate.split('-').map(Number);
      setCalMonth(m - 1);
      setCalYear(y);
    }
  }, [firstAvailableDate]);

  const hasAdminRights = useMemo(() => {
    return isSuperAdmin(userProfile);
  }, [userProfile]);

  const copierMeteo = async () => {
    // Copie multi-format : les apps qui affichent du HTML (email, Docs, Notion...)
    // récupèrent la table alignée, les autres (Discord, éditeurs texte) le repli brut.
    await navigator.clipboard.write([
      new ClipboardItem({
        'text/plain': new Blob([formatMeteoTexte(dailyInfo)], { type: 'text/plain' }),
        'text/html': new Blob([formatMeteoHtml(dailyInfo)], { type: 'text/html' }),
      }),
    ]);
    setCopieMeteoMsg('Copié !');
    setTimeout(() => setCopieMeteoMsg(null), 2000);
  };

  const copierLune = async () => {
    await navigator.clipboard.write([
      new ClipboardItem({
        'text/plain': new Blob([formatLuneTexte(dailyInfo)], { type: 'text/plain' }),
        'text/html': new Blob([formatLuneHtml(dailyInfo)], { type: 'text/html' }),
      }),
    ]);
    setCopieLuneMsg('Copié !');
    setTimeout(() => setCopieLuneMsg(null), 2000);
  };

  const minDateParts = useMemo(() => {
    if (firstAvailableDate) {
      const [y, m, d] = firstAvailableDate.split('-').map(Number);
      return { year: y, month: m - 1, day: d };
    }
    return { year: 1899, month: 10, day: 1 };
  }, [firstAvailableDate]);

  // --- Rafraîchir les dates disponibles depuis Supabase ---
  const fetchAvailableArticleDates = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .rpc('get_article_dates');
      
      if (error) throw error;
      
      if (data && data.length > 0) {
        const datesSet = new Set(data.map(item => item.date_col));
        setAvailableArticleDates(datesSet);

        const sorted = data.map(item => item.date_col).sort();
        const first = sorted[0];
        setFirstAvailableDate(first);

        setDateStr(prev => prev === null ? first : prev);
      } else {
        setFirstAvailableDate('1899-11-01');
        setDateStr(prev => prev === null ? '1899-11-26' : prev);
      }
    } catch (err) {
      console.error("Erreur chargement dates articles :", err);
      setFirstAvailableDate('1899-11-01');
      setDateStr(prev => prev === null ? '1899-11-26' : prev);
    }
  }, []);

  // --- Chargement initial : événements ---
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from('historical_events')
          .select('*');
        
        if (error) throw error;
        
        if (data) {
          const eventsMap = {};
          data.forEach(ev => {
            eventsMap[ev.date] = {
              paris: ev.paris,
              france: ev.france,
              monde: ev.monde
            };
          });
          setEventsData(eventsMap);
        }
      } catch (err) {
        console.error("Erreur événements Supabase :", err);
      }
    };

    fetchEvents();
    fetchAvailableArticleDates();
  }, [fetchAvailableArticleDates]);

  // --- Chargement des données météo/lune/soleil du jour ---
  useEffect(() => {
    if (!dateStr) return;
    const fetchDailyInfo = async () => {
      try {
        const { data, error } = await supabase
          .from('journal_daily_info')
          .select('*')
          .eq('date', dateStr)
          .single();

        if (error && error.code !== 'PGRST116') throw error;
        setDailyInfo(data || null);
      } catch (err) {
        console.error("Erreur chargement daily_info :", err);
        setDailyInfo(null);
      }
    };
    fetchDailyInfo();
  }, [dateStr]);

  // --- Chargement des fêtes et traditions ---
  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const { data, error } = await supabase
          .from('journal_holidays')
          .select('*')
          .order('date', { ascending: true });

        if (error) throw error;
        setHolidaysData(data || []);
      } catch (err) {
        console.error("Erreur chargement fêtes :", err);
        setHolidaysData([]);
      }
    };
    fetchHolidays();
  }, []);

  // --- Chargement des articles du jour depuis Supabase ---
  const fetchArticlesForDate = useCallback(async (targetDate) => {
    setLoadingArticles(true);
    setExpandedArticles({});
    try {
      const { data, error } = await supabase
        .from('journal_articles')
        .select('*')
        .eq('date', targetDate)
        .order('article_index', { ascending: true });

      if (error) throw error;

      if (data && data.length > 0) {
        const mappedArticles = data.map(art => ({
          id: art.article_index,
          page: art.page,
          category: art.category,
          title: art.title,
          summary: art.summary,
          paragraphs: art.paragraphs
        }));
        const hasAnySummary = mappedArticles.some(art => art.summary && art.summary.trim());
        if (!hasAnySummary) {
          setArticles([]);
          setJournalAvailable(false);
        } else {
          setAvailableArticleDates(prev => new Set([...prev, targetDate]));
          setArticles(mappedArticles);
          setJournalAvailable(true);
        }
      } else {
        setArticles([]);
        setJournalAvailable(false);
      }
    } catch (err) {
      console.error("Erreur chargement articles Supabase :", err);
      setArticles([]);
      setJournalAvailable(false);
    } finally {
      setLoadingArticles(false);
    }
  }, []);

  useEffect(() => {
    if (!dateStr) return;
    fetchArticlesForDate(dateStr);
  }, [dateStr, fetchArticlesForDate]);

  // --- Récupérer le statut du vote et le total pour la date active ---
  useEffect(() => {
    if (!dateStr) return;
    setHasVoted(localStorage.getItem(`journal-vote-${dateStr}`) === 'voted');
    
    const fetchVoteCount = async () => {
      try {
        const { data } = await supabase
          .from('journal_votes')
          .select('votes_count')
          .eq('date', dateStr);
        if (data && data.length > 0) {
          setVoteCount(data[0].votes_count);
        } else {
          setVoteCount(0);
        }
      } catch (err) {
        setVoteCount(0);
      }
    };
    fetchVoteCount();
  }, [dateStr]);

  // --- Enregistrer un vote pour numériser la journée active ---
  const handleVote = async () => {
    if (hasVoted) return;
    try {
      const { data } = await supabase
        .from('journal_votes')
        .select('*')
        .eq('date', dateStr);
      
      let currentVotes = 0;
      let exists = false;
      
      if (data && data.length > 0) {
        currentVotes = data[0].votes_count;
        exists = true;
      }
      
      const newVotes = currentVotes + 1;
      
      if (exists) {
        await supabase
          .from('journal_votes')
          .update({ votes_count: newVotes })
          .eq('date', dateStr);
      } else {
        await supabase
          .from('journal_votes')
          .insert({ date: dateStr, votes_count: 1 });
      }
      
      localStorage.setItem(`journal-vote-${dateStr}`, 'voted');
      setHasVoted(true);
      setVoteCount(newVotes);
      showInAppNotification("Votre vote pour la numérisation a bien été enregistré !", "success");
    } catch (err) {
      console.error("Erreur lors de l'enregistrement du vote :", err);
      showInAppNotification("Impossible d'enregistrer le vote.", "error");
    }
  };

  // --- Charger la liste complète des votes de numérisation (Admin unique) ---
  const fetchVotesList = useCallback(async () => {
    setLoadingVotes(true);
    try {
      const { data, error } = await supabase
        .from('journal_votes')
        .select('*')
        .order('votes_count', { ascending: false });
      
      if (error) throw error;
      setVotesList(data || []);
    } catch (err) {
      console.error("Erreur chargement de la liste des votes :", err);
      showInAppNotification("Impossible de charger les votes.", "error");
    } finally {
      setLoadingVotes(false);
    }
  }, []);

  useEffect(() => {
    if (activeMenu === 'votes' && hasAdminRights) {
      fetchVotesList();
    }
  }, [activeMenu, hasAdminRights, fetchVotesList]);

  // --- Synchroniser le mois/année du calendrier avec dateStr ---
  useEffect(() => {
    if (!dateStr) return;
    const parts = dateStr.split('-');
    setCalYear(parseInt(parts[0], 10));
    setCalMonth(parseInt(parts[1], 10) - 1);
  }, [dateStr]);

  // --- Fermeture du calendrier custom au clic extérieur ---
  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCalendarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // --- Gestion du mode sombre ---
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('journal-dark-mode', 'enabled');
    } else {
      localStorage.setItem('journal-dark-mode', 'disabled');
    }
  }, [darkMode]);

  // --- Grille de jours pour le calendrier Popover (Vert uniquement si des articles existent) ---
  const calendarGrid = useMemo(() => {
    const totalDays = new Date(calYear, calMonth + 1, 0).getDate();
    let firstDayIndex = new Date(calYear, calMonth, 1).getDay();
    // Ajustement lundi premier jour
    firstDayIndex = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

    const days = [];
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }

    for (let d = 1; d <= totalDays; d++) {
      const dayStr = String(d).padStart(2, '0');
      const monthStr = String(calMonth + 1).padStart(2, '0');
      const formattedDate = `${calYear}-${monthStr}-${dayStr}`;
      days.push({
        dayNum: d,
        dateStr: formattedDate,
        hasArticles: availableArticleDates.has(formattedDate)
      });
    }

    return days;
  }, [calYear, calMonth, availableArticleDates]);

  // --- Calculs calendaires déterministes ---
  const dateMeta = useMemo(() => {
    if (!dateStr) return { year: null, monthName: null, dayNum: null, dayOfWeek: null, editionNo: null };
    const parts = dateStr.split('-');
    const year = parts[0];
    const monthCode = parts[1];
    const dayNum = parseInt(parts[2], 10);
    const monthName = MONTHS_FR[monthCode] || "Novembre";

    const dt = new Date(parseInt(year, 10), parseInt(monthCode, 10) - 1, dayNum);
    const dayOfWeek = DAYS_FR[dt.getDay()];

    // Calcul du numéro d'édition (Référence : 26 Novembre 1899 -> N° 8430)
    const refDate = new Date(1899, 10, 26);
    const timeDiff = dt.getTime() - refDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const editionNo = 8430 + daysDiff;

    return { year, monthName, dayNum, dayOfWeek, editionNo };
  }, [dateStr]);

  // --- Événements chronologiques du jour ---
  const dailyEvents = useMemo(() => {
    const ev = eventsData[dateStr];
    return {
      paris: ev?.paris || "La vie parisienne suit son cours normal.",
      france: ev?.france || "Les actualités nationales continuent d'agiter l'opinion publique.",
      monde: ev?.monde || "L'actualité internationale est dominée par les événements coloniaux et diplomatiques."
    };
  }, [eventsData, dateStr]);

  // --- Fêtes du jour filtrées par date (et par type) ---
  const dailyHolidays = useMemo(() => {
    return holidaysData.filter(h => {
      const matchesDate = h.date === dateStr;
      const matchesType = holidaysTypeFilter === 'all' || h.type === holidaysTypeFilter;
      return matchesDate && matchesType;
    });
  }, [holidaysData, dateStr, holidaysTypeFilter]);

  // --- Éclipses de l'année en cours ---
  const eclipsesForYear = useMemo(() => {
    return eclipses.filter(e => e.date.startsWith(dateMeta.year));
  }, [dateMeta.year]);

  // --- Prochaine fête celtique (quand rien aujourd'hui avec le filtre actif) ---
  const nextCelticHoliday = useMemo(() => {
    if (holidaysTypeFilter !== 'celtique') return null;
    if (dailyHolidays.length > 0) return null;
    const future = holidaysData
      .filter(h => h.type === 'celtique' && h.date > dateStr)
      .sort((a, b) => a.date.localeCompare(b.date));
    return future[0] || null;
  }, [holidaysData, dateStr, holidaysTypeFilter, dailyHolidays]);

  // --- Articles filtrés par page ---
  const filteredArticles = useMemo(() => {
    if (activeMenu.startsWith('page')) {
      const pageNum = parseInt(activeMenu.replace('page', ''), 10);
      return articles.filter(a => a.page === pageNum);
    }
    return [];
  }, [articles, activeMenu]);

  const pendingVotes = useMemo(() =>
    votesList.filter(vote => !availableArticleDates.has(vote.date)),
    [votesList, availableArticleDates]
  );

  // --- Navigation jour précédent/suivant ---
  const navigateDate = (offset) => {
    const parts = dateStr.split('-');
    const dt = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    dt.setDate(dt.getDate() + offset);

    // Limiter la navigation de la première date disponible au 31 Décembre 1914
    const minDate = new Date(minDateParts.year, minDateParts.month, minDateParts.day);
    const maxDate = new Date(1914, 11, 31);

    if (dt < minDate || dt > maxDate) {
      showInAppNotification("Les archives ne couvrent que de novembre 1899 à décembre 1914 !", "warning");
      return;
    }

    const y = dt.getFullYear();
    const m = String(dt.getMonth() + 1).padStart(2, '0');
    const d = String(dt.getDate()).padStart(2, '0');
    setDateStr(`${y}-${m}-${d}`);
  };

  const toggleArticleCollapse = (id) => {
    setExpandedArticles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (!dateStr) {
    return (
      <div className="min-h-screen bg-[#FAF6EE] dark:bg-stone-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#92400e] mx-auto mb-4" />
          <p className="text-stone-500 dark:text-stone-400 font-serif italic">Chargement de la Gazette...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen font-serif transition-colors duration-300 ${darkMode ? 'bg-stone-900 text-stone-200' : 'bg-[#FAF6EE] text-[#2c1b12]'} ${darkMode ? 'dark' : ''}`}>
      
      {/* ─── EN-TÊTE PRINCIPAL ─── */}
      <div className={`border-b ${darkMode ? 'border-stone-800 bg-stone-950/40' : 'border-[#92400e]/20 bg-[#F5EFEB]'} px-4 py-3 sticky top-0 z-40 shadow-sm backdrop-blur-md`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack} 
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg font-sans font-bold text-sm transition-all border ${darkMode ? 'bg-stone-900 text-stone-200 hover:text-white border-stone-700 hover:bg-stone-800' : 'bg-white text-stone-700 hover:text-[#92400e] border-stone-200 hover:bg-[#FDFBF7]'}`}
          >
            <ArrowLeft size={16} /> <span>Retour à l'accueil</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(prev => !prev)}
              className={`p-2 rounded-lg transition-colors border ${darkMode ? 'bg-stone-900 border-stone-700 text-amber-400 hover:bg-stone-800' : 'bg-white border-stone-200 text-[#92400e] hover:bg-stone-50'}`}
              title={darkMode ? "Passer en mode clair" : "Passer en mode sombre"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* ─── ZONE PRINCIPALE DE GESTION DU JOURNAL ─── */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Masthead (Titre Principal de la Gazette) */}
        <header className="text-center mb-8 border-b-4 border-double border-current pb-6 select-none">
          <h1 className="text-5xl md:text-7xl font-black tracking-wide uppercase font-serif mb-2 text-center text-stone-950 dark:text-stone-100 antialiased">
            Le Petit Parisien
          </h1>
          <p className="italic text-sm md:text-base font-sans tracking-wide uppercase opacity-70 mb-4">
            " Le plus fort tirage des journaux du monde entier "
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 border-t border-b border-current text-xs md:text-sm font-sans font-semibold uppercase tracking-wider gap-2">
            <span>Quarante-Cinquième Année — N° {dateMeta.editionNo}</span>
            <span className="text-sm md:text-lg font-serif italic text-[#92400e] dark:text-amber-400">
              {dateMeta.dayOfWeek} {dateMeta.dayNum} {dateMeta.monthName} {dateMeta.year}
            </span>
            <span>Cinq Centimes</span>
          </div>
        </header>

        {/* Vintage Datepicker Card (Ultra-Compact con Custom Calendar Popover) */}
        <div className={`p-4 rounded-xl border mb-8 flex flex-col md:flex-row justify-between items-center gap-4 ${darkMode ? 'bg-stone-800 border-stone-700' : 'bg-white border-[#92400e]/20 shadow-sm'}`}>
          <div className="flex flex-wrap items-center gap-3 font-sans font-bold w-full md:w-auto">
            <span className="text-sm shrink-0">📅 DATE ARCHIVÉE (1899 - 1914) :</span>
            
            {/* Custom Interactive Popover Date Picker */}
            <div className="relative shrink-0" ref={calendarRef}>
              <button
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                className={`px-4 py-2 rounded-lg font-mono text-sm font-bold border transition-all flex items-center gap-2.5 outline-none focus:ring-1 focus:ring-emerald-500 hover:scale-[1.01] active:scale-[0.99] select-none ${
                  availableArticleDates.has(dateStr)
                    ? 'border-emerald-600 bg-emerald-500/10 text-emerald-950 dark:text-emerald-300'
                    : (darkMode ? 'bg-stone-900 border-stone-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900')
                }`}
              >
                <span>{dateStr.split('-').reverse().join('/')}</span>
                <span className="text-xs opacity-70">📅</span>
              </button>

              {isCalendarOpen && (
                <div className={`absolute top-full left-0 mt-2 p-4 rounded-xl border shadow-2xl z-50 w-72 font-sans transition-all border-[#92400e]/25 animate-fade-in ${
                  darkMode ? 'bg-stone-900 border-stone-700 text-white' : 'bg-white border-stone-200 text-stone-900 shadow-amber-900/5'
                }`}>
                  {/* Navigation mois et année */}
                  <div className="flex justify-between items-center mb-3 select-none">
                    <button 
                      onClick={() => {
                        const { year: minY, month: minM } = minDateParts;
                        let newMonth = calMonth - 1;
                        let newYear = calYear;
                        if (newMonth < 0) {
                          newMonth = 11;
                          newYear = calYear - 1;
                        }
                        if (newYear < minY || (newYear === minY && newMonth < minM)) {
                          const monthLabel = MONTHS_FR[String(minM + 1).padStart(2, '0')];
                          showInAppNotification(`Les archives débutent en ${monthLabel} ${minY} !`, "warning");
                        } else {
                          setCalMonth(newMonth);
                          setCalYear(newYear);
                        }
                      }}
                      className="p-1.5 rounded hover:bg-stone-100 dark:hover:bg-stone-800 text-xs font-bold font-sans"
                    >
                      ◄
                    </button>
                    <span className="font-serif font-bold text-xs uppercase tracking-wider text-[#92400e] dark:text-amber-400">
                      {MONTHS_FR[String(calMonth + 1).padStart(2, '0')]} {calYear}
                    </span>
                    <button 
                      onClick={() => {
                        if (calMonth === 11) {
                          if (calYear < 1914) {
                            setCalYear(calYear + 1);
                            setCalMonth(0);
                          } else {
                            showInAppNotification("Date limite atteinte (décembre 1914) !", "warning");
                          }
                        } else {
                          setCalMonth(calMonth + 1);
                        }
                      }}
                      className="p-1.5 rounded hover:bg-stone-100 dark:hover:bg-stone-800 text-xs font-bold font-sans"
                    >
                      ►
                    </button>
                  </div>

                  {/* En-tête des jours de la semaine */}
                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold opacity-60 mb-2 font-sans select-none">
                    {["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"].map(d => <div key={d}>{d}</div>)}
                  </div>

                  {/* Grille des jours */}
                  <div className="grid grid-cols-7 gap-1 text-center text-xs">
                    {calendarGrid.map((day, idx) => {
                      if (!day) return <div key={`empty-${idx}`} className="py-1"></div>;
                      
                      const isSelected = dateStr === day.dateStr;
                      return (
                        <button
                          key={day.dateStr}
                          onClick={() => {
                            setDateStr(day.dateStr);
                            setIsCalendarOpen(false);
                          }}
                          className={`py-1 rounded-lg text-xs font-mono relative transition-all border ${
                            isSelected
                              ? 'bg-[#92400e] border-[#7c330c] text-white font-bold'
              : day.hasArticles
                ? (darkMode ? 'bg-emerald-950/60 border-emerald-700 text-emerald-300 hover:bg-emerald-900/80 font-bold' : 'bg-emerald-200/70 border-emerald-400 text-emerald-800 hover:bg-emerald-300/80 font-bold')
                                : 'border-transparent hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-200'
                          }`}
                        >
                          <span>{day.dayNum}</span>
                          {/* Point vert émeraude discret signalant la présence d'articles de presse en base de données */}
                          {day.hasArticles && (
                            <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isSelected ? 'bg-emerald-300' : 'bg-emerald-500'}`}></span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            
            {/* Indicateur visuel "Gazette en base" discret à côté du datepicker */}
            {availableArticleDates.has(dateStr) && (
              <span className="text-emerald-700 dark:text-emerald-400 text-xs font-serif font-bold flex items-center gap-1.5 shrink-0 select-none animate-fade-in" title="Gazette numérisée chargée en base !">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm animate-pulse"></span>
                <span>Gazette en base</span>
              </span>
            )}

          </div>
          
          <div className="flex items-center gap-2 font-sans font-bold shrink-0">
            <button 
              onClick={() => navigateDate(-1)} 
              className={`px-3 py-2 rounded-lg text-xs transition-colors border ${darkMode ? 'bg-stone-900 border-stone-700 hover:bg-stone-800 text-stone-200' : 'bg-stone-100 border-stone-200 hover:bg-stone-200 text-stone-700'}`}
            >
              ◄ Jour Précédent
            </button>
            <button 
              onClick={() => navigateDate(1)} 
              className={`px-3 py-2 rounded-lg text-xs transition-colors border ${darkMode ? 'bg-stone-900 border-stone-700 hover:bg-stone-800 text-stone-200' : 'bg-stone-100 border-stone-200 hover:bg-stone-200 text-stone-700'}`}
            >
              Jour Suivant ►
            </button>
          </div>
        </div>

        {/* ─── CORPS DE LA GAZETTE (LAYOUT 2 COLONNES) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sommaire Interactif (Colonne Gauche - w-1/4) */}
          <aside className="lg:col-span-3 flex flex-col gap-3 lg:sticky lg:top-24 lg:z-10 select-none">
            <div className={`p-4 rounded-xl border ${darkMode ? 'bg-stone-800/50 border-stone-700' : 'bg-[#F2ECE6] border-[#2c1b12]/10'}`}>
              <h2 className="text-base font-bold tracking-widest uppercase mb-4 border-b border-current pb-2 font-sans">
                Sommaire
              </h2>
              
              <nav className="flex flex-col gap-2 font-sans font-bold text-xs uppercase tracking-wider">
                <button 
                  onClick={() => setActiveMenu('meteo')} 
                  className={`w-full text-left p-3 rounded-lg flex items-center gap-2.5 transition-all border ${activeMenu === 'meteo' ? (darkMode ? 'bg-stone-800 border-amber-600 text-amber-400' : 'bg-white border-[#2c1b12]/30 text-[#92400e]') : 'border-transparent opacity-75 hover:opacity-100'}`}
                >
                  <span className="text-base">🌤️</span> <span>Météo de Paris</span>
                </button>
                <button 
                  onClick={() => setActiveMenu('lune')} 
                  className={`w-full text-left p-3 rounded-lg flex items-center gap-2.5 transition-all border ${activeMenu === 'lune' ? (darkMode ? 'bg-stone-800 border-amber-600 text-amber-400' : 'bg-white border-[#2c1b12]/30 text-[#92400e]') : 'border-transparent opacity-75 hover:opacity-100'}`}
                >
                  <span className="text-base">🌙</span> <span>Influence Lunaire</span>
                </button>
                <button 
                  onClick={() => setActiveMenu('resume')} 
                  className={`w-full text-left p-3 rounded-lg flex items-center gap-2.5 transition-all border ${activeMenu === 'resume' ? (darkMode ? 'bg-stone-800 border-amber-600 text-amber-400' : 'bg-white border-[#2c1b12]/30 text-[#92400e]') : 'border-transparent opacity-75 hover:opacity-100'}`}
                >
                  <span className="text-base">📰</span> <span>Résumé du Jour</span>
                </button>
                <button 
                  onClick={() => setActiveMenu('chronique')} 
                  className={`w-full text-left p-3 rounded-lg flex items-center gap-2.5 transition-all border ${activeMenu === 'chronique' ? (darkMode ? 'bg-stone-800 border-amber-600 text-amber-400' : 'bg-white border-[#2c1b12]/30 text-[#92400e]') : 'border-transparent opacity-75 hover:opacity-100'}`}
                >
                  <span className="text-base">🏛️</span> <span>Chronique Historique</span>
                </button>
                <button 
                  onClick={() => setActiveMenu('fetes')} 
                  className={`w-full text-left p-3 rounded-lg flex items-center gap-2.5 transition-all border ${activeMenu === 'fetes' ? (darkMode ? 'bg-stone-800 border-amber-600 text-amber-400' : 'bg-white border-[#2c1b12]/30 text-[#92400e]') : 'border-transparent opacity-75 hover:opacity-100'}`}
                >
                  <span className="text-base">✨</span> <span>Fêtes & Traditions</span>
                </button>
                
                <hr className={`my-2 ${darkMode ? 'border-stone-700' : 'border-stone-200'}`} />
                
                <div className="text-[10px] opacity-60 px-1 py-1 font-bold">Le Petit Parisien</div>
                
                {[1, 2, 3, 4].map(p => (
                  <button 
                    key={p}
                    onClick={() => setActiveMenu(`page${p}`)} 
                    disabled={loadingArticles}
                    className={`w-full text-left p-3 rounded-lg flex items-center gap-2.5 transition-all border ${!journalAvailable ? 'opacity-40 cursor-not-allowed' : ''} ${activeMenu === `page${p}` ? (darkMode ? 'bg-stone-800 border-amber-600 text-amber-400 font-bold' : 'bg-white border-[#2c1b12]/30 text-[#92400e] font-bold') : 'border-transparent hover:opacity-100'}`}
                  >
                    <span className="text-base"><FileText size={16} /></span>
                    <span>Page {p} — {p === 1 ? 'Une & Éditorial' : p === 2 ? 'International' : p === 3 ? 'Faits Divers' : 'Réclames & Arts'}</span>
                  </button>
                ))}

                {/* Administration : demandes de votes (Admin unique) */}
                {hasAdminRights && (
                  <>
                    <hr className={`my-2 ${darkMode ? 'border-stone-700' : 'border-stone-200'}`} />
                    <div className="text-[10px] opacity-60 px-1 py-1 font-bold">Administration</div>
                    <button 
                      onClick={() => setActiveMenu('votes')} 
                      className={`w-full text-left p-3 rounded-lg flex items-center gap-2.5 transition-all border ${activeMenu === 'votes' ? (darkMode ? 'bg-stone-800 border-amber-600 text-amber-400 font-bold' : 'bg-white border-[#2c1b12]/30 text-[#92400e] font-bold') : 'border-transparent opacity-75 hover:opacity-100'}`}
                    >
                      <span className="text-base">🗳️</span> <span>Demandes de votes</span>
                    </button>
                  </>
                )}
              </nav>
            </div>
            
            {!journalAvailable && (
              <div className="bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 p-3 rounded-xl text-xs flex gap-2 items-start leading-relaxed font-sans font-medium">
                <Info size={18} className="shrink-0 text-amber-600" />
                <span>
                  L'édition de presse n'est pas encore numérisée en base de données. Météo, Lune et Chronique restent consultables !
                </span>
              </div>
            )}
          </aside>

          {/* Corps Actif (Colonne Droite - w-3/4) */}
          <main className="lg:col-span-9">
            
            {/* 📰 VIEW 1: RÉSUMÉ DU JOUR */}
            {activeMenu === 'resume' && (
              <section className={`p-6 rounded-2xl border ${darkMode ? 'bg-stone-800 border-stone-700' : 'bg-white border-stone-200 shadow-sm'}`}>
                <div className="flex items-center gap-4 mb-6 border-b border-current pb-4">
                  <span className="text-4xl">📰</span>
                  <div>
                    <h2 className="text-2xl font-bold font-serif">Résumé du Jour</h2>
                    <p className="text-xs font-sans italic opacity-75">
                      Flash-info — {dateMeta.dayOfWeek} {dateMeta.dayNum} {dateMeta.monthName} {dateMeta.year}
                    </p>
                  </div>
                </div>
                {dailyInfo?.daily_summary ? (
                  <div className="prose prose-stone dark:prose-invert max-w-none">
                    <div className={`p-6 rounded-xl border-l-4 border-amber-600 ${darkMode ? 'bg-stone-900 border-stone-700' : 'bg-stone-50 border-stone-200'}`}>
                      {dailyInfo.daily_summary.split('\n').map((line, i) => {
                        if (line.startsWith('**') && line.endsWith('**')) {
                          return <h3 key={i} className="text-xl font-bold font-serif mb-3 text-stone-900 dark:text-stone-100">{line.replace(/\*\*/g, '')}</h3>;
                        }
                        if (line.startsWith('—')) {
                          return <p key={i} className="text-base leading-relaxed mb-2 text-stone-700 dark:text-stone-300 ml-4">{line}</p>;
                        }
                        if (!line.trim()) return <br key={i} />;
                        return <p key={i} className="text-base leading-relaxed mb-2 text-stone-700 dark:text-stone-300">{line}</p>;
                      })}
                    </div>

                  </div>
                ) : (
                  <div className="text-center py-16 text-stone-500 dark:text-stone-400">
                    <p className="text-5xl mb-4">📰</p>
                    <p className="font-sans text-sm">Aucun flash-info disponible pour cette édition</p>
                    <p className="font-sans text-xs mt-2 opacity-60">Le résumé est généré lors de la numérisation du journal</p>
                  </div>
                )}
              </section>
            )}

            {/* 🌤️ VIEW 2: MÉTÉO */}
            {activeMenu === 'meteo' && (
              <section className={`p-6 rounded-2xl border ${darkMode ? 'bg-stone-800 border-stone-700' : 'bg-white border-stone-200 shadow-sm'}`}>
                {dailyInfo ? (
                  <>
                    <div className="flex items-start justify-between gap-4 mb-6 border-b border-current pb-4">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl">{dailyInfo.weather_icon}</span>
                        <div>
                          <h2 className="text-2xl font-bold font-serif">Météo de Paris</h2>
                          <p className="text-xs font-sans italic opacity-75">Reconstitution climatologique d'époque</p>
                        </div>
                      </div>
                      {hasAdminRights && (
                        <button
                          onClick={copierMeteo}
                          className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-sans font-bold bg-stone-50 hover:bg-stone-100 dark:bg-stone-900 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-600 text-stone-700 dark:text-stone-200 rounded-lg transition-colors"
                        >
                          <Copy size={13} /> {copieMeteoMsg || 'Copier'}
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                      {[
                        { label: "Condition", val: dailyInfo.weather_condition, border: 'border-amber-600/30' },
                        { label: "Températures", val: `${dailyInfo.weather_tmin ?? '?'}°C à ${dailyInfo.weather_tmax ?? '?'}°C`, border: 'border-blue-600/30' },
                        { label: "Précipitations", val: dailyInfo.weather_precip_mm != null ? `${dailyInfo.weather_precip_mm} mm` : '—', border: 'border-emerald-600/30' },
                        { label: "Vents", val: dailyInfo.weather_wind_kmh != null ? `${dailyInfo.weather_wind_kmh} km/h` : '—', border: 'border-purple-600/30' },
                        { label: "Lever du soleil", val: dailyInfo.sunrise, border: 'border-orange-600/30' },
                        { label: "Coucher du soleil", val: dailyInfo.sunset, border: 'border-red-600/30' },
                      ].map((wInfo, i) => (
                        <div key={i} className={`p-3 rounded-xl border bg-stone-50 dark:bg-stone-900 ${wInfo.border}`}>
                          <h4 className="text-[10px] uppercase font-sans font-bold opacity-60 tracking-wider mb-1">{wInfo.label}</h4>
                          <p className="text-sm font-bold font-serif">{wInfo.val}</p>
                        </div>
                      ))}
                    </div>

                      <div className={`p-4 rounded-xl border text-sm md:text-base leading-relaxed italic ${darkMode ? 'bg-stone-900 border-stone-700' : 'bg-amber-50/50 border-[#92400e]/10'}`}>
                      <strong>Chronique Météorologique Réduite :</strong>
                      <p className="mt-2 text-stone-700 dark:text-stone-200">{dailyInfo.weather_desc}</p>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12 text-stone-500 dark:text-stone-400">
                    <p className="text-4xl mb-2">🌤️</p>
                    <p className="font-sans text-sm">Données météo non disponibles pour cette date</p>
                  </div>
                )}
              </section>
            )}

            {/* 🌙 VIEW 2: LUNE */}
            {activeMenu === 'lune' && (
              <section className={`p-6 rounded-2xl border ${darkMode ? 'bg-stone-800 border-stone-700' : 'bg-white border-stone-200 shadow-sm'}`}>
                {dailyInfo ? (
                  <>
                    <div className="flex items-start justify-between gap-4 mb-6 border-b border-current pb-4">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl">{dailyInfo.moon_icon}</span>
                        <div>
                          <h2 className="text-2xl font-bold font-serif">Influence Lunaire</h2>
                          <p className="text-xs font-sans italic opacity-75">Calcul astronomique réel pour le bassin céleste parisien</p>
                        </div>
                      </div>
                      {hasAdminRights && (
                        <button
                          onClick={copierLune}
                          className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-sans font-bold bg-stone-50 hover:bg-stone-100 dark:bg-stone-900 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-600 text-stone-700 dark:text-stone-200 rounded-lg transition-colors"
                        >
                          <Copy size={13} /> {copieLuneMsg || 'Copier'}
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {[
                        { label: "Phase Lunaire", val: dailyInfo.moon_phase },
                        { label: "Surface Visible", val: dailyInfo.moon_visible },
                        { label: "Aspect Céleste", val: dailyInfo.moon_aspect }
                      ].map((mInfo, i) => (
                        <div key={i} className="p-3 rounded-xl border bg-stone-50 dark:bg-stone-900 border-amber-600/30">
                          <h4 className="text-[10px] uppercase font-sans font-bold opacity-60 tracking-wider mb-1">{mInfo.label}</h4>
                          <p className="text-sm font-bold font-serif">{mInfo.val}</p>
                        </div>
                      ))}
                    </div>

                    <div className={`p-4 rounded-xl border text-sm md:text-base leading-relaxed italic ${darkMode ? 'bg-stone-900 border-stone-700' : 'bg-amber-50/50 border-[#92400e]/10'}`}>
                      <strong>Chronique Lunaire & Influence :</strong>
                      <p className="mt-2 text-stone-700 dark:text-stone-200">{dailyInfo.moon_desc}</p>
                    </div>

                    {/* Éclipses de l'année */}
                    {eclipsesForYear.length > 0 && (
                      <>
                        <div className={`mt-6 pt-6 border-t ${darkMode ? 'border-stone-700' : 'border-stone-200'}`}>
                          <h3 className="text-lg font-bold font-serif mb-3 flex items-center gap-2">
                            <span>🌑</span> Éclipses en {dateMeta.year}
                          </h3>
                          <div className="flex flex-col gap-3">
                            {eclipsesForYear.map((e, i) => {
                              const edate = new Date(e.date + 'T12:00:00');
                              const label = e.type === 'solaire' ? '☀️ Solaire' : '🌙 Lunaire';
                              const badgeClass = e.type === 'solaire'
                                ? (darkMode ? 'bg-orange-950/40 border-orange-800 text-orange-300' : 'bg-orange-50 border-orange-300 text-orange-800')
                                : (darkMode ? 'bg-indigo-950/40 border-indigo-800 text-indigo-300' : 'bg-indigo-50 border-indigo-300 text-indigo-800');
                              return (
                                <div
                                  key={e.date}
                                  className={`p-3 rounded-xl border text-sm ${
                                    darkMode ? 'bg-stone-900 border-stone-700' : 'bg-stone-50 border-stone-200'
                                  }`}
                                >
                                  <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <span className={`inline-block text-[10px] font-sans font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${badgeClass}`}>
                                      {label}
                                    </span>
                                    <span className="font-bold font-serif text-stone-900 dark:text-white">
                                      {edate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                                    </span>
                                    <span className="text-xs font-sans font-bold uppercase opacity-60">
                                      — {e.nature}
                                    </span>
                                  </div>
                                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                                    Visible depuis : {e.visible}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12 text-stone-500 dark:text-stone-400">
                    <p className="text-4xl mb-2">🌙</p>
                    <p className="font-sans text-sm">Données lunaires non disponibles pour cette date</p>
                  </div>
                )}
              </section>
            )}

            {/* 🏛️ VIEW 3: CHRONIQUE TIMELINE */}
            {activeMenu === 'chronique' && (
              <section className={`p-6 rounded-2xl border ${darkMode ? 'bg-stone-800 border-stone-700' : 'bg-white border-stone-200 shadow-sm'}`}>
                <h2 className="text-2xl font-bold font-serif mb-6 border-b border-current pb-4 flex items-center gap-2">
                  <span>🏛️</span> Chronique Historique du Jour
                </h2>
                
                <div className="relative border-l border-stone-300 dark:border-stone-700 pl-6 ml-4 flex flex-col gap-6">
                  {[
                    { cat: "Vie Parisienne", icon: "🏛️", title: "Chronique de Paris", desc: dailyEvents.paris },
                    { cat: "République Française", icon: "🇫🇷", title: "Actualité Nationale", desc: dailyEvents.france },
                    { cat: "Actualité Mondiale", icon: "🌍", title: "Événements du Globe", desc: dailyEvents.monde }
                  ].map((ev, i) => (
                    <div key={i} className="relative group animate-fade-in">
                      <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-2 border-white dark:border-stone-800 group-hover:scale-125 transition-transform" />
                      <div className={`p-4 rounded-xl border transition-all ${darkMode ? 'bg-stone-900 border-stone-600 hover:bg-stone-800' : 'bg-stone-50 border-stone-200 hover:bg-stone-100 shadow-sm'}`}>
                        <span className="text-[10px] font-sans font-bold text-[#92400e] dark:text-amber-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                          <span>{ev.icon}</span> {ev.cat}
                        </span>
                        <h3 className="text-base font-bold font-serif mb-2 text-stone-900 dark:text-stone-100">{ev.title}</h3>
                         <p className="text-sm md:text-base leading-relaxed text-stone-600 dark:text-stone-200 italic">
                          {ev.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ✨ VIEW 4: FÊTES & TRADITIONS */}
            {activeMenu === 'fetes' && (
              <section className={`p-6 rounded-2xl border ${darkMode ? 'bg-stone-800 border-stone-700' : 'bg-white border-stone-200 shadow-sm'}`}>
                <div className="flex items-center gap-4 mb-6 border-b border-current pb-4">
                  <span className="text-4xl">✨</span>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold font-serif">Fêtes & Traditions</h2>
                    <p className="text-xs font-sans italic opacity-75">
                      Fêtes du {dateMeta.dayOfWeek} {dateMeta.dayNum} {dateMeta.monthName} {dateMeta.year}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 shrink-0">
                    {[
                      { key: 'all', label: 'Toutes', icon: '📅' },
                      { key: 'chrétien', label: 'Chrétiennes', icon: '✝️' },
                      { key: 'celtique', label: 'Celtiques', icon: '🌿' },
                    ].map(f => (
                      <button
                        key={f.key}
                        onClick={() => setHolidaysTypeFilter(f.key)}
                        className={`px-3 py-1.5 rounded-lg text-[11px] font-sans font-bold transition-all border ${
                          holidaysTypeFilter === f.key
                            ? (darkMode ? 'bg-amber-600/20 border-amber-600 text-amber-400' : 'bg-amber-50 border-[#92400e] text-[#92400e]')
                            : (darkMode ? 'bg-stone-900 border-stone-700 text-stone-500 hover:text-stone-200' : 'bg-stone-50 border-stone-200 text-stone-500 hover:text-stone-900')
                        }`}
                      >
                        {f.icon} {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Prochaine fête celtique si rien aujourd'hui avec le filtre actif */}
                {nextCelticHoliday && (
                  <div className={`mb-4 p-4 rounded-xl border text-sm leading-relaxed ${
                    darkMode ? 'bg-emerald-950/30 border-emerald-800 text-emerald-300' : 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  }`}>
                    <p className="font-sans font-bold text-xs uppercase tracking-wider mb-1">🌿 Prochaine fête celtique</p>
                    <p className="font-serif">
                      <strong>{nextCelticHoliday.name}</strong> — le {new Date(nextCelticHoliday.date + 'T12:00:00').toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                    <p className="text-xs mt-1 opacity-80">{nextCelticHoliday.description}</p>
                  </div>
                )}

                {dailyHolidays.length === 0 && !nextCelticHoliday ? (
                  <div className="text-center py-16 text-stone-500 dark:text-stone-400">
                    <p className="text-4xl mb-2">📅</p>
                    <p className="font-sans text-sm">Aucune fête ou tradition associée à cette date</p>
                  </div>
                ) : dailyHolidays.length === 0 && nextCelticHoliday ? null : (
                  <div className="flex flex-col gap-4">
                    {dailyHolidays.map((h, i) => (
                      <div
                        key={`${h.date}-${h.name}`}
                        className={`p-4 rounded-xl border transition-all animate-fade-in ${
                          darkMode
                            ? 'bg-stone-900 border-stone-700 hover:border-stone-600'
                            : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <div className="flex flex-col md:flex-row md:items-start gap-3">
                          <div className="shrink-0 text-center md:text-left">
                            <p className="text-xs font-sans font-bold uppercase tracking-widest text-[#92400e] dark:text-amber-400">
                              {new Date(h.date + 'T12:00:00').toLocaleDateString('fr-FR', { weekday: 'long' })}
                            </p>
                            <p className="text-lg font-bold font-serif text-stone-900 dark:text-white leading-tight">
                              {new Date(h.date + 'T12:00:00').getDate()} {MONTHS_FR[h.date.split('-')[1]]}
                            </p>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className={`inline-block text-[10px] font-sans font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                                h.type === 'celtique'
                                  ? 'bg-emerald-600/10 text-emerald-800 dark:text-emerald-400'
                                  : 'bg-amber-600/10 text-amber-800 dark:text-amber-400'
                              }`}>
                                {h.type === 'celtique' ? '🌿 Celtique' : '✝️ Chrétien'}
                              </span>
                              <h3 className="text-base md:text-lg font-bold font-serif text-stone-950 dark:text-white leading-tight">
                                {h.name}
                              </h3>
                            </div>
                            <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300 mb-3">
                              {h.description}
                            </p>
                            {h.traditions && (
                              <div className={`p-3 rounded-lg border text-xs leading-relaxed ${
                                darkMode ? 'bg-stone-800 border-stone-700 text-stone-300' : 'bg-[#FAF6EE] border-stone-200/60 text-stone-600'
                              }`}>
                                <span className="font-bold text-[#92400e] dark:text-amber-400 text-[10px] uppercase tracking-widest font-sans block mb-1">
                                  Traditions associées
                                </span>
                                {h.traditions}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <p className="mt-8 text-[10px] font-sans italic opacity-50 text-center">
                  Fêtes chrétiennes (fixes, mobiles, saints du jour) et traditions
                  celtiques de la Roue de l'An (insulaires et gauloises), 1899-1914.
                </p>
              </section>
            )}

            {/* 📄 VIEW 5: PAGES DE JOURNAL DYNAMIQUES */}
            {activeMenu.startsWith('page') && (
              <section className="animate-fade-in">
                
                {loadingArticles ? (
                  <div className="flex flex-col items-center justify-center py-24 animate-pulse text-stone-500">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mb-4"></div>
                    <p className="font-serif italic">Dépliage des archives de la Gazette...</p>
                  </div>
                ) : !journalAvailable ? (
                  // Retro compiler warning card
                  <div className={`p-8 rounded-2xl border text-center ${darkMode ? 'bg-stone-800 border-stone-700' : 'bg-white border-stone-200 shadow-sm'}`}>
                    <span className="text-5xl block mb-4 select-none">📰</span>
                    <h2 className="text-2xl font-bold font-serif text-[#92400e] dark:text-amber-400 mb-2">Édition non numérisée</h2>
                     <p className="text-stone-600 dark:text-stone-200 italic text-sm md:text-base max-w-lg mx-auto mb-6">
                      L'édition intégrale du journal <strong>Le Petit Parisien</strong> pour le <span className="font-bold underline">{dateMeta.dayNum} {dateMeta.monthName} {dateMeta.year}</span> n'a pas encore été numérisée et restaurée en base de données par notre archiviste mécanique.
                    </p>
                    
                    {hasAdminRights ? (
                      <div className={`p-5 rounded-xl border text-left max-w-xl mx-auto font-sans text-xs ${darkMode ? 'bg-stone-900 border-stone-600 text-stone-200' : 'bg-amber-50/50 border-[#92400e]/15 text-[#2c1b12]'}`}>
                        <strong className="text-sm font-serif text-[#92400e] dark:text-amber-400 block mb-2 flex items-center gap-1.5">
                          <Bug size={16} /> 👉 Comment numériser ce jour ?
                        </strong>
                        <p className="mb-3 opacity-90">
                          Pour lancer la numérisation complète de cette date et générer ses articles restaurés par l'intelligence artificielle Gemini (Flash-Lite), exécutez la commande suivante dans le terminal de l'application :
                        </p>
                        <pre className={`p-2.5 rounded font-mono text-sm overflow-x-auto select-all border ${darkMode ? 'bg-stone-950 border-stone-700 text-emerald-400' : 'bg-white border-stone-200 text-emerald-700 font-bold'}`}>
                          python pipeline_journalier.py --date {dateStr}
                        </pre>
                        {voteCount > 0 && (
                          <p className="mt-3 text-amber-600 dark:text-amber-400 font-bold font-sans">
                            🗳️ Cette journée a recueilli {voteCount} {voteCount === 1 ? 'vote de joueur' : 'votes de joueurs'} pour être numérisée !
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="max-w-md mx-auto">
                        <p className="text-sm mb-4 text-stone-600 dark:text-stone-200">
                          Vous aimeriez lire l'actualité de ce jour-là ? Proposez à notre archiviste mécanique de s'y atteler en votant pour cette date !
                        </p>
                        <button
                          onClick={handleVote}
                          disabled={hasVoted}
                          className={`w-full py-3 px-6 rounded-xl font-sans font-bold text-sm transition-all border shadow-sm ${
                            hasVoted
                              ? 'bg-stone-200 dark:bg-stone-700 text-stone-400 dark:text-stone-300 border-transparent cursor-not-allowed'
                              : 'bg-amber-600 hover:bg-amber-700 text-white border-amber-700 hover:scale-[1.02] active:scale-[0.98]'
                          }`}
                        >
                          {hasVoted ? '✓ A voté pour la numérisation' : `🗳️ Voter pour charger ce jour (${voteCount} ${voteCount === 1 ? 'vote' : 'votes'})`}
                        </button>
                      </div>
                    )}
                    
                    <p className="text-xs text-stone-500 italic mt-6">
                      En attendant, les données de Météo, Influence Lunaire et la Chronique Historique de ce jour restent accessibles dans le menu latéral.
                    </p>
                  </div>
                ) : filteredArticles.length === 0 ? (
                  <div className={`py-20 text-center font-serif italic ${darkMode ? 'text-stone-300' : 'text-stone-400'}`}>
                    Aucun article substantiel disponible pour cette page.
                  </div>
                ) : (
                  <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold font-serif border-b border-current pb-3 text-stone-900 dark:text-stone-100 flex justify-between items-center select-none">
                      <span>Le Petit Parisien — Page {activeMenu.replace('page', '')}</span>
                      <span className="text-xs font-sans px-2 py-0.5 rounded bg-amber-600/10 text-amber-800 dark:text-amber-300 font-bold uppercase tracking-wider">
                        {filteredArticles.length} {filteredArticles.length === 1 ? 'Article' : 'Articles'}
                      </span>
                    </h2>
                    
                    {filteredArticles.map(article => {
                      const isExpanded = !!expandedArticles[article.id];
                      return (
                        <article 
                          key={article.id}
                          className={`p-6 rounded-2xl border transition-all ${darkMode ? 'bg-stone-800 border-stone-700 hover:border-stone-600' : 'bg-white border-stone-200 hover:border-stone-300 shadow-sm hover:shadow-md'}`}
                        >
                          <header className="mb-4 select-none">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="inline-block text-[10px] font-sans font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-amber-600/10 text-amber-800 dark:text-amber-400 shrink-0">
                                {article.category}
                              </span>
                              <h3 className="text-base md:text-lg font-bold font-serif text-stone-950 dark:text-white leading-tight">
                                {article.title}
                              </h3>
                            </div>
                          </header>

                          {article.summary?.replace(/^\/\/\s*(Date|Restauration\s+Pass)[^]*?(?:\n|$)/gm, '').replace(/^\/\/\s*Date:\s*\S+\s*\/\/\s*Restauration\s+Pass:\s*\d+[.\s]*/i, '').replace(/^\/\/\s*Date:\s*\S+\s*/i, '').trim() && (
                            <div className={`p-4 rounded-xl border mb-4 font-sans text-xs md:text-sm leading-relaxed ${darkMode ? 'bg-stone-800 border-stone-600 text-stone-100' : 'bg-[#FAF6EE] border-stone-200/60 text-stone-700'}`}>
                              <p className="italic">{article.summary.replace(/^\/\/\s*(Date|Restauration\s+Pass)[^]*?(?:\n|$)/gm, '').replace(/^\/\/\s*Date:\s*\S+\s*\/\/\s*Restauration\s+Pass:\s*\d+[.\s]*/i, '').replace(/^\/\/\s*Date:\s*\S+\s*/i, '').trim()}</p>
                            </div>
                          )}

                          {/* Détails paragraphe pliables */}
                          {isExpanded && (
                            <div className="mt-4 border-t border-dashed border-stone-300 dark:border-stone-600 pt-4 leading-relaxed text-sm md:text-base text-stone-800 dark:text-stone-100 flex flex-col gap-4 animate-fade-in font-serif font-normal">
                              {article.paragraphs.map((p, idx) => (
                                <p key={idx}>{p}</p>
                              ))}
                            </div>
                          )}

                          <button 
                            onClick={() => toggleArticleCollapse(article.id)}
                            className={`w-full mt-4 py-2 bg-stone-50 hover:bg-stone-100 dark:bg-stone-900 dark:hover:bg-stone-800 border rounded-lg text-xs font-sans font-bold transition-all flex items-center justify-center gap-1.5 ${darkMode ? 'border-stone-600 text-stone-200' : 'border-stone-200 text-stone-700'}`}
                          >
                            {isExpanded ? (
                              <>
                                <span>📄 Fermer le texte intégral</span>
                                <ChevronUp size={14} />
                              </>
                            ) : (
                              <>
                                <span>📖 Lire l'article complet</span>
                                <ChevronDown size={14} />
                              </>
                            )}
                          </button>
                        </article>
                      );
                    })}
                  </div>
                )}
              </section>
            )}

            {/* 🗳️ VIEW 6: VOTES LIST (ADMIN ONLY) */}
            {activeMenu === 'votes' && hasAdminRights && (
              <section className={`p-6 rounded-2xl border ${darkMode ? 'bg-stone-800 border-stone-700' : 'bg-white border-stone-200 shadow-sm'}`}>
                <h2 className="text-2xl font-bold font-serif mb-4 border-b border-current pb-3 flex items-center gap-2">
                  <span>🗳️</span> Demandes de Numérisation des Joueurs
                </h2>
                <p className="text-xs font-sans italic opacity-75 mb-6">
                  Voici le classement des journées les plus plébiscitées par les Héritiers pour lesquelles les archives n'ont pas encore été chargées.
                </p>

                {loadingVotes ? (
                  <div className="flex justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
                  </div>
                ) : pendingVotes.length === 0 ? (
                  <p className="text-center font-serif italic py-12 text-stone-500">
                    Toutes les journées demandées ont été numérisées.
                  </p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className={`w-full text-left border-collapse text-sm ${darkMode ? 'text-stone-300' : 'text-stone-800'}`}>
                      <thead>
                        <tr className={`border-b font-sans font-bold uppercase text-xs ${darkMode ? 'border-stone-700 text-stone-400' : 'border-stone-200 text-stone-600'}`}>
                          <th className="py-3 px-4">Date</th>
                          <th className="py-3 px-4 text-center">Votes</th>
                          <th className="py-3 px-4">Commande de Numérisation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200/50 dark:divide-stone-700/50">
                        {pendingVotes.map((vote) => {
                          const dateObj = new Date(vote.date);
                          const formattedDate = `${dateObj.getDate()} ${MONTHS_FR[String(dateObj.getMonth() + 1).padStart(2, '0')]} ${dateObj.getFullYear()}`;
                          const commandStr = `python pipeline_journalier.py --date ${vote.date}`;
                          return (
                            <tr key={vote.date} className={`hover:bg-stone-50 dark:hover:bg-stone-900/40 transition-colors`}>
                              <td className="py-3 px-4 font-serif font-bold text-stone-900 dark:text-white">
                                {formattedDate} <span className="text-xs font-mono opacity-50 block sm:inline sm:ml-2">({vote.date})</span>
                              </td>
                              <td className="py-3 px-4 text-center font-bold text-amber-600 dark:text-amber-400">
                                {vote.votes_count}
                              </td>
                              <td className="py-3 px-4 font-mono text-xs select-all bg-stone-100 dark:bg-stone-950 p-2 rounded max-w-xs overflow-x-auto text-emerald-700 dark:text-emerald-400">
                                {commandStr}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            )}

          </main>

        </div>

      </div>

    </div>
  );
}
