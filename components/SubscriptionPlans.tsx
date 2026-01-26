
import React from 'react';
import { Plan } from '../types';

const plans: Plan[] = [
  {
    id: 'weekly',
    name: 'PLANO SEMANAL',
    price: 'R$9,90',
    period: '/ semana',
    checkoutUrl: 'https://pay.kirvano.com/37ebd6fc-48ea-458b-8ce0-4e7183318800'
  },
  {
    id: 'monthly',
    name: 'PLANO MENSAL',
    price: 'R$19,90',
    period: '/ mês',
    checkoutUrl: 'https://pay.kirvano.com/a4b43425-335c-4e5f-8a5f-0818b56e95aa'
  },
  {
    id: 'quarterly',
    name: '3 MESES (15% OFF)',
    price: 'R$39,90',
    period: '/ total',
    tag: 'Mais popular',
    highlight: true,
    checkoutUrl: 'https://pay.kirvano.com/96b31e0b-2fc4-4029-bb4a-89fc2d8272c7'
  },
  {
    id: 'vip',
    name: 'VITALÍCIO (25% OFF)',
    price: 'R$69,90',
    period: '',
    tag: 'Melhor custo-benefício',
    checkoutUrl: 'https://pay.kirvano.com/0a3766cb-39fe-4766-8c56-8d68b2364e94'
  }
];

const SubscriptionPlans: React.FC = () => {
  const handleSubscribe = (url: string) => {
    // Abrir em uma nova aba é mais seguro para checkouts de terceiros,
    // evitando bloqueios de iframe ou problemas de navegação no Vercel/Ambientes de teste.
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="px-4 mb-6">
      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
        <h3 className="text-gray-400 text-xs font-bold mb-4 tracking-widest uppercase">Assinatura</h3>
        <div className="space-y-4">
          {plans.map((plan) => (
            <div key={plan.id} className="relative group">
              {plan.tag && (
                <span className="absolute -top-2.5 right-4 bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter z-10">
                  {plan.tag}
                </span>
              )}
              <div 
                onClick={() => handleSubscribe(plan.checkoutUrl)}
                className={`
                  flex flex-col gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer
                  ${plan.highlight ? 'border-[#0091ff] bg-blue-50/20 shadow-sm' : 'border-white bg-white hover:border-gray-200'}
                `}
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#0091ff] tracking-tight">{plan.name}</span>
                  <span className="text-gray-900 font-bold">
                    {plan.price} <span className="text-[10px] text-gray-400 font-normal">{plan.period}</span>
                  </span>
                </div>
                <button 
                  className={`
                    w-full py-3 rounded-full font-bold text-sm transition-all shadow-md active:scale-[0.98]
                    ${plan.highlight ? 'bg-[#0091ff] text-white hover:bg-blue-600' : 'bg-white border border-[#0091ff] text-[#0091ff] hover:bg-blue-50'}
                  `}
                >
                  ASSINAR POR {plan.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
