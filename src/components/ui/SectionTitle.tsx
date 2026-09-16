'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { forwardRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface SectionTitleProps {
  id?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  icon?: LucideIcon;
  className?: string;
}

const SectionTitle = forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ id, title, subtitle, align = 'left', icon: Icon, className }, ref) => {
    const reduceMotion = useReducedMotion();
    const isCenter = align === 'center';

    const inner: ReactNode = (
      <>
        <div
          className={cn(
            'mb-3 flex items-center gap-3',
            isCenter ? 'justify-center' : 'justify-start'
          )}
        >
          {Icon ? <Icon aria-hidden className="size-7 shrink-0 text-red" /> : null}
          <h2
            id={id}
            className="text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.2] font-bold text-navy"
          >
            {title}
          </h2>
        </div>
        <span
          aria-hidden
          className={cn('mb-4 block h-1 w-16 rounded-full bg-red', isCenter && 'mx-auto')}
        />
        {subtitle ? <p className="text-base text-dark-gray/80 md:text-lg">{subtitle}</p> : null}
      </>
    );

    const sharedClassName = cn(
      'max-w-3xl',
      isCenter ? 'mx-auto text-center' : 'text-left',
      className
    );

    if (reduceMotion) {
      return (
        <div ref={ref} className={sharedClassName}>
          {inner}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        className={sharedClassName}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      >
        {inner}
      </motion.div>
    );
  }
);

SectionTitle.displayName = 'SectionTitle';

export { SectionTitle };
