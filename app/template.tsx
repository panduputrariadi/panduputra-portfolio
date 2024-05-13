"use client";

import FooterSection from "@/components/footer/FooterSection";
import Navbar from "@/components/navbar/NavbarSection";
import { animatePageIn } from "@/utils/animation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn()
  }, [])
  return (
    <main className="w-full h-full">
      <Navbar />
      {children}
      <FooterSection />
    </main>
    
  );
}
