'use client';

import * as React from 'react';
import { useLanguage } from '@/components/providers/language-provider';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { sanitizePhoneNumber } from '@/lib/whatsapp';

interface FloatingWhatsAppProps {
  whatsappNumber: string;
}

export function FloatingWhatsApp({ whatsappNumber }: FloatingWhatsAppProps) {
  const { language } = useLanguage();
  const sanitized = sanitizePhoneNumber(whatsappNumber);

  const message =
    language === 'en'
      ? 'Hello Teman Mancing Padang, I have a quick question about your fishing trips and gear rental.'
      : 'Halo Teman Mancing Padang, saya mau tanya-tanya seputar jasa temanin mancing dan sewa alat.';

  const url = `https://wa.me/${sanitized}?text=${encodeURIComponent(message)}`;

  return (
    <aside
      aria-label="Kontak Cepat WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Langsung"
        className="group flex h-14 items-center gap-3 rounded-full bg-emerald-500 px-4 text-white shadow-xl shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:scale-105 active:scale-95"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
          <IconBrandWhatsapp size={26} stroke={2.2} />
        </div>
        <span className="hidden sm:inline-block pr-2 text-sm font-bold tracking-wide">
          {language === 'en' ? 'Chat on WhatsApp' : 'Chat WhatsApp'}
        </span>
      </a>
    </aside>
  );
}
