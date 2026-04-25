// src/AppRouter.jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useCharacter, initialCharacterState } from './context/CharacterContext';
import { supabase } from './config/supabase';
import { Lock } from 'lucide-react';

import CharacterList from './components/CharacterList';
import PixieAssistant from './components/PixieAssistant';

// Code Splitting
const Encyclopedia = lazy(() => import('./components/Encyclopedia'));
const ValidationsPendantes = lazy(() => import('./components/ValidationsPendantes'));
const AccountSettings = lazy(() => import('./components/AccountSettings'));
const AdminDashboard = lazy(() => import('./components/AdminDashboard'));
const CerclesDashboard = lazy(() => import('./components/CerclesDashboard'));
const MesPropositions = lazy(() => import('./components/MesPropositions'));
const RegistrePage = lazy(() => import('./components/forge/RegistrePage'));
const CharacterCreator = lazy(() => import('./components/creator/CharacterCreator'));

export default function AppRouter({ session, userProfile, refreshUserProfile }) {
  const { character, dispatchCharacter, setIsReadOnly, gameData } = useCharacter();
  const navigate = useNavigate();

  return (
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
              session={session}
              userProfile={userProfile}
              profils={gameData.profils}
              gameData={gameData}
              onSelectCharacter={(c, readOnly = false) => {
                dispatchCharacter({ type: 'LOAD_CHARACTER', payload: c, gameData });
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
            />
            {userProfile?.profile?.show_pixie !== false && (
              <PixieAssistant character={character || {}} session={session} fairyData={gameData?.fairyData} />
            )}
          </>
        } />

        <Route path="/encyclopedia" element={
          userProfile?.profile?.is_docte ? (
            <>
              <Encyclopedia userProfile={userProfile} onBack={() => navigate('/')} onOpenValidations={() => navigate('/validations')} onOpenMesPropositions={() => navigate('/mes_propositions')} />
              {userProfile?.profile?.show_pixie !== false && (
                <PixieAssistant character={character || {}} session={session} fairyData={gameData?.fairyData} />
              )}
            </>
          ) : (
            <div className="max-w-2xl mx-auto p-8 mt-12 bg-[#2a1313] rounded-2xl border-2 border-red-900/50 shadow-2xl text-center animate-fade-in-up">
              <Lock size={64} className="text-red-500 mb-6 mx-auto" />
              <h2 className="text-3xl font-serif text-red-100 mb-4">Savoir sous le Sceau du Silence</h2>
              <p className="text-red-200/80 mb-8 italic">Seul un Docte peut vous y initier.</p>
              <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white">Retourner à l'accueil</button>
            </div>
          )
        } />

        <Route path="/validations" element={<ValidationsPendantes session={session} onBack={() => navigate('/encyclopedia')} />} />
        <Route path="/account" element={<AccountSettings session={session} userProfile={userProfile} onUpdateProfile={refreshUserProfile} onBack={() => navigate('/')} />} />
        <Route path="/admin_dashboard" element={<AdminDashboard session={session} onBack={() => navigate('/')} />} />
        
        <Route path="/cercles" element={
          <CerclesDashboard
            session={session}
            onBack={() => navigate('/')}
            onViewCharacter={(c) => {
              dispatchCharacter({ type: 'LOAD_CHARACTER', payload: c, gameData });
              setIsReadOnly(true);
              navigate('/creator', { state: { legitAccess: true } }); // ✨ LE FIX ABSOLU ÉTAIT ICI !
            }}
          />
        } />
        
        <Route path="/mes_propositions" element={<MesPropositions session={session} onBack={() => navigate('/encyclopedia')} />} />
        <Route path="/bureau_anomalies" element={<RegistrePage onBack={() => navigate('/')} userProfile={userProfile} />} />
        <Route path="/creator" element={<CharacterCreator session={session} userProfile={userProfile} />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}