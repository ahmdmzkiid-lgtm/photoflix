"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Paket Harga", href: "#harga" },
  { label: "Cara Pesan", href: "#cara-pesan" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        id="header"
        className={`w-full top-0 sticky z-40 border-b transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-secondary-container shadow-lg shadow-black/25"
            : "bg-background border-secondary-container/30"
        }`}
      >
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-2.5 md:py-3 max-w-container-max mx-auto">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center group"
            aria-label="Photoflix - Kembali ke atas"
          >
            <Image
              src="/brandicon.webp"
              alt="Photoflix Photobooth"
              width={240}
              height={68}
              className="h-18 md:h-22 w-auto object-contain brightness-0 invert drop-shadow-[0_0_8px_rgba(233,195,73,0.5)] transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_14px_rgba(233,195,73,0.7)]"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8 font-manrope text-sm font-semibold"
            aria-label="Navigasi utama"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-on-surface-variant hover:text-secondary transition-colors duration-300 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#booking"
            className="hidden md:inline-flex bg-secondary text-on-secondary px-6 py-2 rounded-lg font-manrope text-sm font-semibold scale-95 active:scale-90 transition-transform duration-300 hover:bg-secondary-fixed items-center justify-center cursor-pointer shadow-md shadow-secondary/10"
            id="header-cta-btn"
          >
            Book Now
          </a>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-secondary p-1"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          >
            {menuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
          </button>
        </div>
      </header>

      {/* Mobile slide-in drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-surface-container shadow-2xl flex flex-col transition-transform duration-300 ease-out border-l border-secondary-container/20 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-secondary-container/30">
            <span className="flex items-center">
              <Image
                src="/brandicon.webp"
                alt="Photoflix Photobooth"
                width={150}
                height={42}
                className="h-12 w-auto object-contain brightness-0 invert drop-shadow-[0_0_8px_rgba(233,195,73,0.5)]"
              />
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-on-surface-variant hover:text-secondary"
              aria-label="Tutup menu"
            >
              <X size={22} weight="bold" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-1 px-4 pt-6 font-manrope">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-on-surface-variant hover:text-secondary text-base font-semibold px-4 py-3 rounded-xl hover:bg-primary-container/20 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Drawer CTA */}
          <div className="px-6 mt-auto mb-8">
            <a
              href="#booking"
              onClick={handleNavClick}
              className="w-full inline-flex bg-secondary text-on-secondary px-6 py-3 rounded-xl font-manrope text-base font-semibold transition-all duration-300 hover:bg-secondary-fixed justify-center text-center shadow-lg shadow-secondary/15"
              id="mobile-cta-btn"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
