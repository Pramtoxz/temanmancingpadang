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
      className="relative z-50 flex items-center justify-between border-b border-cyan-500/20 bg-[#01141c] px-4 py-2 text-xs font-semibold text-cyan-100 transition-all"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-2 text-center">
        <IconSparkles size={15} className="shrink-0 text-[#00d2df]" />
        <span className="tracking-wide">{text}</span>
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Tutup Pengumuman"
        className="shrink-0 rounded-full p-1 text-cyan-300 transition-colors hover:bg-[#062a36] hover:text-white"
      >
        <IconX size={14} />
      </button>
    </aside>
  );
}
