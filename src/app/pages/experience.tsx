import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 770);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    {
      title: (
        <Image
          src="/images/logo/hjz.png"
          alt="Hejaz Financial Services"
          width={150}
          height={60}
        />
      ),
      duration: "Feb 2025 – Present",
      smallScreenLogo: (
        <Image
          src="/images/logo/hjz.png"
          alt="Hejaz Financial Services"
          width={50}
          height={50}
        />
      ),
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl text-white mb-4">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                Full-stack Developer
              </p>

              {isSmallScreen ? (
                <p className="font-light flex text-xs mt-2 text-gray-400">
                  <span className="font-medium text-white mr-2">
                    Hejaz Financial Services
                  </span>
                  (Feb 2025 – Present)
                </p>
              ) : (
                <p className="text-gray-400 text-base md:text-sm mt-1 block italic">
                  Hejaz Financial Services • (Feb 2025 – Present)
                </p>
              )}
            </h1>

            <div className="text-sm text-gray-400 font-medium mb-6">
              <span className="text-white">Hejaz Financial Services</span> and{" "}
              <span className="text-white">Halal Money</span> form an integrated
              financial ecosystem delivering{" "}
              <span className="text-white">ethical and faith-based finance</span>,
              including wealth management, superannuation, and digital
              investment platforms.
            </div>

            <ul className="space-y-3 text-sm text-gray-400 font-medium list-disc pl-5">
              <li>
                <span className="text-white font-semibold">Website Migrations:</span>{" "}
                Migrated the Hejaz AU and Halal Money websites off Kentico (MVC/.NET) to Next.js within 3 days, and contributed to the multi-phase modernization of Hejaz’s corporate website from WordPress to Headless Kentico CMS with Next.js, later evolving it with Sanity CMS.
              </li>
              <li>
                <span className="text-white font-semibold">Customer Portal:</span>{" "}
                Designed and developed a customer portal using Next.js, integrating HubSpot (CRM), Jotform (forms), Sanity CMS (content), and Resend (email), with administrative tools that let non-technical teams manage content independently.
              </li>
              <li>
                <span className="text-white font-semibold">Wahda Platform:</span>{" "}
                Built the Wahda waitlist and admin panel end to end in 3 weeks using Astro (SSR), React, TypeScript, and Supabase, including backend API routes (Astro API routes, Resend, Svix), authentication, verification flows, and password hashing with bcryptjs.
              </li>
              <li>
                <span className="text-white font-semibold">Automation & Platform Features:</span>{" "}
                Developed scheduled automation with Vercel Cron Jobs and supporting features including QR generation, DOCX parsing, image export, and content workflows.
              </li>
              <li>
                <span className="text-white font-semibold">Infrastructure & Deployment:</span>{" "}
                Managed databases, domain and DNS configuration, deployment environments, and release processes using Vercel, Supabase migrations, and pnpm.
              </li>
              <li>
                <span className="text-white font-semibold">Quality & Collaboration:</span>{" "}
                Worked in a two-person development team, implementing automated testing with Vitest and fast-check (property-based testing) and collaborating with cross-functional stakeholders.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: (
        <Image
          src="/images/logo/disbud.png"
          alt="Dinas Kebudayaan DKI Jakarta"
          width={200}
          height={60}
        />
      ),
      duration: "Feb 2024 – Nov 2024",
      smallScreenLogo: (
        <Image
          src="/images/logo/disbud.png"
          alt="Dinas Kebudayaan DKI Jakarta"
          width={60}
          height={60}
        />
      ),
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl text-white mb-4">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                Web Developer
              </p>
              {isSmallScreen ? (
                <p className="font-light flex text-xs mt-2 text-gray-400">
                  <span className="font-medium text-white mr-2">
                    Dinas Kebudayaan DKI Jakarta
                  </span>
                  (Feb 2024 – Nov 2024)
                </p>
              ) : (
                <p className="text-gray-400 text-base md:text-sm mt-1 block italic">
                  Dinas Kebudayaan DKI Jakarta • (Feb 2024 – Nov 2024)
                </p>
              )}
            </h1>

            <div className="text-sm text-gray-400 font-medium mb-6">
              <span className="text-white">Dinas Kebudayaan DKI Jakarta</span> is
              the Provincial Government agency tasked with public governance and
              development in the field of <span className="text-white">culture</span>,
              including traditional arts, history, heritage conservation, and museums.
            </div>

            <ul className="space-y-3 text-sm text-gray-400 font-medium list-disc pl-5">
              <li>
                Analyzed and evaluated the existing website architecture and user experience (UX), then proposed and implemented improvements to enhance usability and engagement.
              </li>
              <li>
                Led end-to-end design and development of the{" "}
                <span className="text-white font-semibold">
                  Heritage Building Information Website
                </span>{" "}
                with <span className="text-white">Laravel 11</span>.
              </li>
              <li>
                Managed the entire project lifecycle independently under a contract engagement, from planning and development through deployment.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: (
        <Image
          src="/images/logo/setjen.png"
          alt="Setjen DPR RI"
          width={150}
          height={45}
        />
      ),
      duration: "Aug 2022 – Dec 2022",
      smallScreenLogo: (
        <Image
          src="/images/logo/setjen.png"
          alt="Setjen DPR RI"
          width={60}
          height={60}
        />
      ),
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl text-white mb-4">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                Assistant of Learning Technology Development
              </p>
              {isSmallScreen ? (
                <p className="font-light flex text-xs mt-2 text-gray-400">
                  <span className="font-medium text-white mr-2">
                    Sekretariat Jenderal DPR RI
                  </span>
                  (Aug 2022 – Dec 2022)
                </p>
              ) : (
                <p className="text-gray-400 text-base md:text-sm mt-1 block italic">
                  Sekretariat Jenderal DPR RI • (Aug 2022 – Dec 2022)
                </p>
              )}
            </h1>

            <div className="text-sm text-gray-400 font-medium mb-6">
              <span className="text-white">
                The Secretariat General of the House of Representatives of the Republic of Indonesia
              </span>{" "}
              (Setjen DPR RI) provides parliamentary expertise, administrative services, and technical leadership to members of parliament.
            </div>

            <ul className="space-y-3 text-sm text-gray-400 font-medium list-disc pl-5">
              <li>
                Evaluated and improved the internal e-learning system based on stakeholder requirements.
              </li>
              <li>
                Developed and deployed a new learning platform using{" "}
                <span className="text-white font-semibold">Laravel 8</span>, managing the complete development lifecycle.
              </li>
              <li>
                Attended parliamentary sessions (<span className="text-white">RDPU</span> &{" "}
                <span className="text-white">Rapat Paripurna</span>) to understand organizational workflows and user requirements for the e-learning system.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: (
        <Image
          src="/images/logo/bkb.png"
          alt="SMK Farmasi Bhakti Kencana Bogor"
          width={150}
          height={45}
        />
      ),
      duration: "Jan 2021 – Jun 2022",
      smallScreenLogo: (
        <Image
          src="/images/logo/bkb.png"
          alt="SMK Farmasi Bhakti Kencana Bogor"
          width={150}
          height={40}
        />
      ),
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl text-white mb-4">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                Teacher
              </p>
              {isSmallScreen ? (
                <p className="font-light flex text-xs mt-2 text-gray-400">
                  <span className="font-medium text-white mr-2">
                    SMK Farmasi Bhakti Kencana Bogor
                  </span>
                  (Jan 2021 – Jun 2022)
                </p>
              ) : (
                <p className="text-gray-400 text-base md:text-sm mt-1 block italic">
                  SMK Farmasi Bhakti Kencana Bogor • (Jan 2021 – Jun 2022)
                </p>
              )}
            </h1>

            <div className="text-sm text-gray-400 font-medium mb-6">
              <span className="text-white">
                SMK Farmasi Bhakti Kencana Bogor
              </span>{" "}
              is a Vocational High School specializing in health sciences, recognized for programs in Pharmacy, Nursing, and Medical Laboratory Technology.
            </div>

            <ul className="space-y-3 text-sm text-gray-400 font-medium list-disc pl-5">
              <li>
                Designed and developed a custom website for the school.
              </li>
              <li>
                Managed network topology and configurations, ensuring smooth digital operations.
              </li>
              <li>
                Taught <span className="text-white font-medium">&quot;Simulasi Digital&quot;</span> to 10th graders and{" "}
                <span className="text-white font-medium">&quot;TIK&quot;</span> to 11th and 12th graders, fostering digital literacy.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 ">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 ">
          Work Experience
        </h2>
      </div>
      <Timeline data={data} />
    </div>
  );
}
