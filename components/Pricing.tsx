"use client";

import { motion, type Variants } from "framer-motion";
import { Camera, WhatsappLogo, CheckCircle } from "@phosphor-icons/react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const pkg2Jam = [
  "Unlimited Photo",
  "Unlimited Print",
  "Photo by Camera Professional",
  "Professional Lighting",
  "Selfie Monitor 20 inch",
  "Gif / Boomerang all access",
  "Soft File all access",
  "QR Code",
  "Request Design Template Photo",
  "Strip",
  "Request Design Gift",
  "Free Backdrop Kain (Optional)",
  "Sleeve Sheet Photo",
  "Free Transport Jabodetabek City",
  "2 Crew Professional",
];

const pkg3Jam = [
  "Unlimited Photo",
  "Unlimited Print",
  "Request Properties",
  "Photo by Camera Professional",
  "Professional Lighting",
  "Selfie Monitor 20 inch",
  "Gif / Boomerang all access",
  "Soft File all access",
  "QR Code",
  "Request Design Template Photo",
  "Strip",
  "Request Design Gift",
  "Free Backdrop Kain (Optional)",
  "Sleeve Sheet Photo",
  "Free Transport Jabodetabek City",
  "2 Crew Professional",
];

const pkg3JamPlus = [
  "Unlimited Photo",
  "Unlimited Print",
  "Request Properties",
  "Photo by Camera Professional",
  "Professional Lighting",
  "Selfie Monitor 20 inch",
  "Gif / Boomerang all access",
  "Soft File all access",
  "QR Code",
  "Request Design Template Photo",
  "Strip",
  "Request Design Gift",
  "Free Backdrop Kain (Optional)",
  "Sleeve Sheet Photo",
  "Free Transport Jabodetabek City",
  "2 Crew Professional",
];

export function Pricing() {
  const getWaLink = (pkgName: string) => {
    return buildWhatsAppLink(
      `Halo Photoflix! Saya ingin menanyakan informasi harga dan ketersediaan tanggal untuk *Paket ${pkgName}* acara saya. Terima kasih!`
    );
  };

  return (
    <section
      id="harga"
      className="py-24 px-margin-mobile md:px-margin-desktop w-full bg-background relative overflow-hidden"
    >
      <div className="texture-overlay" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <Camera size={48} weight="duotone" className="text-secondary mb-4" />
          <h2 className="font-heading text-4xl md:text-5xl text-on-surface mb-2 relative inline-block">
            Packages &amp; Pricing
            {/* Decorative Underline */}
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-secondary"></span>
          </h2>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative z-10"
        >
          
          {/* Paket 2 Jam */}
          <motion.div
            variants={cardVariants}
            className="bg-primary-container border border-surface-variant rounded-xl overflow-hidden flex flex-col group hover:border-secondary/50 transition-all duration-300 relative shadow-xl"
          >
            {/* Top border accent */}
            <div className="h-1.5 w-full bg-surface-variant group-hover:bg-secondary/50 transition-colors"></div>
            
            <div className="p-6 flex-grow flex flex-col items-center">
              <h3 className="font-heading text-2xl text-on-surface mb-1">Paket 2 Jam</h3>
              <p className="font-manrope text-sm text-on-surface-variant mb-6 pb-4 border-b border-surface-variant/50 w-full text-center">
                Durasi 2 Jam Acara
              </p>
              
              <p className="font-manrope text-xs font-bold text-secondary mb-4 uppercase tracking-widest self-start px-2">
                Includes:
              </p>
              
              <ul className="space-y-3 font-manrope text-xs text-on-surface w-full flex-grow flex flex-col items-start px-2">
                {pkg2Jam.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 w-full text-left">
                    <CheckCircle className="text-secondary shrink-0 mt-0.5" size={14} weight="fill" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 pt-0 w-full">
              <a
                href={getWaLink("2 Jam")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-transparent border border-secondary text-secondary font-manrope text-xs font-bold px-6 py-3 rounded-lg hover:bg-secondary hover:text-on-secondary transition-all duration-300 uppercase tracking-wider cursor-pointer"
              >
                <WhatsappLogo size={16} weight="fill" />
                Price Now
              </a>
            </div>
          </motion.div>

          {/* Paket 3 Jam (Highlighted) */}
          <motion.div
            variants={cardVariants}
            className="bg-surface-container-high border-2 border-secondary rounded-xl overflow-hidden flex flex-col transform md:-translate-y-4 shadow-2xl shadow-black/40 relative z-10"
          >
            {/* Recommendation Badge */}
            <div className="absolute top-0 right-0 bg-secondary text-on-secondary font-manrope text-[10px] px-3 py-1 rounded-bl-lg uppercase tracking-wider font-extrabold">
              Most Popular
            </div>
            
            <div className="p-6 flex-grow flex flex-col items-center">
              <h3 className="font-heading text-2xl text-on-surface mb-1 mt-2">Paket 3 Jam</h3>
              <p className="font-manrope text-sm text-secondary mb-6 pb-4 border-b border-surface-variant/50 w-full text-center">
                Durasi 3 Jam Acara
              </p>
              
              <p className="font-manrope text-xs font-bold text-secondary mb-4 uppercase tracking-widest self-start px-2">
                Includes:
              </p>
              
              <ul className="space-y-3 font-manrope text-xs text-on-surface w-full flex-grow flex flex-col items-start px-2">
                {pkg3Jam.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 w-full text-left font-semibold">
                    <CheckCircle className="text-secondary shrink-0 mt-0.5" size={14} weight="fill" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 pt-0 w-full">
              <a
                href={getWaLink("3 Jam")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary font-manrope text-xs font-bold px-6 py-4 rounded-lg hover:bg-secondary-fixed transition-all duration-300 shadow-lg shadow-secondary/15 uppercase tracking-wider cursor-pointer"
              >
                <WhatsappLogo size={16} weight="fill" />
                Price Now
              </a>
            </div>
          </motion.div>

          {/* Paket 3 Jam + */}
          <motion.div
            variants={cardVariants}
            className="bg-primary-container border border-surface-variant rounded-xl overflow-hidden flex flex-col group hover:border-secondary/50 transition-all duration-300 relative shadow-xl"
          >
            {/* Top border accent */}
            <div className="h-1.5 w-full bg-surface-variant group-hover:bg-secondary/50 transition-colors"></div>
            
            <div className="p-6 flex-grow flex flex-col items-center">
              <h3 className="font-heading text-2xl text-on-surface mb-1">Paket 3 Jam +</h3>
              <p className="font-manrope text-sm text-on-surface-variant mb-6 pb-4 border-b border-surface-variant/50 w-full text-center">
                Durasi &gt;3 Jam / Custom
              </p>
              
              <p className="font-manrope text-xs font-bold text-secondary mb-4 uppercase tracking-widest self-start px-2">
                Includes:
              </p>
              
              <ul className="space-y-3 font-manrope text-xs text-on-surface w-full flex-grow flex flex-col items-start px-2">
                {pkg3JamPlus.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 w-full text-left">
                    <CheckCircle className="text-secondary shrink-0 mt-0.5" size={14} weight="fill" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 pt-0 w-full">
              <a
                href={getWaLink("3 Jam +")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-transparent border border-secondary text-secondary font-manrope text-xs font-bold px-6 py-3 rounded-lg hover:bg-secondary hover:text-on-secondary transition-all duration-300 uppercase tracking-wider cursor-pointer"
              >
                <WhatsappLogo size={16} weight="fill" />
                Price Now
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
