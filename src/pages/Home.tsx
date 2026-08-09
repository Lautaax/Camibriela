import Hero from '../components/Hero';
import Partners from '../components/Partners';
import InteractiveServices from '../components/InteractiveServices';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import CaseStudies from '../components/CaseStudies';
import SemCalculator from '../components/SemCalculator';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import AgencyPulse from '../components/AgencyPulse';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
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
        title="Agencia de Growth Marketing, SEM & Redes Sociales" 
        description="Agencia de Growth Marketing, Google Ads, Meta Ads y Gestión de Redes. Casos de éxito con Lucciano's, Big Six, Tampicos, ByFy y Fiesta de la Confluencia. ¡Solicitá tu auditoría gratuita en 24hs!"
        schemaType="MarketingAgency"
      />
      <Hero />
      <Partners />
      <InteractiveServices />
      <Services />
      <Portfolio />
      <CaseStudies />
      <SemCalculator />
      <Process />
      <Testimonials />
      <AgencyPulse />
      <FAQ />
      <Contact />
    </motion.div>
  );
}


