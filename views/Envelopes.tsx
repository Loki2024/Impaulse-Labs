import React from 'react';
import { Icons, EnvelopeIllustration } from '../components/Icons';
import { UserSettings } from '../types';

interface Props {
  settings: UserSettings;
}

const Envelopes: React.FC<Props> = ({ settings }) => {
  return (
    <div className="p-6 max-w-md mx-auto pt-10 pb-20 h-full flex flex-col">
       {/* Header */}
       <div className="flex justify-between items-center mb-6">
        {/* Period Selector */}
        <div className="flex bg-white rounded-full p-1 shadow-sm">
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-bold">1-year</button>
            <button className="text-gray-400 px-4 py-2 text-sm font-bold hover:text-black">6-month</button>
            <button className="text-gray-400 px-4 py-2 text-sm font-bold hover:text-black">3-month</button>
        </div>
        <Icons.Clock className="text-gray-400" size={24} />
      </div>

      {/* Main Stats Card */}
      <div className="bg-white rounded-3xl p-6 mb-6 shadow-soft relative overflow-visible">
        <h2 className="text-gray-400 font-bold text-xs tracking-wide uppercase mb-1">MONEY SAVED</h2>
        <div className="flex items-baseline mb-4">
            <span className="text-4xl font-extrabold text-black mr-2">$0</span>
            <span className="text-2xl font-bold text-gray-300">/$5,050</span>
        </div>

        {/* Progress Bar */}
        <div className="h-2 w-full bg-gray-100 rounded-full mb-6">
            <div className="h-full bg-black rounded-full w-[2%]"></div>
        </div>

        <h2 className="text-gray-400 font-bold text-xs tracking-wide uppercase">WORK TIME SAVED</h2>
        
        {/* Character Illustration (Absolute Right) */}
        <div className="absolute -right-4 bottom-4 w-24 h-24">
             {/* Placeholder for the Money Character with Laptop */}
             <div className="text-6xl drop-shadow-md transform -rotate-6">💸</div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center relative">
         {/* Envelopes Illustration */}
         <EnvelopeIllustration />
         
         {/* Controls below envelopes */}
         <div className="w-full flex items-center justify-between px-8 mt-4">
            <div className="flex flex-col items-center text-gray-400">
                <div className="w-10 h-10 border-2 border-gray-200 rounded-xl flex items-center justify-center mb-1">
                    <Icons.Archive size={18} />
                </div>
                <span className="text-xs font-bold">Archive</span>
            </div>

            <div className="flex flex-col items-center">
                 <span className="text-orange-500 text-2xl mb-1">🔥</span>
                 <span className="font-bold text-sm">0/100 Envelopes</span>
            </div>

            <div className="flex flex-col items-center text-gray-400">
                <div className="w-10 h-10 border-2 border-gray-200 rounded-xl flex items-center justify-center mb-1">
                    <Icons.Shuffle size={18} />
                </div>
                <span className="text-xs font-bold">Shuffle</span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Envelopes;
