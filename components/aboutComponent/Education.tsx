import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div id="about" className="bg-light sm:p-10 lg:p-20">
      <motion.div
        className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="font-semibold text-lg text-primary mb-2 block">
          Education
        </span>
        <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 text-black">
          Explore My Educational Journey
        </h2>
      </motion.div>
      <div className="flex items-center justify-center px-6 md:px-60">
        <div className="space-y-6 border-l-2 border-dashed">
          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <motion.div
              className="ml-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-bold text-blue-500">SDPN Tulang Ampiang</h4>
              <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
                Embarking on my formal education journey at SDPN Tulangampiang,
                located on Jalan Merthayasa, Denpasar Utara, Bali, where the
                foundational pillars of my education were firmly established.
              </p>
              <span className="mt-1 block text-sm font-semibold text-blue-500">
                2008
              </span>
            </motion.div>
          </div>
          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <motion.div
              className="ml-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-bold text-blue-500">SMPN 4 DENPASAR</h4>
              <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
                It was during my time at SMPN 4 Denpasar, located on Jalan
                Gunung Agung, Denpasar, Bali, that my fascination with computers
                ignited. I delved into various aspects of computer science,
                exploring programming languages and diving into the world of
                technology. This passion continued to grow as I progressed
                through my education.
              </p>
              <span className="mt-1 block text-sm font-semibold text-blue-500">
                2014
              </span>
            </motion.div>
          </div>
          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <motion.div
              className="ml-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-bold text-blue-500">
                SMA DWIJENDRA DENPASAR
              </h4>
              <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
                Transitioning to SMA Dwijendra, situated on Jalan Kamboja,
                Denpasar Utara, Bali, I found myself torn between my passion for
                computers and my interest in the natural sciences. While I
                pursued the science stream (IPA) in high school, my love for
                technology never waned.
              </p>
              <span className="mt-1 block text-sm font-semibold text-blue-500">
                2017
              </span>
            </motion.div>
          </div>
          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <motion.div
              className="ml-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-bold text-blue-500">ITB STIKOM BALI</h4>
              <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
                Upon entering ITB STIKOM Bali, located on Jalan Raya Puputan
                No.86, Renon, Denpasar Timur, Bali, for my tertiary education, I
                made the definitive decision to pursue my passion for computers.
                I specialized in web development, immersing myself in the
                intricacies of coding, design, and creating user-friendly
                interfaces. My journey in computer science has been a fulfilling
                one, marked by continuous learning and growth.
              </p>
              <span className="mt-1 block text-sm font-semibold text-blue-500">
                2020
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
