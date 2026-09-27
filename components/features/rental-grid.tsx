'use client';

import * as React from 'react';
import { RentalItem } from '@/types';
import { useLanguage } from '@/components/providers/language-provider';
import { formatRupiah } from '@/lib/formatters';
import { buildRentalWhatsAppUrl } from '@/lib/whatsapp';
import {
  IconTools,
  IconCheck,
  IconBrandWhatsapp,
  IconShieldCheck,
  IconInfoCircle,
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

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
    <section id="rental" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="default" className="mb-3 gap-1.5 py-1 px-3">
            <IconTools size={14} />
            <span>{dict.rental.badge}</span>
          </Badge>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {dict.rental.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {dict.rental.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                : rental.price_unit || 'per jam';
            const waUrl = buildRentalWhatsAppUrl(whatsappNumber, rental, language);

            return (
              <Card
                key={rental.id}
                className="flex flex-col justify-between transition-all hover:border-sky-300 dark:hover:border-sky-800"
              >
                <CardHeader className="space-y-2 pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant={rental.in_stock ? 'success' : 'secondary'}>
                      {rental.in_stock ? dict.rental.available : dict.rental.outOfStock}
                    </Badge>
                    <IconTools size={18} className="text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {name}
                  </h3>
                  {description && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {description}
                    </p>
                  )}
                </CardHeader>

                <CardContent className="pt-0 pb-4">
                  <div className="flex items-baseline gap-1 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50">
                    <span className="text-xl font-extrabold text-sky-600 dark:text-sky-400">
                      {formatRupiah(rental.price_per_day)}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      / {unit}
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full gap-2 text-xs font-bold border-slate-300 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 dark:border-slate-700 dark:hover:bg-slate-800"
                  >
                    <a href={waUrl} target="_blank" rel="noopener noreferrer">
                      <IconBrandWhatsapp size={16} stroke={2} className="text-emerald-500" />
                      <span>{dict.rental.rentViaWa}</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {rentalTerms && rentalTerms.length > 0 && (
          <div className="mt-12 rounded-2xl border border-sky-100 bg-sky-50/60 p-6 dark:border-sky-900/50 dark:bg-sky-950/30">
            <div className="flex items-center gap-2 mb-4">
              <IconShieldCheck size={20} className="text-sky-600 dark:text-sky-400" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {dict.rental.termsHeading}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {rentalTerms.map((term, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <IconInfoCircle size={16} className="text-sky-500 shrink-0 mt-0.5" />
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
