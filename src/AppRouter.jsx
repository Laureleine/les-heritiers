// src/AppRouter.jsx
import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';

function RouteAnnouncer() {
  const location = useLocation();
  useEffect(() => {
    const live = document.getElementById('a11y-live');
    if (!live) return;
    const title = document.title || 'Les Héritiers';
    live.textContent = '';
    requestAnimationFrame(() => { live.textContent = `Page : ${title}`; });
  }, [location.pathname]);
  return null;
}
import { useCharacter, initialCharacterState } from './context/CharacterContext';
import { useGameDataContext } from './context/GameDataContext';
import { useUserContext } from './context/UserContext';
import { supabase } from './config/supabase';
import { Lock } from './config/icons';
import { isCharacterScelle } from './utils/lockUtils';
import { isAdmin } from './utils/authRoles';

// Code Splitting
const Encyclopedia = lazy(() => import('./components/Encyclopedia'));
const ValidationsPendantes = lazy(() => import('./components/ValidationsPendantes'));
const AccountSettings = lazy(() => import('./components/AccountSettings'));
const AdminDashboard = lazy(() => import('./components/AdminDashboard'));
const CerclesDashboard = lazy(() => import('./components/CerclesDashboard'));
const MesPropositions = lazy(() => import('./components/MesPropositions'));
const RegistrePage = lazy(() => import('./components/forge/RegistrePage'));
const CharacterCreator = lazy(() => import('./components/creator/CharacterCreator'));
const Actualite = lazy(() => import('./components/Actualite'));
const CarteDeParisPage = lazy(() => import('./components/CarteDeParisPage'));
const CharacterList = lazy(() => import('./components/CharacterList'));
const PixieAssistant = lazy(() => import('./components/PixieAssistant'));
const PnjGenerateur = lazy(() => import('./components/PnjGenerateur'));
const GenerateurMenu = lazy(() => import('./components/GenerateurMenu'));
const PocheGenerateur = lazy(() => import('./components/PocheGenerateur'));
const AmbianceGenerateur = lazy(() => import('./components/AmbianceGenerateur'));
const TraducteurArgot = lazy(() => import('./components/TraducteurArgot'));
const TracasGenerateur = lazy(() => import('./components/TracasGenerateur'));
const OutilsHub = lazy(() => import('./components/OutilsHub'));

