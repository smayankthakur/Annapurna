const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M13.5 9H16V6h-2.5C10.7 6 9 7.8 9 10.5V13H7v3h2v6h3v-6h3l1-3h-4v-2.2c0-1 .5-1.8 1.5-1.8Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M18.9 2H22l-6.9 8.1L23 22h-6.2l-4.9-6.4L6.6 22H3.5l7.4-8.7L1 2h6.3l4.4 5.8L18.9 2Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/20 bg-card/25 py-16 md:py-20">
      <div className="container-max px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          <div>
            <h3 className="font-heading text-3xl text-white">Annapurna Rasoi</h3>
            <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
              Premium cloud kitchen experience delivering North Indian flavours across West Delhi.
            </p>
          </div>

          <div className="border-y border-white/10 py-6 md:border-y-0 md:border-l md:border-r md:py-0 md:pl-8">
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Contact</h4>
            <p className="mt-4 text-sm text-muted">West Delhi, New Delhi</p>
            <p className="mt-1 text-sm text-muted">+91 98765 43210</p>
            <p className="mt-1 text-sm text-muted">hello@annapurnarasoi.in</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Connect</h4>
            <div className="mt-4 flex items-center gap-4 text-soft-gold">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="transition-colors duration-300 hover:text-amber-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-5 text-sm text-muted">
              <a href="#" className="transition-colors duration-300 hover:text-amber-400">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors duration-300 hover:text-amber-400">
                Terms
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-gold/20 pt-7 text-xs leading-6 text-muted sm:text-sm">
          © {year} Annapurna Rasoi • Delhi • Designed with ❤️ by{" "}
          <a
            href="https://sitelytc.com"
            target="_blank"
            rel="noreferrer"
            className="no-underline transition-colors duration-300 hover:text-amber-400"
          >
            Sitelytc Digital Media
          </a>{" "}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
