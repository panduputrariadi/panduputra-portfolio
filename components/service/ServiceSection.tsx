import { SERVICES } from "@/constant/constant";
import React from "react";
import { FiCode, FiLayout, FiMonitor } from "react-icons/fi";
import { motion} from "framer-motion";

const ServiceSection = () => {
  return (
    <div className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <motion.div 
            className="w-full px-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Our Services
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                What myself offer
              </h2>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index} 
              className="w-full md:w-1/2 lg:w-1/3 px-4"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
                  {service.label === "Monitor" && (
                    <FiMonitor className="w-6 h-6" style={{ color: "white" }} />
                  )}
                  {service.label === "Layout" && (
                    <FiLayout className="w-6 h-6" style={{ color: "white" }} />
                  )}
                  {service.label === "Code" && (
                    <FiCode className="w-6 h-6" style={{ color: "white" }} />
                  )}
                </div>
                <h4 className="font-semibold text-xl text-dark mb-3">
                  {service.title}
                </h4>
                <p className="text-body-color">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
