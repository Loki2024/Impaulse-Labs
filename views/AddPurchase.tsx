import React, { useState, useRef } from 'react';
import { Icons } from '../components/Icons';
import { UserSettings } from '../types';
import { analyzeProductImage, getImpulseAdvice } from '../services/geminiService';

interface Props {
  settings: UserSettings;
}

const AddPurchase: React.FC<Props> = ({ settings }) => {
  const [price, setPrice] = useState<string>('50');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLoading(true);
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        // Strip prefix for Gemini
        const base64Data = base64String.split(',')[1];
        
        const result = await analyzeProductImage(base64Data);
        if (result) {
          setPrice(result.estimatedPrice.toString());
          alert(`Detected: ${result.productName} (${result.category})`);
        } else {
            alert("Could not analyze image.");
        }
        setLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col items-center justify-center p-6 pb-20">
      
      {/* Decorative Floating Elements (Absolute) */}
      <div className="absolute top-20 left-10 text-6xl opacity-80 animate-bounce delay-100">
         <div className="bg-blue-200 p-2 rounded-full w-16 h-16 flex items-center justify-center border-4 border-blue-100 shadow-lg">
             <Icons.Clock className="text-blue-500" />
         </div>
      </div>
      <div className="absolute top-16 right-16 text-6xl opacity-80 animate-pulse">
         <div className="bg-green-200 p-2 rounded-lg transform rotate-12 w-20 h-10 flex items-center justify-center border-2 border-green-300 shadow-lg">
             <span className="text-2xl">💵</span>
         </div>
      </div>
      <div className="absolute bottom-40 left-12 text-6xl opacity-80">
          <div className="bg-yellow-200 p-4 rounded-full w-24 h-24 flex items-center justify-center border-4 border-yellow-100 shadow-xl">
             <span className="text-4xl text-yellow-600 font-bold">$</span>
          </div>
      </div>
      <div className="absolute bottom-32 right-10 text-6xl opacity-80 animate-bounce">
          <div className="text-6xl transform -rotate-12">🐖</div>
      </div>


      {/* Main Content */}
      <h1 className="text-3xl font-extrabold mb-8 z-10 text-center uppercase tracking-wide">PURCHASE PRICE</h1>
      
      <div className="w-full max-w-xs z-10">
         <div className="relative">
             <input 
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-white text-center text-4xl font-bold py-6 rounded-2xl shadow-sm border border-transparent focus:border-black outline-none mb-6"
             />
             
             {/* Camera Trigger */}
             <button 
                onClick={() => fileInputRef.current?.click()}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 -mt-3 text-gray-400 hover:text-black"
             >
                {loading ? <span className="text-xs">...</span> : <Icons.Camera size={24} />}
             </button>
             <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                capture="environment"
                onChange={handleImageUpload}
             />
         </div>

         <button 
            className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg mb-6 shadow-xl active:scale-95 transition-transform"
            onClick={async () => {
                const advice = await getImpulseAdvice("Item", parseFloat(price), settings.hourlyRate);
                alert(advice);
            }}
         >
             Submit
         </button>

         <button className="w-full flex items-center justify-center space-x-2 bg-gray-400 text-white py-4 rounded-xl font-bold text-sm shadow-md">
             <div className="bg-gray-600 p-1 rounded">
                 <Icons.ChevronRight className="text-white" size={16} />
             </div>
             <span>SHOP BLOCK</span>
         </button>
      </div>
    </div>
  );
};

export default AddPurchase;
