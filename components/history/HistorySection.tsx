import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HistorySection = () => {
  return (
    <div id="about" className="bg-light sm:p-10 lg:p-20">
      <motion.div
        className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="font-semibold text-lg text-primary mb-2 block">
          About Me
        </span>
        <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
          Get to know about myself.
        </h2>
      </motion.div>
      <div className="sm:grid sm:grid-cols-1 lg:flex items-center justify-center mx-10">
        <motion.div
          className="flex justify-center lg:w-1/2"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={"/images/person-1.png"}
            width={400}
            height={100}
            alt="my-self"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-xl"
          />
        </motion.div>
        <div className="mt-5 lg:mt-0 lg:w-1/2 lg:ml-10">
          <motion.h2
            className="font-bold text-2xl mb-3 text-center lg:text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Full stack web developer
          </motion.h2>
          <motion.p
            className="mb-5 text-sm text-gray-400 text-center lg:text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Providing Web Solution
          </motion.p>
          <motion.p
            className="text-gray-500 text-justify leading-7 sm:leading-8 lg:leading-10"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Hello there! I am a full stack web developer, and I am very
            passionate and dedicated to my work. Having acquired the skills and
            knowledge necessary to become a successful full stack developer, I
            enjoy every step of the development process, from discussion and
            collaboration.
          </motion.p>
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/about">
              <p className="inline-block mt-5 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                Learn More About Me
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
