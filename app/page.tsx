import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Pricing } from "@/components/Pricing";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { PreBookingForm } from "@/components/PreBookingForm";
import { Footer } from "@/components/Footer";

/**
 * Photoflix Landing Page
 * ─────────────────────────────────────────────────────────────────
 * Single-page design — each component maps to a section with
 * a matching anchor ID for smooth-scroll navigation from the Header.
 *
 * Section order:
 *   #home       → Hero
 *               → OurStory
 *   #layanan    → Services
 *   #galeri     → Gallery
 *   #harga      → Pricing
 *   #cara-pesan → HowItWorks
 *   #faq        → FAQ
 *   #booking    → PreBookingForm
 *              → Footer (no scroll target)
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurStory />
        <Services />
        <Gallery />
        <Pricing />
        <HowItWorks />
        <FAQ />
        <PreBookingForm />
      </main>
      <Footer />
    </>
  );
}
