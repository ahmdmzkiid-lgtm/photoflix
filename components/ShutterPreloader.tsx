"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Aperture } from "@phosphor-icons/react";
import Image from "next/image";

type PreloaderStage = "lens" | "snap" | "logo";

export function ShutterPreloader() {
  const [stage, setStage] = useState<PreloaderStage>("lens");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 1. Lens state shows first.
    // 2. After 1500ms, trigger the camera shutter flash/snap state.
    const snapTimer = setTimeout(() => {
      setStage("snap");
    }, 1500);

    // 3. After 1650ms (during the white flash), transition to logo state.
    const logoTimer = setTimeout(() => {
      setStage("logo");
    }, 1650);

    // 4. After 3200ms, start the slide exit animation.
    const exitTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 3200);

    return () => {
      clearTimeout(snapTimer);
      clearTimeout(logoTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          exit={{ 
            transition: { 
              staggerChildren: 0.05,
              when: "afterChildren"
            } 
          }}
        >
          {/* Top Shutter Panel */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
            className="absolute top-0 left-0 w-full h-[50vh] bg-[#020b14] border-b border-secondary/20 z-40 pointer-events-auto flex items-end justify-center"
          />

          {/* Bottom Shutter Panel */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
            className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#020b14] border-t border-secondary/20 z-40 pointer-events-auto flex items-start justify-center"
          />

          {/* Center Stage Container */}
          <div className="absolute z-50 flex flex-col items-center justify-center pointer-events-none w-full h-full">
            <AnimatePresence>
              {/* LENS STAGE */}
              {stage === "lens" && (
                <motion.div
                  key="lens-stage"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.15 } }}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#041426] border-4 border-secondary flex items-center justify-center shadow-[0_0_50px_rgba(233,195,73,0.3)] relative overflow-hidden">
                    <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
                    <Aperture className="text-secondary w-20 h-20 md:w-24 md:h-24 animate-[spin_10s_linear_infinite]" weight="duotone" />
                  </div>
                  <span className="mt-6 font-heading text-secondary text-sm md:text-base uppercase tracking-widest font-semibold">
                    Ready, Pose, Smile!
                  </span>
                </motion.div>
              )}

              {/* LOGO STAGE */}
              {stage === "logo" && (
                <motion.div
                  key="logo-stage"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }
                  }}
                  exit={{ 
                    scale: 1.15, 
                    opacity: 0,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="p-4 rounded-2xl bg-background/40 backdrop-blur-sm border border-secondary/20 shadow-[0_0_50px_rgba(233,195,73,0.15)] flex items-center justify-center max-w-[85vw]">
                    <Image
                      src="/brandicon.webp"
                      alt="Photoflix Logo"
                      width={280}
                      height={80}
                      className="h-16 sm:h-20 w-auto object-contain brightness-0 invert drop-shadow-[0_0_20px_rgba(233,195,73,0.7)]"
                      priority
                    />
                  </div>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
                    className="mt-6 font-manrope text-white/80 text-xs sm:text-sm tracking-widest uppercase font-bold"
                  >
                    Premium Photobooth Experience
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CAMERA SHUTTER SNAP FLASH OVERLAY */}
          <AnimatePresence>
            {stage === "snap" && (
              <motion.div
                key="snap-flash"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, times: [0, 0.2, 1], ease: "easeOut" }}
                className="absolute inset-0 bg-white z-50 pointer-events-none"
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
