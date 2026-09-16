import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { Callout } from '@/components/blog/Callout';
import { CTAButton } from '@/components/blog/CTAButton';
import { AppImage } from '@/components/ui/AppImage';
import { IMAGE_SIZES } from '@/lib/images';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h2: ({ children, ...props }: ComponentPropsWithoutRef<'h2'>) => (
      <h2 className="text-navy mt-10 mb-4 scroll-mt-28 text-2xl font-bold" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: ComponentPropsWithoutRef<'h3'>) => (
      <h3 className="text-navy mt-8 mb-3 scroll-mt-28 text-xl font-bold" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }: ComponentPropsWithoutRef<'p'>) => (
      <p className="text-dark-gray/85 mb-4 leading-relaxed" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }: ComponentPropsWithoutRef<'ul'>) => (
      <ul className="text-dark-gray/85 mb-4 list-disc space-y-2 pl-5" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: ComponentPropsWithoutRef<'ol'>) => (
      <ol className="text-dark-gray/85 mb-4 list-decimal space-y-2 pl-5" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: ComponentPropsWithoutRef<'li'>) => (
      <li className="leading-relaxed" {...props}>
        {children}
      </li>
    ),
    a: ({ href, children, ...props }: ComponentPropsWithoutRef<'a'>) => {
      const className = 'font-semibold text-red underline-offset-2 hover:underline';
      if (href?.startsWith('/')) {
        return (
          <Link href={href} className={className}>
            {children}
          </Link>
        );
      }
      return (
        <a href={href} className={className} rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    },
    strong: ({ children, ...props }: ComponentPropsWithoutRef<'strong'>) => (
      <strong className="text-navy font-semibold" {...props}>
        {children}
      </strong>
    ),
    blockquote: ({ children, ...props }: ComponentPropsWithoutRef<'blockquote'>) => (
      <blockquote
        className="border-red bg-gray text-dark-gray/80 my-6 border-l-4 px-4 py-3 italic"
        {...props}
      >
        {children}
      </blockquote>
    ),
    img: ({ src, alt, width, height }: ComponentPropsWithoutRef<'img'>) => {
      if (!src || typeof src !== 'string') return null;
      const numericWidth = typeof width === 'number' ? width : Number(width) || 1200;
      const numericHeight = typeof height === 'number' ? height : Number(height) || 630;
      return (
        <AppImage
          src={src}
          alt={alt?.trim() ? alt : 'Blog içeriği görseli'}
          width={numericWidth}
          height={numericHeight}
          sizes={IMAGE_SIZES.content}
          className="my-6 h-auto w-full rounded-lg"
        />
      );
    },
    table: ({ children, ...props }: ComponentPropsWithoutRef<'table'>) => (
      <div className="mb-6 overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse text-sm" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }: ComponentPropsWithoutRef<'th'>) => (
      <th
        className="border-navy/10 bg-navy border px-3 py-2 text-left font-semibold text-white"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }: ComponentPropsWithoutRef<'td'>) => (
      <td className="border-navy/10 text-dark-gray/85 border px-3 py-2" {...props}>
        {children}
      </td>
    ),
    Callout,
    CTAButton,
  };
}
