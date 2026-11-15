import Footer from "@/components/footer";
import { SparklesCore } from "@/components/ui/sparkles";
import { FlipWords } from "@/components/ui/flip-words";

export default function HomeScreen() {
  const words = [
    "Hi! I'm Yulia Rizki Anjani",
    "Full Stack Developer",
    "Martech Integration Specialist",
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Top Navigation Bar with Corner Buttons */}
      <Footer />
      <div className="flex-1 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md px-4 py-12">
        {/* Header Name & Title Animation */}
        <h1 className="md:text-6xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          <div className="flex header-container justify-center">
            <div className="subtitle-box">
              <FlipWords duration={3000} words={words} />
            </div>
          </div>
        </h1>

        {/* Updated Description aligned with PDF */}
        <div className="md:text-lg text-sm lg:text-xl font-medium text-center relative z-20 text-gray-400 mt-10 max-w-4xl px-4 sm:px-8 leading-relaxed">
          <p>
            <span className="text-white font-medium">Full Stack Developer</span> and{" "}
            <span className="text-white font-medium">Martech Integration Specialist</span> with experience delivering scalable web platforms for{" "}
            <span className="text-white font-medium">financial services, government, and education clients</span>.
            Building and maintaining modern web applications using{" "}
            <span className="text-white font-medium">Next.js, Astro, React, TypeScript, Node.js, Supabase</span>, and{" "}
            <span className="text-white font-medium">Headless CMS</span>. Proven track record in{" "}
            <span className="text-white font-medium">website migration, customer portals, CRM & Martech system integration, automation</span>, and end-to-end delivery from design to deployment.
          </p>
        </div>

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
