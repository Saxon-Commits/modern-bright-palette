/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Booking from './pages/Booking';
import TC from './pages/TC';
import PricingPage from './pages/PricingPage';
import FAQPage from './pages/FAQPage';
import { AnimatePresence } from 'motion/react';
import { StyleProvider } from './context/StyleContext';
import { HelmetProvider } from 'react-helmet-async';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <StyleProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/book" element={<Booking />} />
              <Route path="/tcs" element={<TC />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/faq" element={<FAQPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
      </Router>
    </StyleProvider>
    </HelmetProvider>
  );
}
