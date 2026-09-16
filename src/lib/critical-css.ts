/** Above-the-fold layout lock: header + hero + LCP media slot. */
export const CRITICAL_CSS = `
html{font-family:system-ui,-apple-system,sans-serif}
.hero{min-height:min(92svh,44rem);background:#0a2540;color:#fff}
@media(min-width:1024px){.hero{min-height:min(88svh,48rem)}}
.site-header{min-height:var(--header-height,6rem)}
.embed-slot{position:relative;width:100%;overflow:hidden;background:#e8f0fe}
`.replace(/\s+/g, ' ').trim();
