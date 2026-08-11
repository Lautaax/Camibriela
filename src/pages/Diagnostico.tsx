import BrandQuiz from '../components/BrandQuiz';
import SEO from '../components/SEO';
import { motion } from 'motion/react';

export default function Diagnostico() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pt-20"
    >
      <SEO 
        title="Diagnóstico de Marca | Camila Briela Agency" 
        description="Completá este test breve para descubrir qué áreas de tu comunicación necesitan más atención."
      />
      <BrandQuiz />
    </motion.div>
  );
}
