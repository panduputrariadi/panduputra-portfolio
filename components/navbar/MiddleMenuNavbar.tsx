import { NAV_LINKS } from "@/constant/constant";
import Link from "next/link";
import React from "react";

const MiddleMenuNavbar = () => {
  const activePath = typeof window !== 'undefined' && window.location.pathname.startsWith;

  return (
    <div className="flex items-center gap-6 font-bold text-medium uppercase">
      {NAV_LINKS.map((link, index) => (
        <div key={index} className="relative">
          <Link
            href={link.href}
            className={`cursor-pointer transition duration-300 ease-in-out hover:text-blue-600 ${
              activePath && window.location.pathname.startsWith(link.href) ? "text-blue-600" : ""
            }`}
            passHref
          >
            {link.label}
          </Link>
          <span className="absolute left-0 bottom-0 w-full h-px transform origin-left scale-x-0 transition-all duration-300"></span>
        </div>
      ))}
    </div>
  );
};

export default MiddleMenuNavbar;
