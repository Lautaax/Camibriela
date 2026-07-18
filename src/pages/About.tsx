import About from '../components/About';
import Team from '../components/Team';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pt-20"
    >
      <SEO 
        title="Nosotros | Agencia de Estrategia Digital" 
        description="Conocé al equipo creativo de Camila Briela Agency. Especialistas apasionados por el diseño estratégico, branding, social media y campañas de conversión con alto engagement."
      />
      <About />
      <Team />
      <Process />
      <Testimonials />
    </motion.div>
  );
}
