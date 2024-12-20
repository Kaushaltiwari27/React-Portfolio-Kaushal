
import React from "react";
import profilePic from "../assests/KevinRushProfile.jpg"; 
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 }, 
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)} // Fix: typo in 'varients'
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Kaushal Tiwari
            </motion.h1>
          </div>
          <motion.span
            variants={container(0.2)} // Add a delay to the animation
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
          >
            Full Stack Engineer
          </motion.span>
          <motion.p
            variants={container(0.4)} // Add a delay to the animation
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter"
          >
            I am a passionate full stack developer with a knack for crafting
            robust and scalable web applications. With 5 years of hands-on
            experience, I have honed my skills in front-end technologies like
            React and Next.js, as well as back-end technologies like Node.js,
            MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise
            to create innovative solutions that drive business growth and
            deliver exceptional user experiences
          </motion.p>
        </div>
        <div className="lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:0.5}}
            className="h-[500px] w-[500px] rounded-[200px]"
             src={profilePic} alt="Kaushal Tiwari" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;