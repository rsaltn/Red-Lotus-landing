
import React from 'react';
import Section from './Section';
import { TeamMember } from '../types';

// Mock data for team members
const teamMembers: TeamMember[] = [
  {
    name: 'Jane Doe',
    role: 'Team Captain & Lead Builder',
    bio: 'Jane leads the team with a passion for mechanical design and a drive for success. She has been in FTC for 3 years.',
    imageUrl: 'https://picsum.photos/seed/jane/400/400',
  },
  {
    name: 'John Smith',
    role: 'Lead Programmer',
    bio: 'John is the mastermind behind our autonomous code. He specializes in computer vision and pathfinding algorithms.',
    imageUrl: 'https://picsum.photos/seed/john/400/400',
  },
  {
    name: 'Alex Ray',
    role: 'CAD Designer & Strategist',
    bio: 'Alex designs our robots in CAD before a single screw is turned. They also develop our match strategies.',
    imageUrl: 'https://picsum.photos/seed/alex/400/400',
  },
  {
    name: 'Emily White',
    role: 'Outreach & Portfolio Manager',
    bio: 'Emily connects our team with the community and documents our journey in the engineering portfolio.',
    imageUrl: 'https://picsum.photos/seed/emily/400/400',
  },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20 hover:border-red-500">
    <img
      src={member.imageUrl}
      alt={member.name}
      className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-600 transition-colors"
    />
    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
    <p className="text-red-400 font-semibold mb-3">{member.role}</p>
    <p className="text-slate-400 text-sm">{member.bio}</p>
  </div>
);

const TeamSection: React.FC = () => {
  return (
    <Section id="team" title="Meet Our Team" className="bg-gray-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </Section>
  );
};

export default TeamSection;
