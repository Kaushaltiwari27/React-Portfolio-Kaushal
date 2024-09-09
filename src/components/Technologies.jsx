import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { animate, motion } from "framer-motion";
// import { BiLogoPostgresql } from 'react-icons/bi';

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

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h2 className='my-20 text-center text-4xl'>Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariation(2.5)}
                    intial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariation(3)}
                    intial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-7xl " />
                </motion.div>
                <motion.div
                    variants={iconVariation(4)}
                    intial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariation(6)}
                    intial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiRedis className="text-7xl text-red-700" />
                </motion.div>
                <motion.div
                    variants={iconVariation(2.5)}
                    intial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-400" />
                </motion.div>
                {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className="text-7xl text-cyan-400"/>
        </div> */}
            </div>
        </div>
    )
}

export default Technologies