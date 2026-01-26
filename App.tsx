
import React, { useState, useEffect } from 'react';
import { AppState } from './types';
import AgeGate from './components/AgeGate';
import Loading from './components/Loading';
import Profile from './components/Profile';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppState>(AppState.AGE_GATE);

  const handleAgeConfirm = () => {
    setCurrentScreen(AppState.LOADING);
  };

  useEffect(() => {
    if (currentScreen === AppState.LOADING) {
      const timer = setTimeout(() => {
        setCurrentScreen(AppState.PROFILE);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  return (
    <div className="min-h-screen">
      {currentScreen === AppState.AGE_GATE && (
        <AgeGate onConfirm={handleAgeConfirm} />
      )}
      {currentScreen === AppState.LOADING && (
        <Loading />
      )}
      {currentScreen === AppState.PROFILE && (
        <Profile />
      )}
    </div>
  );
};

export default App;
