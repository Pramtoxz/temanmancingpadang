'use client';

import * as React from 'react';
import { Package } from '@/types';
import { useLanguage } from '@/components/providers/language-provider';
import { PackageCard } from '@/components/features/package-card';
import {
  IconFish,
  IconCampfire,
} from '@tabler/icons-react';
import { Badge } from '@/components/ui/badge';

interface ServiceTabsProps {
  packages: Package[];
  whatsappNumber: string;
}

export function ServiceTabs({ packages, whatsappNumber }: ServiceTabsProps) {
  const { dict } = useLanguage();
  const [activeTab, setActiveTab] = React.useState<'jasa' | 'trip'>('jasa');

  const jasaPackages = packages.filter((p) => p.category === 'jasa-temanin');
  const tripPackages = packages.filter((p) => p.category === 'trip-mancing');

  return (
    <section id="layanan" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <Badge variant="default" className="mb-3 gap-1.5 py-1 px-3">
            <IconFish size={14} />
            <span>Pilihan Paket Mancing</span>
          </Badge>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {dict.tabs.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {dict.tabs.subheading}
          </p>

          <div className="mt-8 inline-flex rounded-2xl border border-slate-200 bg-slate-100/80 p-1.5 dark:border-slate-800 dark:bg-slate-900">
            <button
              type="button"
              onClick={() => setActiveTab('jasa')}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'jasa'
                  ? 'bg-white text-sky-900 shadow-sm dark:bg-sky-500 dark:text-slate-950'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <IconFish size={16} stroke={2} />
              <span>{dict.tabs.jasaTemanin}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('trip')}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'trip'
                  ? 'bg-white text-sky-900 shadow-sm dark:bg-sky-500 dark:text-slate-950'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <IconCampfire size={16} stroke={2} />
              <span>{dict.tabs.tripMancing}</span>
            </button>
          </div>
        </div>

        {activeTab === 'jasa' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {jasaPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                whatsappNumber={whatsappNumber}
              />
            ))}
          </div>
        )}

        {activeTab === 'trip' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
            {tripPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                whatsappNumber={whatsappNumber}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
