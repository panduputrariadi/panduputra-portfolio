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
        <h2 className="text-lg font-extrabold">Email</h2>
        <ul className="mt-3">
          <li className="flex items-center">
            <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="#007bff"
                viewBox="0 0 479.058 479.058"
              >
                <path
                  d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                  data-original="#000000"
                />
              </svg>
            </div>
            <a target="blank" href="#" className="text-[#007bff] text-sm ml-3">
              <small className="block">Mail</small>
              <strong>https://gmail.com</strong>
            </a>
          </li>
        </ul>
      </div>
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
