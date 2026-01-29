
import React, { useState } from 'react';
import { ShieldAlert, ChevronRight, XCircle, Calendar } from 'lucide-react';

interface AgeGateProps {
  onConfirm: () => void;
}

type Step = 'CHOICE' | 'FORM' | 'BLOCKED';

const AgeGate: React.FC<AgeGateProps> = ({ onConfirm }) => {
  const [step, setStep] = useState<Step>('CHOICE');
  const [formData, setFormData] = useState({
    age: '',
    month: '',
    year: ''
  });
  const [error, setError] = useState<string | null>(null);

  const handleFinalValidation = () => {
    const { age, month, year } = formData;
    const ageNum = parseInt(age);
    const yearNum = parseInt(year);
    const currentYear = new Date().getFullYear();

    if (!age || !month || !year) {
      setError('Preencha todos os campos corretamente.');
      return;
    }

    // Validação lógica simples: idade deve bater com o ano e ser >= 18
    if (ageNum < 18 || (currentYear - yearNum) < 18) {
      setStep('BLOCKED');
      return;
    }

    onConfirm();
  };

  if (step === 'BLOCKED') {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center p-6 z-50 animate-in fade-in duration-500">
        <div className="text-center max-w-xs">
          <XCircle size={80} className="text-red-500 mx-auto mb-6" />
          <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase">Acesso Negado</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Nossa plataforma é exclusiva para adultos. Você não cumpre os requisitos de idade para visualizar este conteúdo.
          </p>
          <button 
            onClick={() => window.location.href = 'https://google.com'}
            className="w-full bg-gray-100 text-gray-600 font-bold py-4 rounded-full hover:bg-gray-200 transition-all"
          >
            SAIR DA PÁGINA
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#0091ff] flex items-center justify-center p-6 z-50">
      <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 max-w-sm w-full shadow-2xl relative overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
        
        {/* Step 1: Choice */}
        {step === 'CHOICE' && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8 text-center">
              <h1 className="text-[#0091ff] text-4xl font-black tracking-tighter mb-2">OnlyFans</h1>
              <div className="h-1 w-12 bg-gray-100 mx-auto rounded-full"></div>
            </div>

            <h2 className="text-xl font-black text-gray-900 mb-4 text-center uppercase tracking-tight">
              VOCÊ TEM MAIS DE 18 ANOS?
            </h2>

            <div className="space-y-4">
              <button
                onClick={() => setStep('FORM')}
                className="w-full bg-[#0091ff] text-white font-black py-5 px-6 rounded-2xl flex items-center justify-between group hover:bg-blue-600 transition-all shadow-lg active:scale-95"
              >
                <span>SIM, SOU MAIOR DE IDADE</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setStep('BLOCKED')}
                className="w-full bg-gray-50 text-gray-400 font-bold py-5 px-6 rounded-2xl border-2 border-gray-100 hover:bg-gray-100 transition-all active:scale-95"
              >
                NÃO, SOU MENOR
              </button>
            </div>

            <p className="mt-8 text-[10px] text-gray-400 text-center font-medium leading-relaxed">
              Ao entrar, você declara estar ciente de que o conteúdo a seguir é para adultos e concorda com os nossos termos.
            </p>
          </div>
        )}

        {/* Step 2: Form */}
        {step === 'FORM' && (
          <div className="animate-in slide-in-from-right-4 duration-500">
            <button 
              onClick={() => setStep('CHOICE')}
              className="absolute top-6 left-6 text-gray-300 hover:text-gray-500 transition-colors"
            >
              ← Voltar
            </button>

            <div className="text-center mt-4 mb-8">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#0091ff]">
                <Calendar size={32} />
              </div>
              <h2 className="text-xl font-black text-gray-900 uppercase">Confirme seus dados</h2>
              <p className="text-gray-400 text-xs mt-1">Insira sua data de nascimento real</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">Idade</label>
                  <input
                    type="number"
                    placeholder="21"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-gray-100 focus:border-[#0091ff] rounded-2xl py-3 px-4 text-lg font-bold outline-none transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">Mês</label>
                  <select
                    value={formData.month}
                    onChange={(e) => setFormData({...formData, month: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-gray-100 focus:border-[#0091ff] rounded-2xl py-3 px-4 text-sm font-bold outline-none transition-all appearance-none"
                  >
                    <option value="">Mês</option>
                    {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'].map((m, i) => (
                      <option key={m} value={i+1}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">Ano de Nascimento</label>
                <input
                  type="number"
                  placeholder="2000"
                  value={formData.year}
                  onChange={(e) => setFormData({...formData, year: e.target.value})}
                  className="w-full bg-gray-50 border-2 border-gray-100 focus:border-[#0091ff] rounded-2xl py-3 px-4 text-lg font-bold outline-none transition-all"
                />
              </div>

              {error && (
                <p className="text-red-500 text-[10px] font-bold text-center mt-2 animate-pulse">
                  {error}
                </p>
              )}

              <button
                onClick={handleFinalValidation}
                className="w-full bg-[#0091ff] text-white font-black py-4 rounded-full text-sm mt-4 shadow-xl hover:bg-blue-600 active:scale-95 transition-all uppercase tracking-widest"
              >
                CONFIRMAR ACESSO
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AgeGate;
