import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center text-white/30 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 bg-brand-purple rounded-full flex items-center justify-center">
             <span className="text-[10px] font-bold text-white">C</span>
           </div>
           <span className="font-display font-bold tracking-tight text-white/50">Camila Briela Agency</span>
        </div>
        
        <p>© {currentYear} Todos los derechos reservados.</p>
        
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos</a>
        </div>
      </div>
    </footer>
  );
}
