"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown, Question } from "@phosphor-icons/react";

/* ─────────────────────────────────────────────────────────────────────────────
   TODO: Sesuaikan pertanyaan dan jawaban dengan kebijakan & detail asli Photoflix.
   ─────────────────────────────────────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Area layanan Photoflix mencakup kota mana saja?",
    answer:
      "Saat ini kami melayani Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) dan sekitarnya. Untuk kota di luar area tersebut, kami melayani dengan penyesuaian biaya transportasi. Hubungi kami untuk info detail wilayah Anda.",
  },
  {
    id: "faq-2",
    question: "Berapa lama estimasi konfirmasi booking setelah menghubungi admin?",
    answer:
      "Admin kami aktif setiap hari pukul 08.00–21.00 WIB. Konfirmasi ketersediaan tanggal biasanya diberikan dalam 1–3 jam pada jam aktif. Untuk acara mendadak, kami sarankan menghubungi minimal 3 hari sebelum acara.",
  },
  {
    id: "faq-3",
    question: "Apakah bisa custom desain frame / overlay sesuai tema acara?",
    answer:
      "Tentu! Custom desain frame adalah layanan standar di semua paket kami. Anda cukup menyebutkan tema, warna, dan referensi desain kepada admin. Tim desainer kami akan menyiapkan mockup untuk Anda setujui sebelum hari H.",
  },
  {
    id: "faq-4",
    question: "Bagaimana sistem DP dan pelunasan pembayaran?",
    answer:
      "Kami menggunakan sistem DP 50% untuk mengunci tanggal, dan pelunasan 50% dilakukan paling lambat H-1 acara. Pembayaran dapat dilakukan melalui transfer bank atau dompet digital. Detail rekening akan dikirimkan melalui chat WhatsApp.",
  },
  {
    id: "faq-5",
    question: "Apakah photo booth bisa digunakan untuk acara outdoor?",
    answer:
      "Bisa! Kami memiliki peralatan yang mendukung setup outdoor. Namun perlu diperhatikan bahwa kondisi hujan atau angin kencang dapat mempengaruhi operasional. Kami sarankan menyediakan tenda atau atap di area booth untuk acara outdoor. Diskusikan detail kebutuhan outdoor Anda dengan admin kami.",
  },
  {
    id: "faq-6",
    question: "Berapa lama waktu yang dibutuhkan untuk setup?",
    answer:
      "Umumnya tim kami tiba 1–1.5 jam sebelum acara untuk proses setup. Waktu setup sekitar 45–60 menit tergantung kompleksitas dekorasi. Pastikan ada ruang minimal 2x2 meter untuk penempatan booth.",
  },
];

function FAQItem({ item }: { item: (typeof FAQ_ITEMS)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? "border-secondary/30 bg-surface-container shadow-lg shadow-black/20"
          : "border-secondary-container/20 bg-surface-container-low/40 hover:border-secondary/20 hover:bg-surface-container-low/60"
      }`}
    >
      <button
        id={item.id}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-semibold text-on-surface text-sm md:text-base pr-4 font-manrope">
          {item.question}
        </span>
        <CaretDown
          size={16}
          weight="bold"
          className={`flex-shrink-0 text-secondary transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-on-surface-variant text-sm leading-relaxed font-manrope">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 px-margin-mobile md:px-margin-desktop w-full bg-background relative overflow-hidden border-b border-secondary-container/30"
    >
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2 mb-5 border border-secondary/20">
            <Question size={14} weight="duotone" />
            FAQ
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-on-surface">
            Pertanyaan yang{" "}
            <span className="text-secondary italic font-normal">Sering Ditanyakan</span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-lg max-w-xl mx-auto font-manrope">
            Tidak menemukan jawaban yang dicari? Langsung tanya admin kami via WhatsApp — kami
            siap membantu.
          </p>
        </motion.div>

        {/* Accordion list */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
