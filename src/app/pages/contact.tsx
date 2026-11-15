"use client";

import React from "react";
import Link from "next/link";
import { FlipWords } from "../../components/ui/flip-words";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFilePdf,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactForm = () => {
  const words = [
    "Opportunities",
    "Suggestions",
    "Collaboration",
    "Feedback",
    "Networking",
  ];
  return (
    <div id="contact" className="max-w-7xl mx-auto px-4 mt-40 scroll-mt-20">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 ">
          <div className="flex header-container">
            <div className="title-box">
              <p className="text">I&apos;m open to</p>
            </div>
            <div className="subtitle-box">
              <FlipWords words={words} />
            </div>
          </div>
        </h2>
      </div>

      <div className="md:text-xl text-sm lg:text-xl font-medium text-left relative z-20 text-gray-400 max-w-7xl pb-8 lg:mb-4 pl-4 pr-4 leading-relaxed">
        <p className="pb-6">
          I appreciate your interest in connecting with me! I&apos;m always excited to
          explore <span className="text-white">new opportunities</span>,{" "}
          <span className="text-white">collaborate on impactful projects</span>,{" "}
          <span className="text-white">discuss web architecture & integrations</span>, and
          broaden my professional network.
        </p>

        <p className="pb-6">
          For work inquiries, project proposals, or consulting, please feel free to reach out directly:
        </p>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-sm md:text-base">
          <a
            href="mailto:yuliarizkianjani@gmail.com"
            className="flex items-center gap-3 p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 transition-colors text-neutral-300 hover:text-white"
          >
            <FaEnvelope className="text-purple-400 text-lg flex-shrink-0" />
            <span className="truncate">yuliarizkianjani@gmail.com</span>
          </a>

          <a
            href="https://wa.me/6281320722734"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 transition-colors text-neutral-300 hover:text-white"
          >
            <FaPhoneAlt className="text-green-400 text-lg flex-shrink-0" />
            <span>+62 81320722734</span>
          </a>

          <div className="flex items-center gap-3 p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 text-neutral-300">
            <FaMapMarkerAlt className="text-red-400 text-lg flex-shrink-0" />
            <span>Bogor, West Java, Indonesia</span>
          </div>
        </div>

        {/* Direct links: Resume, GitHub, LinkedIn, Instagram */}
        <div className="pt-2 flex flex-wrap gap-4 items-center">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors duration-200 shadow-md"
          >
            <FaFilePdf className="text-red-600 text-lg" />
            View / Download Resume (PDF)
          </Link>
          <a
            href="https://www.linkedin.com/in/yuliarizkianjani/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-neutral-700 bg-neutral-900 text-white font-medium text-sm hover:bg-neutral-800 transition-colors"
          >
            <FaLinkedinIn className="text-blue-400" />
            LinkedIn
          </a>
          <a
            href="https://github.com/yuliaraishere"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-neutral-700 bg-neutral-900 text-white font-medium text-sm hover:bg-neutral-800 transition-colors"
          >
            <FaGithub className="text-white" />
            GitHub
          </a>
          <a
            href="https://www.instagram.com/kikyraaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-neutral-700 bg-neutral-900 text-white font-medium text-sm hover:bg-neutral-800 transition-colors"
          >
            <FaInstagram className="text-pink-400" />
            @kikyraaa
          </a>
        </div>
      </div>

      <div className="text-sm pt-32 sm:pt-40 font-light text-center relative z-20 text-gray-500 max-w-7xl pb-8">
        Always be happy! | © Yulia Rizki Anjani • Bogor, West Java, Indonesia
      </div>
    </div>
  );
};

export default ContactForm;
