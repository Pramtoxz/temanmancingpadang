import { Language, Package, RentalItem } from '@/types';

export function sanitizePhoneNumber(phone: string): string {
  const digitsOnly = phone.replace(/\D/g, '');
  if (digitsOnly.startsWith('0')) {
    return `62${digitsOnly.slice(1)}`;
  }
  return digitsOnly;
}

export function buildPackageWhatsAppUrl(
  phoneNumber: string,
  pkg: Package,
  language: Language
): string {
  const sanitized = sanitizePhoneNumber(phoneNumber);
  const title = language === 'en' && pkg.title_en ? pkg.title_en : pkg.title;

  const message =
    language === 'en'
      ? `Hello Teman Mancing Padang, I am interested in booking the "${title}" package. Could you please share the schedule availability and booking details? Thank you!`
      : `Halo Teman Mancing Padang, saya tertarik untuk booking paket "${title}". Mohon informasi ketersediaan jadwal dan cara pemesanannya. Terima kasih!`;

  return `https://wa.me/${sanitized}?text=${encodeURIComponent(message)}`;
}

export function buildRentalWhatsAppUrl(
  phoneNumber: string,
  rental: RentalItem,
  language: Language
): string {
  const sanitized = sanitizePhoneNumber(phoneNumber);
  const name = language === 'en' && rental.name_en ? rental.name_en : rental.name;

  const message =
    language === 'en'
      ? `Hello Teman Mancing Padang, I would like to rent "${name}". Is it available today? Thank you!`
      : `Halo Teman Mancing Padang, saya ingin menyewa "${name}". Apakah alat ini tersedia untuk disewa hari ini? Terima kasih!`;

  return `https://wa.me/${sanitized}?text=${encodeURIComponent(message)}`;
}

export function buildGeneralWhatsAppUrl(
  phoneNumber: string,
  language: Language
): string {
  const sanitized = sanitizePhoneNumber(phoneNumber);

  const message =
    language === 'en'
      ? `Hello Teman Mancing Padang, I would like to ask some questions regarding your fishing services and boat trips. Thank you!`
      : `Halo Teman Mancing Padang, saya ingin konsultasi dan tanya-tanya seputar jasa temanin mancing dan sewa boat. Terima kasih!`;

  return `https://wa.me/${sanitized}?text=${encodeURIComponent(message)}`;
}
