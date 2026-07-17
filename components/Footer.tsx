"use client";

import Image from "next/image";
import {
  Aperture,
  WhatsappLogo,
  EnvelopeSimple,
  MapPin,
  Heart,
  InstagramLogo,
  TiktokLogo,
} from "@phosphor-icons/react";
import { buildWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Paket Harga", href: "#harga" },
  { label: "Cara Pesan", href: "#cara-pesan" },
  { label: "FAQ", href: "#faq" },
  { label: "Pre-Booking", href: "#booking" },
];

export function Footer() {
  const waLink = buildWhatsAppLink(WA_MESSAGES.general);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1828] text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #F2A65A 0%, transparent 70%)" }}
        aria-hidden
      />

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#F2A65A] to-[#e8913d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#141F33]">
              Siap Mengabadikan Momen Spesial Anda?
            </h3>
            <p className="text-[#141F33]/70 mt-1 text-sm md:text-base">
              Hubungi kami sekarang dan dapatkan konsultasi gratis bersama admin Photoflix.
            </p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-cta-btn"
            className="flex-shrink-0 inline-flex items-center gap-2.5 bg-[#141F33] text-[#F2A65A] rounded-full px-7 py-4 font-semibold text-sm hover:bg-[#1D2B44] hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <WhatsappLogo size={20} weight="fill" />
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>

      {/* Footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center mb-5 group">
              <Image
                src="/brandicon.webp"
                alt="Photoflix Photobooth"
                width={360}
                height={100}
                className="h-24 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Layanan photo booth premium yang mengabadikan setiap momen bahagia Anda menjadi
              kenangan tak terlupakan. Profesional, kreatif, dan terpercaya.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {/* TODO: Ganti href dengan link Instagram asli Photoflix */}
              <a
                href="https://instagram.com/photoflix.photobooth"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram-link"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#F2A65A]/20 border border-white/10 hover:border-[#F2A65A]/30 flex items-center justify-center text-white/60 hover:text-[#F2A65A] transition-all duration-300"
                aria-label="Instagram Photoflix"
              >
                <InstagramLogo size={18} weight="duotone" />
              </a>
              {/* TODO: Ganti href dengan link TikTok asli Photoflix */}
              <a
                href="https://tiktok.com/@photoflix.photobooth"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-tiktok-link"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#F2A65A]/20 border border-white/10 hover:border-[#F2A65A]/30 flex items-center justify-center text-white/60 hover:text-[#F2A65A] transition-all duration-300"
                aria-label="TikTok Photoflix"
              >
                <TiktokLogo size={18} weight="duotone" />
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-wa-icon-link"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#F2A65A]/20 border border-white/10 hover:border-[#F2A65A]/30 flex items-center justify-center text-white/60 hover:text-[#F2A65A] transition-all duration-300"
                aria-label="WhatsApp Photoflix"
              >
                <WhatsappLogo size={18} weight="duotone" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#F2A65A] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">
              Kontak
            </h4>
            <ul className="space-y-4">
              {/* TODO: Ganti dengan nomor WA asli Photoflix */}
              <li className="flex items-start gap-3">
                <WhatsappLogo size={18} weight="duotone" className="text-[#F2A65A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/70">WhatsApp</p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-[#F2A65A] transition-colors font-medium"
                  >
                    +62 831-8555-8208
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <EnvelopeSimple size={18} weight="duotone" className="text-[#F2A65A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/70">Email</p>
                  <a
                    href="mailto:photoflix25@gmail.com"
                    className="text-sm text-white hover:text-[#F2A65A] transition-colors font-medium"
                  >
                    photoflix25@gmail.com
                  </a>
                </div>
              </li>
              {/* TODO: Ganti dengan area layanan asli Photoflix */}
              <li className="flex items-start gap-3">
                <MapPin size={18} weight="duotone" className="text-[#F2A65A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/70">Area Layanan</p>
                  <p className="text-sm text-white font-medium">Jabodetabek & Sekitarnya</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {year} Photoflix. Hak cipta dilindungi.
          </p>
          <p className="text-white/20 text-xs flex items-center gap-1">
            Dibuat dengan <Heart size={13} weight="fill" className="text-[#F2A65A]" /> untuk klien-klien spesial Photoflix
          </p>
        </div>
      </div>
    </footer>
  );
}
