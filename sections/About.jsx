'use client';

import { TypingText } from "../components/CustomTexts"
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        initial="hidden"
        whileInView="show"
        variants={fadeIn('up','tween',0.2,1)}
        className="mt-[8px] font-normal sm:text-[24px] text-[20px] text-center text-secondary-white"
      >
        I am <span className="font-extrabold text-[#66FCF1]" >Sriyansh Shivam</span> from Pune, India. I am an aspiring <span className="font-extrabold text-[#66FCF1]">software developer</span> and a sophomore
pursuing a bachelor's in computer science and engineering. A <span className="font-extrabold text-[#66FCF1]">team player</span> and a <span className="font-extrabold text-[#66FCF1]">problem
solver</span>.A natural leader and a good communicator. I’m also a part of several cells in my
university both <span className="font-extrabold text-[#66FCF1]">technical</span> and <span className="font-extrabold text-[#66FCF1]">non-technical</span>.Learning something new every day is something I seek and has led me to become a self-taught
<span className="font-extrabold text-[#66FCF1]"> Graphic</span> and <span className="font-extrabold text-[#66FCF1]">UI/UX designer</span>. I like interacting with new people and exploring new domains of
technology. An <span className="font-extrabold text-[#66FCF1]">open source enthusiast</span> and an intermediate <span className="font-extrabold text-[#66FCF1]">web developer</span>. When not working
you could find me listening to songs.
      </motion.p>

      <motion.img
        variants={fadeIn('up','tween',0.3,1)}
        src="/arrow-down.svg"dsdsds
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
