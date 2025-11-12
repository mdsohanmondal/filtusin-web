import { HeartPulse } from 'lucide-react';
import React from 'react';

const DiscoverCards = () => {
  return (
    <div className="w-72 shrink-0 rounded-2xl bg-black p-6 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <HeartPulse className="text-[#95CD04] w-6 h-6" />
        <h3 className="text-xl font-semibold tracking-wide">Cardio Training</h3>
      </div>

      {/* Content */}
      <div className="text-gray-300 mb-6 leading-relaxed text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        exercitationem commodi laborum deserunt fuga velit dolores magnam
      </div>

      {/* Button */}
      <button className="py-1 px-4 bg-[#95CD04] rounded-full font-medium text-black transition-colors duration-200 self-end">
        See plan
      </button>
    </div>
  );
};

export default DiscoverCards;
