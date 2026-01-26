
import React, { useState } from 'react';
import { Camera, Video, Star, Lock, Heart, MessageSquare } from 'lucide-react';
import { Post } from '../types';

const MOCK_POSTS: Post[] = [
  { id: 1, type: 'photo', date: '13 de Janeiro', likes: 124, comments: 12, thumbnail: 'https://picsum.photos/seed/p1/400/500' },
  { id: 2, type: 'video', date: '12 de Janeiro', likes: 456, comments: 45, thumbnail: 'https://picsum.photos/seed/p2/400/500' },
  { id: 3, type: 'photo', date: '11 de Janeiro', likes: 89, comments: 8, thumbnail: 'https://picsum.photos/seed/p3/400/500' },
  { id: 4, type: 'photo', date: '10 de Janeiro', likes: 213, comments: 19, thumbnail: 'https://picsum.photos/seed/p4/400/500' },
];

const ContentFeed: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video' | 'highlight'>('all');

  const filteredPosts = filter === 'all' 
    ? MOCK_POSTS 
    : MOCK_POSTS.filter(p => p.type === filter);

  return (
    <div className="mt-4 border-t border-gray-100">
      {/* Tabs */}
      <div className="flex border-b border-gray-100">
        <button 
          onClick={() => setFilter('photo')}
          className={`flex-1 py-4 flex items-center justify-center gap-2 border-b-2 transition-colors ${filter === 'photo' ? 'border-[#0091ff] text-[#0091ff]' : 'border-transparent text-gray-400'}`}
        >
          <Camera size={18} />
          <span className="font-bold text-xs uppercase">Fotos</span>
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
              <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                <img src="https://picsum.photos/seed/isabella/100/100" alt="Avatar" />
              </div>
              <div>
                <div className="flex items-center gap-1 font-bold text-sm">
                  Isabella Fox <span className="text-[#0091ff]">🌸</span>
                </div>
                <div className="text-xs text-gray-400 font-medium">{post.date}</div>
              </div>
            </div>

            <p className="text-gray-800 text-sm mb-4">Assine para desbloquear este conteúdo 🔒</p>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100 group cursor-pointer">
              <img 
                src={post.thumbnail} 
                className="w-full h-full object-cover blurred-content transition-transform duration-700 group-hover:scale-105"
                alt="Blurred content"
              />
              <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white">
                <div className="bg-white/20 backdrop-blur-md p-6 rounded-full mb-4 border border-white/30">
                  <Lock size={40} />
                </div>
                <p className="font-bold text-lg px-8 text-center drop-shadow-lg">
                  Assine agora e tenha acesso total
                </p>
                <button className="mt-4 bg-[#0091ff] text-white px-6 py-2 rounded-full font-bold text-sm shadow-xl active:scale-95 transition-transform">
                  DESBLOQUEAR
                </button>
              </div>
              
              {post.type === 'video' && (
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-[10px] font-bold">
                  <Video size={12} />
                  VÍDEO
                </div>
              )}
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
