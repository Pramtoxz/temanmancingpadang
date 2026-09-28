import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'ocean'
    | 'cyan'
    | 'accent';
  size?: 'default' | 'sm' | 'lg' | 'pill' | 'icon';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none';

    const variants: Record<string, string> = {
      default:
        'bg-[#02161e] text-white shadow-sm hover:bg-[#062a36] dark:bg-[#00d2df] dark:text-[#02161e] dark:hover:bg-[#1be7f3]',
      secondary:
        'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-[#062a36] dark:text-cyan-100 dark:hover:bg-[#0a3f52]',
      outline:
        'border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 dark:border-cyan-500/30 dark:bg-[#062a36]/60 dark:text-cyan-100 dark:hover:bg-[#062a36]',
      ghost:
        'hover:bg-slate-100 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100',
      ocean:
        'bg-sky-600 text-white shadow-md hover:bg-sky-500 hover:shadow-sky-500/20 active:bg-sky-700',
      cyan:
        'bg-[#00d2df] text-[#02161e] font-bold shadow-md hover:bg-[#1be7f3] hover:shadow-[0_0_24px_rgba(0,210,223,0.35)] active:bg-[#00b8c4]',
      accent:
        'bg-amber-600 text-white shadow-md hover:bg-amber-500 hover:shadow-amber-500/20 active:bg-amber-700',
    };

    const sizes: Record<string, string> = {
      default: 'h-11 px-5 py-2.5',
      sm: 'h-9 rounded-lg px-3.5 text-xs',
      lg: 'h-12 rounded-xl px-7 text-base font-semibold',
      pill: 'h-11 rounded-full px-6 text-sm font-bold tracking-wide',
      icon: 'h-10 w-10',
    };

    const combinedClass = cn(baseStyles, variants[variant], sizes[size], className);

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(combinedClass, child.props.className),
        ...props,
      });
    }

    return (
      <button ref={ref} className={combinedClass} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
