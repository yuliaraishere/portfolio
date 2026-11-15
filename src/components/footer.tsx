import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaMailBulk,
  FaFilePdf,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-wrap bg-black xl:justify-end lg:justify-end md:justify-end xl:pr-8 lg:pr-8 md:pr-8 gap-4 sm:gap-6 pt-6 pr-0 justify-center items-center">
      <Link
        href="https://github.com/yuliaraishere"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        aria-label="GitHub"
      >
        <FaGithub className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/yuliarizkianjani/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
      </Link>
      <Link
        href="https://www.instagram.com/kikyraaa/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
        aria-label="Instagram"
      >
        <FaInstagram className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
      </Link>
      <Link
        href="mailto:yuliarizkianjani@gmail.com"
        title="Email"
        aria-label="Email"
      >
        <FaMailBulk className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
      </Link>
      <Link
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        title="Resume / CV"
        aria-label="Resume / CV"
        className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 transition-all duration-200"
      >
        <FaFilePdf className="text-red-400 group-hover:text-red-300 transition-colors duration-200 text-sm" />
        <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
          Resume
        </span>
      </Link>
      <a
        href="#contact"
        title="Contact Me"
        aria-label="Contact Me"
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neutral-700 hover:border-neutral-400 bg-neutral-900/80 hover:bg-neutral-800 transition-all duration-200"
      >
        <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
          Contact Me
        </span>
      </a>
    </div>
  );
}
