"use client";

import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiHashnode, SiGmail } from "react-icons/si";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { textVariant } from "../utils/motion";

const words = ["Hi!, I'm a", "Developer", "Designer", "Freelancer"];
const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((index + 1) % words.length);
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 30 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <section className={`${styles.yPaddings}`} id="#" >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex items-center  justify-center flex-col md:flex-row relative z-10">
          <div className=" text-center md:text-left md:w-5/12 md:mr-8">
            <motion.h1
              variants={textVariant(1.1)}
              className={`${styles.heroHeading} sm:text-[48px]`}
            >
              {words[index].substring(0, subIndex)}
              {blink ? "|" : " "}
            </motion.h1>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={slideIn("left", "tween", 0.7, 2)}
              transition={{ type: "spring", stiffness: 120, duration: 1 }}
              className="mt-8 flex flex-row items-center md:flex-row md:items-end"
            >
              <a href="#projects"><button
                type="button"
                className="px-4 py-2 mb-10 ml-0 mt-2 md:px-10 md:py-4 bg-[black] text-[#66FCF1] rounded-lg mr-4 border hover:bg-gray-800 hover:text-white"
              >
                Projects<span className="ml-2 md:ml-4"> 💻 </span>
              </button></a>
              <a href="mailto:sriyanshshivam1@gmail.com"><button
                id="resume"
                type="button"
                className="px-4 py-2 mb-10 mt-2 md:px-10 md:py-4 bg-[#OB0C10] text-black rounded-lg border"
              >
                Hire Me! <span className="ml-2 md:ml-4"> 💸 </span>
              </button></a>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={slideIn("up", "tween", 0.7, 2)}
            className="hidden md:flex flex-col gap-8 mr-8 ml-10 text-white"
          >
            <a href="https://github.com/SoNiC-HeRE">
              <motion.div whileHover={{ scale: 1.8, color: "#66fcf1" }} whileTap={{ scale: 0.8 }}>
                <FaGithub />
              </motion.div>
            </a>
            <a href="https://twitter.com/ShivamSriyansh">
              <motion.div whileHover={{ scale: 1.8, color: "#66fcf1" }} whileTap={{ scale: 0.8 }}>
                <FaTwitter />
              </motion.div>
            </a>
            <a href="https://sonichere.hashnode.dev/">
              <motion.div whileHover={{ scale: 1.8, color: "#66fcf1" }} whileTap={{ scale: 0.8 }}>
                <SiHashnode />
              </motion.div>
            </a>
            <a href="mailto:sriyanshshivam1@gmail.com">
              <motion.div whileHover={{ scale: 1.8, color: "#66fcf1" }} whileTap={{ scale: 0.8 }}>
                <SiGmail />
              </motion.div>
            </a>
            <a href="https://www.linkedin.com/in/sriyansh-shivam/">
              <motion.div whileHover={{ scale: 1.8, color: "#66fcf1" }} whileTap={{ scale: 0.8 }}>
                <FaLinkedinIn />
              </motion.div>
            </a>
          </motion.div>
          <motion.img
            src="/developer.png"
            alt="Developer"
            className="mt-4 md:ml-28 w-1/3 h-auto"
            style={{
              boxShadow: "0 0 0 4px #66FCF1",
              border: "0px solid #66FCF1",
              transition: "all 0.2s ease-out", 
            }}
            initial="hidden"
            whileInView="show"
            variants={slideIn("right", "tween", 0.7, 2)}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 10px 0px #66FCF1", 
              transition: { duration: 0.3 }, 
              zIndex: 1, 
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
