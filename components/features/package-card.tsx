'use client';

import * as React from 'react';
import { Package } from '@/types';
import { useLanguage } from '@/components/providers/language-provider';
import { formatRupiah } from '@/lib/formatters';
import { buildPackageWhatsAppUrl } from '@/lib/whatsapp';
import {
  IconCheck,
  IconClock,
  IconBrandWhatsapp,
  IconStar,
  IconMapPin,
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

interface PackageCardProps {
  pkg: Package;
  whatsappNumber: string;
}

export function PackageCard({ pkg, whatsappNumber }: PackageCardProps) {
  const { language, dict } = useLanguage();

  const title = language === 'en' && pkg.title_en ? pkg.title_en : pkg.title;
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
      : pkg.slug.includes('malam')
      ? '/images/feed-temanin.png'
      : '/images/feed-edukasi.png');

  return (
    <Card className="flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-sky-300 dark:hover:border-sky-800">
      <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          {pkg.is_popular ? (
            <Badge variant="popular" className="gap-1 shadow-sm">
              <IconStar size={12} className="fill-amber-500 text-amber-500" />
              <span>{dict.packageCard.popularBadge}</span>
            </Badge>
          ) : (
            <Badge variant="secondary" className="shadow-sm">
              <IconMapPin size={12} />
              <span>Muaro Batang Arau</span>
            </Badge>
          )}

          {pkg.duration_hours && (
            <span className="flex items-center gap-1 text-xs font-bold text-white drop-shadow">
              <IconClock size={14} />
              {pkg.duration_hours} {dict.packageCard.hours}
            </span>
          )}
        </div>
      </div>

      <CardHeader className="space-y-3 pb-3 pt-5">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {title}
          </h3>
          {description && (
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {description}
            </p>
          )}
        </div>

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
            {includes.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
              >
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 mt-0.5">
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
            <span>{dict.packageCard.bookViaWa}</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
