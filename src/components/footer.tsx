import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaMailBulk,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex bg-black xl:justify-end lg:justify-end md:justify-end xl:pr-8 lg:pr-8 md:pr-8 space-x-8 pt-6 pr-0 justify-center">
      <Link
        href="https://github.com/yuliaraishere"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <FaGithub size="1.5em" /> */}
        <FaGithub className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/yuliarizkianjani/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
      </Link>
      <Link
        href="https://www.instagram.com/kikyraaa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
      </Link>
      <Link href="mailto:yuliarizkianjani0@gmail.com">
        <FaMailBulk className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
      </Link>
    </div>
  );
}
