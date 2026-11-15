"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiWordpress,
  SiAstro,
  SiSupabase,
  SiNodedotjs,
  SiSanity,
  SiVercel,
  SiMysql,
  SiHubspot,
  SiVitest,
} from "react-icons/si";
import LogoLoop from "../../components/ui/logoloop";

export function TechLoop() {
  const techLogos = [
    { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiReact className="text-white" />, title: "React", href: "https://react.dev" },
    { node: <SiTypescript className="text-white" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiAstro className="text-white" />, title: "Astro", href: "https://astro.build" },
    { node: <SiSupabase className="text-white" />, title: "Supabase", href: "https://supabase.com" },
    { node: <SiNodedotjs className="text-white" />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiTailwindcss className="text-white" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiLaravel className="text-white" />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiSanity className="text-white" />, title: "Sanity CMS", href: "https://www.sanity.io" },
    { node: <SiVitest className="text-white" />, title: "Vitest", href: "https://vitest.dev" },
    { node: <SiVercel className="text-white" />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiHubspot className="text-white" />, title: "HubSpot", href: "https://www.hubspot.com" },
    { node: <SiMysql className="text-white" />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <SiWordpress className="text-white" />, title: "WordPress", href: "https://wordpress.org" },
  ];

  return (
    <section className="bg-black py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-white text-left pb-10">
          Technologies I Use
        </h2>

        <div className="relative h-[100px] sm:h-[140px] md:h-[160px] overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={30}
            direction="left"
            logoHeight={50}
            gap={45}
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
