import React from 'react';
import { Icons } from './Icons';
import { View } from '../types';

interface BottomNavProps {
  currentView: View;
  setView: (view: View) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, setView }) => {
  const navItemClass = (isActive: boolean) => 
    `flex items-center justify-center p-2 rounded-full transition-colors ${isActive ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`;

  // Hide nav on onboarding
  if (currentView === View.ONBOARDING_GOALS || currentView === View.ONBOARDING_INCOME) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-safe-bottom safe-area-bottom z-50">
      <div className="flex justify-around items-center h-16 px-6">
        <button 
          onClick={() => setView(View.ENVELOPES)}
          className={navItemClass(currentView === View.ENVELOPES)}
        >
          <Icons.Mail size={28} strokeWidth={2} />
        </button>

        <button 
          onClick={() => setView(View.HOME)}
          className={navItemClass(currentView === View.HOME)}
        >
          <Icons.Home size={28} strokeWidth={2} />
        </button>

        <button 
          onClick={() => setView(View.ADD_PURCHASE)}
          className={navItemClass(currentView === View.ADD_PURCHASE)}
        >
          <Icons.Plus size={28} strokeWidth={2} />
        </button>

        <button 
          onClick={() => setView(View.SETTINGS)}
          className={navItemClass(currentView === View.SETTINGS)}
        >
          <Icons.User size={28} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
