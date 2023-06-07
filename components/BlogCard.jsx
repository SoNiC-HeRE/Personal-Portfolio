'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const BlogCard = ({imgUrl,title,subtitle,index,hyperl}) => (
  <motion.div
  variant={fadeIn('up','spring', index*0.5,1)}
  className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="blog-01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
    <a href={hyperl}><motion.h4 className="font-normal lg:text-[42px] text-[26px] text-[#45A29E]"
    whileHover={{scale: 1.1, color: "#66fcf1"}}
    >
        {title}
      </motion.h4>
      </a>
      <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
        {subtitle}
      </p>
    </div>
    <a href={hyperl}>
    <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-[#66FCF1]">
      <motion.img
        src="arrow.svg"
        alt="arrow"
        className="w-[40%] h-[40%] object-contain"
        whileHover={{scale: 0.8}}
      />
    </div>
    </a>
  </motion.div>
);

export default BlogCard;
