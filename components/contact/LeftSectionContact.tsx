import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/constant/constant";

const LeftSectionContact = () => {
  return (
    <motion.div
      className="text-bold text-2xl mb-3"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h1 className="text-3xl font-extrabold">Lets Talk</h1>
      <p className="text-sm text-gray-400 mt-3">
        Have some big idea or brand to develop and need help? Then reach out we
        love to hear about your project and provide help.
      </p>
      <div className="mt-12">
        <h2 className="text-lg font-extrabold">Socials</h2>
        <ul className="flex mt-3 space-x-4">
          {SOCIAL_LINKS.map((social, index) => (
            <motion.li
              key={index}
              className="bg-white h-10 w-10 rounded-full flex items-center justify-center shrink-0"
              whileHover={{ y: -5 }}
            >
              <a href={social.href}>
                {social.label === "LinkedIn" && (
                  <FaLinkedin
                    className="w-6 h-6"
                    style={{ color: "#0077B5" }}
                  />
                )}
                {social.label === "Instagram" && (
                  <FaInstagram
                    className="w-6 h-6"
                    style={{ color: "#E4405F" }}
                  />
                )}
                {social.label === "Github" && (
                  <FaGithub className="w-6 h-6" style={{ color: "#4078c0" }} />
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default LeftSectionContact;
