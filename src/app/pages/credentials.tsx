"use client";

import React from "react";
import Link from "next/link";
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt, FaLanguage } from "react-icons/fa";

export function Credentials() {
  const certifications = [
    {
      name: "Cloud Computing",
      issuer: "Alibaba Cloud",
      date: "Sep 2024",
      link: "https://drive.google.com/file/d/1hNd7WRZluNkLbleIjzk9oMDBIAN4DOA-/view?usp=sharing",
    },
    {
      name: "OOP Java Programming",
      issuer: "Course-Net x Prakerja",
      date: "Jun 2024",
      link: "https://drive.google.com/file/d/1uQBB6jnLG9j7L3PuVADR9nmyuwMygdzc/view?usp=sharing",
    },
    {
      name: "JavaScript & Node.js Development",
      issuer: "Course-Net x Prakerja",
      date: "May 2024",
      link: "https://drive.google.com/file/d/1DT8BXRD5AWyUvyBr7u_Yp6Sk_8PPrDsN/view?usp=drive_link",
    },
    {
      name: "Software Engineer Certification",
      issuer: "BNSP | Credential ID: 62010251400000472022",
      date: "Aug 2022",
      link: "https://drive.google.com/file/d/1SXzL01kvfQwqe_a6Lh-hebxeG_lbERxy/view?usp=drive_link",
    },
    {
      name: "Database Implementation",
      issuer: "Ciputra University",
      date: "Aug 2022",
      link: "https://drive.google.com/file/d/1kBqvof_M4LJE-4GKX16O-GFxEwS_d-eF/view?usp=sharing",
    },
    {
      name: "MTCNA",
      issuer: "MikroTik",
      date: "Sep 2021",
      link: "https://drive.google.com/file/d/1khQ6F9ZFlm5FjgBp66SFDEFngXPe0fSa/view?usp=sharing",
    },
    {
      name: "Node.js",
      issuer: "Progate",
      date: "Aug 2021",
      link: "https://drive.google.com/file/d/1COWujmWlwWgKF9KH-gbd14NZ3AHmodkH/view?usp=drive_link",
    },
    {
      name: "Database System",
      issuer: "Ikatan Ahli Informatika Indonesia",
      date: "Jul 2021",
      link: "https://drive.google.com/file/d/11fBWdJDzc9KHEdxqcLfAXS2RUX0BL_2R/view?usp=drive_link",
    },
    {
      name: "CPA: Programming Essentials in C++",
      issuer: "Cisco",
      date: "Jan 2021",
      link: "https://drive.google.com/file/d/1FuWymZn1A-H3ajCpU40h5TXEAJhfJsvO/view?usp=drive_link",
    },
  ];

  const languages = [
    { language: "Bahasa Indonesia", level: "Native or Bilingual Proficiency" },
    { language: "English", level: "Limited Working Proficiency" },
    { language: "Arabic", level: "Elementary Proficiency" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-24">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0">
          Education & Credentials
        </h2>
      </div>

      <div className="px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Education & Languages Column */}
        <div className="space-y-6 lg:col-span-1">
          {/* Education Card */}
          <div className="p-6 rounded-2xl border border-white/[0.15] bg-neutral-950/80">
            <div className="flex items-center gap-3 text-purple-400 mb-4">
              <FaGraduationCap className="text-2xl" />
              <h3 className="text-lg font-bold text-white tracking-wide">
                Education
              </h3>
            </div>
            <h4 className="text-base font-semibold text-white">
              Universitas Bina Sarana Informatika
            </h4>
            <p className="text-xs text-gray-400 font-mono mt-1">Indonesia • Sep 2019 – Aug 2023</p>
            <p className="text-sm text-gray-300 mt-3 font-medium">
              Bachelor of Information Technology
            </p>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-800/50 text-purple-300 font-semibold">
                GPA: 3.77 / 4.00
              </span>
              <Link
                href="https://drive.google.com/file/d/1lJvro5Y2K4ke0g4uRHHRS8xg57aZUiPQ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white underline transition-colors"
              >
                Transcript <FaExternalLinkAlt className="text-[10px]" />
              </Link>
            </div>
          </div>

          {/* Languages Card */}
          <div className="p-6 rounded-2xl border border-white/[0.15] bg-neutral-950/80">
            <div className="flex items-center gap-3 text-sky-400 mb-4">
              <FaLanguage className="text-2xl" />
              <h3 className="text-lg font-bold text-white tracking-wide">
                Languages
              </h3>
            </div>
            <div className="space-y-3">
              {languages.map((lang, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-white font-medium">{lang.language}</span>
                  <span className="text-gray-400 text-xs">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="lg:col-span-2">
          <div className="p-6 rounded-2xl border border-white/[0.15] bg-neutral-950/80">
            <div className="flex items-center gap-3 text-emerald-400 mb-6">
              <FaCertificate className="text-2xl" />
              <h3 className="text-lg font-bold text-white tracking-wide">
                Certifications
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Link
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 rounded-xl border border-neutral-800 bg-black/60 hover:border-neutral-600 hover:bg-neutral-900/60 transition-all duration-200"
                >
                  <div className="flex justify-between items-start gap-2">
                    <h5 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {cert.name}
                    </h5>
                    <FaExternalLinkAlt className="text-xs text-neutral-500 group-hover:text-white flex-shrink-0 mt-1 transition-colors" />
                  </div>
                  <p className="text-xs text-gray-400 mt-1 font-medium">{cert.issuer}</p>
                  <p className="text-[11px] text-gray-500 font-mono mt-2">{cert.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credentials;