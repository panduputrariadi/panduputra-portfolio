"use client";
import FooterSection from "@/components/footer/FooterSection";
import HeroSection from "@/components/hero/HeroSection";
import HistorySection from "@/components/history/HistorySection";
import NavbarSection from "@/components/navbar/NavbarSection";
import ProjectSection from "@/components/projects/ProjectSection";
import ServiceSection from "@/components/service/ServiceSection";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="w-full h-full bg-light">
        <NavbarSection />
        <HeroSection />
        <HistorySection />
        <ServiceSection />
        <ProjectSection />
        <FooterSection />
      </main>
    </NextUIProvider>
  );
}
