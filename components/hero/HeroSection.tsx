import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100"
    >
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10"
          >
            I Made Pandu Putra Riadi
            <p>
              <span className="text-indigo-700">
                <Typewriter
                  words={[
                    "Software Developer",
                    "Front End Developer",
                    "Back End Developer",
                  ]}
                  loop={0} // 0 = infinite
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg"
          >
            As an experienced software developer, I excel in solving various
            issues that clients may encounter. With a deep understanding of
            technology and software development methodologies, I can deliver
            innovative and effective solutions. From programming to design, I am
            committed to providing solutions that meet client needs and produce
            high-quality software products.
          </motion.p>
          <Link href="/about">
            <p className="sm:px-3 lg:mt-5 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
              Download CV
            </p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
