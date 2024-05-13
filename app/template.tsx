"use client";

import { animatePageIn } from "@/utils/animation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn()
  }, [])
  return (
    <div className="">
      {children}
    </div>
  );
}