export default function AppRouter() {
  const { session, userProfile, refreshUserProfile } = useUserContext();
  const { character, dispatchCharacter, setIsReadOnly } = useCharacter();
  const { gameData } = useGameDataContext();
  const navigate = useNavigate();

  return (
    <>
    <RouteAnnouncer />
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center py-32 animate-pulse">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-amber-600 mb-4"></div>
        <p className="text-amber-900 font-serif font-bold text-lg">Dépliage des parchemins...</p>
      </div>
    }>
      <Routes>
        <Route path="/" element={
          <>
            <CharacterList
              onSelectCharacter={(c, readOnly = false) => {
                // ✨ Si on ouvre en lecture seule un personnage scellé, on force la reconstruction
                // complète du journal depuis stats_scellees (comme handleAppropriate), car le journal
                // en base peut être partiel (non-vide → condition length===0 non déclenchée).
                const charToLoad = (readOnly && isCharacterScelle(c) && gameData)
                    ? { ...c, data: { ...c.data, historique_xp: [] } }
                    : c;
                dispatchCharacter({ type: 'LOAD_CHARACTER', payload: charToLoad, gameData });
                setIsReadOnly(readOnly);
                navigate('/creator', { state: { legitAccess: true } });
              }}
              onNewCharacter={() => {
                dispatchCharacter({ type: 'RESET_CHARACTER', payload: { ...initialCharacterState } });
                setIsReadOnly(false);
                navigate('/creator', { state: { legitAccess: true } }); 
              }}
              onSignOut={() => supabase.auth.signOut()}
              onOpenAccount={() => navigate('/account')}
              onOpenEncyclopedia={() => navigate('/encyclopedia')}
              onOpenAdmin={() => navigate('/admin_dashboard')}
              onOpenCercles={() => navigate('/cercles')}
              onOpenBureau={() => navigate('/bureau_anomalies')}
              onOpenOutils={() => navigate('/outils')}
            />
            {userProfile?.profile?.show_pixie !== false && (
              <PixieAssistant character={character || {}} fairyData={gameData?.fairyData} />
            )}
          </>
        } />

        <Route path="/encyclopedia" element={
          userProfile?.profile?.is_docte ? (
            <>
              <Encyclopedia onBack={() => navigate('/')} onOpenValidations={() => navigate('/validations')} onOpenMesPropositions={() => navigate('/mes_propositions')} />
              {userProfile?.profile?.show_pixie !== false && (
                <PixieAssistant character={character || {}} fairyData={gameData?.fairyData} />
              )}
            </>
          ) : (
            <div className="max-w-2xl mx-auto p-8 mt-12 bg-[#2a1313] rounded-2xl border-2 border-red-900/50 shadow-2xl text-center">
              <Lock size={64} className="text-red-500 mb-6 mx-auto" />
              <h2 className="text-3xl font-serif text-red-100 mb-4">Savoir sous le Sceau du Silence</h2>
              <p className="text-red-200/80 mb-8 italic">Seul un Docte peut vous y initier.</p>
              <button onClick={() => navigate('/')} className="text-gray-500 hover:text-white">Retourner à l'accueil</button>
            </div>
          )
        } />

        <Route path="/validations" element={<ValidationsPendantes onBack={() => navigate('/encyclopedia')} />} />
        <Route path="/account" element={<AccountSettings onBack={() => navigate('/')} />} />
        <Route path="/admin_dashboard" element={
          isAdmin(userProfile)
            ? <AdminDashboard onBack={() => navigate('/')} />
            : <Navigate to="/" replace />
        } />
        
        <Route path="/cercles" element={
          <CerclesDashboard
            onBack={() => navigate('/')}
            onViewCharacter={(c, cercleId) => {
              // ✨ Idem : force la reconstruction du journal pour les fiches scellées en lecture seule.
              const charToLoad = (isCharacterScelle(c) && gameData)
                  ? { ...c, data: { ...c.data, historique_xp: [] } }
                  : c;
              dispatchCharacter({ type: 'LOAD_CHARACTER', payload: charToLoad, gameData });
              setIsReadOnly(true);
              navigate('/creator', { state: { legitAccess: true, from: '/cercles', cercleId } });
            }}
          />
        } />
        
        <Route path="/mes_propositions" element={<MesPropositions onBack={() => navigate('/encyclopedia')} />} />
        <Route path="/bureau_anomalies" element={<RegistrePage onBack={() => navigate('/')} />} />
        <Route path="/creator" element={<CharacterCreator />} />
        <Route path="/outils" element={
          <OutilsHub
            onBack={() => navigate('/')}
            onOpenActualite={() => navigate('/actualite')}
            onOpenCarte={() => navigate('/carte')}
            onOpenGenerateur={() => navigate('/generateur')}
            onOpenMenu={() => navigate('/menu')}
            onOpenPoche={() => navigate('/poche')}
            onOpenAmbiance={() => navigate('/ambiance')}
            onOpenArgot={() => navigate('/argot')}
            onOpenTracas={() => navigate('/tracas')}
          />
        } />
        <Route path="/actualite" element={<Actualite onBack={() => navigate('/outils')} />} />
        <Route path="/carte" element={<CarteDeParisPage onBack={() => navigate('/outils')} />} />
        <Route path="/generateur" element={<PnjGenerateur onBack={() => navigate('/outils')} />} />
        <Route path="/menu" element={<GenerateurMenu onBack={() => navigate('/outils')} />} />
        <Route path="/poche" element={<PocheGenerateur onBack={() => navigate('/outils')} />} />
        <Route path="/ambiance" element={<AmbianceGenerateur onBack={() => navigate('/outils')} />} />
        <Route path="/argot" element={<TraducteurArgot onBack={() => navigate('/outils')} />} />
        <Route path="/tracas" element={<TracasGenerateur onBack={() => navigate('/outils')} />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
    </>
  );
}