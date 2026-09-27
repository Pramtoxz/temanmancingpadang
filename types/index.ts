export type PackageCategory = 'jasa-temanin' | 'trip-mancing' | 'boat-wisata';

export type RentalCategory = 'joran' | 'kail' | 'umpan' | 'set-lengkap';

export type Language = 'id' | 'en';

export interface Package {
  id: string;
  title: string;
  title_en: string | null;
  slug: string;
  category: PackageCategory;
  price: number;
  price_note: string | null;
  price_note_en: string | null;
  duration_hours: number | null;
  description: string | null;
  description_en: string | null;
  includes: string[];
  includes_en: string[] | null;
  image_url: string | null;
  is_popular: boolean;
  is_active: boolean;
  sort_order: number;
  created_at: string;
}

export interface RentalItem {
  id: string;
  name: string;
  name_en: string | null;
  category: RentalCategory;
  price_per_day: number;
  price_unit: string | null;
  price_unit_en: string | null;
  description: string | null;
  description_en: string | null;
  image_url: string | null;
  in_stock: boolean;
  is_active: boolean;
  sort_order: number;
  created_at: string;
}

export interface SiteSettings {
  id: number;
  business_name: string;
  tagline: string;
  tagline_en: string | null;
  hero_title: string;
  hero_title_en: string | null;
  hero_subtitle: string;
  hero_subtitle_en: string | null;
  whatsapp_number: string;
  operating_hours: string;
  address: string;
  google_maps_url: string | null;
  google_maps_iframe: string | null;
  instagram_username: string | null;
  tiktok_username: string | null;
  announcement_banner: string | null;
  announcement_banner_en: string | null;
  is_announcement_active: boolean;
  rental_terms: string[];
  boat_terms: string[];
  updated_at: string;
}
