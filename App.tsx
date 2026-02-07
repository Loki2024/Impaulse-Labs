import React, { useState, useEffect } from 'react';
import BottomNav from './components/BottomNav';
import { View, UserSettings } from './types';
import OnboardingGoals from './views/OnboardingGoals';
import OnboardingIncome from './views/OnboardingIncome';
import Dashboard from './views/Dashboard';
import Envelopes from './views/Envelopes';
import AddPurchase from './views/AddPurchase';
import Settings from './views/Settings';

const App: React.FC = () => {
  // Navigation State
  const [currentView, setCurrentView] = useState<View>(View.ONBOARDING_GOALS);
  
  // User Data State
  const [userSettings, setUserSettings] = useState<UserSettings>({
    currency: '$',
    hourlyMode: false,
    hourlyRate: 25,
    yearlySalary: 52000,
    investmentReturnRate: 10,
    retirementAge: 65,
    birthday: '2004-01-01',
    incomeMode: 'hourly'
  });

  // Derived state or shared logic could go here

  const renderView = () => {
    switch (currentView) {
      case View.ONBOARDING_GOALS:
        return <OnboardingGoals onNext={() => setCurrentView(View.ONBOARDING_INCOME)} />;
      case View.ONBOARDING_INCOME:
        return <OnboardingIncome 
          settings={userSettings} 
          updateSettings={setUserSettings}
          onNext={() => setCurrentView(View.HOME)} 
        />;
      case View.HOME:
        return <Dashboard settings={userSettings} />;
      case View.ENVELOPES:
        return <Envelopes settings={userSettings} />;
      case View.ADD_PURCHASE:
        return <AddPurchase settings={userSettings} />;
      case View.SETTINGS:
        return <Settings settings={userSettings} updateSettings={setUserSettings} />;
      default:
        return <Dashboard settings={userSettings} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F9F6] text-gray-900 pb-20 safe-area-top">
      {/* Content Area */}
      <main className="w-full h-full">
        {renderView()}
      </main>

      {/* Navigation */}
      <BottomNav currentView={currentView} setView={setCurrentView} />
    </div>
  );
};

export default App;
