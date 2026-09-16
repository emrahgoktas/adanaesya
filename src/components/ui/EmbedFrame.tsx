import { cn } from '@/lib/utils';

export interface EmbedFrameProps {
  title: string;
  src: string;
  width: number;
  height: number;
  className?: string;
}

export function EmbedFrame({ title, src, width, height, className }: EmbedFrameProps) {
  return (
    <div
      className={cn('embed-slot overflow-hidden rounded-lg border border-navy/10 shadow-card', className)}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <iframe
        title={title}
        src={src}
        width={width}
        height={height}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
