'use client';


import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiHashnode, SiGmail } from "react-icons/si";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import { motion } from "framer-motion";
const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
    id="contact"
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-[#66FCF1]">
          Drop a Hi !
        </h4>
        <a href="mailto:sriyanshshivam1@gmail.com">
        <button id="connect" type="button" className="flex items-center h-fit py-4 px-6 bg-[#66FCF1] rounded-[32px] gap-[12px]">
        <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
  <span>Connect Here</span>
        </button>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-[#66FCF1] opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
              SoNiC
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">Copyright © 2021 - 2023 SoNiC. All rights reserved.</p>
          <div className="flex gap-4 text-white">
          <a href="https://github.com/SoNiC-HeRE">
              <motion.div whileHover={{ color: "#66FCF1" }}>
                <FaGithub size={28} />
              </motion.div>
            </a>
            <a href="https://twitter.com/ShivamSriyansh">
              <motion.div whileHover={{ color: "#66FCF1" }}>
                <FaTwitter size={28} />
              </motion.div>
            </a>
            <a href="https://sonichere.hashnode.dev/">
              <motion.div whileHover={{ color: "#66FCF1" }}>
                <SiHashnode size={28} />
              </motion.div>
            </a>
            <a href="https://www.linkedin.com/in/sriyansh-shivam/">
              <motion.div whileHover={{ color: "#66FCF1" }}>
                <FaLinkedinIn size={28} />
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
