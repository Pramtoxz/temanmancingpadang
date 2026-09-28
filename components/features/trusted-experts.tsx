'use client';

import * as React from 'react';
import { useLanguage } from '@/components/providers/language-provider';
import { IconArrowRight, IconShieldCheck } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { sanitizePhoneNumber } from '@/lib/whatsapp';

interface TrustedExpertsProps {
  whatsappNumber: string;
}

export function TrustedExperts({ whatsappNumber }: TrustedExpertsProps) {
  const { language } = useLanguage();
  const sanitizedWa = sanitizePhoneNumber(whatsappNumber);
  const waUrl = `https://wa.me/${sanitizedWa}?text=${encodeURIComponent(
    language === 'en'
      ? 'Hello Teman Mancing Padang, I would like to consult about fishing spot options and trip schedules.'
      : 'Halo Teman Mancing Padang, saya ingin konsultasi spot mancing dan jadwal trip yang tersedia.'
  )}`;

  return (
    <section className="py-16 sm:py-24 bg-[#02161e] text-white border-b border-cyan-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-[#062a36] px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#00d2df]">
              <IconShieldCheck size={14} className="text-[#00d2df]" />
              <span>{language === 'en' ? 'LOCAL KNOWLEDGE & AUTHENTIC EXPERIENCE' : 'PENGALAMAN LOKAL TERPERCAYA'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {language === 'en' ? (
                <>
                  Your Trusted <span className="text-[#00d2df]">Padang Coast & Island</span> Fishing Partner
                </>
              ) : (
                <>
                  Pemandu & Partner Mancing <span className="text-[#00d2df]">Terpercaya di Pesisir Padang</span>
                </>
              )}
            </h2>

            <p className="text-xs sm:text-sm text-cyan-100/80 leading-relaxed mb-4">
              {language === 'en'
                ? 'At Teman Mancing Padang, we turn coastal holidays into stories worth telling. Departing from historic coastal harbors in Padang, our experienced local guides know the reefs, current tides, and hidden fish spots around Sirandah, Pasumpahan, and Mandeh.'
                : 'Di Teman Mancing Padang, kami mengubah waktu luang dan liburan pesisir menjadi momen berkesan. Dipandu oleh sahabat dan angler lokal yang memahami seluk-beluk titik karang, arus laut, dan sarang ikan di sekitar Teluk Bayur, Pulau Sirandah, hingga Teluk Mandeh.'}
            </p>

            <p className="text-xs sm:text-sm text-cyan-100/80 leading-relaxed mb-6">
              {language === 'en'
                ? 'Whether you are a solo traveler trying fishing for the first time, a small group looking for weekend healing, or a visiting angler seeking reel-screaming strikes, we provide calibrated tackle, fresh bait, and friendly assistance without hassle.'
                : 'Baik Anda seorang solo traveler yang ingin mencoba mancing untuk pertama kali, rombongan yang ingin liburan santai di akhir pekan, maupun pemancing yang mencari sensasi strike ikan karang, kami menyediakan alat terawat, umpan segar, dan pendampingan ramah.'}
            </p>

            <Button asChild variant="cyan" size="pill" className="shadow-[0_0_25px_rgba(0,210,223,0.35)]">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                <span>{language === 'en' ? 'Consult With Our Guide' : 'Konsultasi Dengan Guide'}</span>
                <IconArrowRight size={17} stroke={2.5} />
              </a>
            </Button>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/25 bg-[#062a36] shadow-2xl">
              <img
                src="/images/local-guide.webp"
                alt="Guide Lokal Teman Mancing Padang"
                className="w-full h-[380px] sm:h-[450px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02161e] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#062a36]/90 backdrop-blur-md border border-cyan-500/20 p-4">
                <span className="text-xs font-bold text-[#00d2df] tracking-wider uppercase block">
                  {language === 'en' ? 'Friendly Local Companion' : 'Sahabat Mancing Berpengalaman'}
                </span>
                <span className="text-xs text-cyan-100/75 mt-0.5 block">
                  {language === 'en' ? 'Patient guidance for beginners and complete setup support' : 'Bimbingan sabar untuk pemula dan setting alat dari nol'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
