import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariation = (duration) => ({
  intial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <h2 className='text-4xl mx-2 w-10 font-semibold'>KT.</h2>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
        <motion.a
          variants={iconVariation(2.5)}
          intial="initial"
          animate="animate"
          href="https://www.linkedin.com/in/kaushal-tiwari-294628227/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </motion.a>
        <motion.a
          variants={iconVariation(2)}
          intial="initial"
          animate="animate"
          href="https://github.com/Kaushaltiwari27" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </motion.a>
        <motion.a
          variants={iconVariation(4)}
          intial="initial"
          animate="animate"
          href="https://x.com/KaushalTiwari07" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </motion.a>
        <motion.a
          variants={iconVariation(6)}
          intial="initial"
          animate="animate"
          href="https://www.instagram.com/kaushal__27___/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </motion.a>
        <motion.a
          variants={iconVariation(2.5)}
          intial="initial"
          animate="animate"
          href="https://leetcode.com/u/kaushal__27___/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </motion.a>

      </div>

    </nav>
  )
}

export default Navbar
