import Link from 'next/link';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/Button';

export function CTAButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <p className="my-8">
      <Button asChild variant="primary" size="lg">
        <Link href={href}>{children}</Link>
      </Button>
    </p>
  );
}
