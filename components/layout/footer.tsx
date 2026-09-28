'use client';

import * as React from 'react';
import { useLanguage } from '@/components/providers/language-provider';
import {
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
    <footer className="border-t border-cyan-950/80 bg-[#011117] text-cyan-100/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5 space-y-4">
            <img
              src="/images/logo-lockup.png"
              alt={businessName}
              className="h-10 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,210,223,0.3)]"
            />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00d2df]">
              LEBIH DARI SEKADAR MANCING
            </p>
            <p className="text-xs italic text-cyan-200/80">
              &ldquo;{activeTagline}&rdquo;
            </p>
            <p className="text-xs leading-relaxed text-cyan-100/60 max-w-sm">
              {dict.footer.description}
            </p>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {dict.footer.contactTitle}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-3 text-cyan-100/70">
                <IconMapPin size={17} className="shrink-0 text-[#00d2df] mt-0.5" />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-3 text-cyan-100/70">
                <IconClock size={17} className="shrink-0 text-[#00d2df]" />
                <span>{operatingHours}</span>
              </li>
              <li className="flex items-center gap-3">
                <IconBrandWhatsapp size={17} className="shrink-0 text-emerald-400" />
                <a
                  href={`https://wa.me/${sanitizedWa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-cyan-200 hover:text-white transition-colors"
                >
                  +{sanitizedWa}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {dict.footer.socialTitle}
            </h4>
            <div className="flex flex-col space-y-2.5">
              {instagramUsername && (
                <a
                  href={`https://instagram.com/${instagramUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs text-cyan-100/70 hover:text-white transition-colors"
                >
                  <IconBrandInstagram size={17} className="text-pink-400" />
                  <span>@{instagramUsername}</span>
                </a>
              )}
              {tiktokUsername && (
                <a
                  href={`https://tiktok.com/@${tiktokUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs text-cyan-100/70 hover:text-white transition-colors"
                >
                  <IconBrandTiktok size={17} className="text-[#00d2df]" />
                  <span>@{tiktokUsername}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cyan-950/60 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cyan-300/50 gap-4">
          <p>
            &copy; {currentYear} {businessName}. {dict.footer.copyright}
          </p>
          <div className="flex items-center gap-2 font-medium tracking-wider text-[11px]">
            <span>MANCING</span>
            <span>•</span>
            <span>SILATURAHMI</span>
            <span>•</span>
            <span>PELUANG</span>
            <span>•</span>
            <span>EST. 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
