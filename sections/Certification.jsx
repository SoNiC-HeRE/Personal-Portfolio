'use client';


import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn,staggerContainer,zoomIn } from "../utils/motion";
import {TitleText, TypingText } from "../components";
const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`} id="certification">
    <TypingText title="| My Recent" textStyles="text-center" />
    <TitleText title="Certification" textStyles="text-center"/>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6 mt-[50px]`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2,1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#66fcf1] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-[#66FCF1]">
            Career Essentials
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
            Microsoft
          </p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-secondary-white">
        Career Essentials in Software Development by Microsoft. Discover the skills needed for a career in software development. Learn the core concepts and structure of programming languages and learn how they are applied.
        </p>
      </motion.div>
<motion.div
  variants={fadeIn('left','tween',0.2,1)}
  className="relative flex-1 flex justify-center items-center"
  whileHover={{ scale: 0.98 }}
>
  <div className="relative rounded-[40px] overflow-hidden w-full lg:h-[610px] h-auto min-h-[210px]">
    <motion.div
      className="absolute inset-0"
    >
      <img 
        src="/microsoft.jpg"
        alt="microsoft"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 flex glassmorphism justify-center items-center text-black font-bold text-2xl"
    >
      <a href="https://www.linkedin.com/learning/certificates/56f1ebb0f57272ee69f3e008ebdc8d21cd002be7058ef15dae5ac6d5968618a0">Verify Certification</a>
    </motion.div>
  </div>
</motion.div>

    </motion.div>
  </section>
);

export default Feedback;
