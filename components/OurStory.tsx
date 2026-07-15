"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";

/* ─── Animation Variants ───────────────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 16 },
  },
};

const pillContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

const taglineVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const dividerVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ─── Event Tags ───────────────────────────────────────────────────────────── */

const eventTags = [
  "Ulang Tahun",
  "Wedding",
  "Gathering",
  "Corporate Event",
  "Wisuda",
];

/* ─── Component ────────────────────────────────────────────────────────────── */

export function OurStory() {
  return (
    <section className="w-full py-24 px-margin-mobile md:px-margin-desktop relative bg-background border-b border-secondary-container/30 overflow-hidden">
      {/* Grain texture */}
      <div className="texture-overlay" />

      {/* ── Floating logos background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {[
          { top: "2%", left: "1%", size: 160, rotate: -15, duration: 8, delay: 0, opacity: 0.1 },
          { top: "8%", right: "3%", size: 200, rotate: 20, duration: 10, delay: 1, opacity: 0.08 },
          { top: "30%", left: "4%", size: 140, rotate: -30, duration: 7, delay: 0.5, opacity: 0.12 },
          { top: "25%", right: "2%", size: 180, rotate: 12, duration: 9, delay: 1.5, opacity: 0.09 },
          { top: "50%", left: "0%", size: 170, rotate: 25, duration: 11, delay: 0.3, opacity: 0.1 },
          { top: "55%", right: "1%", size: 150, rotate: -18, duration: 7.5, delay: 2, opacity: 0.11 },
          { top: "72%", left: "6%", size: 130, rotate: 35, duration: 8.5, delay: 0.8, opacity: 0.08 },
          { top: "78%", right: "5%", size: 190, rotate: -8, duration: 10, delay: 1.2, opacity: 0.1 },
          { top: "42%", left: "12%", size: 110, rotate: 45, duration: 6.5, delay: 1.8, opacity: 0.07 },
          { top: "15%", left: "20%", size: 100, rotate: -25, duration: 6, delay: 2.5, opacity: 0.06 },
          { top: "65%", right: "15%", size: 120, rotate: 10, duration: 11, delay: 0.5, opacity: 0.09 },
          { top: "88%", left: "3%", size: 145, rotate: -40, duration: 9, delay: 0, opacity: 0.07 },
        ].map((logo, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: logo.top,
              left: logo.left,
              right: logo.right,
              width: logo.size,
              height: logo.size,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: logo.opacity,
              y: [0, -20, 0, 15, 0],
              x: [0, 10, -8, 5, 0],
              rotate: [logo.rotate, logo.rotate + 8, logo.rotate - 5, logo.rotate + 3, logo.rotate],
            }}
            transition={{
              duration: logo.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: logo.delay,
            }}
          >
            <Image
              src="/brandicon.webp"
              alt=""
              width={logo.size}
              height={logo.size}
              className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(233,195,73,0.3)]"
              style={{ filter: "invert(83%) sepia(30%) saturate(1000%) hue-rotate(5deg) brightness(105%)" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Centered single-column layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto max-w-4xl flex flex-col items-center text-center"
      >


        {/* ── Decorative golden divider ── */}
        <motion.div
          variants={dividerVariants}
          className="w-32 h-px bg-secondary mb-12 origin-center"
        />

        {/* ── Main headline ── */}
        <motion.h2
          variants={fadeUpVariants}
          className="font-heading text-3xl sm:text-4xl md:text-5xl text-on-surface leading-snug tracking-tight mb-8"
        >
          Photoflix Photobooth siap bikin setiap momen diacara kamu jadi makin{" "}
          <span className="text-secondary italic">pecah</span> &amp;{" "}
          <span className="text-secondary italic">unforgottable</span>
        </motion.h2>

        {/* ── Description paragraph ── */}
        <motion.p
          variants={fadeUpVariants}
          className="font-manrope text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-10"
        >
          Mau ulang tahun, Wedding, Gathering, Corporate event, Wisuda atau
          acara lainnya? Tenang kita siap meramaikan acara kamu diseluruh area
          Jabodetabek
        </motion.p>

        {/* ── Event-type pill badges ── */}
        <motion.div
          variants={pillContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {eventTags.map((tag) => (
            <motion.span
              key={tag}
              variants={pillVariants}
              className="inline-block rounded-full border border-secondary/40 bg-surface-container px-5 py-2 font-manrope text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary select-none"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* ── Second decorative divider ── */}
        <motion.div
          variants={dividerVariants}
          className="w-20 h-px bg-secondary/50 mb-10 origin-center"
        />

        {/* ── Closing tagline ── */}
        <motion.p
          variants={taglineVariants}
          className="font-heading text-lg sm:text-xl md:text-2xl text-on-surface italic max-w-xl leading-relaxed mb-14"
        >
          &ldquo;Karena setiap momen spesial itu layak diabadikan dengan cara
          yang paling{" "}
          <span className="text-secondary font-semibold">seru!</span>&rdquo;
        </motion.p>

        {/* ── CTA Button ── */}
        <motion.div variants={fadeUpVariants}>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-surface text-secondary border border-secondary px-8 py-3.5 font-manrope text-xs font-bold uppercase tracking-widest hover:bg-secondary/10 transition-all duration-300 relative group cursor-pointer shadow-lg shadow-black/20"
          >
            <span className="relative z-10">Book Your Booth</span>
            <ArrowRight
              size={14}
              weight="bold"
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
            {/* Hover border expansion */}
            <div className="absolute inset-0 border border-secondary transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
