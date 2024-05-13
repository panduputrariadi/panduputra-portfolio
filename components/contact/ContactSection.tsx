import React, { useRef } from "react";
import LeftSectionContact from "./LeftSectionContact";
import RightSectionContact from "./RightSectionContact";

const ContactSection = () => {

  return (
    <div className="py-10 mx-10">
      <div className="sm:grid-rows-2 lg:flex items-center gap-16 p-8 w-full rounded-md text-[#333] font-[sans-serif]">
        <LeftSectionContact />
        <RightSectionContact />
      </div>
    </div>
  );
};

export default ContactSection;
