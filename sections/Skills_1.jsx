'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import {staggerContainer,fadeIn, planetVariants} from "../utils/motion";
import { SkillsInfo, TitleText, TypingText } from "../components";
import { startingFeatures } from "../constants";

const SkillsOne = () => (
  <section className={`${styles.paddings} relative z-10`} id="skills_one">
    <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{once: 'false', amount: 0.25}}
          className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
    <motion.div
      variants={planetVariants('left')}
      className={`flex-1 ${styles.flexCenter}`}
      initial="hidden"
      whileInView="show"
    >
      <img 
        src="/desktop.png"
        alt="get-started"
        className="w-[90%] h-[90%] object-contain"
      />
    </motion.div>
    <motion.div
      variants={fadeIn('left','tween',0.2,1)}
      className="flex-[0.75] flex justify-center flex-col"
    >
      <TypingText
        title="|My Skills"
      />
      <TitleText title="Developer" />
      <motion.div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]"
      initial="hidden"
      whileInView="show"
      >
        {startingFeatures.map((feature, index)=>(
          <SkillsInfo
            key={feature}
            number={index+1}
            text={feature}
          />
        ))}
      </motion.div>
    </motion.div>
    </motion.div>
  </section>
);

export default SkillsOne;
