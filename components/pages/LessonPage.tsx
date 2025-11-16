import React from 'react';
import Section from '../Section';
import { Resource } from '../../types';

interface LessonPageProps {
  resource: Resource;
}

const LessonPage: React.FC<LessonPageProps> = ({ resource }) => {
  return (
    <Section id={resource.slug} title={resource.title}>
      <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-lg p-8 md:p-12 border border-gray-700">
        <p className="text-lg text-slate-300 mb-8">{resource.description}</p>
        <div 
          className="prose prose-invert prose-lg max-w-none text-slate-300 prose-p:text-slate-300 prose-headings:text-red-400 prose-a:text-red-400 hover:prose-a:text-red-300 prose-strong:text-white prose-ul:list-disc prose-ul:ml-2 prose-li:text-slate-300"
          dangerouslySetInnerHTML={{ __html: resource.content || '<p>No content available for this lesson.</p>' }}
        />
        <a href="#/resources" className="inline-block mt-12 bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300">
          &larr; Back to Resources
        </a>
      </div>
    </Section>
  );
};

export default LessonPage;
