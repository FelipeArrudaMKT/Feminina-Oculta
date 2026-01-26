
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="relative mb-6">
        <div className="w-20 h-20 border-4 border-[#0091ff] border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-[#0091ff] rounded-full flex items-center justify-center text-white font-bold text-xl">
            OF
          </div>
        </div>
      </div>
      
      <h2 className="text-[#0091ff] text-2xl font-bold mb-2">OnlyFans</h2>
      <p className="text-gray-400 font-medium animate-pulse">
        Carregando experiência exclusiva...
      </p>
    </div>
  );
};

export default Loading;
