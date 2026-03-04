"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type HeroProps = {
  orderUrl: string;
};

const easing: [number, number, number, number] = [0.4, 0, 0.2, 1];

export default function Hero({ orderUrl }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div
        style={{ y }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80"
          alt="Premium dining ambience"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-0 transition-opacity duration-1000"
          onLoadingComplete={(img) => img.classList.remove("opacity-0")}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-charcoal/70 to-charcoal" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.22),transparent_48%)]" />

      <div className="container-max relative z-10 flex min-h-screen items-center px-4 pb-20 pt-28 sm:pt-32 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">
            Michelin-Style Cloud Kitchen
          </p>
          <h1 className="mt-6 font-heading text-5xl leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            Authentic Flavours of <span className="text-amber-400">Delhi</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base text-soft-gold sm:text-lg">
            Serving 500+ Happy Orders in West Delhi This Week
          </p>

          <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={orderUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-luxury gold-gradient w-full rounded-3xl px-8 py-4 text-center text-base font-bold text-charcoal sm:w-auto"
            >
              Order Now
            </a>
          </div>

          <p className="mt-6 text-sm font-semibold text-gold sm:text-base">
            🔥 500+ orders served in West Delhi this week
          </p>
        </motion.div>
      </div>
    </section>
  );
}
