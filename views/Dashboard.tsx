import React from 'react';
import { Icons } from '../components/Icons';
import { UserSettings } from '../types';

interface Props {
  settings: UserSettings;
}

const Dashboard: React.FC<Props> = ({ settings }) => {
  return (
    <div className="p-6 max-w-md mx-auto pt-10 pb-20 overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="flex justify-end mb-6">
        <Icons.Clock className="text-gray-500" size={24} />
      </div>

      {/* Money Saved Card */}
      <div className="bg-white rounded-3xl p-6 mb-4 shadow-soft flex justify-between items-center">
        <div>
          <h2 className="text-gray-400 font-bold text-sm tracking-wide mb-1 uppercase">MONEY SAVED</h2>
          <div className="text-3xl font-extrabold text-black">$28</div>
        </div>
        <div className="text-teal-400">
           {/* Simple Money Bill Icon */}
           <div className="w-10 h-6 border-2 border-teal-300 rounded flex items-center justify-center bg-teal-50">
             <div className="w-4 h-4 rounded-full border border-teal-300"></div>
           </div>
        </div>
      </div>

      {/* Work Time Saved Card */}
      <div className="bg-white rounded-3xl p-6 mb-8 shadow-soft flex justify-between items-center">
        <div>
          <h2 className="text-gray-400 font-bold text-sm tracking-wide mb-1 uppercase">WORK TIME SAVED</h2>
          <div className="text-2xl font-extrabold text-black">1 hour, 7 minutes</div>
        </div>
        <div className="text-teal-400">
           <Icons.Clock className="text-teal-300" size={28} />
        </div>
      </div>

      {/* Illustration Area */}
      <div className="relative mb-8 h-48 w-full flex justify-center items-end">
        {/* Silhouette Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
             {/* Using SVG for the silhouette shape roughly */}
             <svg viewBox="0 0 200 100" className="w-full h-full text-gray-500 fill-current">
                <path d="M10,90 Q30,70 50,80 T90,60 L110,40 L130,60 L150,50 L180,80 L190,90 Z" />
                <rect x="80" y="40" width="40" height="40" />
             </svg>
        </div>
        <div className="absolute top-0 right-10 text-gray-400">
           <Icons.Plane size={24} className="transform -rotate-12" />
        </div>

        {/* Money Stacks (simulated with emojis/css) */}
        <div className="z-10 text-6xl flex items-end -space-x-4 drop-shadow-xl">
           <span className="transform translate-y-2 z-10">💵</span>
           <span className="transform -translate-y-2 z-20">💰</span>
           <span className="transform translate-y-0 z-0">💵</span>
        </div>
      </div>

      {/* Investments Card */}
      <div className="bg-white rounded-3xl p-8 mb-4 shadow-soft text-center relative">
        <h2 className="text-gray-500 font-bold text-sm mb-2">Your investments could grow to</h2>
        <div className="text-4xl font-extrabold text-black mb-1">$1,686</div>
        
        <div className="absolute right-6 bottom-6 text-teal-300">
            <Icons.Briefcase size={24} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
