"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FeaturedProps = {
  orderUrl: string;
};

const combos = [
  {
    name: "Royal Dinner Combo",
    description: "Butter Chicken, Dal Makhani, Jeera Rice, 2 Butter Naan.",
    price: "₹699",
    image:
      "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Family Feast Combo",
    description: "Paneer Lababdar, Kadhai Chicken, Rice, 4 Naan, Salad.",
    price: "₹999",
    image:
      "https://images.unsplash.com/photo-1631452180539-96aca7d48617?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Delhi Tandoori Combo",
    description: "Paneer Tikka, Tandoori Chicken, Mint Dip, Laccha Paratha.",
    price: "₹799",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80",
  },
];

const easing: [number, number, number, number] = [0.4, 0, 0.2, 1];

export default function Featured({ orderUrl }: FeaturedProps) {
  return (
    <section id="featured" className="section-gap">
      <div className="container-max px-4">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-gold">
          Featured Combos
        </p>
        <h2 className="mt-3 text-center font-heading text-4xl leading-tight text-white sm:text-5xl">
          Bestsellers Loved in West Delhi
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {combos.map((combo, index) => (
            <motion.article
              key={combo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: easing, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="luxury-card border border-gold/20 transition-all duration-300 hover:border-amber-400/30 hover:shadow-2xl"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={combo.image}
                  alt={combo.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover opacity-0 transition-opacity duration-700"
                  onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                />
              </div>

              <div className="p-8">
                <h3 className="font-heading text-3xl leading-tight text-white">{combo.name}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{combo.description}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-3xl font-bold tracking-wide text-gold">{combo.price}</p>
                  <a
                    href={orderUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-luxury gold-gradient w-full rounded-3xl px-5 py-3 text-center text-sm font-bold text-charcoal sm:w-auto"
                  >
                    Order Combo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
