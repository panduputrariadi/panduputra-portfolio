import { NAV_LINKS, SOCIAL_LINKS } from "@/constant/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const SideBarMenu = () => {
  const pathname = usePathname();
  return (
    <div className="sm:mx-10">
      {NAV_LINKS.map((link, index) => (
        <div key={index} className="my-10">
          <Link
            href={link.href}
            className={`cursor-pointer transition duration-300 ease-in-out hover:text-blue-600 ${
              pathname === link.href ? 'text-blue-600' : ''}`
            }
          >
            {link.label}
          </Link>
          {pathname === link.href && (
            <span className="absolute left-0 bottom-0 w-full h-px transform origin-left scale-x-100 transition-all duration-300 bg-blue-600"></span>
          )}
        </div>
      ))}
      <div className="flex justify-start items-center gap-4">
        {SOCIAL_LINKS.map((link, index) => (
          <div key={index}>
            <Link
              className="w-full lg:justify-start"
              href={link.href}
              style={{ color: "black" }}
            >
              {link.label === "LinkedIn" && (
                <FaLinkedin className="w-6 h-6" style={{ color: "#0077B5" }} />
              )}
              {link.label === "Instagram" && (
                <FaInstagram className="w-6 h-6" style={{ color: "#E4405F" }} />
              )}
              {link.label === "Github" && (
                <FaGithub className="w-6 h-6" style={{ color: "#4078c0" }} />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarMenu;
