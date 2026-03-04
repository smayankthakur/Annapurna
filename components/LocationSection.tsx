"use client";

import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <section id="location" className="section-gap">
      <div className="container-max px-4">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-gold">
          Visit Virtually
        </p>
        <h2 className="mt-3 text-center font-heading text-4xl leading-tight text-white sm:text-5xl">
          Serving Across West Delhi
        </h2>

        <motion.div
          initial={{ y: 6 }}
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.01 }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-gold/30 bg-card/40 p-[1px] shadow-[0_0_45px_rgba(212,175,55,0.14)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(212,175,55,0.35),transparent_30%,transparent_70%,rgba(244,230,194,0.35))]" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.872936554688!2d77.0667528!3d28.66352299999999!2m3!1f0!2m3!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0584f0e2273b%3A0x1178c03580ae3973!2sANNAPURNA%20RASOI!5e0!3m2!1sen!2sin!4v1772620931772!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Annapurna Rasoi on Google Maps"
              className="h-[320px] w-full grayscale md:h-[420px]"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
