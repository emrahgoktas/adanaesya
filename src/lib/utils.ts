import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  // +905XXXXXXXXX -> 0850 XXX XX XX formatına çevir
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('90') && cleaned.length >= 12) {
    const local = cleaned.slice(2);
    return `0${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6, 8)} ${local.slice(8, 10)}`;
  }
  return phone;
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 1).trim() + '…';
}

export function debounce<Args extends unknown[]>(fn: (...args: Args) => void, wait: number) {
  let timer: ReturnType<typeof setTimeout> | undefined;

  function debounced(...args: Args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  }

  debounced.cancel = () => {
    if (timer) clearTimeout(timer);
    timer = undefined;
  };

  return debounced;
}

export function throttle<Args extends unknown[]>(fn: (...args: Args) => void, wait: number) {
  let last = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;

  function throttled(...args: Args) {
    const now = Date.now();
    const remaining = wait - (now - last);
    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = undefined;
      }
      last = now;
      fn(...args);
      return;
    }
    if (!timer) {
      timer = setTimeout(() => {
        last = Date.now();
        timer = undefined;
        fn(...args);
      }, remaining);
    }
  }

  throttled.cancel = () => {
    if (timer) clearTimeout(timer);
    timer = undefined;
  };

  return throttled;
}
