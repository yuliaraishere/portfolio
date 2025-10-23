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
    title: "Hejaz Financial Services Website",
    description:
      "A modern full-stack website built for Hejaz Financial Services, an ethical finance company offering superannuation, investment, and wealth management solutions. Responsible for maintaining and enhancing the platform to ensure performance, scalability, and brand alignment.",
    image: "/images/5.png",
    link: "https://www.hejazfs.com.au",
  },
  {
    title: "Halal Money Website",
    description:
      "The Halal Money platform focuses on faith-based financial literacy and investment education. I contributed to both frontend and backend development, ensuring seamless integration between marketing automation, CRM systems, and responsive web experience.",
    image: "/images/7.png",
    link: "https://www.halalmoney.com.au",
  },
  {
    title: "Hejaz Portal (Internal CRM & Automation)",
    description:
      "An internal portal developed for Hejaz Group to streamline CRM processes, automate lead management, and integrate HubSpot workflows with custom code and Jotform. Designed and maintained the platform to improve operational efficiency across multiple departments.",
    image: "/images/6.png",
    link: "https://portal.hejazfs.com.au",
  },
  {
    title: "Heritage Building Website",
    description:
      "This website is created to provide information about cultural heritage sites across all provinces in Jakarta.",
    image: "/images/4.png",
    link: "http://hbimjakarta.com",
  },
  {
    title: "Learning Management System",
    description:
      "This project was completed during my internship at the Setjen DPR RI. This LMS was developed to meet the learning needs of Secretariat General employees.",
    image: "/images/1.png",
    link: "https://github.com/yuliaraishere/e-learning",
  },
  {
    title: "E-bike Rent",
    description:
      "This application is a desktop application that my team and I developed during a comparative study at Ciputra University.",
    image: "/images/2.png",
    link: "https://github.com/yuliaraishere/E-Bike_Rent",
  },
  {
    title: "Mockup Page",
    description:
      "This project is a mockup design that my team and I created while participating in a bootcamp at Progate.",
    image: "/images/3.png",
    link: "https://yuliaraishere.github.io/A06_present/",
  },
];
