"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

type Logo = {
  node: React.ReactNode;
  title?: string;
  href?: string;
};

interface LogoLoopProps {
  logos: Logo[];
  speed?: number;
  direction?: "left" | "right";
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 30,
  direction = "left",
  logoHeight = 40,
  gap = 40,
  pauseOnHover = true,
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor = "#000000",
  ariaLabel = "Logo loop",
}) => {
  const controls = useAnimation();
  const loopRef = useRef<HTMLDivElement>(null);
  const isLeft = direction === "left";

  // Infinite scroll effect
  useEffect(() => {
    const loop = async () => {
      while (true) {
        await controls.start({
          x: isLeft ? "-50%" : "0%",
          transition: { duration: speed, ease: "linear" },
        });
        await controls.start({
          x: isLeft ? "0%" : "-50%",
          transition: { duration: 0 },
        });
      }
    };
    loop();
  }, [controls, isLeft, speed]);

  return (
    <div
      ref={loopRef}
      className="relative w-full overflow-hidden select-none"
      aria-label={ariaLabel}
    >
      {fadeOut && (
        <>
          {/* Fade Left */}
          <div
            className="absolute left-0 top-0 z-10 h-full w-20 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
            }}
          />
          {/* Fade Right */}
          <div
            className="absolute right-0 top-0 z-10 h-full w-20 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}

      <motion.div
        animate={controls}
        className="flex"
        style={{
          gap: `${gap}px`,
          width: "max-content",
        }}
        onMouseEnter={() => pauseOnHover && controls.stop()}
        onMouseLeave={() => {
          if (pauseOnHover) {
            controls.start({
              x: isLeft ? "-50%" : "0%",
              transition: { duration: speed, ease: "linear" },
            });
          }
        }}
      >
        {[...logos, ...logos].map((logo, idx) => {
          const content = (
            <div
              key={idx}
              className="flex items-center justify-center text-white/80 hover:text-white transition-transform duration-300"
              style={{
                height: `${logoHeight}px`,
                minWidth: `${logoHeight * 1.5}px`,
                fontSize: `${logoHeight * 0.7}px`,
                transform: scaleOnHover ? "scale(1)" : undefined,
              }}
            >
              {logo.node}
            </div>
          );

          return logo.href ? (
            <Link
              key={idx}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </Link>
          ) : (
            content
          );
        })}
      </motion.div>
    </div>
  );
};

export default LogoLoop;
