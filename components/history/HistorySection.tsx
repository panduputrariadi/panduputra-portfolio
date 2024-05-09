import { SERVICES } from "@/constant/constant";
import Image from "next/image";
import React from "react";
import { FiCode, FiLayout, FiMonitor } from "react-icons/fi";

const HistorySection = () => {
  return (
    
    <div id="about" className="bg-light sm:p-10 lg:p-20">
      <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
        <span className="font-semibold text-lg text-primary mb-2 block">
        About Me
        </span>
        <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
          Get to know about myself.
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="sm:columns-2">
          <Image
            src={"/images/person-1.png"}
            alt="person"
            width={400}
            height={400}
          />
          <div className="P-10">
            <h2 className="text-bold text-2xl mb-3">
              Full Stack Web Developer
            </h2>
            <p className="mb-5 text-sm text-gray-400">
              Providing web solutions
            </p>
            <p className="text-gray-500 text-justify leading-10">
              Hello there! I am a full stack web developer, and I am very
              passionate and dedicated to my work. Having acquired the skills
              and knowledge necessary to become a successful full stack
              developer, I enjoy every step of the development process, from
              discussion and collaboration.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HistorySection;
