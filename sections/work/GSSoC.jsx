import React from 'react';
import { motion } from 'framer-motion';
import {TiArrowForward} from "react-icons/ti";

const GSSoC = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 0.1}}
    className='w-full'
>
 <h3 className='flex gap-1 font-medium text-xl font-titleFont text-white'>
    OpenSource Contributor<span className='text-[#66FCF1] tracking-wide'>@GirlScript Foundation</span></h3>
    <p className='text-sm mt-1 font-medium text-secondary-white'>5th May 2023 to Present</p>
    <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-white'><span className='text-[#66fcf1]'><TiArrowForward /></span>
        Selected as a GSSoC Contributor to contribute to various projects
        </li>
        <li className='text-base flex gap-2 text-white'><span className='text-[#66fcf1]'><TiArrowForward /></span>
        Tech Involved: React.js,Node.js,Express.js,HTML,CSS,JavaScript
        </li>
    </ul>   
</motion.div>
  )
}

export default GSSoC