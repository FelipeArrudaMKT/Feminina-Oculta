
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
    name: 'PLANO TRIMESTRAL (3 MESES)',
    price: 'R$39,90',
    period: '/ total',
    tag: 'OFERTA ESPECIAL',
    checkoutUrl: 'https://pay.kirvano.com/96b31e0b-2fc4-4029-bb4a-89fc2d8272c7'
  },
  {
    id: 'annual-new',
    name: 'PLANO ANUAL (12 MESES)',
    price: 'R$47,90',
    period: '/ total',
    tag: 'MELHOR ESCOLHA',
    highlight: true,
    checkoutUrl: 'https://pay.kirvano.com/71188f62-77fb-41f8-8c17-6299e56c4460'
  },
  {
    id: 'vip',
    name: 'VITALÍCIO (OFERTA)',
    price: 'R$59,90',
    period: '',
    tag: 'ACESSO PARA SEMPRE',
    checkoutUrl: 'https://pay.kirvano.com/0a3766cb-39fe-4766-8c56-8d68b2364e94'
  }
];

const SubscriptionPlans: React.FC = () => {
  const handleSubscribe = (url: string) => {
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
                <span className={`absolute ${plan.id === 'vip' ? '-bottom-2 right-4' : '-top-2.5 right-4'} bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter z-10 shadow-sm`}>
                  {plan.tag}
                </span>
              )}
              <div 
                onClick={() => handleSubscribe(plan.checkoutUrl)}
                className={`
                  flex flex-col gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer
                  ${plan.highlight ? 'border-[#0091ff] bg-blue-50/20 shadow-md scale-[1.02]' : 'border-white bg-white hover:border-gray-200'}
                `}
              >
                <div className="flex justify-between items-center">
                  <span className={`text-xs font-bold tracking-tight ${plan.highlight ? 'text-[#0091ff]' : 'text-gray-600'}`}>
                    {plan.name}
                  </span>
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
