/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import AgencyPulse from './components/AgencyPulse';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen relative">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Services />
        <Process />
        <Portfolio />
        <CaseStudies />
        <AgencyPulse />
        <About />
        <Testimonials />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
