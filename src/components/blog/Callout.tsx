import { AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const CALLOUT_STYLES = {
  info: {
    box: 'border-blue/30 bg-light-blue text-navy',
    icon: Info,
    label: 'Bilgi',
  },
  warning: {
    box: 'border-red/30 bg-red/5 text-navy',
    icon: AlertTriangle,
    label: 'Uyarı',
  },
  success: {
    box: 'border-success/30 bg-success/5 text-navy',
    icon: CheckCircle2,
    label: 'İpucu',
  },
} as const;

export type CalloutType = keyof typeof CALLOUT_STYLES;

export function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}) {
  const style = CALLOUT_STYLES[type] ?? CALLOUT_STYLES.info;
  const Icon = style.icon;

  return (
    <aside
      className={cn('my-6 flex gap-3 rounded-lg border px-4 py-3 text-sm leading-relaxed', style.box)}
      role="note"
    >
      <Icon aria-hidden className="mt-0.5 size-5 shrink-0" />
      <div>
        <p className="font-semibold">{title ?? style.label}</p>
        <div className="mt-1 text-dark-gray/85 [&_p]:mb-0">{children}</div>
      </div>
    </aside>
  );
}
