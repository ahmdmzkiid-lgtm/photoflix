"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Camera, Aperture, Sparkle } from "@phosphor-icons/react";

const PHOTO_ITEMS = [
  {
    src: "/gallery/laughing_couple_bw.jpg",
    alt: "Wedding Couple Laughing B&W",
    title: "Rian & Wulan Wedding",
    tag: "Wedding",
    rotate: -4,
  },
  {
    src: "/gallery/friends_color.jpg",
    alt: "Friends making funny faces",
    title: "Anya's Sweet 17th Party",
    tag: "Birthday",
    rotate: 3,
  },
  {
    src: "/gallery/corporate_gala.jpg",
    alt: "Corporate colleagues smiling",
    title: "Mandiri Gala Celebration",
    tag: "Corporate",
    rotate: -2,
  },
  {
    src: "/gallery/wedding_bw.jpg",
    alt: "Glamorous guest photo strip",
    title: "Vicky & Jessica Ceremony",
    tag: "Wedding",
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

      </div>
    </section>
  );
}
