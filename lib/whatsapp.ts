/**
 * WhatsApp integration helper for Photoflix
 * -------------------------------------------
 * All CTA buttons on the site route conversion through WhatsApp.
 * This keeps the site fully static — no backend, no database.
 *
 * TODO: Replace the placeholder phone number with the real Photoflix WA number.
 */

// nomor WhatsApp asli Photoflix (format internasional, tanpa + atau spasi)
const PHONE_NUMBER = "6283185558208";

/**
 * Build a wa.me deep-link with a pre-filled message.
 * @param message  Plain-text message — will be URI-encoded automatically.
 */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ─── Pre-built messages ────────────────────────────────────────────────────────

export const WA_MESSAGES = {
  /** Generic inquiry from header / hero CTA */
  general:
    "Halo Photoflix! Saya tertarik dengan layanan photo booth Anda. Boleh saya tahu lebih lanjut mengenai ketersediaan dan paket yang tersedia?",

  /** Package-specific booking buttons */
  paket2Jam: (tanggal?: string) =>
    `Halo Photoflix! Saya ingin memesan *Paket 2 Jam*${tanggal ? ` untuk acara pada ${tanggal}` : ""}. Mohon informasikan ketersediaannya. Terima kasih!`,

  paket3Jam: (tanggal?: string) =>
    `Halo Photoflix! Saya ingin memesan *Paket 3 Jam*${tanggal ? ` untuk acara pada ${tanggal}` : ""}. Mohon informasikan ketersediaannya. Terima kasih!`,

  paketCustom: () =>
    `Halo Photoflix! Saya tertarik dengan *Paket Custom* dan ingin mendiskusikan kebutuhan acara saya secara lebih detail. Boleh kita ngobrol lebih lanjut?`,

  /** Pre-booking form — all fields composed into one message */
  preBooking: (data: {
    nama: string;
    tanggal: string;
    jenisAcara: string;
    paket: string;
    catatan?: string;
  }) =>
    `Halo Photoflix! Saya ingin melakukan pre-booking dengan detail berikut:\n\n` +
    `👤 *Nama:* ${data.nama}\n` +
    `📅 *Tanggal Acara:* ${data.tanggal}\n` +
    `🎉 *Jenis Acara:* ${data.jenisAcara}\n` +
    `📦 *Paket yang Diminati:* ${data.paket}\n` +
    (data.catatan ? `📝 *Catatan:* ${data.catatan}\n` : "") +
    `\nMohon informasikan ketersediaan dan langkah selanjutnya. Terima kasih! 🙏`,
};
