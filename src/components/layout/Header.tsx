'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from 'react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { hizmetler } from '@/data/hizmetler';
import { getIlcePath, ilceler } from '@/data/ilceler';
import { useScroll } from '@/hooks/useScroll';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { trackEvent } from '@/lib/analytics';
import { SITE_CONFIG } from '@/lib/constants';
import { cn, debounce } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/fiyatlar', label: 'Fiyatlar' },
  { href: '/blog', label: 'Blog' },
  { href: '/iletisim', label: 'İletişim' },
] as const;

type DropdownKey = 'hizmetler' | 'bolgeler' | null;

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  href,
  children,
  onNavigate,
  className,
}: {
  href: string;
  children: ReactNode;
  onNavigate?: () => void;
  className?: string;
}) {
  const pathname = usePathname();
  const active = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      onClick={onNavigate}
      className={cn(
        'hover:text-red focus-visible:outline-red rounded-md px-2 py-1 text-sm font-medium transition-colors',
        active ? 'text-red' : 'text-navy',
        className
      )}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const scrolled = useScroll(8);
  const reduceMotion = useReducedMotion();
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<DropdownKey>(null);
  const [routePath, setRoutePath] = useState(pathname);
  const restoreMenuFocusRef = useRef(false);
  const hoverOpenedRef = useRef(false);
  const hoverCloseRef = useRef(
    debounce((key: Exclude<DropdownKey, null>) => {
      hoverOpenedRef.current = false;
      setOpenDropdown((current) => (current === key ? null : current));
    }, 80)
  );
  const headerRef = useRef<HTMLElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const hizmetlerId = useId();
  const bolgelerId = useId();
  const mobileTitleId = useId();

  if (routePath !== pathname) {
    setRoutePath(pathname);
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileAccordion(null);
  }

  const closeMobile = useCallback(() => {
    restoreMenuFocusRef.current = true;
    setMobileOpen(false);
    setMobileAccordion(null);
  }, []);

  useEffect(() => {
    if (mobileOpen || !restoreMenuFocusRef.current) return;
    restoreMenuFocusRef.current = false;
    menuButtonRef.current?.focus();
  }, [mobileOpen]);

  useFocusTrap(mobileOpen, mobilePanelRef, mobileAccordion);

  useEffect(() => {
    const hoverClose = hoverCloseRef.current;
    return () => hoverClose.cancel();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const inertTargets = [
      document.querySelector('.skip-to-content'),
      document.getElementById('main'),
      document.querySelector('footer'),
      document.querySelector('[data-whatsapp-fab]'),
    ].filter((node): node is Element => Boolean(node));
    inertTargets.forEach((node) => node.setAttribute('inert', ''));
    return () => {
      document.body.style.overflow = previous;
      inertTargets.forEach((node) => node.removeAttribute('inert'));
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onPointer = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', onPointer);
    return () => document.removeEventListener('mousedown', onPointer);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (mobileOpen) {
        event.preventDefault();
        closeMobile();
        return;
      }
      if (openDropdown) {
        event.preventDefault();
        setOpenDropdown(null);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileOpen, openDropdown, closeMobile]);

  const onMenuKeyDown = (event: ReactKeyboardEvent<HTMLUListElement>) => {
    const items = [...event.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]')];
    if (items.length === 0) return;
    const index = items.findIndex((item) => item === document.activeElement);

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      items[(index + 1 + items.length) % items.length]?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      items[(index - 1 + items.length) % items.length]?.focus();
    } else if (event.key === 'Home') {
      event.preventDefault();
      items[0]?.focus();
    } else if (event.key === 'End') {
      event.preventDefault();
      items[items.length - 1]?.focus();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setOpenDropdown(null);
    } else if (event.key === 'Tab') {
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (key: Exclude<DropdownKey, null>) => {
    setOpenDropdown((current) => (current === key ? null : key));
  };

  const openDropdownByHover = (key: Exclude<DropdownKey, null>) => {
    hoverCloseRef.current.cancel();
    hoverOpenedRef.current = true;
    setOpenDropdown(key);
  };

  const onDropdownButtonClick = (key: Exclude<DropdownKey, null>) => {
    if (hoverOpenedRef.current) {
      hoverOpenedRef.current = false;
      setOpenDropdown(key);
      return;
    }
    toggleDropdown(key);
  };

  const closeDropdownIf = (key: Exclude<DropdownKey, null>) => {
    hoverCloseRef.current(key);
  };

  const onDropdownKeyDown = (key: DropdownKey, event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpenDropdown(key);
      const menuId = key === 'hizmetler' ? hizmetlerId : bolgelerId;
      requestAnimationFrame(() => {
        const firstLink = document.getElementById(menuId)?.querySelector<HTMLElement>('a');
        firstLink?.focus();
      });
    }
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        'site-header sticky top-0 z-50 bg-white transition-shadow duration-200',
        scrolled && 'shadow-card'
      )}
    >
      <div inert={mobileOpen || undefined}>
      <div className="bg-blue text-center text-xs font-medium text-white">
        <p className="px-4 py-1.5">7/24 Hizmet | Adana&apos;nın Tüm İlçelerinde</p>
      </div>
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-4 px-5 lg:h-20 lg:px-8">
        <Logo priority />
        <nav aria-label="Ana menü" className="hidden items-center gap-1 lg:flex">
          <NavLink href="/">Ana Sayfa</NavLink>
          <div
            className="relative"
            onMouseEnter={() => openDropdownByHover('hizmetler')}
            onMouseLeave={() => closeDropdownIf('hizmetler')}
          >
            <button
              type="button"
              className={cn(
                'hover:text-red inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium',
                isActivePath(pathname, '/hizmetler') ? 'text-red' : 'text-navy'
              )}
              aria-expanded={openDropdown === 'hizmetler'}
              aria-haspopup="menu"
              aria-controls={hizmetlerId}
              onClick={() => onDropdownButtonClick('hizmetler')}
              onKeyDown={(event) => onDropdownKeyDown('hizmetler', event)}
            >
              Hizmetler
              <ChevronDown aria-hidden className="size-4" />
            </button>
            {openDropdown === 'hizmetler' ? (
              <div className="absolute top-full left-0 z-50 min-w-56 pt-2">
                <ul
                  id={hizmetlerId}
                  role="menu"
                  aria-label="Hizmetler"
                  className="border-navy/10 shadow-card rounded-lg border bg-white p-2"
                  onKeyDown={onMenuKeyDown}
                >
                  <li role="none">
                    <Link
                      role="menuitem"
                      href="/hizmetler"
                      className={cn(
                        'hover:bg-light-blue hover:text-red block rounded-md px-3 py-2 text-sm font-medium',
                        pathname === '/hizmetler' ? 'text-red' : 'text-navy'
                      )}
                    >
                      Tüm hizmetler
                    </Link>
                  </li>
                  {hizmetler.map((hizmet) => (
                    <li key={hizmet.slug} role="none">
                      <Link
                        role="menuitem"
                        href={`/hizmetler/${hizmet.slug}`}
                        className={cn(
                          'hover:bg-light-blue hover:text-red block rounded-md px-3 py-2 text-sm',
                          isActivePath(pathname, `/hizmetler/${hizmet.slug}`)
                            ? 'text-red'
                            : 'text-navy'
                        )}
                      >
                        {hizmet.shortName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div
            className="relative"
            onMouseEnter={() => openDropdownByHover('bolgeler')}
            onMouseLeave={() => closeDropdownIf('bolgeler')}
          >
            <button
              type="button"
              className={cn(
                'hover:text-red inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium',
                isActivePath(pathname, '/bolgeler') ? 'text-red' : 'text-navy'
              )}
              aria-expanded={openDropdown === 'bolgeler'}
              aria-haspopup="menu"
              aria-controls={bolgelerId}
              onClick={() => onDropdownButtonClick('bolgeler')}
              onKeyDown={(event) => onDropdownKeyDown('bolgeler', event)}
            >
              Bölgeler
              <ChevronDown aria-hidden className="size-4" />
            </button>
            {openDropdown === 'bolgeler' ? (
              <div className="absolute top-full left-0 z-50 w-[22rem] pt-2">
                <ul
                  id={bolgelerId}
                  role="menu"
                  aria-label="Bölgeler"
                  className="border-navy/10 shadow-card grid grid-cols-2 gap-x-1 rounded-lg border bg-white p-2"
                  onKeyDown={onMenuKeyDown}
                >
                  {ilceler.map((ilce) => (
                    <li key={ilce.slug} role="none">
                      <Link
                        role="menuitem"
                        href={getIlcePath(ilce.slug)}
                        className={cn(
                          'hover:bg-light-blue hover:text-red block rounded-md px-3 py-2 text-sm',
                          isActivePath(pathname, getIlcePath(ilce.slug)) ? 'text-red' : 'text-navy'
                        )}
                      >
                        {ilce.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          {NAV_LINKS.filter((link) => link.href !== '/').map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="text-navy hover:text-red hidden items-center gap-2 text-sm font-semibold lg:inline-flex"
            aria-label={`Telefon: ${SITE_CONFIG.phoneDisplay}`}
            onClick={() => trackEvent('phone_click', 'engagement', 'Header Phone')}
          >
            <Phone aria-hidden className="text-red size-4" />
            {SITE_CONFIG.phoneDisplay}
          </a>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/iletisim">Teklif Al</Link>
          </Button>
          <button
            ref={menuButtonRef}
            type="button"
            className="text-navy hover:bg-gray inline-flex size-10 items-center justify-center rounded-md lg:hidden"
            aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={mobileOpen}
            aria-controls="mobil-menu"
            onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
          >
            {mobileOpen ? (
              <X aria-hidden className="size-6" />
            ) : (
              <Menu aria-hidden className="size-6" />
            )}
          </button>
        </div>
      </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            <button
              type="button"
              className="bg-navy/50 absolute inset-0"
              tabIndex={-1}
              aria-hidden
              onClick={closeMobile}
            />
            <motion.div
              id="mobil-menu"
              ref={mobilePanelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={mobileTitleId}
              className="shadow-card-hover absolute top-0 right-0 flex h-full w-[min(100%,20rem)] flex-col bg-white"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: reduceMotion ? 0 : 0.28, ease: 'easeOut' }}
            >
              <div className="border-navy/10 flex h-16 items-center justify-between border-b px-4">
                <p id={mobileTitleId} className="text-navy font-semibold">
                  Menü
                </p>
                <button
                  type="button"
                  className="text-navy hover:bg-gray inline-flex size-10 items-center justify-center rounded-md"
                  aria-label="Menüyü kapat"
                  onClick={closeMobile}
                >
                  <X aria-hidden className="size-6" />
                </button>
              </div>
              <nav aria-label="Mobil menü" className="flex-1 overflow-y-auto px-3 py-4">
                <ul className="flex flex-col gap-1">
                  <li>
                    <NavLink href="/" onNavigate={closeMobile} className="block px-3 py-2">
                      Ana Sayfa
                    </NavLink>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="text-navy hover:text-red flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium"
                      aria-expanded={mobileAccordion === 'hizmetler'}
                      aria-controls="mobil-hizmetler"
                      onClick={() =>
                        setMobileAccordion((current) =>
                          current === 'hizmetler' ? null : 'hizmetler'
                        )
                      }
                    >
                      Hizmetler
                      <ChevronDown
                        aria-hidden
                        className={cn(
                          'size-4 transition-transform',
                          mobileAccordion === 'hizmetler' && 'rotate-180'
                        )}
                      />
                    </button>
                    {mobileAccordion === 'hizmetler' ? (
                      <ul id="mobil-hizmetler" className="border-navy/10 mt-1 ml-3 border-l pl-3">
                        <li>
                          <NavLink
                            href="/hizmetler"
                            onNavigate={closeMobile}
                            className="block px-2 py-1.5"
                          >
                            Tüm hizmetler
                          </NavLink>
                        </li>
                        {hizmetler.map((hizmet) => (
                          <li key={hizmet.slug}>
                            <NavLink
                              href={`/hizmetler/${hizmet.slug}`}
                              onNavigate={closeMobile}
                              className="block px-2 py-1.5"
                            >
                              {hizmet.shortName}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                  <li>
                    <button
                      type="button"
                      className="text-navy hover:text-red flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium"
                      aria-expanded={mobileAccordion === 'bolgeler'}
                      aria-controls="mobil-bolgeler"
                      onClick={() =>
                        setMobileAccordion((current) =>
                          current === 'bolgeler' ? null : 'bolgeler'
                        )
                      }
                    >
                      Bölgeler
                      <ChevronDown
                        aria-hidden
                        className={cn(
                          'size-4 transition-transform',
                          mobileAccordion === 'bolgeler' && 'rotate-180'
                        )}
                      />
                    </button>
                    {mobileAccordion === 'bolgeler' ? (
                      <ul id="mobil-bolgeler" className="border-navy/10 mt-1 ml-3 grid grid-cols-2 gap-x-2 border-l pl-3">
                        {ilceler.map((ilce) => (
                          <li key={ilce.slug}>
                            <NavLink
                              href={getIlcePath(ilce.slug)}
                              onNavigate={closeMobile}
                              className="block px-2 py-1.5"
                            >
                              {ilce.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                  {NAV_LINKS.filter((link) => link.href !== '/').map((link) => (
                    <li key={link.href}>
                      <NavLink
                        href={link.href}
                        onNavigate={closeMobile}
                        className="block px-3 py-2"
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="border-navy/10 space-y-3 border-t p-4">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-navy flex items-center justify-center gap-2 text-sm font-semibold"
                  aria-label={`Telefon: ${SITE_CONFIG.phoneDisplay}`}
                  onClick={() => trackEvent('phone_click', 'engagement', 'Header Phone')}
                >
                  <Phone aria-hidden className="text-red size-4" />
                  {SITE_CONFIG.phoneDisplay}
                </a>
                <Button asChild className="w-full">
                  <Link href="/iletisim" onClick={closeMobile}>
                    Teklif Al
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
