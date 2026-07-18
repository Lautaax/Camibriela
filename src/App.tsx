/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Work from './pages/Work';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative bg-dark-bg text-white">
        <ScrollToTop />
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Work />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
