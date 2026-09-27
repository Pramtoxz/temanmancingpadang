'use client';

import * as React from 'react';
import { Package } from '@/types';
import { useLanguage } from '@/components/providers/language-provider';
import { formatRupiah } from '@/lib/formatters';
import { buildPackageWhatsAppUrl } from '@/lib/whatsapp';
import {
  IconAnchor,
  IconLifebuoy,
  IconCheck,
  IconBrandWhatsapp,
  IconShieldCheck,
  IconClock,
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

interface BoatCharterProps {
  boatPackages: Package[];
  whatsappNumber: string;
  boatTerms: string[];
}

export function BoatCharter({
  boatPackages,
  whatsappNumber,
  boatTerms,
}: BoatCharterProps) {
  const { language, dict } = useLanguage();

  return (
    <section
      id="boat"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="default" className="mb-3 gap-1.5 py-1 px-3">
            <IconAnchor size={14} />
            <span>{dict.boat.badge}</span>
          </Badge>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {dict.boat.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {dict.boat.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {boatPackages.map((pkg) => {
            const title =
              language === 'en' && pkg.title_en ? pkg.title_en : pkg.title;
            const description =
              language === 'en' && pkg.description_en
                ? pkg.description_en
                : pkg.description;
            const priceNote =
              language === 'en' && pkg.price_note_en
                ? pkg.price_note_en
                : pkg.price_note;
            const includes =
              language === 'en' && pkg.includes_en && pkg.includes_en.length > 0
                ? pkg.includes_en
                : pkg.includes;
            const waUrl = buildPackageWhatsAppUrl(whatsappNumber, pkg, language);

            const thumbnail =
              pkg.image_url ||
              (pkg.slug.includes('sirandah')
                ? '/images/sirandah.jpg'
                : pkg.slug.includes('mandeh')
                ? '/images/mandeh.jpg'
                : '/images/hero-bg.jpg');

            return (
              <Card
                key={pkg.id}
                className="flex flex-col justify-between overflow-hidden border-slate-200/80 hover:shadow-xl hover:border-sky-400 dark:hover:border-sky-700 transition-all duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={thumbnail}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <Badge variant="secondary" className="gap-1 shadow-sm">
                      <IconLifebuoy size={12} className="text-sky-600" />
                      <span>Wisata Pulau</span>
                    </Badge>
                    {pkg.duration_hours && (
                      <span className="flex items-center gap-1 text-xs font-bold text-white drop-shadow">
                        <IconClock size={14} />
                        {pkg.duration_hours} {dict.packageCard.hours}
                      </span>
                    )}
                  </div>
                </div>

                <CardHeader className="space-y-3 pb-3 pt-5">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {title}
                  </h3>

                  {description && (
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {description}
                    </p>
                  )}

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-sky-600 dark:text-sky-400">
                        {formatRupiah(pkg.price)}
                      </span>
                      {priceNote && (
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          / {priceNote}
                        </span>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 pb-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
                      {dict.packageCard.includesTitle}
                    </h4>
                    <ul className="space-y-2">
                      {includes.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                        >
                          <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-400 mt-0.5">
                            <IconCheck size={12} stroke={3} />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button asChild variant="ocean" className="w-full gap-2 font-bold py-2.5">
                    <a href={waUrl} target="_blank" rel="noopener noreferrer">
                      <IconBrandWhatsapp size={18} stroke={2} />
                      <span>{dict.boat.inquireBoat}</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {boatTerms && boatTerms.length > 0 && (
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
            <div className="flex items-center gap-2 mb-4">
              <IconShieldCheck size={20} className="text-sky-600 dark:text-sky-400" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {dict.boat.safetyTitle}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {boatTerms.map((term, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <IconLifebuoy size={16} className="text-sky-500 shrink-0 mt-0.5" />
                  <span>{term}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
