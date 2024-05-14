import React, { useRef } from "react";
import LeftSectionContact from "./LeftSectionContact";
import RightSectionContact from "./RightSectionContact";
import { motion} from "framer-motion";
const ContactSection = () => {

  return (
    <div className="py-10 mx-10">
      <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
              Contact
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
              Lets Talk About Your Needs
            </h2>
          </div>
        </motion.div>
      <div className="sm:grid-rows-2 lg:flex items-center gap-16 p-8 w-full rounded-md text-[#333] font-[sans-serif]">
        <LeftSectionContact />
        <RightSectionContact />
      </div>
    </div>
  );
};

export default ContactSection;
