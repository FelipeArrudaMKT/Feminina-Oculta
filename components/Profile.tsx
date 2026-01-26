
import React, { useState, useEffect } from 'react';
import { CheckCircle, MoreHorizontal, Share2, Star, Heart, MessageSquare } from 'lucide-react';
import SubscriptionPlans from './SubscriptionPlans';
import ContentFeed from './ContentFeed';

const Profile: React.FC = () => {
  const [onlineUsers, setOnlineUsers] = useState(142);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineUsers(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const profileImageUrl = "https://i.ibb.co/bR24Kzmn/roxo.png";
  const bannerImageUrl = "https://i.ibb.co/MDN048Jx/academia.jpg";

  return (
    <div className="max-w-xl mx-auto bg-white min-h-screen shadow-xl relative pb-10">
      {/* Header / Banner */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <img 
          src={bannerImageUrl} 
          alt="Banner" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-4 left-4 flex gap-4 text-white">
          <button className="bg-black/30 p-2 rounded-full backdrop-blur-md">
            <Share2 size={20} />
          </button>
        </div>
        <div className="absolute top-4 right-4 flex gap-4 text-white">
          <button className="bg-black/30 p-2 rounded-full backdrop-blur-md">
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-4 relative -mt-12">
        <div className="flex justify-between items-end mb-4">
          <div className="relative">
            <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden shadow-lg bg-gray-100">
              <img 
                src={profileImageUrl} 
                alt="Isabella Fox" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex gap-2 pb-2">
            <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-gray-400">
              <Star size={20} />
            </button>
            <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-gray-400">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-1">
            <h1 className="text-2xl font-bold text-gray-900">Isabella Fox</h1>
            <CheckCircle size={18} className="text-[#0091ff] fill-current text-white" />
            <span className="ml-1 text-[#0091ff]">🌸</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
            <span>@bellafoxofc</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-green-600">Disponível agora</span>
          </div>
        </div>

        <div className="flex gap-6 mb-4 text-sm font-semibold text-gray-600">
          <div className="flex flex-col">
            <span className="text-gray-900 text-base font-bold">+800</span>
            <span>POSTAGENS</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-900 text-base font-bold">+300</span>
            <span>VÍDEOS</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-900 text-base font-bold">5K</span>
            <span>CURTIDAS</span>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            Oi, prazer em te conhecer 💙{'\n'}
            Aqui você tem acesso ao meu conteúdo exclusivo, bastidores e atualizações que não posto em nenhum outro lugar.
          </p>
          <button className="text-[#0091ff] font-bold mt-1 text-sm hover:underline">Ver mais ⌄</button>
        </div>
      </div>

      {/* Subscription Section */}
      <SubscriptionPlans />

      {/* Social Proof */}
      <div className="px-6 py-4 flex flex-col items-center gap-1 border-t border-gray-100 bg-gray-50/50">
        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>{onlineUsers} pessoas online agora</span>
        </div>
        <div className="flex gap-4 text-xs text-gray-400 uppercase tracking-widest font-bold">
          <span>+1.400 membros</span>
          <span>Atualizações semanais</span>
        </div>
      </div>

      {/* Feed Content */}
      <ContentFeed />
    </div>
  );
};

export default Profile;
