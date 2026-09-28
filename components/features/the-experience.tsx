'use client';

import * as React from 'react';
import { useLanguage } from '@/components/providers/language-provider';

export function TheExperience() {
  const { language } = useLanguage();

  const steps = [
    {
      step: '01',
      titleId: 'Persiapan Piranti & Racikan Umpan',
      titleEn: 'Tackle Rigging & Fresh Bait Setup',
      descId: 'Pemandu kami merakit joran dan memasangkan umpan segar sehingga Anda dapat langsung melempar senar tanpa repot.',
      descEn: 'Our guide calibrates the rods, ties reliable rigs, and hooks the bait so you can start fishing right away.',
      image: '/images/tackle-prep.webp',
    },
    {
      step: '02',
      titleId: 'Berlayar Menuju Gugusan Pulau',
      titleEn: 'Cruising to Pristine Island Spots',
      descId: 'Melaju santai di atas perahu motor pulau khas Padang melintasi perairan toska Pulau Sirandah dan Teluk Mandeh.',
      descEn: 'Relax on a comfortable authentic covered island boat while cruising across emerald tropical reef waters.',
      image: '/images/boat-wisata-padang.webp',
    },
    {
      step: '03',
      titleId: 'Sensasi Strike & Dokumentasi Momen',
      titleEn: 'The Thrill of Strike & Photo Memories',
      descId: 'Nikmati deg-degan saat joran disentak ikan karang dan kami abadikan foto kemenangan Anda di atas perahu.',
      descEn: 'Experience the adrenaline of a fighting fish and let our guide capture crisp aesthetic photo memories for you.',
      image: '/images/strike-action.webp',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#02161e] text-white border-b border-cyan-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00d2df] block mb-2">
            {language === 'en' ? 'THE TRIP JOURNEY' : 'ALUR PENGALAMAN TRIP'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            {language === 'en' ? 'The Teman Mancing Experience' : 'Pengalaman Nyata Bersama Kami'}
          </h2>
          <p className="text-xs sm:text-sm text-cyan-100/75 leading-relaxed">
            {language === 'en'
              ? 'From the moment you step aboard until the final catch, our goal is simple: make your trip fun, effortless, and full of great memories.'
              : 'Sejak Anda tiba di dermaga hingga tarikan ikan terakhir, komitmen kami sederhana: membuat liburan mancing Anda santai, aman, dan berkesan.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group flex flex-col rounded-3xl overflow-hidden border border-cyan-500/20 bg-[#062a36]/70 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(0,210,223,0.15)]"
            >
              <div className="relative h-56 overflow-hidden bg-[#011720]">
                <img
                  src={item.image}
                  alt={item.titleId}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062a36] via-transparent to-transparent opacity-75" />
                <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#02161e]/90 border border-cyan-500/30 text-xs font-black text-[#00d2df]">
                  {item.step}
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-base font-bold text-white mb-2">
                  {language === 'en' ? item.titleEn : item.titleId}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-100/75 leading-relaxed">
                  {language === 'en' ? item.descEn : item.descId}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
