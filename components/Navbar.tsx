"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/app/logo.png";

type NavbarProps = {
  orderUrl: string;
};

const links = [
  { label: "Home", target: "hero" },
  { label: "Combos", target: "featured" },
  { label: "Menu", target: "menu" },
  { label: "Reviews", target: "testimonials" },
  { label: "Location", target: "location" },
];

export default function Navbar({ orderUrl }: NavbarProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHasScrolled(currentY > 20);
      setShowFloating(currentY > 480);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (id: string) => {
    const section = document.getElementById(id);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-xl transition-all duration-[400ms] ${
          hasScrolled ? "bg-[rgba(15,15,15,0.84)]" : "bg-[rgba(15,15,15,0.60)]"
        }`}
      >
        <nav className="container-max flex items-center justify-between px-4 py-4 lg:px-8">
          <button
            type="button"
            onClick={() => handleSmoothScroll("hero")}
            className="flex items-center"
            aria-label="Go to home"
          >
            <Image
              src={logo}
              alt="Annapurna Rasoi"
              width={238}
              height={64}
              priority
              className="h-auto w-[188px] sm:w-[220px]"
            />
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <button
                key={link.target}
                type="button"
                onClick={() => handleSmoothScroll(link.target)}
                className="group relative text-sm font-medium text-muted transition-colors duration-300 hover:text-soft-gold"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <a
            href={orderUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-luxury gold-gradient rounded-3xl px-4 py-2 text-sm font-semibold text-charcoal md:px-6"
          >
            Order Now
          </a>
        </nav>
      </header>

      <a
        href={orderUrl}
        target="_blank"
        rel="noreferrer"
        className={`btn-luxury fixed bottom-4 right-4 z-50 rounded-3xl px-6 py-3 text-sm font-bold text-charcoal shadow-luxury transition-all duration-300 sm:bottom-8 sm:right-8 ${
          showFloating
            ? "translate-y-0 opacity-100 gold-gradient"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        Order Now
      </a>
    </>
  );
}
