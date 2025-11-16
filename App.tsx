import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import RobotSection from './components/RobotSection';
import ResourcesSection, { resources } from './components/ResourcesSection';
import SponsorsSection from './components/SponsorsSection';
import LessonPage from './components/pages/LessonPage';


const App: React.FC = () => {
  // Use location.hash for routing, defaulting to '#' for the homepage
  const [path, setPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial scroll to top
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    if (path.startsWith('#/resources/')) {
      const slug = path.replace('#/resources/', '');
      const resource = resources.find(r => r.slug === slug);
      if (resource && resource.type === 'Lesson') {
        return <LessonPage resource={resource} />;
      }
    }

    switch (path) {
      case '#/about':
        return <AboutSection />;
      case '#/team':
        return <TeamSection />;
      case '#/robot':
        return <RobotSection />;
      case '#/resources':
        return <ResourcesSection />;
      case '#/sponsors':
        return <SponsorsSection />;
      case '#/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans leading-relaxed tracking-wide antialiased flex flex-col">
      <Header />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
