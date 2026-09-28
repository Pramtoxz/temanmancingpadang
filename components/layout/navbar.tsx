'use client';

import * as React from 'react';
import { useLanguage } from '@/components/providers/language-provider';
import { useTheme } from 'next-themes';
import {
  IconHeartHandshake,
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
  IconCalendarEvent,
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
      ? 'Hello Teman Mancing Padang, I would like to consult and book a fishing date / trip schedule.'
      : 'Halo Teman Mancing Padang, saya mau tanya-tanya paket mancing santai / kencan dan booking jadwal.'
  )}`;

  const navLinks = [
    { href: '#kencan', label: language === 'en' ? 'Couple & Beginners' : 'Kencan & Pemula', icon: IconHeartHandshake },
    { href: '#layanan', label: dict.nav.services, icon: IconCalendarEvent },
    { href: '#rental', label: dict.nav.rental, icon: IconTools },
    { href: '#boat', label: dict.nav.boat, icon: IconAnchor },
    { href: '#lokasi', label: dict.nav.location, icon: IconMapPin },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-900/30 bg-[#02161e]/90 backdrop-blur-md transition-colors text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="group flex items-center gap-3 transition-transform hover:scale-[1.02]"
        >
          <img
            src="/images/logo-lockup.png"
            alt={businessName}
            className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,210,223,0.3)]"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs xl:text-sm font-semibold text-cyan-100/90 transition-all hover:bg-cyan-500/15 hover:text-[#00d2df]"
              >
                <Icon size={16} stroke={1.8} className="text-[#00d2df]" />
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
            className="flex h-9 items-center justify-center gap-1.5 rounded-full border border-cyan-500/30 bg-[#062a36]/80 px-3 text-xs font-bold text-cyan-200 transition-all hover:border-cyan-400 hover:bg-[#062a36]"
          >
            <IconCompass size={15} stroke={2} className="text-[#00d2df]" />
            <span>{language.toUpperCase()}</span>
          </button>

          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-500/30 bg-[#062a36]/80 text-cyan-200 transition-all hover:border-cyan-400 hover:bg-[#062a36]"
            >
              {resolvedTheme === 'dark' ? (
                <IconSun size={16} stroke={2} className="text-amber-300" />
              ) : (
                <IconMoon size={16} stroke={2} className="text-cyan-200" />
              )}
            </button>
          )}

          <Button
            asChild
            variant="cyan"
            size="pill"
            className="hidden md:inline-flex"
          >
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <IconBrandWhatsapp size={17} stroke={2.5} />
              <span>{language === 'en' ? 'Book Schedule' : 'Booking Jadwal'}</span>
            </a>
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex h-8 items-center justify-center rounded-full border border-cyan-500/30 bg-[#062a36]/80 px-2.5 text-xs font-bold text-cyan-200"
          >
            {language.toUpperCase()}
          </button>

          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Theme"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-500/30 bg-[#062a36]/80 text-cyan-200"
            >
              {resolvedTheme === 'dark' ? (
                <IconSun size={15} stroke={2} className="text-amber-300" />
              ) : (
                <IconMoon size={15} stroke={2} />
              )}
            </button>
          )}

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-500/30 bg-[#062a36]/80 text-cyan-200"
          >
            {mobileMenuOpen ? <IconX size={18} /> : <IconMenu2 size={18} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-cyan-900/40 bg-[#02161e] px-4 py-5 lg:hidden">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold text-cyan-100 transition-colors hover:bg-[#062a36]"
                >
                  <Icon size={18} className="text-[#00d2df]" />
                  <span>{link.label}</span>
                </a>
              );
            })}
            <div className="pt-2">
              <Button asChild variant="cyan" size="pill" className="w-full justify-center">
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <IconBrandWhatsapp size={18} stroke={2.5} />
                  <span>{language === 'en' ? 'Book Schedule via WA' : 'Booking Jadwal via WA'}</span>
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
