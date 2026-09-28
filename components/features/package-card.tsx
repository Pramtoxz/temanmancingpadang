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
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

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
      ? '/images/sirandah.webp'
      : pkg.slug.includes('mandeh')
      ? '/images/mandeh.webp'
      : pkg.slug.includes('malam')
      ? '/images/strike-action.webp'
      : '/images/couple-date.webp');

  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#062a36]/80 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(0,210,223,0.18)]">
      <div>
        <div className="relative h-48 w-full overflow-hidden bg-[#02161e]">
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062a36] via-transparent to-transparent opacity-80" />

          {pkg.is_popular && (
            <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-[#00d2df] px-3 py-1 text-xs font-bold text-[#02161e] shadow-md">
              <IconStar size={13} className="fill-[#02161e]" />
              <span>{dict.packageCard.popularBadge}</span>
            </div>
          )}

          {pkg.duration_hours && (
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-[#02161e]/85 backdrop-blur-md px-3 py-1 text-xs font-semibold text-cyan-200 border border-cyan-500/30">
              <IconClock size={13} className="text-[#00d2df]" />
              <span>{pkg.duration_hours} {dict.packageCard.hours}</span>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-white mb-2 leading-snug">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-cyan-100/75 leading-relaxed line-clamp-2 mb-5">
            {description}
          </p>

          <div className="mb-6 rounded-2xl bg-[#02161e]/70 border border-cyan-500/20 p-4">
            <span className="text-[11px] font-semibold text-cyan-300/80 block uppercase tracking-wider mb-1">
              {dict.packageCard.startingFrom}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-[#00d2df]">
                {formatRupiah(pkg.price)}
              </span>
              {priceNote && (
                <span className="text-xs text-cyan-200/70">
                  / {priceNote}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-200 block">
              {dict.packageCard.includesTitle}:
            </span>
            <ul className="space-y-2">
              {includes.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-cyan-100/80"
                >
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-[#00d2df]">
                    <IconCheck size={11} stroke={3} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Button asChild variant="cyan" size="pill" className="w-full justify-center">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2 font-bold"
          >
            <IconBrandWhatsapp size={18} stroke={2.5} />
            <span>{dict.packageCard.bookViaWa}</span>
          </a>
        </Button>
      </div>
    </div>
  );
}
