import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'popular' | 'success';
}

export function Badge({
  className,
  variant = 'default',
  ...props
}: BadgeProps) {
  const base =
    'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none';

  const variants = {
    default:
      'bg-sky-100 text-sky-800 dark:bg-sky-950/80 dark:text-sky-300 dark:border dark:border-sky-800',
    secondary:
      'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
    outline:
      'border border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-300',
    popular:
      'bg-amber-100 text-amber-800 border border-amber-300/50 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800',
    success:
      'bg-emerald-100 text-emerald-800 border border-emerald-300/50 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800',
  };

  return <div className={cn(base, variants[variant], className)} {...props} />;
}
