'use client';

import * as React from 'react';
import { useLanguage } from '@/components/providers/language-provider';
import { Button } from '@/components/ui/button';
import { sanitizePhoneNumber } from '@/lib/whatsapp';
import { IconArrowRight } from '@tabler/icons-react';

interface WhoItsForProps {
  whatsappNumber: string;
}

export function WhoItsFor({ whatsappNumber }: WhoItsForProps) {
  const { language } = useLanguage();
  const sanitizedWa = sanitizePhoneNumber(whatsappNumber);
  const waUrl = `https://wa.me/${sanitizedWa}?text=${encodeURIComponent(
    language === 'en'
      ? 'Hello Teman Mancing Padang, I would like to book a trip according to my group requirements.'
      : 'Halo Teman Mancing Padang, saya ingin konsultasi paket trip yang cocok untuk kebutuhan saya.'
  )}`;

  const audienceCards = [
    {
      titleId: 'Pemula & Solo Traveler',
      titleEn: 'Beginners & Solo Travelers',
      descId: 'Ingin rekreasi santai menikmati suasana pesisir tanpa ribet beli alat dan tanpa repot pasang umpan.',
      descEn: 'Enjoy easy outdoor coastal relaxation without having to buy expensive gear or handle messy live baits.',
      image: '/images/card-compass.jpg',
    },
    {
      titleId: 'Keluarga & Rombongan Santai',
      titleEn: 'Families & Leisure Groups',
      descId: 'Petualangan berlayar ke pulau-pulau eksotis (Sirandah, Pasumpahan, Mandeh) dengan perahu aman dan berpeneduh.',
      descEn: 'Memorable boat trips to exotic tropical islands with covered comfortable island boats and scenic beach stops.',
      image: '/images/card-boat.jpg',
    },
    {
      titleId: 'Angler & Mancing Mania',
      titleEn: 'Visiting Anglers & Enthusiasts',
      descId: 'Mencari spot karang dan tubiran potensial untuk merasakan sensasi tarikan ikan predator laut dalam Padang.',
      descEn: 'Targeting reef drop-offs and productive coral zones for thrilling strikes and deep-water action.',
      image: '/images/card-anchor.jpg',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#011a24] text-white border-b border-cyan-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00d2df] block mb-2">
            {language === 'en' ? 'TAILORED FOR EVERYONE' : 'TERBUKA UNTUK SIAPA SAJA'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            {language === 'en'
              ? 'Perfect for Tourists, Families & Visiting Anglers'
              : 'Pilihan Tepat untuk Wisatawan, Rombongan, & Pemula'}
          </h2>
          <p className="text-xs sm:text-sm text-cyan-100/75 leading-relaxed">
            {language === 'en'
              ? 'Whether you want a casual weekend unwind, family island outing, or serious offshore strike, we provide the right setup for you.'
              : 'Dari liburan santai akhir pekan, perjalanan wisata keluarga ke pulau, hingga perburuan strike karang, kami menyediakan pendampingan yang tepat.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {audienceCards.map((card) => (
            <div
              key={card.titleId}
              className="group flex flex-col rounded-3xl overflow-hidden border border-cyan-500/25 bg-[#062a36]/80 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,210,223,0.18)]"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden bg-[#02161e]">
                <img
                  src={card.image}
                  alt={card.titleId}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062a36] via-transparent to-transparent opacity-80" />
              </div>

              <div className="flex flex-col flex-1 p-6 text-center">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {language === 'en' ? card.titleEn : card.titleId}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-100/75 leading-relaxed flex-1">
                  {language === 'en' ? card.descEn : card.descId}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="cyan" size="pill" className="shadow-[0_0_30px_rgba(0,210,223,0.35)]">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
              <span>{language === 'en' ? 'Book Your Experience' : 'Pesan Pengalaman Anda'}</span>
              <IconArrowRight size={17} stroke={2.5} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
