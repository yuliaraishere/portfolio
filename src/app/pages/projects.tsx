"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card.tsx";

const ThreeDCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 ">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 sm:gap-3">
        {dummyData.map((item, index) => (
          <div key={index}>
            <CardContainer className="inter-var font-medium">
              <CardBody
                key={index}
                className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.2] w-auto h-auto rounded-xl p-6 border"
              >
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-gray-100 dark:text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-400 text-sm max-w-sm mt-2"
                >
                  {item.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                    priority
                  />
                </CardItem>
                <div className="flex justify-end items-center mt-6">
                  <Link href={item.link} target="_blank">
                    <ButtonsCard>
                      <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                          View Project →
                        </span>
                      </button>
                    </ButtonsCard>
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDCard;

const dummyData = [
  {
    title: "Wahda Platform",
    description:
      "Full-stack launch platform and waitlist admin panel built end to end in 3 weeks using Astro (SSR), React, TypeScript, and Supabase. Engineered backend Astro API routes, Resend email automation, Svix webhooks, secure authentication with bcryptjs, referral rewards, missions, quizzes, leaderboards, creator onboarding, and administrative management tools.",
    image: "/images/8.png",
    link: "https://www.wahda.com",
  },
  {
    title: "Hejaz Global Website",
    description:
      "Contributed to the multi-phase modernization of Hejaz's corporate website from WordPress to Headless Kentico CMS with Next.js, later evolving it with Sanity CMS. Unifies Sharia-compliant asset management, global ventures, ETFs, investor resources, and dynamic fund content into a high-performance digital experience.",
    image: "/images/9.png",
    link: "https://www.hejaz.com",
  },
  {
    title: "Hejaz Customer Portal",
    description:
      "Designed and developed a customer portal using Next.js, integrating HubSpot (CRM), Jotform (forms), Sanity CMS (content), and Resend (email), with administrative tools that let non-technical teams manage content independently. Developed scheduled automation with Vercel Cron Jobs, QR generation, DOCX parsing, and image export.",
    image: "/images/6.png",
    link: "https://portal.hejazfs.com.au",
  },
  {
    title: "Hejaz Financial Services Website",
    description:
      "Migrated the Hejaz AU website off Kentico (MVC/.NET) to Next.js within 3 days. Powers ethical wealth management, superannuation, and digital investment solutions with optimized performance, Supabase migrations, and automated release workflows on Vercel.",
    image: "/images/5.png",
    link: "https://www.hejazfs.com.au",
  },
  {
    title: "Halal Money Website",
    description:
      "Migrated the Halal Money platform off Kentico (MVC/.NET) to Next.js within 3 days. Delivers faith-based financial literacy, educational resources, and investment content with responsive design, CRM integration, and automated marketing workflows.",
    image: "/images/7.png",
    link: "https://www.halalmoney.com.au",
  },
  {
    title: "Heritage Building Information Website",
    description:
      "Led end-to-end design and development of the Heritage Building Information Website with Laravel 11 under a contract engagement with Dinas Kebudayaan DKI Jakarta. Analyzed existing website architecture and UX, proposed usability enhancements, and managed the complete project lifecycle from planning to deployment.",
    image: "/images/4.png",
    link: "https://dinaskebudayaan.jakarta.go.id",
  },
  {
    title: "Learning Management System (Setjen DPR RI)",
    description:
      "Evaluated stakeholder requirements and developed a new learning platform using Laravel 8 for the Secretariat General of DPR RI (Indonesian Parliament). Managed the complete development lifecycle from architecture to deployment, aligned with parliamentary workflows observed during sessions (RDPU & Rapat Paripurna).",
    image: "/images/1.png",
    link: "https://github.com/yuliaraishere/e-learning",
  },
  {
    title: "Ecomurz (Rupa Marketplace)",
    description:
      "A full-stack multilingual e-commerce marketplace built with Next.js App Router and deployed on Vercel. Features product catalog with category filtering, cart and order management, and internationalization supporting 8 languages (ID, EN, JA, TL, VI, TH, HI, ZH). Powered by Supabase for backend and real-time data, Algolia for fast product search, and Resend for transactional emails.",
    image: "/images/10.png",
    link: "https://ecomurz.vercel.app/en",
  },
  {
    title: "E-bike Rent",
    description:
      "A desktop application developed during a comparative study at Ciputra University focused on database implementation, relational data modeling, and rental tracking system operations.",
    image: "/images/2.png",
    link: "https://github.com/yuliaraishere/E-Bike_Rent",
  },
  {
    title: "Mockup Page",
    description:
      "An interactive web mockup developed during training at Progate, implementing modern component hierarchy and responsive layout styling with clean JavaScript and CSS.",
    image: "/images/3.png",
    link: "https://yuliaraishere.github.io/A06_present/",
  },
];
