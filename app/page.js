'use client';

import { useState, useEffect } from 'react';
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import Loader from '../sections/Loader';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the loader to show
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="bg-[#0B0C10] paper-texture overflow-hidden">
      {isLoading && <Loader />}
      <Navbar />
      <Hero />
      <div className='relative'>
        <About />
        <div className='gradient-03 z-0'/>
        <Explore />
      </div>
      <div className='relative'>
        <GetStarted />
        <div className='gradient-03 z-0'/>
        <WhatsNew />
      </div>
      <World />
      <div className='relative'>
        <Insights />
        <div className='gradient-04 z-0'/>
        <Feedback />
      </div>
      <Footer />
    </div>
  );
};

export default Page;