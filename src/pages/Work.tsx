import Portfolio from '../components/Portfolio';
import CaseStudies from '../components/CaseStudies';
import SEO from '../components/SEO';
import { motion } from 'motion/react';

export default function Work() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pt-20"
    >
      <SEO 
        title="Portfolio | Casos de Éxito de Marketing" 
        description="Explorá nuestros proyectos y casos de estudio destacados. Mirá cómo ayudamos a marcas líderes a multiplicar su engagement, reproducciones y volumen de ventas."
      />
      <Portfolio />
      <CaseStudies />
    </motion.div>
  );
}
