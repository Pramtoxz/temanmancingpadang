'use client';

import * as React from 'react';
import { useLanguage } from '@/components/providers/language-provider';
import { useTheme } from 'next-themes';
import {
  IconFish,
  IconSun,
  IconMoon,
  IconBrandWhatsapp,
  IconMenu2,
  IconX,
  IconMapPin,
  IconClock,
  IconAnchor,
  IconTools,
  IconCompass,
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { sanitizePhoneNumber } from '@/lib/whatsapp';

interface NavbarProps {
  businessName: string;
  whatsappNumber: string;
  operatingHours: string;
}

export function Navbar({
  businessName,
  whatsappNumber,
  operatingHours,
}: NavbarProps) {
  const { language, dict, toggleLanguage } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const sanitizedWa = sanitizePhoneNumber(whatsappNumber);
  const waUrl = `https://wa.me/${sanitizedWa}?text=${encodeURIComponent(
    language === 'en'
      ? 'Hello Teman Mancing Padang, I would like to ask about your fishing packages and services.'
      : 'Halo Teman Mancing Padang, saya ingin bertanya tentang paket dan layanan mancing.'
  )}`;

  const navLinks = [
    { href: '#layanan', label: dict.nav.services, icon: IconFish },
    { href: '#rental', label: dict.nav.rental, icon: IconTools },
    { href: '#boat', label: dict.nav.boat, icon: IconAnchor },
    { href: '#lokasi', label: dict.nav.location, icon: IconMapPin },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-colors dark:border-slate-800/80 dark:bg-slate-950/90">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="group flex items-center gap-3 transition-transform hover:scale-[1.02]"
        >
          <img
            src="/images/logo.png"
            alt="Padang Teman Mancing"
            className="h-11 w-11 rounded-full object-cover border-2 border-sky-500 shadow-md shadow-sky-500/20"
          />
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-lg">
              {businessName}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <IconClock size={12} stroke={2} />
              {operatingHours}
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-400"
              >
                <Icon size={16} stroke={1.8} />
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleLanguage}
            title={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            className="flex h-10 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <IconCompass size={16} stroke={2} className="text-sky-600 dark:text-sky-400" />
            <span>{language.toUpperCase()}</span>
          </button>

          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Theme"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:bg-slate-100 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {resolvedTheme === 'dark' ? (
                <IconSun size={18} stroke={2} className="text-amber-400" />
              ) : (
                <IconMoon size={18} stroke={2} className="text-slate-700" />
              )}
            </button>
          )}

          <Button
            asChild
            variant="ocean"
            size="default"
            className="hidden lg:inline-flex"
          >
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2 font-bold"
            >
              <IconBrandWhatsapp size={18} stroke={2} />
              <span>{dict.nav.chatWa}</span>
            </a>
          </Button>
        </div>

        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex h-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-2.5 text-xs font-bold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            {language.toUpperCase()}
          </button>

          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Theme"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            >
              {resolvedTheme === 'dark' ? (
                <IconSun size={16} stroke={2} className="text-amber-400" />
              ) : (
                <IconMoon size={16} stroke={2} />
              )}
            </button>
          )}

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
          >
            {mobileMenuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-6 dark:border-slate-800 dark:bg-slate-950 sm:hidden">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-semibold text-slate-800 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
                >
                  <Icon size={20} className="text-sky-600 dark:text-sky-400" />
                  <span>{link.label}</span>
                </a>
              );
            })}
            <div className="pt-2">
              <Button asChild variant="ocean" className="w-full justify-center py-3 text-base">
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <IconBrandWhatsapp size={20} stroke={2} />
                  <span>{dict.nav.chatWa}</span>
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
