'use client';

import * as React from 'react';
import { useLanguage } from '@/components/providers/language-provider';
import { IconCheck } from '@tabler/icons-react';

export function TargetSpecies() {
  const { language } = useLanguage();

  const speciesList = [
    { nameId: 'Ikan Kerapu Karang (Grouper)', nameEn: 'Coral Reef Grouper' },
    { nameId: 'Kakap Merah & Jenahak (Red Snapper)', nameEn: 'Red Snapper & Mangrove Jack' },
    { nameId: 'Ikan Tenggiri (Spanish Mackerel)', nameEn: 'Spanish Mackerel' },
    { nameId: 'Kuwe / Giant Trevally (GT)', nameEn: 'Giant Trevally (GT)' },
    { nameId: 'Tongkol & Baby Tuna', nameEn: 'Coastal Tuna & Bonito' },
    { nameId: 'Ikan Kaci & Ikan Lencam Karang', nameEn: 'Emperor Fish & Reef Species' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#011720] text-white border-b border-cyan-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#062a36] shadow-lg">
              <img
                src="/images/trophy-catch.jpg"
                alt="Tangkapan Kakap Merah Padang"
                className="h-64 sm:h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02161e] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-xs font-bold text-[#00d2df] uppercase tracking-wider block">
                  {language === 'en' ? 'Reef Fish Catch' : 'Tangkapan Spot Karang'}
                </span>
                <span className="text-xs text-cyan-100/80">
                  {language === 'en' ? 'Fresh Red Snapper from Sirandah waters' : 'Kakap Merah segar perairan Pulau Sirandah'}
                </span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#062a36] shadow-lg">
              <img
                src="/images/strike-action.jpg"
                alt="Strike Kuwe Giant Trevally Padang"
                className="h-64 sm:h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02161e] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-xs font-bold text-[#00d2df] uppercase tracking-wider block">
                  {language === 'en' ? 'Offshore Strike Action' : 'Aksi Strike Tarikan Monster'}
                </span>
                <span className="text-xs text-cyan-100/80">
                  {language === 'en' ? 'Giant Trevally fight on coastal boat' : 'Sensasi tarikan Kuwe (GT) memacu adrenalin'}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00d2df] mb-2">
              {language === 'en' ? 'Coastal & Island Spots' : 'Spot Karang & Tubiran Padang'}
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
              {language === 'en' ? 'Target Species Include:' : 'Target Spesies Tangkapan:'}
            </h2>

            <p className="text-xs sm:text-sm text-cyan-100/75 leading-relaxed mb-6">
              {language === 'en'
                ? 'From shallow coral reefs around Sirandah, Pasumpahan, to offshore drop-offs in West Sumatra, our local guides know exactly where the fish gather.'
                : 'Dari karang dangkal sekitar pulau Sirandah hingga tubiran laut dalam di pesisir barat Sumatera Barat, titik GPS dan pengalaman lokal memastikan trip mancing Anda berpeluang besar.'}
            </p>

            <div className="space-y-3 w-full">
              {speciesList.map((item) => (
                <div
                  key={item.nameId}
                  className="flex items-center gap-3 rounded-xl bg-[#062a36]/60 border border-cyan-500/15 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00d2df] text-[#02161e]">
                    <IconCheck size={13} stroke={3} />
                  </div>
                  <span>{language === 'en' ? item.nameEn : item.nameId}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
