
import React from 'react';
import { Plan } from '../types';

const plans: Plan[] = [
  {
    id: 'vip-telegram',
    name: 'ASSINATURA AO MEU VIP AQUI',
    price: 'Acesso Imediato',
    period: '',
    highlight: true,
    checkoutUrl: 'https://t.me/mirellaviponlyy_bot'
  },
  {
    id: 'previas-grupo',
    name: 'GRUPO DE PRÉVIAS',
    price: 'Grátis',
    period: '',
    checkoutUrl: 'https://t.me/+j-Eudm4p7pw4Zjkx'
  }
];

const SubscriptionPlans: React.FC = () => {
  const handleSubscribe = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="px-4 mb-6">
      <div className="bg-gray-50 rounded-3xl p-5 border border-gray-100">
        <h3 className="text-gray-400 text-[10px] font-black mb-4 tracking-[0.2em] uppercase text-center">Opções de Acesso</h3>
        <div className="space-y-4">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              onClick={() => handleSubscribe(plan.checkoutUrl)}
              className={`
                group relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all cursor-pointer overflow-hidden
                ${plan.highlight ? 'border-[#0091ff] bg-blue-50/20 shadow-lg' : 'border-white bg-white hover:border-gray-200'}
              `}
            >
              <span className={`text-sm font-black mb-1 text-center ${plan.highlight ? 'text-[#0091ff]' : 'text-gray-700'}`}>
                {plan.name}
              </span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                {plan.price}
              </span>
              
              <div className={`mt-4 w-full py-3 rounded-full font-black text-xs text-center transition-all shadow-md uppercase tracking-widest ${
                plan.highlight ? 'bg-[#0091ff] text-white' : 'bg-gray-900 text-white'
              }`}>
                {plan.id === 'previas-grupo' ? 'ENTRAR NO GRUPO' : 'ASSINAR AGORA'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
