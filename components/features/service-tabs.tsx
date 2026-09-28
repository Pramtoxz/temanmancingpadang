'use client';

import * as React from 'react';
import { Package } from '@/types';
import { useLanguage } from '@/components/providers/language-provider';
import { PackageCard } from '@/components/features/package-card';
import {
  IconFish,
  IconCampfire,
} from '@tabler/icons-react';

interface ServiceTabsProps {
  packages: Package[];
  whatsappNumber: string;
}

export function ServiceTabs({ packages, whatsappNumber }: ServiceTabsProps) {
  const { language, dict } = useLanguage();
  const [activeTab, setActiveTab] = React.useState<'jasa' | 'trip'>('jasa');

  const jasaPackages = packages.filter((p) => p.category === 'jasa-temanin');
  const tripPackages = packages.filter((p) => p.category === 'trip-mancing');

  return (
    <section id="layanan" className="py-16 sm:py-24 bg-[#011720] text-white border-b border-cyan-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00d2df] block mb-2">
            {language === 'en' ? 'FISHING EXPERIENCES' : 'PILIHAN PAKET MANCING'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            {dict.tabs.heading}
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-cyan-100/75 leading-relaxed">
            {dict.tabs.subheading}
          </p>

          <div className="mt-8 inline-flex rounded-full border border-cyan-500/30 bg-[#062a36] p-1.5 shadow-lg">
            <button
              type="button"
              onClick={() => setActiveTab('jasa')}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'jasa'
                  ? 'bg-[#00d2df] text-[#02161e] shadow-md shadow-cyan-500/20'
                  : 'text-cyan-200/80 hover:text-white'
              }`}
            >
              <IconFish size={16} stroke={2} />
              <span>{dict.tabs.jasaTemanin}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('trip')}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'trip'
                  ? 'bg-[#00d2df] text-[#02161e] shadow-md shadow-cyan-500/20'
                  : 'text-cyan-200/80 hover:text-white'
              }`}
            >
              <IconCampfire size={16} stroke={2} />
              <span>{dict.tabs.tripMancing}</span>
            </button>
          </div>
        </div>

        {activeTab === 'jasa' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
