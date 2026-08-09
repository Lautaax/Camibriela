import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t border-white/5 bg-dark-bg/40 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Footer bottom links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-adaptive-muted text-sm text-center">
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
