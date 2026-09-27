import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { LanguageProvider } from '@/components/providers/language-provider';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0b2545',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Teman Mancing Padang | Jasa Temanin Mancing & Rental Alat Padang',
  description:
    'Layanan jasa temanin mancing pemula pertama di Padang, rental alat pancing joran & umpan lengkap, serta carter perahu wisata pulau Sirandah & Mandeh. Buka 07:00 - 23:30 WIB.',
  keywords: [
    'teman mancing padang',
    'jasa temanin mancing padang',
    'rental alat pancing padang',
    'sewa joran padang',
    'sewa boat pulau sirandah',
    'mancing muaro batang arau',
    'wisata mancing padang',
  ],
  authors: [{ name: 'Teman Mancing Padang' }],
  openGraph: {
    title: 'Teman Mancing Padang | Asisten Mancing Andalan Kamu',
    description:
      'Jasa temanin mancing pemula, rental piranti alat pancing, dan carter perahu wisata pulau di Padang. Buka setiap hari 07:00 - 23:30 WIB.',
    url: 'https://temanmancingpadang.com',
    siteName: 'Teman Mancing Padang',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning className={fontSans.variable}>
      <body className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <SmoothScrollProvider>
              {children}
            </SmoothScrollProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
