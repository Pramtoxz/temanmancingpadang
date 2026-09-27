export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatCompactRupiah(amount: number): string {
  if (amount >= 1000000) {
    return `${(amount / 1000000).toLocaleString('id-ID')} Juta`;
  }
  if (amount >= 1000) {
    return `${(amount / 1000).toLocaleString('id-ID')}K`;
  }
  return amount.toString();
}
