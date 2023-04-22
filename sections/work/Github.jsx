
import React from 'react';
import { motion } from 'framer-motion';
import {TiArrowForward} from "react-icons/ti"
const GitHub = () => {
  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.1}}
        className='w-full'
    >
     <h3 className='flex gap-1 font-medium text-xl font-titleFont text-white'>
        Open Source Contributor <span className='text-[#66FCF1] tracking-wide'>@GitHub</span></h3>
        <p className='text-sm mt-1 font-medium text-secondary-white'>1st November 2022 to Present</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-white'><span className='text-[#66fcf1]'><TiArrowForward /></span>
            Contributing to various projects of 
            different tech stacks.
            </li>
            <li className='text-base flex gap-2 text-white'><span className='text-[#66fcf1]'><TiArrowForward /></span>
            Majorily to Web-Development and
            blockchain related projects.
            </li>
        </ul>   
    </motion.div>
  )
}

export default GitHub