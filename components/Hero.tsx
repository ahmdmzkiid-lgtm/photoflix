"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const ctaVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
  },
};

const stripContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stripVariants: Variants = {
  hidden: { opacity: 0, y: 60, rotate: -6 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: i === 0 ? -2 : i === 1 ? 2 : -1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="w-full flex flex-col items-center justify-center pt-24 pb-32 px-margin-mobile md:px-margin-desktop relative text-center border-b border-secondary-container/30 overflow-hidden bg-background"
    >
      <div className="texture-overlay" />

      {/* Floating Decorative Film Frames in BG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] flex justify-center items-center">
        <div className="flex gap-12 transform -rotate-12 scale-150">
          <div className="w-48 h-96 border-2 border-secondary rounded-xl"></div>
          <div className="w-48 h-96 border-2 border-secondary rounded-xl mt-24"></div>
          <div className="w-48 h-96 border-2 border-secondary rounded-xl -mt-16"></div>
        </div>
      </div>

      {/* Heading */}
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-on-surface max-w-5xl relative z-10 mb-8 leading-tight tracking-tight"
      >
        Photoflix.photobooth: <br />
        <span className="text-secondary italic font-normal">Capture the Fun, Instantly!</span>
      </motion.h1>

      {/* CTA Button */}
      <motion.div variants={ctaVariants} initial="hidden" animate="visible" className="z-10 relative">
        <a
          href="#booking"
          className="inline-flex bg-surface text-secondary border border-secondary px-8 py-3.5 font-manrope text-xs font-bold uppercase tracking-widest hover:bg-secondary/10 transition-all duration-300 relative group cursor-pointer shadow-lg shadow-black/20"
        >
          <span className="relative z-10">Book Your Booth</span>
          <div className="absolute inset-0 border border-secondary transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </a>
      </motion.div>

      {/* Film Strip Carousel Decorative */}
      <motion.div
        variants={stripContainerVariants}
        initial="hidden"
        animate="visible"
        className="mt-24 w-full flex justify-center items-center gap-6 md:gap-12 flex-wrap z-10"
      >
        {/* Strip 1 (Left) */}
        <motion.div
          variants={stripVariants}
          custom={0}
          whileHover={{ rotate: 0, scale: 1.05, transition: { duration: 0.3 } }}
          className="film-strip flex select-none cursor-grab active:cursor-grabbing"
        >
          <div className="sprocket-container">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="film-sprocket" />
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="w-32 h-24 relative overflow-hidden border border-neutral-200">
              <Image
                src="/gallery/1.webp"
                alt="Wedding Black and White Booth"
                fill
                sizes="128px"
                className="object-cover grayscale"
              />
            </div>
            <div className="w-32 h-24 relative overflow-hidden border border-neutral-200">
              <Image
                src="/gallery/2.webp"
                alt="Wedding B&W laugh"
                fill
                sizes="128px"
                className="object-cover grayscale contrast-125"
              />
            </div>
            <div className="w-32 h-24 relative overflow-hidden border border-neutral-200">
              <Image
                src="/gallery/3.webp"
                alt="Wedding kiss strip"
                fill
                sizes="128px"
                className="object-cover grayscale brightness-90"
              />
            </div>
            <div className="text-center font-heading text-sm text-black mt-2 font-bold tracking-tight">
              Photoflix
            </div>
          </div>
          <div className="sprocket-container">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="film-sprocket" />
            ))}
          </div>
        </motion.div>

        {/* Strip 2 (Middle) */}
        <motion.div
          variants={stripVariants}
          custom={1}
          whileHover={{ rotate: 0, scale: 1.05, transition: { duration: 0.3 } }}
          className="film-strip flex transform translate-y-8 select-none"
        >
          <div className="sprocket-container">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="film-sprocket" />
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="w-32 h-24 relative overflow-hidden border border-neutral-200">
              <Image
                src="/gallery/4.webp"
                alt="Friends colorful photo booth"
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
            <div className="w-32 h-24 relative overflow-hidden border border-neutral-200">
              <Image
                src="/gallery/5.webp"
                alt="Friends funny faces"
                fill
                sizes="128px"
                className="object-cover contrast-110"
              />
            </div>
            <div className="w-32 h-24 relative overflow-hidden border border-neutral-200">
              <Image
                src="/gallery/6.webp"
                alt="Friends celebrating"
                fill
                sizes="128px"
                className="object-cover saturate-120"
              />
            </div>
            <div className="text-center font-heading text-sm text-black mt-2 font-bold tracking-tight">
              Photoflix
            </div>
          </div>
          <div className="sprocket-container">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="film-sprocket" />
            ))}
          </div>
        </motion.div>

        {/* Strip 3 (Right - hidden on mobile) */}
        <motion.div
          variants={stripVariants}
          custom={2}
          whileHover={{ rotate: 0, scale: 1.05, transition: { duration: 0.3 } }}
          className="film-strip flex hidden md:flex select-none"
        >
          <div className="sprocket-container">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="film-sprocket" />
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="w-32 h-24 relative overflow-hidden border border-neutral-200">
              <Image
                src="/gallery/7.webp"
                alt="Corporate gala elegant couple"
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
            <div className="w-32 h-24 relative overflow-hidden border border-neutral-200">
              <Image
                src="/gallery/1.webp"
                alt="Vintage 1920s party theme"
                fill
                sizes="128px"
                className="object-cover sepia-[0.1]"
              />
            </div>
            <div className="w-32 h-24 relative overflow-hidden border border-neutral-200">
              <Image
                src="/gallery/3.webp"
                alt="Corporate celebration"
                fill
                sizes="128px"
                className="object-cover brightness-95"
              />
            </div>
            <div className="text-center font-heading text-sm text-black mt-2 font-bold tracking-tight">
              Photoflix
            </div>
          </div>
          <div className="sprocket-container">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="film-sprocket" />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── Seamless Scrolling Text Ticker ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-secondary/5 border-y border-secondary-container/20 py-3.5 z-20 flex">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap text-secondary font-heading text-sm sm:text-base font-semibold tracking-wider select-none pr-4"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="inline-block mr-4">
              CAPTURE YOUR BEST MOMENTS HERE! ⭐ CETAK SEKARANG, SIMPAN SELAMANYA ⭐ POSE, SMILE, AND REPEAT! ⭐ BIKIN ACARAMU MAKIN SERU! ⭐
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
