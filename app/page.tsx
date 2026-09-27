import { createClient } from '@/lib/supabase/server';
import { Package, RentalItem, SiteSettings } from '@/types';
import { AnnouncementBar } from '@/components/layout/announcement-bar';
import { Navbar } from '@/components/layout/navbar';
import { HeroSection } from '@/components/features/hero-section';
import { StoryHighlights } from '@/components/features/story-highlights';
import { ServiceTabs } from '@/components/features/service-tabs';
import { RentalGrid } from '@/components/features/rental-grid';
import { BoatCharter } from '@/components/features/boat-charter';
import { MapsSection } from '@/components/features/maps-section';
import { Footer } from '@/components/layout/footer';
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp';

export const revalidate = 60;

export default async function HomePage() {
  const supabase = await createClient();

  const [
    { data: packagesData },
    { data: rentalsData },
    { data: settingsData },
  ] = await Promise.all([
    supabase.from('packages').select('*').eq('is_active', true).order('sort_order', { ascending: true }),
    supabase.from('rentals').select('*').eq('is_active', true).order('sort_order', { ascending: true }),
    supabase.from('site_settings').select('*').eq('id', 1).single(),
  ]);

  const packages: Package[] = packagesData || [];
  const rentals: RentalItem[] = rentalsData || [];
  const settings: SiteSettings = settingsData || {
    id: 1,
    business_name: 'Teman Mancing Padang',
    tagline: 'Bukan sekadar menemani, tapi menjadi partner terbaik di setiap tarikan.',
    tagline_en: 'More than a companion, your reliable fishing partner on every strike.',
    hero_title: 'Jasa Temanin Mancing & Rental Alat Pertama di Padang',
    hero_title_en: 'First Fishing Buddy & Tackle Rental in Padang',
    hero_subtitle: 'Nikmati serunya mancing di Padang tanpa ribet bawa alat. Dari bimbingan pemula dari nol hingga carter perahu wisata keliling pulau.',
    hero_subtitle_en: 'Enjoy easy fishing trips and island boat charters in Padang. Friendly local guides for beginners, complete gear, and authentic coastal trips.',
    whatsapp_number: '6289635655962',
    operating_hours: 'Setiap Hari 07:00 - 23:30 WIB',
    address: 'Jl. Kp. Batu, Jembatan Sitinurbaya, Padang',
    google_maps_url: 'https://maps.app.goo.gl/Padang',
    google_maps_iframe: null,
    instagram_username: 'temanmancingpadang',
    tiktok_username: 'temanmancingpadang',
    announcement_banner: 'Buka setiap hari 07:00 - 23:30 WIB | Diskon khusus mahasiswa/i yang pusing skripsi!',
    announcement_banner_en: 'Open daily 07:00 - 23:30 WIB | Special discounts for university students!',
    is_announcement_active: true,
    rental_terms: [
      'Setiap kerusakan atau kehilangan adalah tanggung jawab penyewa.',
      'Wajib deposit jaminan untuk mencegah kehilangan barang.',
      'Syarat wajib KTP, SIM, atau kartu identitas lainnya.',
      'Diskon spesial untuk mahasiswa/i yang lagi pusing skripsi!',
    ],
    boat_terms: [
      'Wajib menggunakan pelampung keselamatan (Life Jacket) selama penyeberangan.',
      'Jadwal keberangkatan fleksibel mengikuti kondisi cuaca laut.',
      'Rombongan bebas membawa makanan & perlengkapan sendiri.',
    ],
    updated_at: new Date().toISOString(),
  };

  const boatPackages = packages.filter((p) => p.category === 'boat-wisata');

  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar
        bannerId={settings.announcement_banner}
        bannerEn={settings.announcement_banner_en}
        isActive={settings.is_announcement_active}
      />

      <Navbar
        businessName={settings.business_name}
        whatsappNumber={settings.whatsapp_number}
        operatingHours={settings.operating_hours}
      />

      <main className="flex-1">
        <HeroSection
          heroTitleId={settings.hero_title}
          heroTitleEn={settings.hero_title_en}
          heroSubtitleId={settings.hero_subtitle}
          heroSubtitleEn={settings.hero_subtitle_en}
          whatsappNumber={settings.whatsapp_number}
        />

        <StoryHighlights />

        <ServiceTabs
          packages={packages}
          whatsappNumber={settings.whatsapp_number}
        />

        <RentalGrid
          rentals={rentals}
          whatsappNumber={settings.whatsapp_number}
          rentalTerms={settings.rental_terms}
        />

        <BoatCharter
          boatPackages={boatPackages}
          whatsappNumber={settings.whatsapp_number}
          boatTerms={settings.boat_terms}
        />

        <MapsSection
          address={settings.address}
          operatingHours={settings.operating_hours}
          googleMapsUrl={settings.google_maps_url}
          googleMapsIframe={settings.google_maps_iframe}
        />
      </main>

      <Footer
        businessName={settings.business_name}
        tagline={settings.tagline}
        taglineEn={settings.tagline_en}
        address={settings.address}
        operatingHours={settings.operating_hours}
        whatsappNumber={settings.whatsapp_number}
        instagramUsername={settings.instagram_username}
        tiktokUsername={settings.tiktok_username}
      />

      <FloatingWhatsApp whatsappNumber={settings.whatsapp_number} />
    </div>
  );
}
