// src/components/Actualite1899.jsx
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { ArrowLeft, Calendar, Sun, Moon, Info, ChevronDown, ChevronUp, FileText, Bug } from '../config/icons';
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

const WEATHER_OPTIONS = [
  { cond: "Ciel Nuageux", temp: "6°C à 10°C", prec: "1.2 mm", vent: "25 km/h", icon: "🌤️" },
  { cond: "Pluie intermittente", temp: "4°C à 8°C", prec: "3.5 mm", vent: "30 km/h", icon: "🌧️" },
  { cond: "Éclaircies et fraîcheur", temp: "3°C à 7°C", prec: "0.0 mm", vent: "15 km/h", icon: "🌤️" },
  { cond: "Grisaille et brume d'hiver", temp: "2°C à 6°C", prec: "0.2 mm", vent: "10 km/h", icon: "🌫️" }
];

const MOON_OPTIONS = [
  { phase: "Dernier Croissant", visible: "22% d'illumination", aspect: "Fine corne argentée à l'aube", desc: "La fine faux lunaire s'est levée tard dans la nuit, jetant une faible lueur argentée sur les monuments parisiens avant l'aube.", icon: "🌙" },
  { phase: "Nouvelle Lune", visible: "0% d'illumination", aspect: "Nuit noire et profonde", desc: "La lune, invisible, laisse place à un ciel d'encre étoilé, faisant briller d'autant plus l'éclairage public électrique de l'Opéra.", icon: "🌑" },
  { phase: "Premier Croissant", visible: "15% d'illumination", aspect: "Jeune croissant crépusculaire", desc: "Un mince filet de lune est apparu au coucher du soleil à l'ouest, glissant rapidement sous l'horizon parisien.", icon: "🌙" },
  { phase: "Premier Quartier", visible: "50% d'illumination", aspect: "Demi-lune brillante", desc: "Une demi-lune claire a éclairé la première partie de la nuit, projetant des ombres géométriques nettes sur les grands boulevards.", icon: "🌓" }
];

