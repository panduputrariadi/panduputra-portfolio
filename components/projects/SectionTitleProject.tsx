import React from "react";
import { motion } from "framer-motion";

const SectionTitleProject = () => {
  return (
    <motion.div
      className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <span className="font-semibold text-lg text-primary mb-2 block">
        My Project
      </span>
      <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
        Get To Know About My Project.
      </h2>
    </motion.div>
  );
};

export default SectionTitleProject;
