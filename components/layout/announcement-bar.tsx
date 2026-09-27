'use client';

import * as React from 'react';
import { useLanguage } from '@/components/providers/language-provider';
import { IconSparkles, IconX } from '@tabler/icons-react';

interface AnnouncementBarProps {
  bannerId: string | null;
  bannerEn: string | null;
  isActive: boolean;
}

export function AnnouncementBar({
  bannerId,
  bannerEn,
  isActive,
}: AnnouncementBarProps) {
  const { language } = useLanguage();
  const [dismissed, setDismissed] = React.useState(false);

  if (!isActive || dismissed) {
    return null;
  }

  const text =
    language === 'en' && bannerEn ? bannerEn : bannerId;

  if (!text) {
    return null;
  }

  return (
    <aside
      aria-label="Pengumuman"
      className="relative z-50 flex items-center justify-between border-b border-sky-800/20 bg-sky-900 px-4 py-2.5 text-xs font-medium text-sky-100 transition-all dark:border-sky-500/20 dark:bg-sky-950 dark:text-sky-200"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-2 text-center">
        <IconSparkles size={16} className="shrink-0 text-amber-400" />
        <span className="tracking-wide">{text}</span>
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Tutup Pengumuman"
        className="shrink-0 rounded p-1 text-sky-300 transition-colors hover:bg-sky-800 hover:text-white"
      >
        <IconX size={14} />
      </button>
    </aside>
  );
}
