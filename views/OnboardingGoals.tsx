import React, { useState } from 'react';
import { Icons } from '../components/Icons';
import { Goal } from '../types';

interface Props {
  onNext: () => void;
}

const OnboardingGoals: React.FC<Props> = ({ onNext }) => {
  const [goals, setGoals] = useState<Goal[]>([
    { id: '1', title: 'Travel & Experiences', icon: '🏝️', selected: true },
    { id: '2', title: 'Big Purchase', icon: '🚙', selected: false },
    { id: '3', title: 'Home', icon: '🏠', selected: false },
    { id: '4', title: 'Emergency Fund', icon: '🐖', selected: false },
    { id: '5', title: 'Retirement', icon: '💵', selected: false },
    { id: '6', title: 'Family & Life Events', icon: '💍', selected: false },
  ]);

  const toggleGoal = (id: string) => {
    setGoals(goals.map(g => g.id === id ? { ...g, selected: !g.selected } : g));
  };

  return (
    <div className="p-6 h-full flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center mb-6 pt-2">
        <button className="p-2 -ml-2 text-gray-800">
           <Icons.ArrowLeft size={24} />
        </button>
        <div className="flex-1 h-1 bg-gray-200 rounded-full mx-4 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[85%] bg-black rounded-full"></div>
        </div>
      </div>

      <h1 className="text-3xl font-bold leading-tight mb-8">
        What are the top things you're saving for?
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 flex-1 overflow-y-auto no-scrollbar pb-8">
        {goals.map((goal) => (
          <button
            key={goal.id}
            onClick={() => toggleGoal(goal.id)}
            className={`
              relative flex flex-col items-center justify-between p-4 rounded-[20px] aspect-square transition-all
              ${goal.selected ? 'bg-[#E1EFFE] border-2 border-transparent' : 'bg-white border border-transparent'}
            `}
          >
             {/* Text Top Left aligned */}
             <span className="text-left w-full font-bold text-lg leading-tight text-gray-900">
                {goal.title}
             </span>
             
             {/* Icon Centered/Bottom */}
             <div className="text-5xl mt-2 drop-shadow-md transform transition-transform hover:scale-110">
                {goal.icon}
             </div>
          </button>
        ))}
      </div>

      <button 
        onClick={onNext}
        className="w-full bg-gray-500 hover:bg-black text-white py-4 rounded-xl font-bold text-lg mt-4 transition-colors mb-4"
      >
        Next
      </button>
    </div>
  );
};

export default OnboardingGoals;
