import React from 'react';
import Hero from '../Hero';
import AboutSection from '../AboutSection';
import TeamSection from '../TeamSection';
import RobotSection from '../RobotSection';
import ResourcesSection from '../ResourcesSection';
import SponsorsSection from '../SponsorsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <TeamSection />
      <RobotSection />
      <ResourcesSection />
      <SponsorsSection />
    </>
  );
};

export default HomePage;
