import React from 'react';
import { motion } from 'framer-motion';
import {TiArrowForward} from "react-icons/ti"

const Blotic = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 0.1}}
    className='w-full'
>
 <h3 className='flex gap-1 font-medium text-xl font-titleFont text-white'>
    Development and Design Team <span className='text-[#66FCF1] tracking-wide'>@Blotic</span></h3>
    <p className='text-sm mt-1 font-medium text-secondary-white'>1st November 2022 to Present</p>
    <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-white'><span className='text-[#66fcf1]'><TiArrowForward /></span>
        Strategised policies to develop and grow
            community.<br/>
            Contributed in development for the website.
        </li>
        <li className='text-base flex gap-2 text-white'><span className='text-[#66fcf1]'><TiArrowForward /></span>
        Contributed in development for the website.
            Designed Social Media templates <br/>and
            posters to increase social media
            engagement and grow account
        </li>
    </ul>   
</motion.div>
)}

export default Blotic;