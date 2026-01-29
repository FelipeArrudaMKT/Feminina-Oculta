
import React, { useState } from 'react';
import { Camera, Video, Star, Lock, Heart, MessageSquare } from 'lucide-react';
import { Post } from '../types';

const MOCK_POSTS: Post[] = [
  { 
    id: 1, 
    type: 'video', 
    date: 'Hoje', 
    likes: 284, 
    comments: 24, 
    thumbnail: '', 
    videoUrl: 'https://rzqgbxnhjdxcigkawqsl.supabase.co/storage/v1/object/public/teasers/video_2026-01-28_19-13-43%20(2).mp4' 
  },
  { 
    id: 2, 
    type: 'video', 
    date: 'Ontem', 
    likes: 456, 
    comments: 45, 
    thumbnail: '', 
    videoUrl: 'https://rzqgbxnhjdxcigkawqsl.supabase.co/storage/v1/object/public/teasers/video_2026-01-28_19-13-43%20(3).mp4' 
  },
  { 
    id: 3, 
    type: 'video', 
    date: '2 dias atrás', 
    likes: 312, 
    comments: 18, 
    thumbnail: '', 
    videoUrl: 'https://rzqgbxnhjdxcigkawqsl.supabase.co/storage/v1/object/public/teasers/video_2026-01-28_19-13-43%20(4).mp4' 
  },
  { 
    id: 4, 
    type: 'video', 
    date: '3 dias atrás', 
    likes: 512, 
    comments: 67, 
    thumbnail: '', 
    videoUrl: 'https://rzqgbxnhjdxcigkawqsl.supabase.co/storage/v1/object/public/teasers/video_2026-01-28_19-13-43%20(5).mp4' 
  },
  { 
    id: 5, 
    type: 'video', 
    date: 'Esta semana', 
    likes: 943, 
    comments: 89, 
    thumbnail: '', 
    videoUrl: 'https://rzqgbxnhjdxcigkawqsl.supabase.co/storage/v1/object/public/teasers/video_2026-01-28_19-13-43.mp4' 
  },
];

const ContentFeed: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video' | 'highlight'>('all');

  const filteredPosts = filter === 'all' 
    ? MOCK_POSTS 
    : MOCK_POSTS.filter(p => p.type === filter);

  const handleUnlock = () => {
    // Scroll to subscription section
    const subSection = document.getElementById('subscription-section');
    if (subSection) {
      subSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-4 border-t border-gray-100">
      {/* Tabs */}
      <div className="flex border-b border-gray-100">
        <button 
          onClick={() => setFilter('all')}
          className={`flex-1 py-4 flex items-center justify-center gap-2 border-b-2 transition-colors ${filter === 'all' ? 'border-[#0091ff] text-[#0091ff]' : 'border-transparent text-gray-400'}`}
        >
          <Camera size={18} />
          <span className="font-bold text-xs uppercase">Tudo</span>
        </button>
        <button 
          onClick={() => setFilter('video')}
          className={`flex-1 py-4 flex items-center justify-center gap-2 border-b-2 transition-colors ${filter === 'video' ? 'border-[#0091ff] text-[#0091ff]' : 'border-transparent text-gray-400'}`}
        >
          <Video size={18} />
          <span className="font-bold text-xs uppercase">Vídeos</span>
        </button>
        <button 
          onClick={() => setFilter('highlight')}
          className={`flex-1 py-4 flex items-center justify-center gap-2 border-b-2 transition-colors ${filter === 'highlight' ? 'border-[#0091ff] text-[#0091ff]' : 'border-transparent text-gray-400'}`}
        >
          <Star size={18} />
          <span className="font-bold text-xs uppercase">Destaques</span>
        </button>
      </div>

      {/* Feed Content */}
      <div className="divide-y divide-gray-100">
        {filteredPosts.map((post) => (
          <div key={post.id} className="p-4 bg-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full border border-gray-100 overflow-hidden">
                <img src="https://i.ibb.co/bR24Kzmn/roxo.png" alt="Mirella Araujo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-1 font-bold text-sm">
                  Mirella Araujo <span className="text-[#0091ff]">🌸</span>
                </div>
                <div className="text-xs text-gray-400 font-medium">{post.date}</div>
              </div>
            </div>

            <p className="text-gray-800 text-sm mb-4">Assine para desbloquear este vídeo exclusivo 🔒</p>

            <div 
              onClick={handleUnlock}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-900 group cursor-pointer"
            >
              {post.videoUrl ? (
                <video 
                  src={post.videoUrl} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover blurred-content opacity-60"
                />
              ) : (
                <img 
                  src={post.thumbnail} 
                  className="w-full h-full object-cover blurred-content transition-transform duration-700 group-hover:scale-105"
                  alt="Content teaser"
                />
              )}
              
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-6">
                <div className="bg-white/20 backdrop-blur-md p-6 rounded-full mb-4 border border-white/30 animate-pulse">
                  <Lock size={40} />
                </div>
                <p className="font-bold text-lg text-center drop-shadow-lg mb-2">
                  Conteúdo Bloqueado
                </p>
                <p className="text-xs text-center text-gray-200 mb-6 drop-shadow-md">
                  Assine um plano para ter acesso total a este vídeo e muito mais.
                </p>
                <button className="bg-[#0091ff] text-white px-8 py-3 rounded-full font-bold text-sm shadow-xl active:scale-95 transition-transform hover:bg-blue-600 uppercase tracking-wide">
                  ASSINAR AGORA
                </button>
              </div>
              
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-[10px] font-bold text-white">
                <Video size={12} />
                TEASER
              </div>
            </div>

            <div className="mt-4 flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-1.5 cursor-pointer hover:text-red-500 transition-colors">
                <Heart size={20} />
                <span className="text-xs font-bold">{post.likes}</span>
              </div>
              <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#0091ff] transition-colors">
                <MessageSquare size={20} />
                <span className="text-xs font-bold">{post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentFeed;
