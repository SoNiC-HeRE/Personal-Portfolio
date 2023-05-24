
import React from 'react';
import { motion } from 'framer-motion';
import {TiArrowForward} from "react-icons/ti"
const GSoC = () => {
  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.1}}
        className='w-full'
    >
     <h3 className='flex gap-1 font-medium text-xl font-titleFont text-white'>
        GSoC Intern<span className='text-[#66FCF1] tracking-wide'>@GNOME Foundation</span></h3>
        <p className='text-sm mt-1 font-medium text-secondary-white'>5th May 2023 to Present</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-white'><span className='text-[#66fcf1]'><TiArrowForward /></span>
            Selected as a GSoC Intern to contribute to the project <br/>"Make GNOME demos and examples for Workbench project"
            </li>
            <li className='text-base flex gap-2 text-white'><span className='text-[#66fcf1]'><TiArrowForward /></span>
            Tech Involved: GTK,GJS,GIO,GLib and Bash
            </li>
        </ul>   
    </motion.div>
  )
}

export default GSoC