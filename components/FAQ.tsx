
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/5 rounded-2xl bg-white/[0.03] overflow-hidden mb-3">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between text-left hover:bg-white/[0.06] transition-all"
      >
        <span className="text-[13px] font-bold text-gray-100 pr-4 leading-tight">{question}</span>
        <ChevronDown 
          size={16} 
          className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 animate-in slide-in-from-top-2 duration-300">
          <p className="text-xs text-gray-400 leading-relaxed font-medium">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    { 
      question: "É sigiloso? Vai aparecer no meu extrato o nome do pix?", 
      answer: "Sim, garantimos total sigilo. No seu extrato bancário aparecerá apenas o nome da nossa plataforma de pagamentos segura, sem qualquer menção à criadora ou ao tipo de conteúdo." 
    },
    { 
      question: "Quando tenho acesso depois do pagamento?", 
      answer: "O acesso é liberado de forma instantânea. Assim que o Pix é confirmado pelo sistema (geralmente em menos de 30 segundos), você recebe o link de acesso direto no seu Telegram." 
    },
    { 
      question: "Posso cancelar quando quiser? A assinatura renova?", 
      answer: "Sim, você tem controle total. Nossas assinaturas via Telegram não possuem renovação automática forçada, você escolhe se deseja renovar ao final do seu período de acesso." 
    },
    { 
      question: "Tem reembolso?", 
      answer: "Por se tratar de um produto digital com entrega imediata e consumo instantâneo de conteúdo exclusivo, não realizamos estornos após a liberação do acesso." 
    },
    { 
      question: "Como funciona a \"chamada de vídeo\"?", 
      answer: "As chamadas são exclusivas para assinantes do plano VIP e são agendadas diretamente comigo através do chat privado, de acordo com a disponibilidade da semana." 
    },
    { 
      question: "Posso pedir conteúdo personalizado?", 
      answer: "Com certeza! Adoro realizar os desejos dos meus fãs. Os conteúdos personalizados podem ser solicitados no privado e os valores variam conforme o pedido." 
    }
  ];

  return (
    <div className="bg-[#121212] px-5 py-12 border-t border-white/5">
      <h2 className="text-white text-xl font-black mb-8 tracking-tight">Perguntas Frequentes</h2>
      <div className="space-y-1">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      
      <div className="mt-16 pt-8 border-t border-white/5 text-center">
        <div className="flex justify-center gap-4 text-[10px] text-gray-600 font-bold uppercase tracking-[0.15em]">
          <a href="#" className="hover:text-gray-400 transition-colors">Termos de Uso</a>
          <span className="text-gray-800">•</span>
          <a href="#" className="hover:text-gray-400 transition-colors">Política de Privacidade</a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
