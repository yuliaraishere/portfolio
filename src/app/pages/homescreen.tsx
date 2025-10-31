import Footer from "@/components/footer";
import { SparklesCore } from "@/components/ui/sparkles";
import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";

export default function HomeScreen() {
  const words = ["Hi! I'm Yulia Rizki Anjani"];

  return (
    <div className="h-screen">
      {/* Home Screen */}
      <Footer />
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        {/* Header Name Animation */}
        <h1 className="md:text-6xl text-2xl lg:text-6xl font-bold text-center text-white relative z-20 mt-30">
          <div className="flex header-container">
            <div className="subtitle-box">
              <FlipWords duration={3000} words={words} />
            </div>
          </div>
        </h1>

        {/* Updated Description */}
        <h3 className="md:text-xl text-sm lg:text-xl font-medium text-center relative z-20 text-gray-400 mt-10 max-w-4xl mb-2 lg:mb-4 px-8 leading-relaxed">
          <p>
            A <span className="text-white font-medium">passionate Software Developer</span>{" "}
            specializing in <span className="text-white font-medium">modern web</span> and{" "}
            <span className="text-white font-medium">fullstack development</span>. I turn{" "}
            <span className="text-white font-medium">complex ideas</span> into{" "}
            <span className="text-white font-medium">intuitive, high-performing digital experiences</span> — blending{" "}
            <span className="text-white font-medium">clean code</span>,{" "}
            <span className="text-white font-medium">thoughtful design</span>, and a{" "}
            <span className="text-white font-medium">relentless drive to keep learning and improving</span>.
          </p>
        </h3>

        {/* Sparkles Effect */}
        <div className="w-full h-40 relative mt-4">
          {/* Gradient Lines */}
          <div className="absolute left-1/2 transform -translate-x-1/2 inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute left-1/2 transform -translate-x-1/2 inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute left-1/2 transform -translate-x-1/2 inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute left-1/2 transform -translate-x-1/2 inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Sparkles Animation */}
          <SparklesCore
            background="transparent"
            minSize={0.1}
            maxSize={1}
            particleDensity={2000}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Mask for Smooth Edge */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </div>
  );
}

const links = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Products",
    icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Components",
    icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Aceternity UI",
    icon: <Image src="https://assets.aceternity.com/logo-dark.png" width={20} height={20} alt="Aceternity Logo" />,
    href: "#",
  },
  {
    title: "Changelog",
    icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Twitter",
    icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
];
