
import React, { useState } from 'react';
import { Calendar, ChevronRight, XCircle } from 'lucide-react';

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

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    if (val.length <= 4) {
      setFormData({ ...formData, year: val });
    }
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    if (val.length <= 4) {
      setFormData({ ...formData, age: val });
    }
  };

  const handleFinalValidation = () => {
    const { age, month, year } = formData;
    const ageNum = parseInt(age);
    const yearNum = parseInt(year);
    const currentYear = new Date().getFullYear();

    if (!age || !month || !year) {
      setError('Preencha todos os campos.');
      return;
    }

    if (year.length !== 4) {
      setError('O ano deve ter 4 dígitos.');
      return;
    }

    if (ageNum < 18 || ageNum > 100) {
      setError('A idade permitida é entre 18 e 100 anos.');
      return;
    }

    // Validação de consistência básica entre ano e idade
    if (currentYear - yearNum < 17 || currentYear - yearNum > 101) {
       setError('O ano de nascimento não condiz com a idade.');
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
            Você informou ser menor de idade. Este conteúdo é restrito a adultos e não pode ser acessado.
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
    <div className="fixed inset-0 bg-[#0091ff] flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] w-full max-w-[400px] overflow-hidden transform transition-all animate-in zoom-in duration-300">
        
        {/* Step 1: Choice */}
        {step === 'CHOICE' && (
          <div className="p-8 sm:p-10 animate-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10 text-center">
              <h1 className="text-[#0091ff] text-5xl font-black tracking-tighter mb-4 italic">OnlyFans</h1>
              <div className="h-1 w-16 bg-blue-50 mx-auto rounded-full"></div>
            </div>

            <h2 className="text-xl font-black text-gray-900 mb-6 text-center uppercase tracking-tight leading-tight">
              Verificação de<br/>Segurança Exclusiva
            </h2>

            <div className="space-y-4">
              <button
                onClick={() => setStep('FORM')}
                className="w-full bg-[#0091ff] text-white font-black py-5 px-6 rounded-2xl flex items-center justify-center gap-3 group hover:bg-blue-600 transition-all shadow-lg active:scale-[0.98]"
              >
                SOU MAIOR DE IDADE
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setStep('BLOCKED')}
                className="w-full bg-white text-gray-400 font-bold py-5 px-6 rounded-2xl border-2 border-gray-100 hover:bg-gray-50 transition-all"
              >
                SOU MENOR DE IDADE
              </button>
            </div>

            <p className="mt-8 text-[10px] text-gray-400 text-center font-medium leading-relaxed uppercase tracking-wider">
              Acesso restrito a maiores de 18 anos
            </p>
          </div>
        )}

        {/* Step 2: Form */}
        {step === 'FORM' && (
          <div className="p-8 sm:p-10 relative animate-in slide-in-from-right-4 duration-500">
            <button 
              onClick={() => setStep('CHOICE')}
              className="absolute top-6 left-6 text-gray-300 hover:text-gray-500 transition-colors text-sm font-bold flex items-center gap-1"
            >
              ← Voltar
            </button>

            <div className="text-center mt-6 mb-8">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#0091ff]">
                <Calendar size={32} />
              </div>
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">Confirme seus dados</h2>
              <p className="text-gray-400 text-xs mt-2 font-medium">Insira sua data de nascimento real</p>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Idade</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="21"
                    maxLength={4}
                    value={formData.age}
                    onChange={handleAgeChange}
                    className="w-full bg-gray-50 border-2 border-gray-50 focus:border-[#0091ff] focus:bg-white rounded-2xl py-4 px-5 text-xl font-bold text-gray-800 outline-none transition-all placeholder:text-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Mês</label>
                  <div className="relative">
                    <select
                      value={formData.month}
                      onChange={(e) => setFormData({...formData, month: e.target.value})}
                      className="w-full bg-gray-50 border-2 border-gray-50 focus:border-[#0091ff] focus:bg-white rounded-2xl py-4 px-5 text-sm font-bold text-gray-800 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Mês</option>
                      {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'].map((m, i) => (
                        <option key={m} value={i+1}>{m}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Ano de Nascimento</label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="2000"
                  maxLength={4}
                  value={formData.year}
                  onChange={handleYearChange}
                  className="w-full bg-gray-50 border-2 border-gray-50 focus:border-[#0091ff] focus:bg-white rounded-2xl py-4 px-5 text-xl font-bold text-gray-800 outline-none transition-all placeholder:text-gray-200"
                />
              </div>

              {error && (
                <div className="bg-red-50 text-red-500 text-[10px] font-bold p-3 rounded-xl text-center animate-pulse">
                  {error}
                </div>
              )}

              <button
                onClick={handleFinalValidation}
                className="w-full bg-[#0091ff] text-white font-black py-5 rounded-2xl text-sm mt-4 shadow-[0_10px_20px_rgba(0,145,255,0.3)] hover:bg-blue-600 active:scale-[0.97] transition-all uppercase tracking-widest"
              >
                CONFIRMAR ACESSO
              </button>
            </div>
          </div>
        )}

      </div>
      
      {/* Background Decorative Element */}
      <div className="fixed inset-0 pointer-events-none border-[1px] border-white/10 m-4 sm:m-10 rounded-[3rem]"></div>
    </div>
  );
};

export default AgeGate;
