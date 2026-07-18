import About from '../components/About';
import Team from '../components/Team';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <About />
      <Team />
      <Process />
      <Testimonials />
    </motion.div>
  );
}
