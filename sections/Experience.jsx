'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, motionVariants } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import { useState } from "react";
import GSSoC from "./work/GSSoC";
import GSoC from "./work/GSoC";
import Gfg from "./work/Gfg";
import Blotic from "./work/Blotic";
import Hacktoberfest from "./work/Hacktoberfest";
import Tp from "./work/Tp";
import Blogger from "./work/Blogger";

const Experience = () => {
  const [workGSoC,setworkGSoC] = useState(true);
  const [workBlotic,setworkBlotic] = useState(false);
  const [workGfg,setworkGfg] = useState(false);
  const [workHacktoberfest,setworkHacktoberfest] = useState(false);
  const [worktandp,setworktandp] = useState(false);
  const [workblogger,setworkblogger] = useState(false);
  const [workGSSoC,setworkGSSoC] = useState(false);

  const handleGSoC = () => { 
    setworkGSoC(true);
    setworkGSSoC(false);
    setworkblogger(false);
    setworkBlotic(false);
    setworkGfg(false);
    setworkHacktoberfest(false);
    setworktandp(false);
  };

  const handleGSSoC = () => { 
    setworkGSoC(false);
    setworkGSSoC(true);
    setworkblogger(false);
    setworkBlotic(false);
    setworkGfg(false);
    setworkHacktoberfest(false);
    setworktandp(false);
  };

  const handleBlogger = () => { 
    setworkGSoC(false);
    setworkGSSoC(false);
    setworkblogger(true);
    setworkBlotic(false);
    setworkGfg(false);
    setworkHacktoberfest(false);
    setworktandp(false);
  };

  const handleBlotic = () => { 
    setworkGSoC(false);
    setworkGSSoC(false);
    setworkblogger(false);
    setworkBlotic(true);
    setworkGfg(false);
    setworkHacktoberfest(false);
    setworktandp(false);
  };

  const handleGfg = () => { 
    setworkGSoC(false);
    setworkGSSoC(false);
    setworkblogger(false);
    setworkBlotic(false);
    setworkGfg(true);
    setworkHacktoberfest(false);
    setworktandp(false);
  };

  const handleHacktoberfest = () => { 
    setworkGSoC(false);
    setworkGSSoC(false);
    setworkblogger(false);
    setworkBlotic(false);
    setworkGfg(false);
    setworkHacktoberfest(true);
    setworktandp(false);
  };

  const handletandp = () => { 
    setworkGSoC(false);
    setworkGSSoC(false);
    setworkblogger(false);
    setworkBlotic(false);
    setworkGfg(false);
    setworkHacktoberfest(false);
    setworktandp(true);
  };

  return (
  <section className={`${styles.paddings} relative z-10`} id="exp">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false',amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| More About Me" textStyles="text-center" />
      <TitleText title="My Experience" textStyles="text-center" />
    <div className="items-center mt-4 md:w-full md:ml-4 md:mt-20 md:ml-48 flex flex-col md:flex-row gap-16">
      <ul className="w-48 gap-4 mt-12 md:w-48 flex flex-col text-center md:justify-start">
        <li onClick={handleGSoC} className="border-l-2 border-l-[#66fcf1] text-white bg-transparent hover:bg-[#66fcf1] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
          GSoC
        </li>
        <li onClick={handleGSSoC} className="border-l-2 border-l-[#66fcf1] text-white bg-transparent hover:bg-[#66fcf1] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
          GSSoC
        </li>
        <li onClick={handleBlogger} className="border-l-2 border-l-[#66fcf1] text-white bg-transparent hover:bg-[#66fcf1] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
          Blogger
        </li>
        <li onClick={handleHacktoberfest} className="border-l-2 border-l-[#66fcf1] text-white bg-transparent hover:bg-[#66fcf1] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
          Hacktoberfest
        </li>
        <li onClick={handleBlotic} className="border-l-2 border-l-[#66fcf1] text-white bg-transparent hover:bg-[#66fcf1] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
          Blotic
        </li>
        <li onClick={handleGfg} className="border-l-2 border-l-[#66fcf1] text-white bg-transparent hover:bg-[#66fcf1] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
          GeeksforGeeks
        </li>
        <li onClick={handletandp} className="border-l-2 border-l-[#66fcf1] text-white bg-transparent hover:bg-[#66fcf1] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
          T&P Cell
        </li>
      </ul>
      {workGSoC && <GSoC />}
      {workGSSoC && <GSSoC />}
      {workblogger && <Blogger />}
      {workBlotic && <Blotic />}
      {workGfg && <Gfg />}
      {workHacktoberfest && <Hacktoberfest />}
      {worktandp && <Tp />}

    </div>
    </motion.div>
  </section>
)};

export default Experience;
