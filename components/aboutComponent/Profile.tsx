import React from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const Profile = () => {
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
      <div className="container mx-auto">
        <div className="sm:columns-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={"/images/person-1.png"}
              alt="person"
              width={400}
              height={400}
            />
          </motion.div>

          <div className="P-10">
            <motion.h2
              className="text-bold text-2xl mb-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Full Stack Web Developer
            </motion.h2>
            <motion.p
              className="mb-5 text-sm text-gray-400"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Providing web solutions
            </motion.p>
            <motion.p
              className="text-gray-500 text-justify leading-10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hello there! I am a full stack web developer, and I am very
              passionate and dedicated to my work. Having acquired the skills
              and knowledge necessary to become a successful full stack
              developer, I enjoy every step of the development process, from
              discussion and collaboration.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
