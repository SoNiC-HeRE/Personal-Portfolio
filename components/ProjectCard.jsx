'use client';

import {FaGithub} from "react-icons/fa"
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({id,imgUrl,title,index,active,handleClick,githublink,livelink}) => (
  <motion.div
    variants={fadeIn('right','spring',index*0.5,0.75)}
    className={`relative ${ active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={()=>handleClick(id)}
  >
    <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px]"/>
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-[#0b0c10] absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <a href={githublink}>
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
          <FaGithub className="w-1/2 h-1/2 object-contain fill-white hover:fill-black" />
        </div></a>
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
          GitHub
        </p>
        <a href={livelink}><h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white hover:text-black">
          {title}
        </h2></a>
      </div>
    )}
  </motion.div>
);

export default ProjectCard;
