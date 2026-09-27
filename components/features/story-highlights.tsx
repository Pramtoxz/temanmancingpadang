'use client';

import * as React from 'react';
import {
  IconUsers,
  IconTools,
  IconReceipt2,
  IconPalmTree,
  IconCampfire,
  IconSailboat,
} from '@tabler/icons-react';

interface StoryItem {
  id: string;
  label: string;
  targetId: string;
  icon: React.ElementType;
}

const stories: StoryItem[] = [
  { id: '1', label: 'Customer', targetId: '#layanan', icon: IconUsers },
  { id: '2', label: 'Rental / Sewa', targetId: '#rental', icon: IconTools },
  { id: '3', label: 'Info Pricelist', targetId: '#layanan', icon: IconReceipt2 },
  { id: '4', label: 'Pulau Pisang', targetId: '#layanan', icon: IconPalmTree },
  { id: '5', label: 'SIRANDAH', targetId: '#boat', icon: IconCampfire },
  { id: '6', label: 'Mandeh', targetId: '#boat', icon: IconSailboat },
];

export function StoryHighlights() {
  return (
    <section className="border-b border-slate-200/80 bg-white/50 py-6 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center gap-6 sm:gap-8 overflow-x-auto pb-2 scrollbar-none">
          {stories.map((story) => {
            const Icon = story.icon;
            return (
              <a
                key={story.id}
                href={story.targetId}
                className="group flex flex-col items-center gap-2 shrink-0 transition-transform active:scale-95"
              >
                <div className="flex h-16 w-16 sm:h-18 sm:w-18 items-center justify-center rounded-full bg-gradient-to-tr from-sky-600 via-sky-400 to-amber-400 p-[2.5px] shadow-sm transition-all group-hover:scale-105 group-hover:shadow-md">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-slate-900">
                    <Icon
                      size={26}
                      stroke={1.8}
                      className="text-sky-700 transition-colors group-hover:text-sky-500 dark:text-sky-300 dark:group-hover:text-sky-400"
                    />
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-700 transition-colors group-hover:text-sky-600 dark:text-slate-300 dark:group-hover:text-sky-400">
                  {story.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
