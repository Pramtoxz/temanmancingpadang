'use client';

import * as React from 'react';
import { useLanguage } from '@/components/providers/language-provider';
import {
  IconMapPin,
  IconClock,
  IconExternalLink,
  IconCompass,
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
    <section id="lokasi" className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="default" className="mb-3 gap-1.5 py-1 px-3">
            <IconCompass size={14} />
            <span>{dict.maps.badge}</span>
          </Badge>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {dict.maps.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {dict.maps.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-400">
                  <IconMapPin size={22} stroke={2} />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {dict.maps.addressTitle}
                  </h3>
                  <p className="mt-1 text-base font-extrabold text-slate-900 dark:text-white">
                    {address}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Spot Muaro Batang Arau, Jembatan Siti Nurbaya
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400">
                  <IconClock size={22} stroke={2} />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {dict.maps.hoursTitle}
                  </h3>
                  <p className="mt-1 text-base font-extrabold text-slate-900 dark:text-white">
                    {operatingHours}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {dict.maps.hoursTitle} (Termasuk Hari Libur / Tanggal Merah)
                  </p>
                </div>
              </div>
            </div>

            <Button asChild variant="ocean" size="lg" className="w-full gap-2 font-bold shadow-md shadow-sky-600/20">
              <a href={directMapUrl} target="_blank" rel="noopener noreferrer">
                <IconExternalLink size={18} stroke={2} />
                <span>{dict.maps.openMapsButton}</span>
              </a>
            </Button>
          </div>

          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 min-h-[380px]">
              {googleMapsIframe ? (
                <div
                  className="w-full h-full min-h-[380px] [&>iframe]:w-full [&>iframe]:h-[380px] [&>iframe]:border-0"
                  dangerouslySetInnerHTML={{ __html: googleMapsIframe }}
                />
              ) : (
                <div className="flex h-[380px] items-center justify-center bg-slate-100 text-slate-400 dark:bg-slate-800">
                  <div className="text-center">
                    <IconMapPin size={36} className="mx-auto mb-2 text-slate-400" />
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
