import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Contacto', path: '/contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl py-3' : 'bg-transparent py-6'
      }`}
      style={isScrolled ? { backgroundColor: 'var(--nav-bg)', borderBottom: '1px solid var(--nav-border)' } : undefined}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-purple rounded-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-vibrant to-white/20 group-hover:rotate-45 transition-transform duration-500" />
            <span className="font-display font-bold text-xl text-white relative z-10">C</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight hidden sm:block text-adaptive-primary">
            Camila Briela Agency
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-[0.2em]">
          {navItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path} 
              className={({ isActive }) => 
                `transition-colors relative group ${isActive ? 'text-brand-purple' : 'text-adaptive-muted hover:text-brand-purple'}`
              }
            >
              {item.name}
              <motion.span 
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-brand-purple opacity-0 group-hover:opacity-100 transition-opacity" 
              />
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-brand-purple/20 hover:border-brand-purple/50 text-adaptive-primary transition-all bg-white/5 hover:scale-105"
            aria-label="Alternar Tema"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-brand-purple" />}
          </button>

          <a 
            href="https://wa.me/542915207457" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:block hover:bg-brand-purple hover:text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all transform hover:scale-105"
            style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)' }}
          >
            ¿CHARLAMOS?
          </a>
          
          <button 
            className="md:hidden text-adaptive-primary hover:text-brand-purple"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-2xl overflow-hidden"
            style={{ backgroundColor: 'var(--mobile-menu-bg)', borderBottom: '1px solid var(--nav-border)' }}
          >
            <div className="flex flex-col gap-6 p-8 items-center">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold uppercase tracking-widest text-adaptive-primary hover:text-brand-purple"
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="https://wa.me/542915207457"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-purple text-white py-4 rounded-2xl text-center font-bold"
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
