'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import {staggerContainer } from "../utils/motion";
import { BlogCard, TitleText, TypingText } from "../components";
import { insights } from "../constants";

const Blogs = () => (
  <section className={`${styles.paddings} relative z-10`} id="blogs">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| My Hobby" textStyles="text-center" />
      <TitleText title="My Blogs" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]"
      >
        {insights.map((insight,index)=>(
          <BlogCard key={`insight-${index}`}{...insight}
          index={index+1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Blogs;
