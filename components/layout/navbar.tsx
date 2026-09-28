'use client';

import * as React from 'react';
import { useLanguage } from '@/components/providers/language-provider';
import { useTheme } from 'next-themes';
import {
  IconSun,
  IconMoon,
  IconBrandWhatsapp,
  IconMenu2,
  IconX,
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
}: NavbarProps) {
  const { language, dict, toggleLanguage } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'layanan', 'rental', 'boat', 'lokasi'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (window.scrollY < 120) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sanitizedWa = sanitizePhoneNumber(whatsappNumber);
  const waUrl = `https://wa.me/${sanitizedWa}?text=${encodeURIComponent(
    language === 'en'
      ? 'Hello Teman Mancing Padang, I would like to consult and book a fishing schedule.'
      : 'Halo Teman Mancing Padang, saya mau tanya-tanya paket mancing dan booking jadwal.'
  )}`;

  const navLinks = [
    { href: '#home', id: 'home', label: dict.nav.home },
    { href: '#layanan', id: 'layanan', label: dict.nav.services },
    { href: '#rental', id: 'rental', label: dict.nav.rental },
    { href: '#boat', id: 'boat', label: dict.nav.boat },
    { href: '#lokasi', id: 'lokasi', label: dict.nav.location },
  ];

  return (
    <nav className="sticky top-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className={`transition-all duration-300 ${isScrolled ? 'my-3 sm:my-4' : 'my-0'}`}>
          <div
            className={`flex h-16 sm:h-18 items-center justify-between transition-all duration-300 ${
              isScrolled
                ? 'rounded-full bg-[#062a36]/95 backdrop-blur-xl px-4 sm:px-6 shadow-2xl ring-1 ring-cyan-400/25'
                : 'rounded-none border-b border-cyan-500/20 bg-[#02161e]/90 backdrop-blur-md px-4 sm:px-6'
            }`}
          >
            <a href="#home" className="flex items-center gap-2.5 sm:gap-3 transition-transform hover:scale-[1.02]">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#02161e] border border-cyan-500/40 p-1 shadow-md shadow-cyan-500/20">
                <img
                  src="/images/logo-icon.webp"
                  alt="Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="truncate text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                  {businessName}
                </span>
                <div className="my-0.5 w-full border-b border-cyan-500/30" />
                <span className="truncate text-[9px] sm:text-[10px] font-bold tracking-widest text-[#00d2df] uppercase">
                  PADANG • EST. 2026
                </span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`rounded-full px-3.5 py-1.5 text-xs xl:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-[#00d2df] text-[#02161e] shadow-md shadow-cyan-500/25'
                        : 'text-cyan-100/80 hover:bg-cyan-500/10 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={toggleLanguage}
                title={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
                className="flex h-8 sm:h-9 items-center justify-center gap-1 rounded-full border border-cyan-500/30 bg-[#02161e]/80 px-2.5 sm:px-3 text-xs font-bold text-cyan-200 transition-all hover:border-cyan-400 hover:bg-[#02161e]"
              >
                <IconCompass size={14} stroke={2} className="text-[#00d2df]" />
                <span>{language.toUpperCase()}</span>
              </button>

              {mounted && (
                <button
                  type="button"
                  onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                  aria-label="Toggle Theme"
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-cyan-500/30 bg-[#02161e]/80 text-cyan-200 transition-all hover:border-cyan-400 hover:bg-[#02161e]"
                >
                  {resolvedTheme === 'dark' ? (
                    <IconSun size={15} stroke={2} className="text-amber-300" />
                  ) : (
                    <IconMoon size={15} stroke={2} />
                  )}
                </button>
              )}

              <Button
                asChild
                variant="cyan"
                size="pill"
                className="hidden sm:inline-flex text-xs h-9 px-4 shadow-[0_0_20px_rgba(0,210,223,0.3)]"
              >
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="gap-1.5 font-bold">
                  <IconBrandWhatsapp size={16} stroke={2.5} />
                  <span>{language === 'en' ? 'Book via WA' : 'Booking via WA'}</span>
                </a>
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Mobile Menu"
                className="flex lg:hidden h-8 w-8 items-center justify-center rounded-full border border-cyan-500/30 bg-[#02161e]/80 text-cyan-200"
              >
                {mobileMenuOpen ? <IconX size={17} /> : <IconMenu2 size={17} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="rounded-3xl border border-cyan-500/30 bg-[#062a36]/98 p-4 shadow-2xl backdrop-blur-xl lg:hidden mb-3">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-2xl px-4 py-2 text-xs font-bold transition-colors ${
                      isActive
                        ? 'bg-[#00d2df] text-[#02161e]'
                        : 'text-cyan-100/90 hover:bg-[#02161e]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-2">
                <Button asChild variant="cyan" size="pill" className="w-full justify-center text-xs h-9">
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <IconBrandWhatsapp size={16} stroke={2.5} />
                    <span>{language === 'en' ? 'Book via WhatsApp' : 'Booking via WhatsApp'}</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
