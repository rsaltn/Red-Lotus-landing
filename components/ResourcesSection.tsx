import React from 'react';
import Section from './Section';
import { Resource, ResourceType } from '../types';

export const resources: Resource[] = [
  {
    type: ResourceType.CAD,
    title: 'Robot CAD Model',
    description: 'Explore the complete 3D model of our Centerstage robot. Available in STEP format.',
    link: '#',
    slug: 'robot-cad-model',
  },
  {
    type: ResourceType.Portfolio,
    title: 'Engineering Portfolio',
    description: 'An example of our engineering portfolio, detailing our design process and journey.',
    link: '#',
    slug: 'engineering-portfolio',
  },
  {
    type: ResourceType.Lesson,
    title: 'Intro to Java for FTC',
    description: 'A beginner-friendly guide to programming your FTC robot using the Java SDK.',
    link: '#/resources/intro-to-java-for-ftc',
    slug: 'intro-to-java-for-ftc',
    content: `
      <h3 class="text-2xl font-bold mb-4 text-white">Module 1: Setting Up Your Environment</h3>
      <p class="mb-4">Before you can write any code, you need to set up your development environment. This involves installing the Java Development Kit (JDK), Android Studio, and the FTC SDK. Follow the official FIRST instructions for the most up-to-date guide.</p>
      <ul class="list-disc list-inside mb-6 pl-4 space-y-2">
        <li>Install JDK (Version 11 is recommended).</li>
        <li>Install Android Studio.</li>
        <li>Download and configure the FTC Robot Controller SDK.</li>
      </ul>
      <h3 class="text-2xl font-bold mb-4 text-white">Module 2: Your First OpMode</h3>
      <p class="mb-4">An "OpMode" is the program that runs on your robot. There are two main types: TeleOp (driver-controlled) and Autonomous. Let's create a simple TeleOp OpMode.</p>
      <pre class="bg-gray-800 rounded-md p-4 text-sm text-slate-300 overflow-x-auto"><code>@TeleOp(name="MyFirstTeleOp", group="Tutorial")
public class MyFirstTeleOp extends OpMode {
    // ... code here
}</code></pre>
      <p class="mt-4">This boilerplate sets up a new OpMode. In the next steps, we'll learn how to declare motors and servos and map them to controller inputs.</p>
    `,
  },
  {
    type: ResourceType.Lesson,
    title: 'Building a Mecanum Drivetrain',
    description: 'Learn the fundamentals of constructing a mecanum wheel drivetrain for maximum agility.',
    link: '#/resources/building-mecanum-drivetrain',
    slug: 'building-mecanum-drivetrain',
    content: `
      <h3 class="text-2xl font-bold mb-4 text-white">Part 1: Parts Needed</h3>
      <p class="mb-4">To build a robust mecanum drivetrain, you will need the following key components:</p>
      <ul class="list-disc list-inside mb-6 pl-4 space-y-2">
        <li>4 Mecanum Wheels (2 Left, 2 Right).</li>
        <li>4 Motors (e.g., GoBilda Yellow Jacket).</li>
        <li>Chassis rails and plates.</li>
        <li>Bearings, shafts, and hubs.</li>
        <li>Lots of screws and nuts!</li>
      </ul>
      <h3 class="text-2xl font-bold mb-4 text-white">Part 2: Assembly</h3>
      <p class="mb-4">The key to a good mecanum drive is proper wheel orientation. The rollers on the top of the wheels should form an 'X' pattern. If they form a diamond, your robot will not strafe correctly.</p>
      <img src="https://picsum.photos/600/300?random=10" alt="Mecanum Wheel Layout" class="rounded-lg my-4" />
      <p class="mt-4">Ensure your chassis is square and rigid. A flimsy chassis will cause issues with wheel alignment and lead to inconsistent autonomous movements.</p>
    `
  },
  {
    type: ResourceType.Lesson,
    title: 'Intro to Computer Vision',
    description: 'Use vision tools to detect game elements and navigate autonomously.',
    link: '#/resources/intro-to-computer-vision',
    slug: 'intro-to-computer-vision',
    content: `
      <h3 class="text-2xl font-bold mb-4 text-white">Coming Soon!</h3>
      <p>This lesson is currently under development. Check back later for a full guide on implementing computer vision on your FTC robot.</p>
    `
  },
  {
    type: ResourceType.Code,
    title: 'GitHub Repository',
    description: 'Check out the source code for our robot, including autonomous routines and vision processing.',
    link: 'https://github.com',
    slug: 'github-repository',
  },
];

const ResourceIcon: React.FC<{ type: ResourceType }> = ({ type }) => {
  switch (type) {
    case ResourceType.CAD:
      return <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
    case ResourceType.Portfolio:
      return <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
    case ResourceType.Lesson:
      return <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>;
    case ResourceType.Code:
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
    default:
      return null;
  }
};


const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => (
  <div className="bg-gray-800 rounded-lg p-6 flex flex-col hover:bg-gray-700/50 border border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center mb-4">
      <ResourceIcon type={resource.type} />
      <h3 className="text-xl font-bold text-white ml-4">{resource.title}</h3>
    </div>
    <p className="text-slate-400 flex-grow mb-4">{resource.description}</p>
    <a href={resource.link} target={resource.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="mt-auto text-red-400 font-semibold hover:text-red-300 self-start">
      View Resource &rarr;
    </a>
  </div>
);


const ResourcesSection: React.FC = () => {
  return (
    <Section id="resources" title="Lessons & Materials">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {resources.map((res) => (
          <ResourceCard key={res.slug} resource={res} />
        ))}
      </div>
    </Section>
  );
};

export default ResourcesSection;
