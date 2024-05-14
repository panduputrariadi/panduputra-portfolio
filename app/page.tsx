"use client";
import ContactSection from "@/components/contact/ContactSection";
import FooterSection from "@/components/footer/FooterSection";
import HeroSection from "@/components/hero/HeroSection";
import HistorySection from "@/components/history/HistorySection";
import NavbarSection from "@/components/navbar/NavbarSection";
import ProjectSection from "@/components/projects/ProjectSection";
import ServiceSection from "@/components/service/ServiceSection";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="w-full h-full bg-light">
      <HeroSection />
      <HistorySection />
      <ServiceSection />
      <ProjectSection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}
