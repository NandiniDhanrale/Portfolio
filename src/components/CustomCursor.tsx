"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useGlobal } from "@/app/providers";

export default function CustomCursor() {
  const { showCursorSpotlight } = useGlobal();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [hovered, setHovered] = useState(false);

  // Position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 250, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    const checkDevice = () => {
      const mobile = 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth < 1024;
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") || 
        target.classList.contains("clickable") ||
        target.closest(".clickable")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    if (!isMobile && showCursorSpotlight) {
      document.body.classList.add("custom-cursor-active");
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseover", handleMouseOver);
    } else {
      document.body.classList.remove("custom-cursor-active");
    }

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile, showCursorSpotlight, cursorX, cursorY]);

  if (!mounted || isMobile || !showCursorSpotlight) return null;

  return (
    <>
      {/* Background Spotlight Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${cursorXSpring.get()}px ${cursorYSpring.get()}px, var(--spotlight-color), transparent 80%)`,
        }}
      />

      {/* Sleek Outer Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full border border-accent-blue/50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          width: hovered ? 48 : 32,
          height: hovered ? 48 : 32,
          backgroundColor: hovered ? "rgba(0, 210, 255, 0.05)" : "transparent",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />

      {/* Tiny Core Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-2 w-2 rounded-full bg-accent-blue"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: hovered ? 1.5 : 1,
        }}
      />
    </>
  );
}
