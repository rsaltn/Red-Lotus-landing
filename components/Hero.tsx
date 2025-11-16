import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen text-center text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
      <div className="absolute inset-0 bg-gray-900/70"></div>
      <div className="relative z-10 p-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Red Lotus Robotics</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          FTC Team 28862 | Engineering the future, one robot at a time.
        </p>
        <a href="#/about" className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-red-700 transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg shadow-red-600/30">
          Learn More About Us
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
         <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </div>
    </section>
  );
};

export default Hero;
