'use client';

import * as React from 'react';
import { useLanguage } from '@/components/providers/language-provider';
import {
  IconAnchor,
  IconMapPin,
  IconClock,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandTiktok,
} from '@tabler/icons-react';
import { sanitizePhoneNumber } from '@/lib/whatsapp';

interface FooterProps {
  businessName: string;
  tagline: string;
  taglineEn: string | null;
  address: string;
  operatingHours: string;
  whatsappNumber: string;
  instagramUsername: string | null;
  tiktokUsername: string | null;
}

export function Footer({
  businessName,
  tagline,
  taglineEn,
  address,
  operatingHours,
  whatsappNumber,
  instagramUsername,
  tiktokUsername,
}: FooterProps) {
  const { language, dict } = useLanguage();
  const currentYear = new Date().getFullYear();

  const activeTagline = language === 'en' && taglineEn ? taglineEn : tagline;
  const sanitizedWa = sanitizePhoneNumber(whatsappNumber);

  return (
    <footer className="border-t border-slate-200/80 bg-slate-900 text-slate-300 dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-slate-950">
                <IconAnchor size={22} stroke={2.2} />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                {businessName}
              </span>
            </div>
            <p className="text-sm italic text-sky-400">
              &ldquo;{activeTagline}&rdquo;
            </p>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              {dict.footer.description}
            </p>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {dict.footer.contactTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <IconMapPin size={18} className="shrink-0 text-sky-400 mt-0.5" />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <IconClock size={18} className="shrink-0 text-sky-400" />
                <span>{operatingHours}</span>
              </li>
              <li className="flex items-center gap-3">
                <IconBrandWhatsapp size={18} className="shrink-0 text-emerald-400" />
                <a
                  href={`https://wa.me/${sanitizedWa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-300 hover:text-white transition-colors"
                >
                  +{sanitizedWa}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {dict.footer.socialTitle}
            </h4>
            <div className="flex flex-col space-y-2.5">
              {instagramUsername && (
                <a
                  href={`https://instagram.com/${instagramUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <IconBrandInstagram size={18} className="text-pink-400" />
                  <span>@{instagramUsername}</span>
                </a>
              )}
              {tiktokUsername && (
                <a
                  href={`https://tiktok.com/@${tiktokUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <IconBrandTiktok size={18} className="text-sky-300" />
                  <span>@{tiktokUsername}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>
            &copy; {currentYear} {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
