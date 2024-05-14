import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";
import MiddleMenuNavbar from "./MiddleMenuNavbar";
import EndMenuNavbar from "./EndMenuNavbar";
import SideBarMenu from "./SideBarMenu";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  return (
    <main className="">
      <nav className="bg-white shadow-md px-20 py-6 flex justify-between items-center">
        <div className="flex gap-8">
          <section className="flex items-center gap-4">

            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />

            <Link href={"/"} className="text-4xl">
              Pandu<span className="text-blue-600">Putra</span>
            </Link>
          </section>
        </div>
        
        <MiddleMenuNavbar />

        <div className={clsx("lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all fixed h-full w-full ", isSideMenuOpen && "translate-x-0")}>
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />
            <SideBarMenu />              
          </section>
        </div>

        <EndMenuNavbar />
      </nav>
    </main>
  );
}
