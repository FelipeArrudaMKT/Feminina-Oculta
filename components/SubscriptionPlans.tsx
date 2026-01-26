
import React from 'react';
import { Plan } from '../types';

const plans: Plan[] = [
  {
    id: 'weekly',
    name: 'PLANO SEMANAL',
    price: 'R$9,90',
    period: '/ semana'
  },
  {
    id: 'monthly',
    name: 'PLANO MENSAL',
    price: 'R$19,90',
    period: '/ mês'
  },
  {
    id: 'quarterly',
    name: '3 MESES (15% OFF)',
    price: 'R$39,90',
    period: '/ total',
    tag: 'Mais popular',
    highlight: true
  },
  {
    id: 'vip',
    name: 'VITALÍCIO (25% OFF)',
    price: 'R$69,90',
    period: '',
    tag: 'Melhor custo-benefício'
  }
];

const SubscriptionPlans: React.FC = () => {
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
              <div className={`
                flex flex-col gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer
                ${plan.highlight ? 'border-[#0091ff] bg-blue-50/20' : 'border-white bg-white hover:border-gray-200'}
              `}>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#0091ff] tracking-tight">{plan.name}</span>
                  <span className="text-gray-900 font-bold">
                    {plan.price} <span className="text-[10px] text-gray-400 font-normal">{plan.period}</span>
                  </span>
                </div>
                <button className={`
                  w-full py-3 rounded-full font-bold text-sm transition-all shadow-md active:scale-[0.98]
                  ${plan.highlight ? 'bg-[#0091ff] text-white hover:bg-blue-600' : 'bg-white border border-[#0091ff] text-[#0091ff] hover:bg-blue-50'}
                `}>
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
