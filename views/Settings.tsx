import React from 'react';
import { Icons } from '../components/Icons';
import { UserSettings } from '../types';

interface Props {
  settings: UserSettings;
  updateSettings: (s: UserSettings) => void;
}

const Settings: React.FC<Props> = ({ settings, updateSettings }) => {
  return (
    <div className="p-6 max-w-md mx-auto pt-10 pb-24 overflow-y-auto no-scrollbar">
       <div className="flex justify-between items-start mb-6">
           <div>
               <p className="text-gray-400 text-xs font-bold mb-2">Scroll for more currencies →</p>
               <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-2">
                   <button className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">$</button>
                   <button className="w-12 h-12 border border-gray-200 text-gray-400 rounded-xl flex items-center justify-center font-bold flex-shrink-0">£</button>
                   <button className="w-12 h-12 border border-gray-200 text-gray-400 rounded-xl flex items-center justify-center font-bold flex-shrink-0">€</button>
                   <button className="w-16 h-12 border border-gray-200 text-gray-400 rounded-xl flex items-center justify-center font-bold flex-shrink-0">CHF</button>
               </div>
           </div>
           <Icons.Settings className="text-gray-400" />
       </div>

       {/* Hourly Mode Toggle */}
       <div className="bg-white p-5 rounded-2xl flex items-center justify-between mb-6 shadow-sm">
           <span className="font-bold text-lg">Hourly Mode</span>
           <div 
             className={`w-14 h-8 rounded-full p-1 cursor-pointer transition-colors ${settings.hourlyMode ? 'bg-black' : 'bg-gray-200'}`}
             onClick={() => updateSettings({...settings, hourlyMode: !settings.hourlyMode})}
           >
                <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${settings.hourlyMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
           </div>
       </div>

       {/* Mode Select */}
       <div className="flex space-x-4 mb-4">
           <button className="flex-1 py-4 border border-gray-200 rounded-2xl text-gray-300 font-bold text-sm bg-transparent">
               Yearly Salary
           </button>
           <button className="flex-1 py-4 bg-black text-white rounded-2xl font-bold text-sm">
               Hourly Rate
           </button>
       </div>

       {/* Rate Input */}
       <div className="bg-white rounded-2xl p-4 mb-6 border border-gray-100 shadow-sm">
           <input 
             type="number" 
             value={settings.hourlyRate}
             onChange={(e) => updateSettings({...settings, hourlyRate: parseFloat(e.target.value)})}
             className="w-full text-lg font-bold outline-none"
           />
       </div>

       {/* Investment Return */}
       <div className="mb-6">
           <div className="flex justify-between mb-2">
               <span className="font-bold text-xs tracking-wider uppercase">INVESTMENT RETURN RATE %</span>
               <Icons.Info size={16} className="text-gray-400" />
           </div>
           <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                <input 
                    type="number" 
                    value={settings.investmentReturnRate}
                    onChange={(e) => updateSettings({...settings, investmentReturnRate: parseFloat(e.target.value)})}
                    className="w-full text-lg font-bold outline-none"
                />
           </div>
       </div>

        {/* Retirement Age */}
        <div className="mb-8">
           <div className="flex justify-center mb-2">
               <span className="font-bold text-xs tracking-wider uppercase">RETIREMENT AGE</span>
           </div>
           <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                <input 
                    type="number" 
                    value={settings.retirementAge}
                    onChange={(e) => updateSettings({...settings, retirementAge: parseFloat(e.target.value)})}
                    className="w-full text-lg font-bold outline-none"
                />
           </div>
       </div>

       {/* Birthday */}
       <div className="text-center mb-8">
           <span className="font-bold text-xs tracking-wider uppercase block mb-2">BIRTHDAY</span>
           <span className="text-gray-400 underline decoration-gray-300 underline-offset-4 cursor-pointer">
               {settings.birthday}
           </span>
       </div>

       <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg mb-4">
           Save Settings
       </button>
    </div>
  );
};

export default Settings;
