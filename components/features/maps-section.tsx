'use client';

import * as React from 'react';
import { useLanguage } from '@/components/providers/language-provider';
import {
  IconMapPin,
  IconClock,
  IconExternalLink,
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

interface MapsSectionProps {
  address: string;
  operatingHours: string;
  googleMapsUrl: string | null;
  googleMapsIframe: string | null;
}

export function MapsSection({
  address,
  operatingHours,
  googleMapsUrl,
  googleMapsIframe,
}: MapsSectionProps) {
  const { dict } = useLanguage();

  const directMapUrl =
    googleMapsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      'Jembatan Siti Nurbaya Padang'
    )}`;

  return (
    <section id="lokasi" className="py-16 sm:py-24 bg-[#02161e] text-white border-b border-cyan-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00d2df] block mb-2">
            {dict.maps.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            {dict.maps.heading}
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-cyan-100/75 leading-relaxed">
            {dict.maps.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-5">
            <div className="rounded-3xl border border-cyan-500/20 bg-[#062a36]/80 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/20 text-[#00d2df]">
                  <IconMapPin size={22} stroke={2} />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300/70">
                    {dict.maps.addressTitle}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base font-bold text-white">
                    {address}
                  </p>
                  <p className="mt-1 text-xs text-cyan-200/60">
                    Spot Muaro Batang Arau, Jembatan Siti Nurbaya
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-[#062a36]/80 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/20 text-[#00d2df]">
                  <IconClock size={22} stroke={2} />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300/70">
                    {dict.maps.hoursTitle}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base font-bold text-white">
                    {operatingHours}
                  </p>
                  <p className="mt-1 text-xs text-cyan-200/60">
                    Setiap Hari Termasuk Tanggal Merah
                  </p>
                </div>
              </div>
            </div>

            <Button asChild variant="cyan" size="pill" className="w-full justify-center">
              <a href={directMapUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                <IconExternalLink size={17} stroke={2.5} />
                <span>{dict.maps.openMapsButton}</span>
              </a>
            </Button>
          </div>

          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#062a36]/80 backdrop-blur-sm min-h-[380px]">
              {googleMapsIframe ? (
                <div
                  className="w-full h-full min-h-[380px] [&>iframe]:w-full [&>iframe]:h-[380px] [&>iframe]:border-0"
                  dangerouslySetInnerHTML={{ __html: googleMapsIframe }}
                />
              ) : (
                <div className="flex h-[380px] items-center justify-center bg-[#011720] text-cyan-200/50">
                  <div className="text-center">
                    <IconMapPin size={36} className="mx-auto mb-2 text-[#00d2df]" />
                    <span>Peta Lokasi Basecamp</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
