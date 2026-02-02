
import React, { useState } from 'react';
import { Play, Heart, MessageSquare, Camera, Video, Star } from 'lucide-react';
import { Post } from '../types';

const MOCK_POSTS: Post[] = [
  { id: 1, type: 'video', date: 'Hoje', likes: 67400, comments: 1900, thumbnail: '', videoUrl: 'https://rzqgbxnhjdxcigkawqsl.supabase.co/storage/v1/object/public/teasers/video_2026-01-28_19-13-43%20(2).mp4' },
  { id: 2, type: 'video', date: 'Ontem', likes: 89800, comments: 7100, thumbnail: '', videoUrl: 'https://rzqgbxnhjdxcigkawqsl.supabase.co/storage/v1/object/public/teasers/video_2026-01-28_19-13-43%20(3).mp4' },
  { id: 3, type: 'video', date: '2 dias atrás', likes: 55300, comments: 8400, thumbnail: '', videoUrl: 'https://rzqgbxnhjdxcigkawqsl.supabase.co/storage/v1/object/public/teasers/video_2026-01-28_19-13-43%20(4).mp4' },
  { id: 4, type: 'video', date: '3 dias atrás', likes: 42100, comments: 3200, thumbnail: '', videoUrl: 'https://rzqgbxnhjdxcigkawqsl.supabase.co/storage/v1/object/public/teasers/video_2026-01-28_19-13-43%20(5).mp4' },
];

const ContentFeed: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video' | 'highlight'>('all');

  const formatStats = (num: number) => {
    return num >= 1000 ? (num / 1000).toFixed(1) + 'K' : num;
  };

  const handleUnlock = () => {
    const subSection = document.getElementById('subscription-section');
    if (subSection) {
      subSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-4">
      {/* Tabs */}
      <div className="flex border-b border-gray-100 mb-2">
        <button onClick={() => setFilter('all')} className={`flex-1 py-4 flex items-center justify-center gap-2 border-b-2 transition-colors ${filter === 'all' ? 'border-[#0091ff] text-[#0091ff]' : 'border-transparent text-gray-400'}`}>
          <Camera size={18} />
          <span className="font-bold text-[10px] uppercase tracking-widest">Tudo</span>
        </button>
        <button onClick={() => setFilter('video')} className={`flex-1 py-4 flex items-center justify-center gap-2 border-b-2 transition-colors ${filter === 'video' ? 'border-[#0091ff] text-[#0091ff]' : 'border-transparent text-gray-400'}`}>
          <Video size={18} />
          <span className="font-bold text-[10px] uppercase tracking-widest">Vídeos</span>
        </button>
        <button onClick={() => setFilter('highlight')} className={`flex-1 py-4 flex items-center justify-center gap-2 border-b-2 transition-colors ${filter === 'highlight' ? 'border-[#0091ff] text-[#0091ff]' : 'border-transparent text-gray-400'}`}>
          <Star size={18} />
          <span className="font-bold text-[10px] uppercase tracking-widest">Favoritos</span>
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-2 p-2 bg-[#121212]">
        {MOCK_POSTS.map((post) => (
          <div 
            key={post.id} 
            onClick={handleUnlock}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-800 group cursor-pointer"
          >
            {/* Blurred Background Video */}
            <video 
              src={post.videoUrl} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover filter blur-xl scale-110 opacity-60"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform group-hover:scale-110 transition-transform">
                <Play size={28} className="text-white fill-white ml-1" />
              </div>
            </div>

            {/* Bottom Stats Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center gap-4">
              <div className="flex items-center gap-1 text-white">
                <Heart size={14} className="fill-white" />
                <span className="text-[11px] font-bold">{formatStats(post.likes)}</span>
              </div>
              <div className="flex items-center gap-1 text-white">
                <MessageSquare size={14} className="fill-white" />
                <span className="text-[11px] font-bold">{formatStats(post.comments)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentFeed;
