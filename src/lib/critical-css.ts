/** Above-the-fold layout lock: header + hero + LCP media slot. */
export const CRITICAL_CSS = `
html{font-family:system-ui,-apple-system,sans-serif}
.hero{min-height:28rem;background:linear-gradient(135deg,#0A2540 0%,#1B4F8A 100%);color:#fff}
@media(min-width:1024px){.hero{min-height:36rem}}
.hero-media{aspect-ratio:4/3;width:100%;max-width:32rem}
.site-header{min-height:var(--header-height,6rem)}
.embed-slot{position:relative;width:100%;overflow:hidden;background:#e8f0fe}
`.replace(/\s+/g, ' ').trim();
