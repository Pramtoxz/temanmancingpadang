'use client';

import * as React from 'react';
import { RentalItem } from '@/types';
import { useLanguage } from '@/components/providers/language-provider';
import { formatRupiah } from '@/lib/formatters';
import { buildRentalWhatsAppUrl } from '@/lib/whatsapp';
import {
  IconBrandWhatsapp,
  IconShieldCheck,
  IconInfoCircle,
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

interface RentalGridProps {
  rentals: RentalItem[];
  whatsappNumber: string;
  rentalTerms: string[];
}

export function RentalGrid({
  rentals,
  whatsappNumber,
  rentalTerms,
}: RentalGridProps) {
  const { language, dict } = useLanguage();

  return (
    <section id="rental" className="py-16 sm:py-24 bg-[#02161e] text-white border-b border-cyan-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00d2df] block mb-2">
            {dict.rental.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            {dict.rental.heading}
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-cyan-100/75 leading-relaxed">
            {dict.rental.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {rentals.map((rental) => {
            const name =
              language === 'en' && rental.name_en ? rental.name_en : rental.name;
            const description =
              language === 'en' && rental.description_en
                ? rental.description_en
                : rental.description;
            const unit =
              language === 'en' && rental.price_unit_en
                ? rental.price_unit_en
                : rental.price_unit || 'per hari';
            const waUrl = buildRentalWhatsAppUrl(whatsappNumber, rental, language);

            return (
              <div
                key={rental.id}
                className="flex flex-col justify-between overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#062a36]/80 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,210,223,0.15)]"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-[11px] font-bold text-[#00d2df] uppercase tracking-wider">
                      {rental.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                        rental.in_stock
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${rental.in_stock ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                      <span>{rental.in_stock ? dict.rental.available : dict.rental.outOfStock}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {name}
                  </h3>

                  <p className="text-xs text-cyan-100/70 leading-relaxed mb-5 line-clamp-2">
                    {description}
                  </p>

                  <div className="rounded-2xl bg-[#02161e]/70 border border-cyan-500/20 p-3 mb-2">
                    <span className="text-[11px] font-semibold text-cyan-300/80 block uppercase">
                      {dict.packageCard.startingFrom}
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-lg font-black text-[#00d2df]">
                        {formatRupiah(rental.price_per_day)}
                      </span>
                      <span className="text-xs text-cyan-200/70">
                        / {unit}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Button asChild variant="cyan" size="pill" className="w-full justify-center text-xs">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2 font-bold"
                    >
                      <IconBrandWhatsapp size={16} stroke={2.5} />
                      <span>{dict.rental.rentViaWa}</span>
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {rentalTerms && rentalTerms.length > 0 && (
          <div className="rounded-3xl border border-cyan-500/20 bg-[#062a36]/60 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4 text-[#00d2df]">
              <IconShieldCheck size={20} stroke={2} />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {dict.rental.termsHeading}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {rentalTerms.map((term, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-cyan-100/80">
                  <IconInfoCircle size={15} className="text-[#00d2df] mt-0.5 shrink-0" />
                  <span>{term}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