export default function Actualite1899({ onBack, userProfile }) {
  const [dateStr, setDateStr] = useState('1899-11-26');
  const [activeMenu, setActiveMenu] = useState('meteo'); // meteo, lune, chronique, page1, page2, page3, page4, votes
  const [eventsData, setEventsData] = useState({});
  const [articles, setArticles] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(false);
  const [journalAvailable, setJournalAvailable] = useState(false);
  const [expandedArticles, setExpandedArticles] = useState({});
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('journal-dark-mode') === 'enabled';
  });

  // --- Dates pour lesquelles des articles existent en BDD ---
  const [availableArticleDates, setAvailableArticleDates] = useState(new Set());

  // --- États et gestion des votes de numérisation ---
  const [hasVoted, setHasVoted] = useState(false);
  const [voteCount, setVoteCount] = useState(0);
  const [votesList, setVotesList] = useState([]);
  const [loadingVotes, setLoadingVotes] = useState(false);

  // --- États du Custom Calendar Popover ---
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [calMonth, setCalMonth] = useState(10); // 0-indexed, 10 = Novembre
  const [calYear, setCalYear] = useState(1899);
  const calendarRef = useRef(null);

  const hasAdminRights = useMemo(() => {
    return isSuperAdmin(userProfile);
  }, [userProfile]);

  // --- Chargement initial : événements et dates d'articles uniques ---
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

    const fetchAvailableArticleDates = async () => {
      try {
        const { data, error } = await supabase
          .from('journal_articles')
          .select('date, category');
        
        if (error) throw error;
        
        if (data) {
          const validArticles = data.filter(
            item => item.category !== 'Météo' && 
                    item.category !== 'Lune' && 
                    item.category !== 'Meteo'
          );
          const datesSet = new Set(validArticles.map(item => item.date));
          setAvailableArticleDates(datesSet);
        }
      } catch (err) {
        console.error("Erreur chargement dates articles :", err);
      }
    };

    fetchEvents();
    fetchAvailableArticleDates();
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
        setArticles(mappedArticles);
        setJournalAvailable(true);
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
    fetchArticlesForDate(dateStr);
  }, [dateStr, fetchArticlesForDate]);

  // --- Récupérer le statut du vote et le total pour la date active ---
  useEffect(() => {
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

    // Calcul météo déterministe
    const w = WEATHER_OPTIONS[dayNum % WEATHER_OPTIONS.length];
    let weatherDesc = "";
    if (w.cond === "Ciel Nuageux") {
      weatherDesc = `Le ${dayNum} ${monthName} ${year}, le ciel est resté bas et couvert sur toute la capitale, apportant une brume humide sur les quais de Seine. Les promeneurs se pressaient sous les boulevards éclairés aux premiers becs de gaz.`;
    } else if (w.cond === "Pluie intermittente") {
      weatherDesc = `Le ${dayNum} ${monthName} ${year}, des averses passagères ont balayé les boulevards une partie de la journée, forçant les passants à s'abriter sous les marquises des théâtres et des grands magasins.`;
    } else if (w.cond === "Éclaircies et fraîcheur") {
      weatherDesc = `Le ${dayNum} ${monthName} ${year}, un beau soleil d'automne a brillé à travers un air vif et piquant. Les promeneurs ont envahi le jardin des Tuileries et les terrasses de café.`;
    } else {
      weatherDesc = `Le ${dayNum} ${monthName} ${year}, une épaisse nappe de brouillard a enveloppé la Seine au lever du jour, s'estompant lentement pour laisser place à un ciel blanc d'hiver.`;
    }

    // Calcul lune déterministe
    const m = MOON_OPTIONS[(dayNum + 5) % MOON_OPTIONS.length];

    return {
      year,
      monthName,
      dayNum,
      dayOfWeek,
      editionNo,
      weather: { ...w, desc: weatherDesc },
      moon: m
    };
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

  // --- Articles filtrés par page ---
  const filteredArticles = useMemo(() => {
    if (activeMenu.startsWith('page')) {
      const pageNum = parseInt(activeMenu.replace('page', ''), 10);
      return articles.filter(a => a.page === pageNum);
    }
    return [];
  }, [articles, activeMenu]);

  // --- Navigation jour précédent/suivant ---
  const navigateDate = (offset) => {
    const parts = dateStr.split('-');
    const dt = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    dt.setDate(dt.getDate() + offset);

    // Limiter la navigation du 1er Novembre 1899 au 31 Décembre 1914
    const minDate = new Date(1899, 10, 1);
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

  return (
    <div className={`min-h-screen font-serif transition-colors duration-300 ${darkMode ? 'bg-stone-900 text-stone-200' : 'bg-[#FAF6EE] text-[#2c1b12]'}`}>
      
      {/* ─── EN-TÊTE PRINCIPAL ─── */}
      <div className={`border-b ${darkMode ? 'border-stone-800 bg-stone-950/40' : 'border-[#92400e]/20 bg-[#F5EFEB]'} px-4 py-3 sticky top-0 z-40 shadow-sm backdrop-blur-md`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack} 
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg font-sans font-bold text-sm transition-all border ${darkMode ? 'bg-stone-900 text-stone-300 hover:text-white border-stone-800 hover:bg-stone-850' : 'bg-white text-stone-700 hover:text-[#92400e] border-stone-200 hover:bg-[#FDFBF7]'}`}
          >
            <ArrowLeft size={16} /> <span>Retour à l'accueil</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(prev => !prev)}
              className={`p-2 rounded-lg transition-colors border ${darkMode ? 'bg-stone-900 border-stone-800 text-amber-400 hover:bg-stone-850' : 'bg-white border-stone-200 text-[#92400e] hover:bg-stone-50'}`}
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
        <div className={`p-4 rounded-xl border mb-8 flex flex-col md:flex-row justify-between items-center gap-4 ${darkMode ? 'bg-stone-950/40 border-stone-800' : 'bg-white border-[#92400e]/20 shadow-sm'}`}>
          <div className="flex flex-wrap items-center gap-3 font-sans font-bold w-full md:w-auto">
            <Calendar size={18} className="text-amber-600 shrink-0" />
            <span className="text-sm shrink-0">📅 DATE ARCHIVÉE (1899 - 1914) :</span>
            
            {/* Custom Interactive Popover Date Picker */}
            <div className="relative shrink-0" ref={calendarRef}>
              <button
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                className={`px-4 py-2 rounded-lg font-mono text-sm font-bold border transition-all flex items-center gap-2.5 outline-none hover:scale-[1.01] active:scale-[0.99] select-none ${
                  availableArticleDates.has(dateStr) 
                    ? 'border-emerald-600 bg-emerald-500/10 text-emerald-950 dark:text-emerald-300 focus:ring-1 focus:ring-emerald-500' 
                    : (darkMode ? 'bg-stone-900 border-stone-850 text-white' : 'bg-stone-50 border-stone-300 text-stone-900')
                }`}
              >
                <span>{dateStr.split('-').reverse().join('/')}</span>
                <span className="text-xs opacity-70">📅</span>
              </button>

              {isCalendarOpen && (
                <div className={`absolute top-full left-0 mt-2 p-4 rounded-xl border shadow-2xl z-50 w-72 font-sans transition-all border-[#92400e]/25 animate-fade-in ${
                  darkMode ? 'bg-stone-950 border-stone-800 text-white' : 'bg-white border-stone-250 text-stone-900 shadow-amber-900/5'
                }`}>
                  {/* Navigation mois et année */}
                  <div className="flex justify-between items-center mb-3 select-none">
                    <button 
                      onClick={() => {
                        if (calMonth === 0) {
                          if (calYear > 1899) {
                            setCalYear(calYear - 1);
                            setCalMonth(11);
                          } else {
                            showInAppNotification("Date limite atteinte (novembre 1899) !", "warning");
                          }
                        } else {
                          // Bloquer le retour avant novembre 1899
                          if (calYear === 1899 && calMonth === 10) {
                            showInAppNotification("Les archives débutent en novembre 1899 !", "warning");
                          } else {
                            setCalMonth(calMonth - 1);
                          }
                        }
                      }}
                      className="p-1.5 rounded hover:bg-stone-150 dark:hover:bg-stone-800 text-xs font-bold font-sans"
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
                      className="p-1.5 rounded hover:bg-stone-150 dark:hover:bg-stone-800 text-xs font-bold font-sans"
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
                                ? (darkMode ? 'bg-emerald-950/45 border-emerald-800/80 text-emerald-400 hover:bg-emerald-900/60 font-bold' : 'bg-emerald-50 border-emerald-250 text-emerald-800 hover:bg-emerald-100 font-bold')
                                : 'border-transparent hover:bg-stone-150 dark:hover:bg-stone-800 text-stone-750 dark:text-stone-300'
                          }`}
                        >
                          <span>{day.dayNum}</span>
                          {/* Point vert émeraude discret signalant la présence d'articles de presse en base de données */}
                          {day.hasArticles && !isSelected && (
                            <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500"></span>
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

            {/* Menu déroulant compact des dates chargées avec articles */}
            {availableArticleDates.size > 0 && (
              <select
                onChange={e => {
                  if (e.target.value) setDateStr(e.target.value);
                }}
                value={availableArticleDates.has(dateStr) ? dateStr : ""}
                className={`p-2 rounded-lg font-sans text-xs outline-none border transition-all shrink-0 ${
                  darkMode ? 'bg-stone-900 border-stone-850 text-stone-300 focus:border-amber-650' : 'bg-white border-stone-300 text-stone-700 focus:border-amber-600'
                }`}
              >
                <option value="">⚡ Gazette numérisée ({availableArticleDates.size})...</option>
                {Array.from(availableArticleDates).sort().map(d => {
                  const parts = d.split('-');
                  const formatted = `${parts[2]} ${MONTHS_FR[parts[1]]} ${parts[0]}`;
                  return (
                    <option key={d} value={d}>
                      {formatted}
                    </option>
                  );
                })}
              </select>
            )}
          </div>
          
          <div className="flex items-center gap-2 font-sans font-bold shrink-0">
            <button 
              onClick={() => navigateDate(-1)} 
              className={`px-3 py-2 rounded-lg text-xs transition-colors border ${darkMode ? 'bg-stone-900 border-stone-800 hover:bg-stone-850 text-stone-300' : 'bg-stone-100 border-stone-200 hover:bg-stone-200 text-stone-700'}`}
            >
              ◄ Jour Précédent
            </button>
            <button 
              onClick={() => navigateDate(1)} 
              className={`px-3 py-2 rounded-lg text-xs transition-colors border ${darkMode ? 'bg-stone-900 border-stone-800 hover:bg-stone-850 text-stone-300' : 'bg-stone-100 border-stone-200 hover:bg-stone-200 text-stone-700'}`}
            >
              Jour Suivant ►
            </button>
          </div>
        </div>

        {/* ─── CORPS DE LA GAZETTE (LAYOUT 2 COLONNES) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sommaire Interactif (Colonne Gauche - w-1/4) */}
          <aside className="lg:col-span-3 flex flex-col gap-3 lg:sticky lg:top-24 lg:z-10 select-none">
            <div className={`p-4 rounded-xl border ${darkMode ? 'bg-stone-950/20 border-stone-800' : 'bg-[#F2ECE6] border-[#2c1b12]/10'}`}>
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
                  onClick={() => setActiveMenu('chronique')} 
                  className={`w-full text-left p-3 rounded-lg flex items-center gap-2.5 transition-all border ${activeMenu === 'chronique' ? (darkMode ? 'bg-stone-800 border-amber-600 text-amber-400' : 'bg-white border-[#2c1b12]/30 text-[#92400e]') : 'border-transparent opacity-75 hover:opacity-100'}`}
                >
                  <span className="text-base">🏛️</span> <span>Chronique Historique</span>
                </button>
                
                <hr className={`my-2 ${darkMode ? 'border-stone-850' : 'border-stone-200'}`} />
                
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
                    <hr className={`my-2 ${darkMode ? 'border-stone-850' : 'border-stone-200'}`} />
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
            
            {/* 🌤️ VIEW 1: MÉTÉO */}
            {activeMenu === 'meteo' && (
              <section className={`p-6 rounded-2xl border ${darkMode ? 'bg-stone-950/40 border-stone-800' : 'bg-white border-stone-200 shadow-sm'}`}>
                <div className="flex items-center gap-4 mb-6 border-b border-current pb-4">
                  <span className="text-5xl">{dateMeta.weather.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold font-serif">Météo de Paris</h2>
                    <p className="text-xs font-sans italic opacity-75">Reconstitution climatologique d'époque</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Condition", val: dateMeta.weather.cond, border: 'border-amber-600/30' },
                    { label: "Températures", val: dateMeta.weather.temp, border: 'border-blue-600/30' },
                    { label: "Précipitations", val: dateMeta.weather.prec, border: 'border-emerald-600/30' },
                    { label: "Vents", val: dateMeta.weather.vent, border: 'border-purple-600/30' }
                  ].map((wInfo, i) => (
                    <div key={i} className={`p-3 rounded-xl border bg-stone-50 dark:bg-stone-900/60 ${wInfo.border}`}>
                      <h4 className="text-[10px] uppercase font-sans font-bold opacity-60 tracking-wider mb-1">{wInfo.label}</h4>
                      <p className="text-sm font-bold font-serif">{wInfo.val}</p>
                    </div>
                  ))}
                </div>

                <div className={`p-4 rounded-xl border text-sm md:text-base leading-relaxed italic ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-amber-50/50 border-[#92400e]/10'}`}>
                  <strong>Chronique Météorologique Réduite :</strong>
                  <p className="mt-2 text-stone-700 dark:text-stone-300">{dateMeta.weather.desc}</p>
                </div>
              </section>
            )}

            {/* 🌙 VIEW 2: LUNE */}
            {activeMenu === 'lune' && (
              <section className={`p-6 rounded-2xl border ${darkMode ? 'bg-stone-950/40 border-stone-800' : 'bg-white border-stone-200 shadow-sm'}`}>
                <div className="flex items-center gap-4 mb-6 border-b border-current pb-4">
                  <span className="text-5xl">{dateMeta.moon.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold font-serif">Influence Lunaire</h2>
                    <p className="text-xs font-sans italic opacity-75">Calcul astronomique réel pour le bassin céleste parisien</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Phase Lunaire", val: dateMeta.moon.phase },
                    { label: "Surface Visible", val: dateMeta.moon.visible },
                    { label: "Aspect Céleste", val: dateMeta.moon.aspect }
                  ].map((mInfo, i) => (
                    <div key={i} className="p-3 rounded-xl border bg-stone-50 dark:bg-stone-900/60 border-amber-600/30">
                      <h4 className="text-[10px] uppercase font-sans font-bold opacity-60 tracking-wider mb-1">{mInfo.label}</h4>
                      <p className="text-sm font-bold font-serif">{mInfo.val}</p>
                    </div>
                  ))}
                </div>

                <div className={`p-4 rounded-xl border text-sm md:text-base leading-relaxed italic ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-amber-50/50 border-[#92400e]/10'}`}>
                  <strong>Chronique Lunaire & Influence :</strong>
                  <p className="mt-2 text-stone-700 dark:text-stone-300">{dateMeta.moon.desc}</p>
                </div>
              </section>
            )}

            {/* 🏛️ VIEW 3: CHRONIQUE TIMELINE */}
            {activeMenu === 'chronique' && (
              <section className={`p-6 rounded-2xl border ${darkMode ? 'bg-stone-950/40 border-stone-800' : 'bg-white border-stone-200 shadow-sm'}`}>
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
                      <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-2 border-white dark:border-stone-900 group-hover:scale-125 transition-transform" />
                      <div className={`p-4 rounded-xl border transition-all ${darkMode ? 'bg-stone-900 border-stone-850 hover:bg-stone-850' : 'bg-stone-50 border-stone-250 hover:bg-stone-100 shadow-sm'}`}>
                        <span className="text-[10px] font-sans font-bold text-[#92400e] dark:text-amber-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                          <span>{ev.icon}</span> {ev.cat}
                        </span>
                        <h3 className="text-base font-bold font-serif mb-2 text-stone-900 dark:text-stone-100">{ev.title}</h3>
                        <p className="text-sm md:text-base leading-relaxed text-stone-600 dark:text-stone-350 italic">
                          {ev.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 📄 VIEW 4: PAGES DE JOURNAL DYNAMIQUES */}
            {activeMenu.startsWith('page') && (
              <section className="animate-fade-in">
                
                {loadingArticles ? (
                  <div className="flex flex-col items-center justify-center py-24 animate-pulse text-stone-500">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mb-4"></div>
                    <p className="font-serif italic">Dépliage des archives de la Gazette...</p>
                  </div>
                ) : !journalAvailable ? (
                  // Retro compiler warning card
                  <div className={`p-8 rounded-2xl border text-center ${darkMode ? 'bg-stone-950/40 border-stone-800' : 'bg-white border-stone-200 shadow-sm'}`}>
                    <span className="text-5xl block mb-4 select-none">📰</span>
                    <h2 className="text-2xl font-bold font-serif text-[#92400e] dark:text-amber-400 mb-2">Édition non numérisée</h2>
                    <p className="text-stone-600 dark:text-stone-400 italic text-sm md:text-base max-w-lg mx-auto mb-6">
                      L'édition intégrale du journal <strong>Le Petit Parisien</strong> pour le <span className="font-bold underline">{dateMeta.dayNum} {dateMeta.monthName} {dateMeta.year}</span> n'a pas encore été numérisée et restaurée en base de données par notre archiviste mécanique.
                    </p>
                    
                    {hasAdminRights ? (
                      <div className={`p-5 rounded-xl border text-left max-w-xl mx-auto font-sans text-xs ${darkMode ? 'bg-stone-900 border-stone-800 text-stone-300' : 'bg-amber-50/50 border-[#92400e]/15 text-[#2c1b12]'}`}>
                        <strong className="text-sm font-serif text-[#92400e] dark:text-amber-400 block mb-2 flex items-center gap-1.5">
                          <Bug size={16} /> 👉 Comment numériser ce jour ?
                        </strong>
                        <p className="mb-3 opacity-90">
                          Pour lancer la numérisation complète de cette date et générer ses articles restaurés par l'intelligence artificielle Gemini (Flash-Lite), exécutez la commande suivante dans le terminal de l'application :
                        </p>
                        <pre className={`p-2.5 rounded font-mono text-sm overflow-x-auto select-all border ${darkMode ? 'bg-stone-950 border-stone-850 text-emerald-400' : 'bg-white border-stone-250 text-emerald-700 font-bold'}`}>
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
                        <p className="text-sm mb-4 text-stone-600 dark:text-stone-300">
                          Vous aimeriez lire l'actualité de ce jour-là ? Proposez à notre archiviste mécanique de s'y atteler en votant pour cette date !
                        </p>
                        <button
                          onClick={handleVote}
                          disabled={hasVoted}
                          className={`w-full py-3 px-6 rounded-xl font-sans font-bold text-sm transition-all border shadow-sm ${
                            hasVoted
                              ? 'bg-stone-200 dark:bg-stone-800 text-stone-400 dark:text-stone-500 border-transparent cursor-not-allowed'
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
                  <div className={`py-20 text-center font-serif italic ${darkMode ? 'text-stone-500' : 'text-stone-400'}`}>
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
                          className={`p-6 rounded-2xl border transition-all ${darkMode ? 'bg-stone-950/40 border-stone-800 hover:border-stone-700' : 'bg-white border-stone-200 hover:border-stone-300 shadow-sm hover:shadow-md'}`}
                        >
                          <header className="flex flex-col sm:flex-row justify-between sm:items-start gap-3 mb-4 select-none">
                            <div>
                              <span className="inline-block text-[10px] font-sans font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-amber-600/10 text-amber-800 dark:text-amber-400 mb-1.5">
                                {article.category}
                              </span>
                              <h3 className="text-lg md:text-xl font-bold font-serif text-stone-950 dark:text-white leading-tight">
                                {article.title}
                              </h3>
                            </div>
                            <span className="text-xs text-stone-500 dark:text-stone-400 font-sans italic self-start shrink-0">
                              Page {article.page}
                            </span>
                          </header>

                          {/* Résumé / Summary */}
                          <div className={`p-4 rounded-xl border mb-4 font-sans text-xs md:text-sm leading-relaxed ${darkMode ? 'bg-stone-900/60 border-stone-800 text-stone-300' : 'bg-[#FAF6EE] border-stone-200/60 text-stone-750'}`}>
                            <strong className="text-[10px] font-bold text-amber-800 dark:text-amber-400 block mb-1 uppercase tracking-wider">
                              📝 RÉSUMÉ RESTAURÉ :
                            </strong>
                            <p className="italic">{article.summary?.replace(/^\/\/\s*(Date|Restauration\s+Pass)[^]*?(?:\n|$)/gm, '').replace(/^\/\/\s*Date:\s*\S+\s*\/\/\s*Restauration\s+Pass:\s*\d+[.\s]*/i, '').replace(/^\/\/\s*Date:\s*\S+\s*/i, '').trim() || "Résumé en cours de chargement..."}</p>
                          </div>

                          {/* Détails paragraphe pliables */}
                          {isExpanded && (
                            <div className="mt-4 border-t border-dashed border-stone-300 dark:border-stone-850 pt-4 leading-relaxed text-sm md:text-base text-stone-800 dark:text-stone-300 flex flex-col gap-4 animate-fade-in font-serif font-normal">
                              {article.paragraphs.map((p, idx) => (
                                <p key={idx}>{p}</p>
                              ))}
                            </div>
                          )}

                          <button 
                            onClick={() => toggleArticleCollapse(article.id)}
                            className={`w-full mt-4 py-2 bg-stone-50 hover:bg-stone-100 dark:bg-stone-900/60 dark:hover:bg-stone-850 border rounded-lg text-xs font-sans font-bold transition-all flex items-center justify-center gap-1.5 ${darkMode ? 'border-stone-800 text-stone-300' : 'border-stone-200 text-stone-700'}`}
                          >
                            {isExpanded ? (
                              <>
                                <span>📄 Fermer le texte intégral</span>
                                <ChevronUp size={14} />
                              </>
                            ) : (
                              <>
                                <span>📖 Lire l'article complet restauré</span>
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

            {/* 🗳️ VIEW 5: VOTES LIST (ADMIN ONLY) */}
            {activeMenu === 'votes' && hasAdminRights && (
              <section className={`p-6 rounded-2xl border ${darkMode ? 'bg-stone-950/40 border-stone-800' : 'bg-white border-stone-200 shadow-sm'}`}>
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
                ) : votesList.length === 0 ? (
                  <p className="text-center font-serif italic py-12 text-stone-500">
                    Aucun vote enregistré pour le moment.
                  </p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className={`w-full text-left border-collapse text-sm ${darkMode ? 'text-stone-300' : 'text-stone-800'}`}>
                      <thead>
                        <tr className={`border-b font-sans font-bold uppercase text-xs ${darkMode ? 'border-stone-800 text-stone-400' : 'border-stone-200 text-stone-600'}`}>
                          <th className="py-3 px-4">Date</th>
                          <th className="py-3 px-4 text-center">Votes</th>
                          <th className="py-3 px-4">Commande de Numérisation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200/50 dark:divide-stone-800/50">
                        {votesList.map((vote) => {
                          const dateObj = new Date(vote.date);
                          const formattedDate = `${dateObj.getDate()} ${MONTHS_FR[String(dateObj.getMonth() + 1).padStart(2, '0')]} 1899`;
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
