import React from 'react';
import { Icons } from '../components/Icons';
import { UserSettings } from '../types';

interface Props {
  settings: UserSettings;
  updateSettings: (s: UserSettings) => void;
  onNext: () => void;
}

const OnboardingIncome: React.FC<Props> = ({ settings, updateSettings, onNext }) => {
  return (
    <div className="p-6 h-full flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center mb-6 pt-2">
        <button className="p-2 -ml-2 text-gray-800">
           <Icons.ArrowLeft size={24} />
        </button>
        <div className="flex-1 h-1 bg-gray-200 rounded-full mx-4 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[40%] bg-black rounded-full"></div>
        </div>
      </div>

      <h1 className="text-3xl font-bold leading-tight mb-4">
        How much do you make?
      </h1>
      
      <p className="text-gray-500 mb-6 leading-relaxed">
        This helps personalize your BuyBye tracker. <br/>
        <span className="text-blue-500 underline cursor-pointer">Self-employed or commission based?</span><br/>
        <span className="text-blue-500 underline cursor-pointer">You can switch to 'Hourly Mode' later</span>
      </p>

      {/* Toggle */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => updateSettings({...settings, incomeMode: 'salary'})}
          className={`flex-1 py-3 rounded-xl font-bold transition-colors ${
            settings.incomeMode === 'salary' ? 'bg-[#A7F3D0] text-teal-900' : 'bg-gray-100 text-gray-500'
          }`}
        >
          Salary
        </button>
        <button
          onClick={() => updateSettings({...settings, incomeMode: 'hourly'})}
          className={`flex-1 py-3 rounded-xl font-bold transition-colors ${
            settings.incomeMode === 'hourly' ? 'bg-[#99F6E4] text-teal-900' : 'bg-gray-100 text-gray-500'
          }`}
        >
          Hourly
        </button>
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder="$25/hr"
        className="w-full p-4 text-center rounded-xl border border-gray-300 text-xl font-bold mb-6 focus:outline-none focus:border-black"
        value={settings.hourlyRate ? `$${settings.hourlyRate}/hr` : ''}
        onChange={(e) => {
            const val = parseFloat(e.target.value.replace(/[^0-9.]/g, ''));
            updateSettings({...settings, hourlyRate: val || 0})
        }}
      />

      <button 
        onClick={onNext}
        className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg mb-3 shadow-lg"
      >
        Try ${settings.hourlyRate || 0}/hr
      </button>

      <p className="text-center text-gray-400 text-sm">
        You can change this later
      </p>

      <div className="flex-1"></div>

      <button 
        onClick={onNext}
        className="w-full bg-gray-400 hover:bg-gray-500 text-white py-4 rounded-xl font-bold text-lg mb-4 transition-colors"
      >
        Next
      </button>
    </div>
  );
};

export default OnboardingIncome;
