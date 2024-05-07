import { SOCIAL_LINKS } from "@/constant/constant";
import { NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className="flex items-end w-full bg-white">
      <footer className="w-full text-gray-700 bg-gray-100 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              <svg
                className="w-auto h-5 text-gray-900 fill-current"
                viewBox="0 0 202 69"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </a>
            <p className="mt-2 text-sm text-gray-500">Design, Code and Ship!</p>
            <div className="mt-4">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                {SOCIAL_LINKS.map((link, index) => (
                  <div key={index} className="hidden m-3 lg:flex">
                    {link.label === "LinkedIn" && (
                      <FaLinkedinIn
                        className="w-6 h-6"
                        style={{ color: "#0077B5" }}
                      />
                    )}
                    {link.label === "Instagram" && (
                      <FaInstagram
                        className="w-6 h-6"
                        style={{ color: "#E4405F" }}
                      />
                    )}
                    {link.label === "Github" && (
                      <FaGithub
                        className="w-6 h-6"
                        style={{ color: "#4078c0" }}
                      />
                    )}
                  </div>
                ))}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                About
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link
                    href={"/"}
                    className="text-gray-500 cursor-pointer hover:text-gray-900"
                  >
                    Profile
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href={"/"}
                    className="text-gray-500 cursor-pointer hover:text-gray-900"
                  >
                    Education
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                Service
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link
                    href={"/"}
                    className="text-gray-500 cursor-pointer hover:text-gray-900"
                  >
                    Design Web
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href={"/"}
                    className="text-gray-500 cursor-pointer hover:text-gray-900"
                  >
                    Endpoint API
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                Project
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link
                    href={"/"}
                    className="text-gray-500 cursor-pointer hover:text-gray-900"
                  >
                    Information System
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href={"/"}
                    className="text-gray-500 cursor-pointer hover:text-gray-900"
                  >
                    API
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                Contact
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Send Me an Email
                  </a>
                </li>
                
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    +6285-1576-22179
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
