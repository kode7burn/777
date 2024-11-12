import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

interface HomeProps {
  onGetStarted: () => void;
}

const Home: React.FC<HomeProps> = ({ onGetStarted }) => {
  return (
    <>
      <Hero onGetStarted={onGetStarted} />
      <Services />
      <Portfolio />
      <Contact onGetStarted={onGetStarted} />
    </>
  );
};

export default Home;