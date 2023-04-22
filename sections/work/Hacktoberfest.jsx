import React from 'react';
import { motion } from 'framer-motion';
import {TiArrowForward} from "react-icons/ti"

const Hacktoberfest = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 0.1}}
    className='w-full'
>
 <h3 className='flex gap-1 font-medium text-xl font-titleFont text-white'>
    Web Developer <span className='text-[#66FCF1] tracking-wide'>@Hacktoberfest</span></h3>
    <p className='text-sm mt-1 font-medium text-secondary-white'>4th October 2022 to 30th October 2022</p>
    <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-white'><span className='text-[#66fcf1]'><TiArrowForward /></span>
        Participated in Hacktoberfest and
            successfully completed requirements.
            <br/>Gained knowledge about Open Source
            Contributions.
        </li>
        <li className='text-base flex gap-2 text-white'><span className='text-[#66fcf1]'><TiArrowForward /></span>
        Made contributions to different projects.
            Gained hands-on knowledge <br/>on Git and
            GitHub and different tech-stack.
        </li>
    </ul>   
</motion.div>
  )
}

export default Hacktoberfest