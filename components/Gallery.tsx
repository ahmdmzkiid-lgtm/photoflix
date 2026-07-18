"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Camera, Aperture, Sparkle } from "@phosphor-icons/react";

const PHOTO_ITEMS = [
  {
    src: "/gallery/1 (1).webp",
    alt: "Sweet 17th Birthday",
    title: "Anya's Sweet 17th Party",
    tag: "Birthday",
    rotate: -4,
  },
  {
    src: "/gallery/2.webp",
    alt: "Wedding Celebration",
    title: "Anindra & Bobby Wedding",
    tag: "Wedding",
    rotate: 3,
  },
  {
    src: "/gallery/3 (1).webp",
    alt: "Annual Gathering",
    title: "Mandiri Annual Gathering",
    tag: "Corporate",
    rotate: -2,
  },
  {
    src: "/gallery/4.webp",
    alt: "Graduation Celebration",
    title: "Graduation Celebration",
    tag: "Wisuda",
    rotate: 4,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

export function Gallery() {
  return (
    <section
      id="galeri"
      className="w-full py-24 px-margin-mobile md:px-margin-desktop bg-background relative overflow-hidden border-b border-secondary-container/30"
    >
      <div className="texture-overlay" />

      {/* Decorative Background Glows */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2 mb-5 border border-secondary/20">
            <Camera size={14} weight="duotone" />
            Galeri Acara
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-on-surface">
            Setiap Kilasan Menjadi <span className="text-secondary italic font-normal">Kisah Abadi</span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-lg max-w-2xl mx-auto font-manrope">
            Telusuri keseruan, tawa, dan kehangatan dari berbagai perayaan spesial yang telah kami abadikan.
          </p>
          <div className="w-24 h-px bg-secondary mt-6"></div>
        </motion.div>

        {/* Photo Showcase Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <Sparkle size={20} className="text-secondary" weight="fill" />
            <h3 className="font-heading text-2xl md:text-3xl text-on-surface">Printed Photo Strips</h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0"
          >
            {PHOTO_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{ rotate: item.rotate }}
                whileHover={{ rotate: 0, scale: 1.05, y: -10, zIndex: 20 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white p-4 pb-8 shadow-2xl rounded border border-neutral-200 select-none cursor-pointer flex flex-col gap-3 group relative overflow-hidden"
              >
                {/* Sprocket / Film strip hole detail top & bottom */}
                <div className="absolute top-2 left-0 right-0 flex justify-between px-6 pointer-events-none opacity-30">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
                </div>

                <div className="w-full relative aspect-[3/4] overflow-hidden bg-neutral-100 border border-neutral-200/50 mt-2">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Captions */}
                <div className="text-center mt-2 flex flex-col gap-1">
                  <div className="font-manrope text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                    Photoflix Photo Booth
                  </div>
                </div>

                <div className="absolute bottom-2 left-0 right-0 flex justify-between px-6 pointer-events-none opacity-30">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Photo Templates Section */}
        <div className="mt-24 border-t border-secondary-container/20 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10 justify-center md:justify-start"
          >
            <Sparkle size={20} className="text-secondary animate-pulse" weight="fill" />
            <h3 className="font-heading text-2xl md:text-3xl text-on-surface">Pilihan Template Cetak</h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-24"
          >
            {[
              {
                src: "/gallery/tamplate 2R.webp",
                alt: "Desain Template 2R Strip",
                title: "Template Strip 2R",
                tag: "Template 2R",
                rotate: -2,
              },
              {
                src: "/gallery/Tamplate 4R.webp",
                alt: "Desain Template 4R Card",
                title: "Template Card 4R",
                tag: "Template 4R",
                rotate: 2,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{ rotate: item.rotate }}
                whileHover={{ rotate: 0, scale: 1.03, y: -5, zIndex: 20 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white p-4 pb-8 shadow-2xl rounded border border-neutral-200 select-none cursor-pointer flex flex-col gap-3 group relative overflow-hidden"
              >
                {/* Film/frame details */}
                <div className="absolute top-2 left-0 right-0 flex justify-between px-6 pointer-events-none opacity-30">
                  <div className="w-2.5 h-2.5 rounded bg-neutral-900" />
                  <div className="w-2.5 h-2.5 rounded bg-neutral-900" />
                </div>

                <div className="w-full relative aspect-[3/2] overflow-hidden bg-neutral-100 border border-neutral-200/50 mt-2">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-secondary text-on-secondary text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    {item.tag}
                  </div>
                </div>

                {/* Captions */}
                <div className="text-center mt-2 flex flex-col gap-1">
                  <div className="font-heading text-black text-lg tracking-tight font-semibold">
                    {item.title}
                  </div>
                  <div className="font-manrope text-[10px] text-gray-500 uppercase tracking-widest">
                    Photoflix Print Layout Design
                  </div>
                </div>

                <div className="absolute bottom-2 left-0 right-0 flex justify-between px-6 pointer-events-none opacity-30">
                  <div className="w-2.5 h-2.5 rounded bg-neutral-900" />
                  <div className="w-2.5 h-2.5 rounded bg-neutral-900" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
