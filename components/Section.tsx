
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-red-500">{title.split(' ')[0]}</span>
          <span className="text-white"> {title.split(' ').slice(1).join(' ')}</span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
   