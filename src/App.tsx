import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ServiceSpecs from './pages/ServiceSpecs';
import Onboarding from './components/Onboarding';
import { useScrollToTop } from './hooks/useScrollToTop';

const ScrollToTop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useScrollToTop();
  return <>{children}</>;
};

const App: React.FC = () => {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  const handleGetStarted = () => {
    setIsOnboardingOpen(true);
  };

  return (
    <Router>
      <ScrollToTop>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen text-white relative flex flex-col"
        >
          <Navbar onGetStarted={handleGetStarted} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home onGetStarted={handleGetStarted} />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/service-specs" element={<ServiceSpecs />} />
            </Routes>
          </main>
          <Footer />
          <Onboarding isOpen={isOnboardingOpen} onClose={() => setIsOnboardingOpen(false)} />
        </motion.div>
      </ScrollToTop>
    </Router>
  );
};

export default App;