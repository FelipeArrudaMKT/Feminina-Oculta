
import React, { useState } from 'react';
import { X, Camera, Video, Image as ImageIcon, Globe, Shield, Star } from 'lucide-react';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose }) => {
  const [accessLevel, setAccessLevel] = useState<'public' | 'subscriber' | 'vip'>('subscriber');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center z-[100] p-0 sm:p-6 transition-opacity animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] p-6 shadow-2xl animate-in slide-in-from-bottom duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Adicionar novo conteúdo</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} className="text-gray-400" />
          </button>
        </div>

        <div className="space-y-6">
          {/* File Selection Options */}
          <div className="grid grid-cols-2 gap-4">
            <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-2xl hover:border-[#0091ff] hover:bg-blue-50/50 cursor-pointer transition-all group">
              <ImageIcon size={32} className="text-gray-300 group-hover:text-[#0091ff] mb-2" />
              <span className="text-xs font-bold text-gray-500 group-hover:text-[#0091ff] uppercase">Fotos</span>
              <input type="file" className="hidden" accept="image/*" multiple />
            </label>
            <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-2xl hover:border-[#0091ff] hover:bg-blue-50/50 cursor-pointer transition-all group">
              <Video size={32} className="text-gray-300 group-hover:text-[#0091ff] mb-2" />
              <span className="text-xs font-bold text-gray-500 group-hover:text-[#0091ff] uppercase">Vídeos</span>
              <input type="file" className="hidden" accept="video/*" />
            </label>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Descrição</label>
            <textarea 
              placeholder="Escreva algo sobre este conteúdo..."
              className="w-full h-24 p-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[#0091ff] focus:ring-1 focus:ring-[#0091ff] outline-none text-sm transition-all resize-none"
            ></textarea>
          </div>

          {/* Visibility Selection */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Nível de Acesso</label>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => setAccessLevel('public')}
                className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${accessLevel === 'public' ? 'border-[#0091ff] bg-blue-50/20' : 'border-gray-100 bg-white hover:border-gray-200'}`}
              >
                <div className={`${accessLevel === 'public' ? 'text-[#0091ff]' : 'text-gray-400'}`}>
                  <Globe size={20} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold">Público</div>
                  <div className="text-[10px] text-gray-400">Visível para todos os visitantes</div>
                </div>
              </button>
              
              <button 
                onClick={() => setAccessLevel('subscriber')}
                className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${accessLevel === 'subscriber' ? 'border-[#0091ff] bg-blue-50/20' : 'border-gray-100 bg-white hover:border-gray-200'}`}
              >
                <div className={`${accessLevel === 'subscriber' ? 'text-[#0091ff]' : 'text-gray-400'}`}>
                  <Shield size={20} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold">Exclusivo para Assinantes</div>
                  <div className="text-[10px] text-gray-400">Requer assinatura ativa para visualizar</div>
                </div>
              </button>

              <button 
                onClick={() => setAccessLevel('vip')}
                className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${accessLevel === 'vip' ? 'border-[#0091ff] bg-blue-50/20' : 'border-gray-100 bg-white hover:border-gray-200'}`}
              >
                <div className={`${accessLevel === 'vip' ? 'text-[#0091ff]' : 'text-gray-400'}`}>
                  <Star size={20} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold">Exclusivo VIP</div>
                  <div className="text-[10px] text-gray-400">Apenas para membros do plano vitalício</div>
                </div>
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            onClick={onClose}
            className="w-full bg-[#0091ff] text-white font-bold py-4 rounded-full shadow-lg hover:bg-blue-600 active:scale-95 transition-all"
          >
            PUBLICAR CONTEÚDO
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
