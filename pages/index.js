'use client';

import { useState, useEffect } from 'react';
import { Footer, Navbar } from '../components';
import Blogs from '../sections/Blogs';
import Projects from '../sections/Projects';
import SkillsOne from '../sections/Skills_1';
import { About, Hero } from '../sections';
import Loader from '../sections/Loader';
import SkillsTwo from '../sections/Skills_2';
import Certification from '../sections/Certification';
import Experience from '../sections/Experience';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
        <Projects />
      </div>
      <div className='relative'>
        <SkillsOne />
        <div className='gradient-03 z-0'/>
         <SkillsTwo />
      </div>
      <div className='relative'>
      <Experience />
      <div className="gradient-02 z-0" />
      </div>
      <div className='relative'>
        <Blogs />
        <div className='gradient-04 z-0'/>
        <Certification />
      </div>
      <Footer />
    </div>
  );
};

export default Page;