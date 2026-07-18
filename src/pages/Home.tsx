import Hero from '../components/Hero';
import Partners from '../components/Partners';
import InteractiveServices from '../components/InteractiveServices';
import Services from '../components/Services';
import AgencyPulse from '../components/AgencyPulse';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Partners />
      <InteractiveServices />
      <Services />
      <AgencyPulse />
    </motion.div>
  );
}

