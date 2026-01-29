
import React, { useState, useEffect } from 'react';
import { MoreHorizontal, Share2, Star, Heart, Video, Image as ImageIcon, ShieldCheck, Zap } from 'lucide-react';
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
    <div className="max-w-xl mx-auto bg-white min-h-screen shadow-2xl relative pb-10">
      {/* Banner Area */}
      <div className="relative h-72 bg-gray-200 overflow-hidden">
        <img 
          src={bannerImageUrl} 
          alt="Banner" 
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay for better readability of stats */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        
        {/* Navigation Buttons on Banner */}
        <div className="absolute top-4 left-4 z-20">
          <button className="text-white hover:opacity-80 transition-opacity drop-shadow-md">
            <Share2 size={22} strokeWidth={2.5} />
          </button>
        </div>
        <div className="absolute top-4 right-4 z-20">
          <button className="text-white hover:opacity-80 transition-opacity drop-shadow-md">
            <MoreHorizontal size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Stats Overlays - Floating over banner */}
        <div className="absolute bottom-12 left-4 flex items-center gap-3 text-white font-bold z-20 text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/10">
            <ImageIcon size={16} fill="currentColor" />
            <span>354</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/10">
            <Video size={16} fill="currentColor" />
            <span>148</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/10">
            <Heart size={16} fill="currentColor" />
            <span>20.2K</span>
          </div>
        </div>
      </div>

      {/* Floating Profile Header (Replaces the black bar) */}
      <div className="relative z-30 px-4 -mt-8">
        <div className="bg-white rounded-[2rem] p-4 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4 transition-all duration-300">
          
          {/* Profile Image with Ring */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[4px] border-white overflow-hidden shadow-lg bg-white">
              <img 
                src={profileImageUrl} 
                alt="Mirella Araujo" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online Status Dot */}
            <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-5 h-5 bg-[#00ff00] border-[3px] border-white rounded-full shadow-[0_0_15px_rgba(0,255,0,0.5)] z-10"></div>
          </div>

          {/* Name and Info Section */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight truncate">Mirella Araujo</h1>
              <div className="bg-[#0091ff] rounded-full p-0.5 flex items-center justify-center shadow-[0_2px_8px_rgba(0,145,255,0.4)] shrink-0">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white fill-current" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" fill="none" />
                </svg>
              </div>
              <span className="text-xl animate-pulse">🌸</span>
            </div>
            
            <div className="text-[#0091ff] font-bold text-xs sm:text-sm mt-0.5 flex items-center gap-2">
              @mirella_araujofcc
              <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
              <span className="bg-blue-50 text-[#0091ff] text-[9px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-widest">Top 1%</span>
            </div>
            
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className="text-green-500 text-[10px] font-black uppercase tracking-widest">
                DISPONÍVEL AGORA
              </span>
              <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
            </div>

            {/* Quick Badges */}
            <div className="flex gap-2 mt-2.5">
              <div className="flex items-center gap-1 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full text-[9px] font-bold text-gray-400 uppercase">
                <ShieldCheck size={10} className="text-[#0091ff]" />
                Verified
              </div>
              <div className="flex items-center gap-1 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full text-[9px] font-bold text-gray-400 uppercase">
                <Zap size={10} className="text-yellow-500" />
                Daily
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="shrink-0 self-start mt-1">
            <button className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center text-gray-300 hover:text-[#0091ff] hover:bg-blue-50 hover:border-blue-100 transition-all duration-200 shadow-sm active:scale-90">
              <Star size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="px-5 py-8 bg-white relative">
        <div className="mb-10 bg-blue-50/30 p-5 rounded-3xl border border-blue-50/50">
          <p className="text-gray-700 text-[15px] leading-relaxed font-semibold">
            Oi, prazer em te conhecer 💙{'\n'}
            Aqui você tem acesso ao meu conteúdo exclusivo, bastidores e atualizações que não posto em nenhum outro lugar.
          </p>
          <button className="text-[#0091ff] font-black mt-3 text-xs uppercase tracking-widest hover:underline flex items-center gap-1">
            VER DETALHES COMPLETOS
          </button>
        </div>

        {/* Subscription Section */}
        <div id="subscription-section" className="mb-12">
          <SubscriptionPlans />
        </div>

        {/* Members Status */}
        <div className="py-6 px-6 flex flex-col items-center gap-2 rounded-[2.5rem] border border-gray-100 bg-gray-50/80 shadow-inner">
          <div className="flex items-center gap-2 text-[13px] text-gray-600 font-bold">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
            <span>{onlineUsers} pessoas online agora</span>
          </div>
          <div className="flex gap-6 text-[10px] text-gray-400 uppercase tracking-[0.25em] font-black">
            <span>+1.400 membros</span>
            <span className="text-gray-200">|</span>
            <span>Atualizações semanais</span>
          </div>
        </div>
      </div>

      {/* Feed Content */}
      <ContentFeed />
    </div>
  );
};

export default Profile;
