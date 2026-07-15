"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Aperture } from "@phosphor-icons/react";

export function ShutterPreloader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time (e.g. 1.5s for the shutter effect)
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden pointer-events-none"
          exit={{ 
            transition: { 
              when: "afterChildren" 
            } 
          }}
        >
          {/* Top Shutter Panel */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.85, 0, 0.15, 1] }}
            className="absolute top-0 left-0 w-full h-[50vh] bg-[#020b14] border-b border-secondary/20 z-45 pointer-events-auto flex items-end justify-center"
          />

          {/* Bottom Shutter Panel */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5, ease: [0.85, 0, 0.15, 1] }}
            className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#020b14] border-t border-secondary/20 z-45 pointer-events-auto flex items-start justify-center"
          />

          {/* Central Camera Lens / Aperture Ring */}
          <div className="absolute z-50 flex flex-col items-center justify-center pointer-events-none">
            {/* The Lens housing */}
            <motion.div
              initial={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ 
                scale: 0.2, 
                opacity: 0, 
                rotate: 180,
                transition: { duration: 0.4, ease: [0.85, 0, 0.15, 1] } 
              }}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#041426] border-4 border-secondary flex items-center justify-center shadow-[0_0_50px_rgba(233,195,73,0.3)] relative overflow-hidden"
            >
              {/* Inner lens glass reflection */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
              
              {/* Aperture Icon */}
              <Aperture className="text-secondary w-20 h-20 md:w-24 md:h-24 animate-[spin_10s_linear_infinite]" weight="duotone" />
            </motion.div>

            {/* Subtext */}
            <motion.span
              initial={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15, transition: { duration: 0.3 } }}
              className="mt-6 font-heading text-secondary text-sm md:text-base uppercase tracking-widest font-semibold"
            >
              Ready, Pose, Smile!
            </motion.span>
          </div>

          {/* Shutter Click Flash Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ 
              opacity: [0, 1, 0],
              transition: { duration: 0.3, times: [0, 0.1, 1], ease: "easeOut" } 
            }}
            className="absolute inset-0 bg-white z-50 pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
