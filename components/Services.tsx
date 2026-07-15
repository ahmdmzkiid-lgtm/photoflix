"use client";

import { motion, type Variants } from "framer-motion";
import { 
  Infinity as InfinityIcon, 
  Printer, 
  Sparkle, 
  Palette, 
  Sunglasses, 
  MapPin, 
  UsersThree, 
  Heart,
  Aperture
} from "@phosphor-icons/react";

const BENEFITS = [
  {
    icon: InfinityIcon,
    title: "Unlimited Photo Session",
    desc: "Ambil foto sebanyak yang kamu mau selama durasi acara tanpa batas sesi. Ekspresikan dirimu sepuasnya!",
  },
  {
    icon: Printer,
    title: "Unlimited Photo Print",
    desc: "Setiap tamu pulang membawa cetak fisik instan berkualitas tinggi sebagai kenang-kenangan manis.",
  },
  {
    icon: Sparkle,
    title: "Hasil Foto Premium",
    desc: "Menggunakan kamera DSLR/Mirrorless profesional dan pencahayaan studio terbaik untuk hasil jernih dan tajam.",
  },
  {
    icon: Palette,
    title: "Free Custom Photo Strip Design",
    desc: "Desain frame/overlay foto custom yang bisa disesuaikan dengan tema, logo, atau warna dekorasi acaramu.",
  },
  {
    icon: Sunglasses,
    title: "Request Properti Sesuai Tema",
    desc: "Disediakan aksesoris, kacamata, topeng, dan properti lucu yang disesuaikan dengan tema acaramu.",
  },
  {
    icon: MapPin,
    title: "Melayani Seluruh Jabodetabek",
    desc: "Kami siap meluncur ke lokasi acaramu di seluruh wilayah Jakarta, Bogor, Depok, Tangerang, dan Bekasi.",
  },
  {
    icon: UsersThree,
    title: "Pelayanan Profesional & Ramah",
    desc: "Tim kru dan friendly attendant kami siap membantu mengarahkan gaya tamu dengan senyuman terbaik.",
  },
  {
    icon: Heart,
    title: "Acara jadi Lebih Berkesan",
    desc: "Menghadirkan keseruan spontan dan tawa riang yang membuat acaramu diingat selamanya oleh para tamu.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

export function Services() {
  return (
    <section
      id="layanan"
      className="w-full py-24 px-margin-mobile md:px-margin-desktop relative bg-background border-b border-secondary-container/30 overflow-hidden"
    >
      <div className="texture-overlay" />

      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2 mb-5 border border-secondary/20">
            <Aperture size={14} weight="duotone" />
            Keunggulan Kami
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-on-surface">
            Kenapa Harus Memilih <span className="text-secondary italic font-normal">Photoflix Photobooth?</span>
          </h2>
          <div className="w-24 h-px bg-secondary mt-6"></div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0"
        >
          {BENEFITS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-surface-container-low/60 border border-secondary-container/20 rounded-2xl p-6 md:p-8 flex flex-col items-start text-left group hover:border-secondary/40 hover:bg-surface-container/80 transition-all duration-300 relative shadow-xl hover:shadow-black/30 overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

                {/* Icon Container with glowing ring */}
                <div className="w-14 h-14 rounded-xl bg-primary-container flex items-center justify-center border border-secondary-container/30 mb-6 group-hover:border-secondary/50 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <Icon size={28} className="text-secondary group-hover:rotate-12 transition-transform duration-300" weight="duotone" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl text-on-surface mb-3 tracking-tight group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-manrope text-sm text-on-surface-variant leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
