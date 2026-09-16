declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: 'event' | 'config' | 'js' | 'set',
      targetId: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export const AW_CONVERSION_SEND_TO =
  process.env.NEXT_PUBLIC_AW_CONVERSION_ID ?? 'AW-XXXXXXX/YYYYY';

export function trackEvent(
  action: string,
  category: string,
  label: string,
  value?: number
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}

export function trackConversion(conversionId: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: 'TRY',
    });
  }
}
