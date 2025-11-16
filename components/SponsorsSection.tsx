
import React from 'react';
import Section from './Section';
import { Sponsor } from '../types';

const sponsors: Sponsor[] = [
  { name: 'Gene Haas Foundation', logoUrl: 'https://picsum.photos/200/100?random=3', website: '#', tier: 'Platinum' },
  { name: 'Boeing', logoUrl: 'https://picsum.photos/200/100?random=4', website: '#', tier: 'Platinum' },
  { name: 'REV Robotics', logoUrl: 'https://picsum.photos/200/100?random=5', website: '#', tier: 'Gold' },
  { name: 'GoBilda', logoUrl: 'https://picsum.photos/200/100?random=6', website: '#', tier: 'Gold' },
  { name: 'Local Community Fund', logoUrl: 'https://picsum.photos/200/100?random=7', website: '#', tier: 'Silver' },
];

const SponsorLogo: React.FC<{ sponsor: Sponsor }> = ({ sponsor }) => (
  <a
    href={sponsor.website}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 bg-gray-800 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105"
    title={sponsor.name}
  >
    <img src={sponsor.logoUrl} alt={sponsor.name} className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
  </a>
);

const SponsorsSection: React.FC = () => {
  return (
    <Section id="sponsors" title="Our Sponsors" className="bg-gray-800/50">
      <p className="text-center text-slate-300 max-w-2xl mx-auto mb-12">
        We are incredibly grateful for the support of our sponsors. Their contributions make our journey in robotics possible.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {sponsors.map((sponsor) => (
          <SponsorLogo key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
    </Section>
  );
};

export default SponsorsSection;
   