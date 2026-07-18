import Hero from '../components/Hero';
import Partners from '../components/Partners';
import InteractiveServices from '../components/InteractiveServices';
import Services from '../components/Services';
import AgencyPulse from '../components/AgencyPulse';
import SEO from '../components/SEO';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <SEO 
        title="Growth Marketing & Redes Sociales" 
        description="Ayudamos a marcas y creadores a escalar su presencia digital, optimizar embudos de conversión y maximizar su alcance con estrategias de marketing basadas en datos."
      />
      <Hero />
      <Partners />
      <InteractiveServices />
      <Services />
      <AgencyPulse />
    </motion.div>
  );
}

