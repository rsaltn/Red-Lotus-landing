
import React from 'react';
import Section from './Section';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" title="About Our Team" className="bg-gray-900">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-lg text-slate-300 space-y-4">
          <p>
            Welcome to the home of FTC Team 28862, Red Lotus Robotics! We are a passionate group of students dedicated to exploring the exciting world of robotics through the FIRST Tech Challenge.
          </p>
          <p>
            Our mission is to foster innovation, collaboration, and a love for STEM within our community. We believe in the power of teamwork and Gracious Professionalism® to overcome challenges and achieve our goals.
          </p>
        </div>
        <div>
          <img
            src="https://picsum.photos/600/400?random=1"
            alt="Red Lotus team working"
            className="rounded-lg shadow-2xl shadow-red-900/30 transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
   