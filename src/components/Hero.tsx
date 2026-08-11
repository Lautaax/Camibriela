import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Sparkles, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import HeroScene from './HeroScene';

const phrases = [
  "el impacto que merece",
  "el contenido que la representa",
  "una comunicación a su altura",
  "ideas que la hagan diferente",
  "la mirada que necesita"
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 overflow-hidden pt-24 pb-16">
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
          background: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 60%)"
        }}
      />

      <div className="max-w-4xl w-full text-center z-10">
        {/* SEM & High Impact Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-brand-purple/30 backdrop-blur-md text-adaptive-primary mb-6 text-xs sm:text-sm font-semibold"
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
          <span>Agencia de Growth Marketing, SEM & Redes Sociales</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-brand-purple" />
          <span className="hidden sm:inline-block text-brand-purple font-bold">Auditoría Gratuita 24hs</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold leading-[1.05] tracking-tight mb-6 sm:mb-8 text-balance flex flex-col items-center"
        >
          <span>Que tu marca tenga</span>
          <div className="h-[1.2em] relative overflow-hidden w-full flex justify-center mt-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-vibrant to-orange-500 whitespace-nowrap text-3xl sm:text-5xl md:text-6xl"
              >
                "{phrases[phraseIndex]}"
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white/70 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal"
        >
          No somos una agencia tradicional. Somos el equipo creativo que se convierte en parte de tu marca.
          Combinamos estrategia, creatividad, contenido y ejecución para construir una comunicación que tenga sentido para tu negocio, represente lo que sos y te ayude a crecer.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.7 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto"
        >
          <a 
            href="https://wa.me/542915207457?text=Hola%21%20Quiero%20solicitar%20una%20auditor%C3%ADa%20gratuita%20de%20marketing%20y%20SEM%20para%20mi%20marca."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-brand-purple to-brand-vibrant text-white rounded-2xl sm:rounded-full font-bold text-base sm:text-lg hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 min-h-[52px]"
          >
            <span>Solicitar Auditoría Gratis</span>
            <TrendingUp className="w-5 h-5 text-amber-300" />
          </a>
          <Link 
            to="/portfolio"
            className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 border border-white/20 rounded-2xl sm:rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-all text-center min-h-[52px] flex items-center justify-center"
          >
            Ver Casos de Éxito
          </Link>
        </motion.div>

        {/* SEM & Mobile Social Proof Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10 sm:mt-14 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/60 font-medium"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Meta & Google Ads SEM</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-brand-purple shrink-0" />
            <span>Lucciano's • Big Six • Tampicos • ByFy</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Eventos Masivos & Recitales</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white/30">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}

