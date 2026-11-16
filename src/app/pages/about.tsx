"use client";

import React from "react";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 ">
          About me
        </h2>
      </div>
      <div className="md:text-xl text-sm lg:text-xl font-medium text-left relative z-20 text-gray-400 max-w-7xl pb-8 lg:mb-4 pl-4 pr-4 leading-relaxed space-y-6">
        <p>
          Hello, I&apos;m Yulia Rizki Anjani, also known as{" "}
          <span className="text-white font-semibold">Kiki ^^</span>, based in{" "}
          <span className="text-white">Bogor, West Java, Indonesia</span>.
        </p>

        <p>
          I am a{" "}
          <span className="text-white font-semibold">Full Stack Developer</span>{" "}
          with experience delivering scalable web platforms for{" "}
          <span className="text-white">
            financial services, government, and education clients
          </span>
          . I build and maintain modern, high-performance web applications using{" "}
          <span className="text-white">
            Next.js, Astro (SSR), React, TypeScript, Node.js, Supabase
          </span>
          , and <span className="text-white">Headless CMS</span> platforms.
        </p>

        <p>
          I bring a proven track record across{" "}
          <span className="text-white">rapid website migrations</span> (migrated
          multi-site platforms from legacy .NET/MVC to Next.js within 3 days),{" "}
          <span className="text-white">customer portals</span>,{" "}
          <span className="text-white">CRM and system integrations</span>{" "}
          (HubSpot, Jotform, Resend, Svix webhooks), and{" "}
          <span className="text-white">scheduled workflow automation</span>{" "}
          (Vercel Cron Jobs, DOCX parsing, QR generation, image export). On the
          backend and database layer, I engineer robust solutions with{" "}
          <span className="text-white">
            Node.js, PHP (Laravel, CodeIgniter), Astro API routes, REST APIs,
            Supabase migrations, and MySQL
          </span>
          , backed by automated testing using{" "}
          <span className="text-white">Vitest and fast-check</span>{" "}
          (property-based testing).
        </p>

        <p>
          In my current role as a{" "}
          <span className="text-white font-semibold">Full-stack Developer</span>{" "}
          at <span className="text-white">Hejaz Financial Services</span>, I
          build and maintain web platforms for{" "}
          <span className="text-white">
            Hejaz AU, Halal Money, Hejaz Corporate, and Wahda
          </span>{" "}
          — driving frontend modernization, secure client portals, CRM
          automation, and cloud deployments on Vercel.
        </p>

        {/* <p>
          I hold a Bachelor of Information Technology from{" "}
          <span className="text-white">Universitas Bina Sarana Informatika</span> (GPA:{" "}
          <span className="text-white">3.77 / 4.00</span>) and various certifications including{" "}
          <span className="text-white">Alibaba Cloud Computing</span>,{" "}
          <span className="text-white">BNSP Software Engineer</span>, and{" "}
          <span className="text-white">JavaScript & Node.js Development</span>.
        </p> */}

        <div className="pt-4 flex flex-wrap gap-4 items-center">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors duration-200 shadow-md"
          >
            <FaFilePdf className="text-red-600 text-lg" />
            View Full Resume (PDF)
          </Link>
          <a
            href="mailto:yuliarizkianjani@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-700 text-white font-medium text-sm hover:bg-neutral-900 transition-colors duration-200"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
