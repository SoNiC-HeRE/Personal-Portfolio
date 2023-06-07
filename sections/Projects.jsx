'use client';

import { useState,useEffect } from "react";
import { ProjectCard, TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import {exploreWorlds} from "../constants";

const Explore = () => {
  const [active,setActive] = useState('world-4')

  return(
  <section className={`${styles.paddings}`} id="projects">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Projects" textStyles="text-center" />
      <TitleText title={<>Choose the Project you want <br className="md:block hidden" /> to explore</>} textStyles="text-center" />
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index)=>(
            <ProjectCard
            key={world.id}
            {...world}
            index={index}
            active={active}
            handleClick={setActive}/>
          ))}
      </div>
    </motion.div>
  </section>
)};

export default Explore;
