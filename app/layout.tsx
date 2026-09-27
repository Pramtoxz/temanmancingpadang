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
  metadataBase: new URL('https://temanmancingpadang.web.id'),
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
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Teman Mancing Padang' }],
  openGraph: {
    title: 'Teman Mancing Padang | Asisten Mancing Andalan Kamu',
    description:
      'Jasa temanin mancing pemula, rental piranti alat pancing, dan carter perahu wisata pulau di Padang. Buka setiap hari 07:00 - 23:30 WIB.',
    url: 'https://temanmancingpadang.web.id',
    siteName: 'Teman Mancing Padang',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Teman Mancing Padang',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teman Mancing Padang | Asisten Mancing Andalan Kamu',
    description:
      'Jasa temanin mancing pemula, rental piranti alat pancing, dan carter perahu wisata pulau di Padang.',
    images: ['/images/hero-bg.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Teman Mancing Padang',
  description:
    'Jasa temanin mancing pemula, rental piranti alat pancing lengkap, dan carter perahu wisata pulau di Padang, Sumatera Barat.',
  image: 'https://temanmancingpadang.web.id/images/hero-bg.jpg',
  logo: 'https://temanmancingpadang.web.id/images/logo.png',
  url: 'https://temanmancingpadang.web.id',
  telephone: '+6289635655962',
  priceRange: 'Rp 10.000 - Rp 750.000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Kp. Batu, Jembatan Sitinurbaya',
    addressLocality: 'Padang',
    addressRegion: 'Sumatera Barat',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -0.9634992,
    longitude: 100.3541484,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '07:00',
      closes: '23:30',
    },
  ],
  sameAs: [
    'https://instagram.com/temanmancingpadang',
    'https://tiktok.com/@temanmancingpadang',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning className={fontSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
