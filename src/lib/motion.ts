export function staggerContainer(reduceMotion: boolean | null, stagger = 0.06) {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : stagger },
    },
  };
}

export function fadeUpItem(reduceMotion: boolean | null, y = 16) {
  return {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.28, ease: 'easeOut' as const },
    },
  };
}
