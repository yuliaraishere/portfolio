"use client";

import HomeScreen from "@/app/pages/homescreen";
import ThreeDCard from "@/app/pages/projects";
import About from "@/app/pages/about";
import ContactForm from "./pages/contact";
import { Experience } from "./pages/experience";
import { TechLoop } from "./pages/techloop";

import ReactGA from "react-ga4";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    ReactGA.initialize("G-PYQ50G2GWN");
  }, []);

  return (
    <div className="font-sans bg-black text-white min-h-screen">
      <HomeScreen />
      <About />
      <TechLoop />
      <Experience />
      <ThreeDCard />
      <ContactForm />
    </div>
  );
}
