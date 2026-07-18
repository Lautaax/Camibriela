import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-20 pb-12 px-6 border-t border-white/5 bg-dark-bg/40 transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Marketing Audit CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden p-8 md:p-12 rounded-[32px] border border-brand-purple/20 bg-gradient-to-br from-brand-purple/10 via-black/40 to-brand-vibrant/5 text-left flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Subtle Glows inside the CTA banner */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-purple/10 blur-[60px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-vibrant/10 blur-[60px] pointer-events-none" />

          <div className="space-y-3 z-10">
            <div className="flex items-center gap-2 text-brand-purple text-xs font-display font-bold uppercase tracking-[0.2em]">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Oportunidad Exclusiva</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-adaptive-primary tracking-tight">
              ¿Querés escalar el alcance de tu marca?
            </h3>
            <p className="text-sm md:text-base text-adaptive-muted max-w-xl">
              Solicitá hoy una <strong className="text-brand-purple">Auditoría de Marketing Gratuita</strong>. Analizamos tus redes, optimizamos tu embudo y trazamos un plan de acción real.
            </p>
          </div>

          <div className="w-full md:w-auto z-10">
            <Link 
              to="/contacto"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-vibrant hover:from-brand-purple/90 hover:to-brand-vibrant/90 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-0.5"
            >
              <span>Quiero mi Auditoría Gratis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Footer bottom links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 text-adaptive-muted text-sm text-center">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 bg-brand-purple rounded-full flex items-center justify-center">
               <span className="text-[10px] font-bold text-white">C</span>
             </div>
             <span className="font-display font-bold tracking-tight text-adaptive-primary">Camila Briela Agency</span>
          </div>
          
          <p>© {currentYear} Todos los derechos reservados.</p>
          
          <div className="flex items-center gap-6">
            <Link to="/privacidad" className="hover:text-brand-purple text-adaptive-muted transition-colors">Privacidad</Link>
            <Link to="/terminos" className="hover:text-brand-purple text-adaptive-muted transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
