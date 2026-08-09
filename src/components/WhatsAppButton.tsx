import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/542915207457"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 2 }}
      className="hidden sm:flex fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] items-center justify-center hover:bg-[#22c35e] transition-colors group min-h-[48px] min-w-[48px]"
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/10">
        ¿Cómo podemos ayudarte?
      </div>
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
}
