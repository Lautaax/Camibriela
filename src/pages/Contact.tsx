import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pt-20"
    >
      <SEO 
        title="Contacto | Solicitá tu Auditoría Gratis" 
        description="Ponete en contacto con Camila Briela Agency. Completá nuestro formulario para solicitar una auditoría gratuita de marketing y comenzar a potenciar tus redes."
      />
      <Contact />
      <FAQ />
    </motion.div>
  );
}
