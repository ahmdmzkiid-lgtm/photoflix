"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { WhatsappLogo, PaperPlaneTilt, CalendarDots } from "@phosphor-icons/react";
import { buildWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";

const JENIS_ACARA_OPTIONS = [
  "Wedding / Pernikahan",
  "Engagement / Tunangan",
  "Birthday Party",
  "Sweet Seventeen",
  "Corporate Event",
  "Wisuda",
  "Pameran / Bazaar",
  "Gathering / Reunian",
  "Lainnya",
];

const PAKET_OPTIONS = [
  "Paket 2 Jam",
  "Paket 3 Jam",
  "Paket Custom",
  "Belum tahu / Minta rekomendasi",
];

export function PreBookingForm() {
  const [form, setForm] = useState({
    nama: "",
    tanggal: "",
    jenisAcara: "",
    paket: "",
    catatan: "",
  });

  const isValid = form.nama && form.tanggal && form.jenisAcara && form.paket;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    const waLink = buildWhatsAppLink(WA_MESSAGES.preBooking(form));
    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="booking"
      className="py-24 px-margin-mobile md:px-margin-desktop w-full bg-background relative overflow-hidden border-b border-secondary-container/30"
    >
      <div className="texture-overlay" />

      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-secondary) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2 mb-5 border border-secondary/20">
            <CalendarDots size={14} weight="duotone" />
            Pre-Booking
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-on-surface">
            Isi Form &{" "}
            <span className="text-secondary italic font-normal">Kirim via WA</span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-lg max-w-xl mx-auto font-manrope">
            Isi form berikut dan tombol di bawah akan otomatis membuka WhatsApp dengan pesan
            yang sudah terformat rapi — tidak ada data yang dikirim ke server.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="bg-surface-container rounded-2xl border border-secondary-container/20 p-6 md:p-10 shadow-2xl shadow-black/40 relative z-10"
        >
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Nama */}
            <div>
              <label htmlFor="form-nama" className="block text-sm font-semibold text-on-surface mb-1.5 font-manrope">
                Nama Lengkap <span className="text-secondary">*</span>
              </label>
              <input
                id="form-nama"
                name="nama"
                type="text"
                required
                value={form.nama}
                onChange={handleChange}
                placeholder="Contoh: Sari Wulandari"
                className="w-full px-4 py-3 rounded-xl border border-secondary-container/30 bg-[#041426] text-on-surface text-sm placeholder-on-surface-variant/30 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-manrope"
              />
            </div>

            {/* Tanggal */}
            <div>
              <label htmlFor="form-tanggal" className="block text-sm font-semibold text-on-surface mb-1.5 font-manrope">
                Tanggal Acara <span className="text-secondary">*</span>
              </label>
              <input
                id="form-tanggal"
                name="tanggal"
                type="date"
                required
                value={form.tanggal}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 rounded-xl border border-secondary-container/30 bg-[#041426] text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-manrope scheme-dark"
              />
            </div>

            {/* Two-column grid for dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Jenis Acara */}
              <div>
                <label htmlFor="form-jenis-acara" className="block text-sm font-semibold text-on-surface mb-1.5 font-manrope">
                  Jenis Acara <span className="text-secondary">*</span>
                </label>
                <select
                  id="form-jenis-acara"
                  name="jenisAcara"
                  required
                  value={form.jenisAcara}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-secondary-container/30 bg-[#041426] text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-manrope cursor-pointer"
                >
                  <option value="" className="bg-surface-container">Pilih jenis acara...</option>
                  {JENIS_ACARA_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-surface-container text-on-surface">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Paket */}
              <div>
                <label htmlFor="form-paket" className="block text-sm font-semibold text-on-surface mb-1.5 font-manrope">
                  Paket yang Diminati <span className="text-secondary">*</span>
                </label>
                <select
                  id="form-paket"
                  name="paket"
                  required
                  value={form.paket}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-secondary-container/30 bg-[#041426] text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-manrope cursor-pointer"
                >
                  <option value="" className="bg-surface-container">Pilih paket...</option>
                  {PAKET_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-surface-container text-on-surface">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Catatan (optional) */}
            <div>
              <label htmlFor="form-catatan" className="block text-sm font-semibold text-on-surface mb-1.5 font-manrope">
                Catatan Tambahan{" "}
                <span className="text-on-surface-variant/60 font-normal font-manrope">(opsional)</span>
              </label>
              <textarea
                id="form-catatan"
                name="catatan"
                value={form.catatan}
                onChange={handleChange}
                rows={3}
                placeholder="Ceritakan tema acara, lokasi, atau permintaan khusus Anda..."
                className="w-full px-4 py-3 rounded-xl border border-secondary-container/30 bg-[#041426] text-on-surface text-sm placeholder-on-surface-variant/30 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none font-manrope"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid}
              id="prebooking-submit-btn"
              className={`w-full inline-flex items-center justify-center gap-2.5 rounded-full font-bold text-sm px-8 py-4 transition-all duration-300 uppercase tracking-widest ${
                isValid
                  ? "bg-secondary text-on-secondary hover:bg-secondary-fixed hover:scale-[1.02] shadow-lg shadow-secondary/20 cursor-pointer"
                  : "bg-surface-container-highest text-on-surface-variant/40 cursor-not-allowed"
              }`}
            >
              <WhatsappLogo size={20} weight="fill" />
              Kirim via WhatsApp
              <PaperPlaneTilt size={16} weight="fill" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
