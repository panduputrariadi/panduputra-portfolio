import React, { useRef } from "react";
import LeftSectionContact from "./LeftSectionContact";
import RightSectionContact from "./RightSectionContact";

const ContactSection = () => {

  return (
    <div className="my-6 mx-10">
      <div className="flex sm:grid-cols-2 items-center gap-16 p-8 w-full rounded-md text-[#333] font-[sans-serif]">
        <LeftSectionContact />
        <RightSectionContact />
      </div>
    </div>
  );
};

export default ContactSection;
