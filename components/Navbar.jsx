'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <img
          src="/sonic-icon.svg"
          alt="search"
          className="w-[36px] h-[36px] object-contain "
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-[#66FCF1]">
          PORTFOLIO
        </h2>
        <motion.img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain cursor-pointer"
          onClick={handleMenuClick}
        />
      </div>
      <AnimatePresence>
      {isMenuOpen && (
        <motion.div
        className="fixed top-0 left-0 w-full h-full glassmorphism-high z-50 flex justify-center items-center text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
        onClick={handleMenuClick}
        >
          <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
            <motion.a href="#" className="block py-2 text-black font-bold  mb-8"
            whileHover={{scale: 1.1, color: "#66fcf1"}}>
              Home
            </motion.a>
            <motion.a href="#about" className="block py-2 text-black font-bold  mb-8"
            whileHover={{scale: 1.1, color: "#66fcf1"}}>
              About Me
            </motion.a>
            <motion.a href="#projects" className="block py-2 text-black font-bold  mb-8"
            whileHover={{scale: 1.1, color: "#66fcf1"}}>
              Projects
            </motion.a>
            <motion.a href="#skill_one" className="block py-2 text-black font-bold  mb-8"
            whileHover={{scale: 1.1, color: "#66fcf1"}}>
              Skills
            </motion.a>
            <motion.a href="#exp" className="block py-2 text-black font-bold  mb-8"
            whileHover={{scale: 1.1, color: "#66fcf1"}}>
              Experience
            </motion.a>
            <motion.a href="#blogs" className="block py-2 text-black font-bold  mb-8"
            whileHover={{scale: 1.1, color: "#66fcf1"}}>
              Blogs
            </motion.a>
            <motion.a href="#certification" className="block py-2 text-black font-bold  mb-8"
            whileHover={{scale: 1.1, color: "#66fcf1"}}>
              Certifications
            </motion.a>
            <motion.a href="#contact" className="block py-2 text-black font-bold  mb-8"
            whileHover={{scale: 1.1, color: "#66fcf1"}}>
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
