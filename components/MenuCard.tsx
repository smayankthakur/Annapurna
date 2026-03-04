"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type MenuCardProps = {
  image: string;
  name: string;
  description: string;
  price: string;
  orderUrl: string;
};

export default function MenuCard({ image, name, description, price, orderUrl }: MenuCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="luxury-card border border-gold/20 transition-all duration-300 hover:border-amber-400/30 hover:shadow-2xl"
    >
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={name}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover opacity-0 transition-opacity duration-700"
          onLoadingComplete={(img) => img.classList.remove("opacity-0")}
        />
      </div>
      <div className="p-8">
        <h3 className="font-heading text-3xl leading-tight text-white">{name}</h3>
        <p className="mt-4 text-sm leading-7 text-muted">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-3xl font-bold tracking-wide text-gold">{price}</p>
          <a
            href={orderUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-luxury gold-gradient w-full rounded-3xl px-5 py-3 text-center text-sm font-bold text-charcoal sm:w-auto"
          >
            Order Now
          </a>
        </div>
      </div>
    </motion.article>
  );
}
