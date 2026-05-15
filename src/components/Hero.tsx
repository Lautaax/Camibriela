import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

import HeroScene from './HeroScene';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
      {/* 3D Background */}
      <HeroScene />
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 purple-glow animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 purple-glow animate-pulse delay-700 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)"
        }}
      />

      <div className="max-w-4xl w-full text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-brand-purple font-display font-medium uppercase tracking-[0.3em] mb-4 text-sm"
        >
          Agencia de Marketing & Contenido
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-8xl font-display font-extrabold leading-none mb-8"
        >
          ¡Que tu marca tenga <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-vibrant">
            LO QUE MERECE!
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Escribinos y contanos de tu proyecto, en qué momento estás y qué creés necesitar. Estamos acá para potenciar tu identidad digital.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="https://wa.me/542915207457"
            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-brand-purple to-brand-vibrant rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all transform hover:-translate-y-1"
          >
            ¿Charlamos?
          </a>
          <a 
            href="#servicios"
            className="w-full sm:w-auto px-10 py-5 border border-white/20 rounded-full font-bold text-lg hover:bg-white/5 transition-all"
          >
            Nuestros Servicios
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white/30">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
