import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-purple rounded-full flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-vibrant to-white/20 group-hover:rotate-45 transition-transform duration-500" />
            <span className="font-display font-bold text-xl relative z-10">C</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight hidden sm:block">
            Camila Briela Agency
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
          {['servicios', 'nosotros', 'portfolio', 'contacto'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="hover:text-brand-purple transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-purple transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/542915207457" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:block bg-white text-black hover:bg-brand-purple hover:text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all transform hover:scale-105"
          >
            ¿CHARLAMOS?
          </a>
          
          <button 
            className="md:hidden text-white hover:text-brand-purple"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-bg/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-6 p-8 items-center">
              {['servicios', 'nosotros', 'portfolio', 'contacto'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold uppercase tracking-widest hover:text-brand-purple"
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://wa.me/542915207457"
                className="w-full bg-brand-purple py-4 rounded-2xl text-center font-bold"
              >
                ¿CHARLAMOS?
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
