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
                className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.2] w-auto  h-auto rounded-xl p-6 border"
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
                    // unoptimized
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
    image: "images/1.png",
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
  /**{
    title: "Mutual funding app",
    description:
      "The proof-of-concept app exhibits mutual funds with authentication, presenting a scrollable list of key fund information. Selecting a fund directs users to a detailed product page for additional insights.",
    image:
      "https://github.com/lassiecoder/portfolio/assets/17312616/fbcc8292-4b94-4156-8125-07ac93f9266e",
    link: "https://github.com/lassiecoder/mutual-funding-app"
  },
  {
    title: "Adecco",
    description:
      "The Adecco mobile app transforms job placement with accuracy, speed, and thorough evaluation. Daily linking over 700,000 individuals to top-tier global opportunities.",
    image:
      "https://github.com/lassiecoder/portfolio/assets/17312616/261c3286-edf3-4ba9-bf70-027fde826915",
    link: "https://play.google.com/store/apps/details?id=com.adecco.app20&amp;hl=en_IN&amp;gl=US"
  }**/
];
