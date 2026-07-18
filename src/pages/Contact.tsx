import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Contact />
      <FAQ />
    </motion.div>
  );
}
