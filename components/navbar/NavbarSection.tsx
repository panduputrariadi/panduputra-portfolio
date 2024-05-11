import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constant/constant";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  return (
    <main className="mb-[88px]">
      <nav className="fixed top-0 left-0 right-0 z-20 bg-white shadow-md px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Link href={"/"} className="text-4xl font-mono">
              logo
            </Link>
          </section>
        </div>

        {/* menu navbar */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link, index) => (
            <div key={index} className="">
              <Link color="foreground" href={link.href}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {NAV_LINKS.map((link, index) => (
              <div key={index}>
                <Link color="foreground" href={link.href}>
                  {link.label}
                </Link>
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
                      <FaLinkedin
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
                  </Link>
                </div>
              ))}
            </div>
            
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link, index) => (
              <div key={index} className="hidden lg:flex">
                <Link
                  className="flex w-full justify-center lg:justify-start"
                  href={link.href}
                  style={{ color: "black" }}
                >
                  {link.label === "LinkedIn" && (
                    <FaLinkedin
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
                </Link>
              </div>
            ))}
          </div>
        </section>
      </nav>
    </main>
  );
}
