import { motion } from 'motion/react';
import { MessageCircle, Sparkles, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0d0d12]/90 backdrop-blur-xl border-t border-white/10 px-4 py-3 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <a
          href="https://wa.me/542915207457?text=Hola%21%20Quiero%20solicitar%20mi%20auditor%C3%ADa%20de%20marketing%20y%20redes%20gratuita."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 active:scale-95 transition-transform min-h-[48px]"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp Directo</span>
        </a>

        <Link
          to="/contacto"
          className="flex-1 bg-gradient-to-r from-brand-purple to-brand-vibrant text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-purple-900/30 active:scale-95 transition-transform min-h-[48px]"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
          <span>Auditoría Gratis</span>
        </Link>
      </div>
    </div>
  );
}
