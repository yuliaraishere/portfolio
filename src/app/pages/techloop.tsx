"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiWordpress,
  SiAzuredevops,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";
import LogoLoop from "../../components/ui/logoloop";

export function TechLoop() {
  const techLogos = [
    { node: <SiReact className="text-white" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript className="text-white" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss className="text-white" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiLaravel className="text-white" />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiWordpress className="text-white" />, title: "WordPress", href: "https://wordpress.org" },
    { node: <SiAzuredevops className="text-white" />, title: "DevOps", href: "https://azure.microsoft.com/en-us/products/devops" },
    { node: <FaServer className="text-white" />, title: "Backend", href: "#" },
  ];

  return (
    <section className="bg-black py-10 mt-10"> {/* ✅ lebih rapat */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-white text-left pb-10">
          Technologies I Use
        </h2>

        <div className="relative h-[100px] sm:h-[140px] md:h-[160px] overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={25}
            direction="left"
            logoHeight={50}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technologies I use"
          />
        </div>
      </div>
    </section>
  );
}

export default TechLoop;
