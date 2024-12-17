import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 770);
    };

    // Check screen size on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const data = [
    {
      title: (
        <Image
          src="/images/logo/disbud.png" //logo and name
          alt="disbud-logo"
          width={200}
          height={60}
        />
      ),
      duration: "2024 – Present",
      smallScreenLogo: (
        <Image
          src="/images/logo/disbud.png" //just logo
          alt="disbud-logo"
          width={50}
          height={50}
        />
      ),
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl text-white mb-6">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                Web Developer Specialist
              </p>

              {/* Show only if screen size is <= 770px */}
              {isSmallScreen && (
                <p className="font-light flex text-xs mt-2">
                  <span className="font-medium mr-2">
                    Dinas Kebudayaan DKI Jakarta
                  </span>
                  (Feb 24 – Present)
                </p>
              )}

              {/* Show only if screen size is > 770px */}
              {!isSmallScreen && (
                <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                  (Feb 24 – Present)
                </p>
              )}
            </h1>

            <div className=" text-gray-400 font-medium text-sm">
              <span className="text-white ">Dinas Kebudayaan DKI Jakarta</span>{" "}
              is a Provincial Government tasked with{" "}
              <span className=" text-white">carrying out</span> governmental
              <span className=" text-white">
                {" "}
                in the field of culture.
              </span>{" "}
              This includes various aspects of
              <span className=" text-white"> cultural heritage </span>such as{" "}
              <span className=" text-white">traditional arts</span>,{" "}
              <span className=" text-white">history</span>,{" "}
              <span className=" text-white">
                cultural heritage conservation
              </span>
              , <span className=" text-white">museums</span>, and other related
              areas.{" "}
            </div>
            <div className="text-sm text-gray-400 mt-8 font-medium">
              <p>
                At{" "}
                <span className="text-white ">
                  Dinas Kebudayaan DKI Jakarta
                </span>
                , I contribute to the development of the{" "}
                <span className=" text-white">Cultural Heritage Website</span>,
                which is utilized by top companies for staffing solutions.
                <p className="mt-2">
                  I also work on the{" "}
                  <span className=" text-white">global web app</span>, ensuring
                  it meets diverse needs across various regions. My expertise
                  includes using{" "}
                  <span className=" text-white">React Native</span> and{" "}
                  <span className=" text-white">React.js</span> to build
                  efficient, user-friendly applications.
                </p>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: (
        <Image
          src="/images/logo/setjen.png" //logo and name
          alt="setjen_dpr-logo"
          width={150}
          height={45}
        />
      ),
      duration: "2022 – Present",
      smallScreenLogo: (
        <Image
          src="/images/logo/setjen.png" //just logo
          alt="setjen_dpr-logo"
          width={60}
          height={60}
        />
      ),
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl text-white mb-6">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                Assistant of Learning Technology Development
              </p>
              {/* <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                (May 2022 – May 2023)
              </p> */}
              {isSmallScreen && (
                <p className="font-light flex text-xs mt-2">
                  <span className="font-medium mr-2">
                    The Secretariat General of DPR RI
                  </span>
                  (Aug 2022 – Dec 2022)
                </p>
              )}

              {/* Show only if screen size is > 770px */}
              {!isSmallScreen && (
                <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                  (Aug 2022 – Dec 2022)
                </p>
              )}
            </h1>

            <div className="text-sm text-gray-400 font-medium">
              <span className="text-white ">
                The Secretarian General of the People's Representative Council
                of The Republic Indonesia
              </span>{" "}
              (abbreviated as Setjen DPR RI) is a supporting system element of{" "}
              <span className=" text-white"> The DPR RI</span>, serving as the
              Secretariat of a State Institution, headed by a
              <span className=" text-white"> Secretary General</span>, and in
              carrying out its dutie, is responsible to the leadership of the{" "}
              <span className=" text-white">DPR</span>.
            </div>
            <div className="text-sm text-gray-400 mt-8 font-medium">
              <p>
                At <span className="text-white ">Setjen DPR RI</span>, I
                <span className="text-white "> evaluated </span> and{" "}
                <span className="text-white ">revamped</span>, the e-learning
                system, incorporating feedback from
                <span className="text-white "> stakeholder </span> to improve
                its effectiveness. I developed a
                <span className="text-white "> new e-learning </span> using
                <span className="text-white "> Laravel 8</span>, managing the
                entire development lifecycle, from setting up the environment to
                deployment.
              </p>
              <p className="mt-2">
                Additionally, I <span className="text-white "> attanded </span>
                parliementary sessions, including{" "}
                <span className=" text-white">RDPU </span>and
                <span className="text-white "> Rapat Paripurna </span>, to
                observe and better understand the formal processes within the
                organization.{" "}
              </p>{" "}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: (
        <Image
          src="/images/logo/bkb.png" //logo and name
          alt="bkb-logo"
          width={150}
          height={45}
        />
      ),
      smallScreenLogo: (
        <Image
          src="/images/logo/bkb.png" //just logo
          alt="bkb-logo"
          width={150}
          height={40}
        />
      ),
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl text-white mb-6">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                Teacher
              </p>
              {/* <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                (Aug 2020 - May 2022)
              </p> */}
              {isSmallScreen && (
                <p className="font-light flex text-xs mt-2">
                  <span className="font-medium mr-2">
                    Bhakti Kencana Pharmacy Vocational School
                  </span>
                  (Jan 2021 - Jun 2022)
                </p>
              )}

              {/* Show only if screen size is > 770px */}
              {!isSmallScreen && (
                <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                  (Jan 2021 - Jun 2022)
                </p>
              )}
            </h1>

            <div className="text-sm text-gray-400 font-medium">
              <span className="text-white ">
                SMK Farmasi Bhakti Kencana Bogor
              </span>{" "}
              is a Vocational High School&apos; in the field of{" "}
              <span className=" text-white">Health</span>, recognized as one of
              the top and most favored
              <span className=" text-white">Health School</span> in the Bogor
              area. The School offers vocational Programs in various fields,
              including <span className=" text-white">Pharmacy</span>,
              <span className=" text-white"> Nursing</span>, and{" "}
              <span className=" text-white">Medical Laboratory Technology</span>
              .
            </div>

            <div className="text-sm text-gray-400 mt-8 font-medium">
              As a <span className="text-white ">Teacher</span> at SMK Farmasi
              Bhakti Kencana Bogor, I taught{" "}
              <span className="text-white ">"Simulasi Digital"</span> to{" "}
              <span className="text-white ">10th graders</span> and{" "}
              <span className="text-white ">"TIK"</span> to{" "}
              <span className="text-white ">11th</span> and{" "}
              <span className="text-white ">12th graders</span>, helping foster
              digital literacy among students.
              <p className="mt-2">
                I also
                <span className=" text-white"> designed</span> and
                <span className=" text-white"> developed</span> a custom website
                for the school, while managing the network topology and
                configurations to ensure smooth digital operations and seamless
                online learning environment.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 ">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 ">
          Experiences
        </h2>
      </div>
      <Timeline data={data} />
    </div>
  );
}
