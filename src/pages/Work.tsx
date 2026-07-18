import Portfolio from '../components/Portfolio';
import CaseStudies from '../components/CaseStudies';
import { motion } from 'motion/react';

export default function Work() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Portfolio />
      <CaseStudies />
    </motion.div>
  );
}
