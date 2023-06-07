'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { MoreInfo, TitleText, TypingText } from "../components";
import { newFeatures } from "../constants";

const SkillsTwo = () => (
<section className={`${styles.paddings} relative z-10`} id="skills_two">
    <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{once: 'false', amount: 0.25}}
          className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
    <motion.div
      variants={fadeIn('left','tween',0.2,1)}
      className="flex-[0.75] flex justify-center flex-col"
    >
      <TypingText
        title="|My Skills"
      />
      <TitleText title="Designer" />
      <motion.div className="mt-[48px] flex flex-wrap justify-between gap-[24px]"
      initial="hidden"
      whileInView="show"
      >
        {newFeatures.map((feature)=>(
          <MoreInfo
            key={feature.title}
           {...feature}
          />
        ))}
        </motion.div>
    </motion.div>
    <motion.div
      variants={planetVariants('right')}
      className={`flex-1 ${styles.flexCenter}`}
      initial="hidden"
      whileInView="show"
    >
      <img 
        src="/design.png"
        alt="Whats-new"
        className="w-[90%] h-[90%] object-contain"
      />
    </motion.div>
    </motion.div>
  </section>
);

export default SkillsTwo;
