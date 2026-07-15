"use client";

import { motion, type Variants } from "framer-motion";
import { CalendarDots, WhatsappLogo, Aperture, ArrowRight } from "@phosphor-icons/react";

const STEPS = [
  {
    step: "01",
    icon: CalendarDots,
    title: "Pilih Paket & Tanggal",
    description:
      "Tentukan paket yang sesuai dengan acara dan anggaran Anda. Cek ketersediaan tanggal acara Anda.",
    color: "from-primary-container/80 to-surface-container/40",
    iconColor: "text-secondary",
  },
  {
    step: "02",
    icon: WhatsappLogo,
    title: "Hubungi Admin WA",
    description:
      "Chat langsung dengan admin kami via WhatsApp. Diskusikan tema, desain frame, dan detail acara Anda.",
    color: "from-primary-container/80 to-surface-container/40",
    iconColor: "text-secondary",
  },
  {
    step: "03",
    icon: Aperture,
    title: "Momen Siap Diabadikan",
    description:
      "Tim kami tiba tepat waktu, setup selesai sebelum acara dimulai. Nikmati setiap momen bersama orang tersayang.",
    color: "from-primary-container/80 to-surface-container/40",
    iconColor: "text-secondary",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function HowItWorks() {
  return (
    <section id="cara-pesan" className="py-24 px-margin-mobile md:px-margin-desktop w-full bg-background relative overflow-hidden border-b border-secondary-container/30">
      <div className="texture-overlay" />

      {/* Decorative radial pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-secondary) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2 mb-5 border border-secondary/20">
            <Aperture size={14} weight="duotone" />
            Cara Pemesanan
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-on-surface">
            Pesan dalam{" "}
            <span className="text-secondary italic font-normal">3 Langkah Mudah</span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-lg max-w-xl mx-auto font-manrope">
            Prosesnya sederhana dan cepat. Tidak ada formulir rumit — cukup chat WA dan kami
            siap membantu.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-14 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
            style={{ left: "20%", right: "20%" }}
            aria-hidden
          />

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="flex flex-col items-center text-center"
              >
                {/* Step icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center border border-secondary/20 shadow-xl shadow-black/30`}
                  >
                    <Icon size={48} weight="duotone" className={step.iconColor} />
                  </div>
                  {/* Step badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-on-secondary rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-on-surface mb-3">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs font-manrope">
                  {step.description}
                </p>

                {/* Arrow connector (mobile) */}
                {index < STEPS.length - 1 && (
                  <div className="md:hidden mt-6 text-secondary/30">
                    <ArrowRight size={24} weight="bold" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
