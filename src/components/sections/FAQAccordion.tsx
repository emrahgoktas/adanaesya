'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useId, useState, type KeyboardEvent } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import type { SSSItem } from '@/data/sss';

export interface FAQAccordionProps {
  items: SSSItem[];
  title?: string;
}

export function FAQAccordion({ items, title = 'Sıkça Sorulan Sorular' }: FAQAccordionProps) {
  const reduceMotion = useReducedMotion();
  const uid = useId();
  const headingId = `${uid}-baslik`;
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const onAccordionKeyDown = (event: KeyboardEvent<HTMLButtonElement>, id: string) => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const ids = items.map((item) => item.id);
    const index = ids.indexOf(id);
    let next = index;
    if (event.key === 'ArrowDown') next = (index + 1) % ids.length;
    if (event.key === 'ArrowUp') next = (index - 1 + ids.length) % ids.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = ids.length - 1;
    const nextId = ids[next];
    document.getElementById(`${uid}-${nextId}-button`)?.focus();
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray" aria-labelledby={headingId}>
      <Container className="py-14 lg:py-20">
        <SectionTitle id={headingId} align="center" className="mb-10 lg:mb-12" title={title} />

        <ul className="mx-auto max-w-3xl divide-y divide-navy/10 rounded-lg border border-navy/10 bg-white shadow-card">
          {items.map((item) => {
            const isOpen = openId === item.id;
            const buttonId = `${uid}-${item.id}-button`;
            const panelId = `${uid}-${item.id}-panel`;
            const Icon = isOpen ? Minus : Plus;

            return (
              <li key={item.id}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(item.id)}
                    onKeyDown={(event) => onAccordionKeyDown(event, item.id)}
                  >
                    <span className="text-base font-semibold text-navy">{item.soru}</span>
                    <span
                      aria-hidden
                      className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-red text-white"
                    >
                      <Icon className="size-4" strokeWidth={2.5} />
                    </span>
                  </button>
                </h3>

                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  inert={!isOpen ? true : undefined}
                  className="overflow-hidden"
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.2,
                    ease: 'easeInOut',
                  }}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-dark-gray/80 md:text-base">
                    {item.cevap}
                  </p>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
