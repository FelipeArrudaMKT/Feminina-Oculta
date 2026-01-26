
import React from 'react';

interface AgeGateProps {
  onConfirm: () => void;
}

const AgeGate: React.FC<AgeGateProps> = ({ onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-[#0091ff] flex items-center justify-center p-6 z-50">
      <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full shadow-2xl text-center transform transition-all animate-in fade-in zoom-in duration-300">
        <div className="mb-6 flex justify-center">
           <h1 className="text-[#0091ff] text-3xl font-extrabold tracking-tight">OnlyFans</h1>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
          Confirmação de idade
        </h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Este ambiente é destinado exclusivamente para maiores de 18 anos. Por favor, confirme sua idade para continuar.
        </p>
        
        <button
          onClick={onConfirm}
          className="w-full bg-[#0091ff] text-white font-bold py-4 px-6 rounded-full text-lg hover:bg-blue-600 transition-colors shadow-lg active:scale-95 duration-150"
        >
          TENHO MAIS DE 18 ANOS
        </button>
      </div>
    </div>
  );
};

export default AgeGate;
