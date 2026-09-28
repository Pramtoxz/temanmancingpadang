'use client';

import * as React from 'react';
import { useLanguage } from '@/components/providers/language-provider';
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconArrowRight,
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { sanitizePhoneNumber } from '@/lib/whatsapp';

interface HeroSectionProps {
  heroTitleId: string;
  heroTitleEn: string | null;
  heroSubtitleId: string;
  heroSubtitleEn: string | null;
  whatsappNumber: string;
}

export function HeroSection({
  heroTitleId,
  heroTitleEn,
  heroSubtitleId,
  heroSubtitleEn,
  whatsappNumber,
}: HeroSectionProps) {
  const { language } = useLanguage();

  const title =
    language === 'en' && heroTitleEn ? heroTitleEn : heroTitleId;
  const subtitle =
    language === 'en' && heroSubtitleEn ? heroSubtitleEn : heroSubtitleId;

  const sanitizedWa = sanitizePhoneNumber(whatsappNumber);
  const waUrl = `https://wa.me/${sanitizedWa}?text=${encodeURIComponent(
    language === 'en'
      ? 'Hello Teman Mancing Padang, I would like to book a fishing charter / trip schedule.'
      : 'Halo Teman Mancing Padang, saya ingin konsultasi dan booking jadwal trip mancing.'
  )}`;

  return (
    <section className="relative min-h-[580px] lg:min-h-[680px] flex items-center overflow-hidden bg-[#02161e] text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-boat.jpg"
          alt="Padang Island Fishing Boat"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02161e]/95 via-[#02161e]/50 to-[#02161e]/90 hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02161e]/90 via-[#02161e]/75 to-[#02161e]/95 lg:hidden" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-1 hidden lg:flex flex-col items-center gap-4">
            <a
              href="https://instagram.com/temanmancingpadang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-500/30 bg-[#062a36]/60 text-cyan-200 transition-all hover:scale-110 hover:border-[#00d2df] hover:text-[#00d2df]"
              aria-label="Instagram"
            >
              <IconBrandInstagram size={18} />
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-500/30 bg-[#062a36]/60 text-cyan-200 transition-all hover:scale-110 hover:border-[#00d2df] hover:text-[#00d2df]"
              aria-label="WhatsApp"
            >
              <IconBrandWhatsapp size={18} />
            </a>
            <div className="h-16 w-[1px] bg-gradient-to-b from-cyan-500/40 to-transparent" />
          </div>

          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00d2df] mb-3">
              {language === 'en' ? 'Padang Coastal & Island Waters' : 'Pesisir Padang & Pulau Sirandah'}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-4">
              {title}
            </h1>

            <p className="text-sm font-semibold tracking-wide text-cyan-200/80 uppercase">
              {language === 'en' ? 'Deliver The Real Strike & Experience' : 'Pengalaman Nyata • Sahabat Terbaik di Setiap Tarikan'}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-right space-y-5 lg:pl-8">
            <p className="text-sm sm:text-base text-cyan-100/85 leading-relaxed max-w-md">
              {subtitle}
            </p>

            <Button asChild variant="cyan" size="pill" className="shadow-[0_0_30px_rgba(0,210,223,0.35)]">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                <span>{language === 'en' ? 'Book Your Trip' : 'Booking Jadwal Trip'}</span>
                <IconArrowRight size={17} stroke={2.5} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
