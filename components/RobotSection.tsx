import React from 'react';
import Section from './Section';

// FIX: Changed icon type from JSX.Element to React.ReactNode to resolve namespace error.
const Feature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <li className="flex items-start space-x-4">
    <div className="flex-shrink-0 text-red-500">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-slate-400">{description}</p>
    </div>
  </li>
);

const RobotSection: React.FC = () => {
  const CheckIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

  return (
    <Section id="robot" title="Our Robot" className="bg-gray-800/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
           <img
            src="https://picsum.photos/800/600?random=2"
            alt="FTC 28862 Robot"
            className="relative rounded-lg shadow-xl w-full"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">Centerstage Season: "Crimson Crawler"</h3>
          <p className="text-slate-300">
            Our robot for the 2023-2024 season, "Crimson Crawler," is designed for agility, precision, and robust performance. It excels at pixel placement and drone launching.
          </p>
          <ul className="space-y-4">
            <Feature icon={CheckIcon} title="Mecanum Drivetrain" description="For omnidirectional movement and superior maneuverability on the field." />
            <Feature icon={CheckIcon} title="Linear Extension Arm" description="A custom-built arm for precise and rapid pixel placement on the backboard." />
            <Feature icon={CheckIcon} title="Automated Drone Launcher" description="A spring-loaded mechanism with servo control for consistent drone launches in the end game." />
            <Feature icon={CheckIcon} title="Computer Vision" description="Utilizes vision processing to autonomously detect scoring locations and game elements." />
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default RobotSection;
