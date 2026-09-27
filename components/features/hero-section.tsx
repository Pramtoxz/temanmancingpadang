'use client';

import * as React from 'react';
import { useLanguage } from '@/components/providers/language-provider';
import {
  IconFish,
  IconBrandWhatsapp,
  IconSparkles,
  IconCompass,
  IconLifebuoy,
  IconUsers,
  IconArrowDown,
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
  const { language, dict } = useLanguage();

  const title =
    language === 'en' && heroTitleEn ? heroTitleEn : heroTitleId;
  const subtitle =
    language === 'en' && heroSubtitleEn ? heroSubtitleEn : heroSubtitleId;

  const sanitizedWa = sanitizePhoneNumber(whatsappNumber);
  const waUrl = `https://wa.me/${sanitizedWa}?text=${encodeURIComponent(
    language === 'en'
      ? 'Hello Teman Mancing Padang, I would like to consult and ask about your fishing packages and schedule.'
      : 'Halo Teman Mancing Padang, saya mau tanya-tanya paket mancing dan jadwal yang tersedia.'
  )}`;

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Pantai Padang dan Perahu Wisata"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/88 to-slate-50 dark:from-slate-950/95 dark:via-slate-950/90 dark:to-slate-950 backdrop-blur-[1.5px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-100/70 px-4 py-1.5 text-xs sm:text-sm font-bold text-sky-900 shadow-sm backdrop-blur-sm dark:border-sky-800 dark:bg-sky-950/80 dark:text-sky-300">
            <IconSparkles size={16} className="text-amber-500 shrink-0" />
            <span>{dict.hero.badge}</span>
            <span className="hidden sm:inline text-sky-400">•</span>
            <span className="hidden sm:inline font-semibold text-sky-700 dark:text-sky-400">
              {dict.hero.subbadge}
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white leading-[1.15]">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              variant="ocean"
              className="w-full sm:w-auto text-base gap-2.5 shadow-lg shadow-sky-600/25"
            >
              <a href="#layanan">
                <IconFish size={20} stroke={2} />
                <span>{dict.hero.explorePackages}</span>
                <IconArrowDown size={18} stroke={2} />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base gap-2.5 border-slate-300 dark:border-slate-700"
            >
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <IconBrandWhatsapp size={20} stroke={2} className="text-emerald-500" />
                <span>{dict.hero.consultation}</span>
              </a>
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl">
            <div className="flex items-center justify-center sm:justify-start gap-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-400">
                <IconUsers size={20} stroke={2} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-slate-900 dark:text-white">
                  {dict.hero.statGuide}
                </span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">
                  Sabarlah diajari dari nol
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400">
                <IconCompass size={20} stroke={2} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-slate-900 dark:text-white">
                  {dict.hero.statGear}
                </span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">
                  Free pakai alat & umpan
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                <IconLifebuoy size={20} stroke={2} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-slate-900 dark:text-white">
                  {dict.hero.statBoat}
                </span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">
                  Life jacket & kapten resmi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
