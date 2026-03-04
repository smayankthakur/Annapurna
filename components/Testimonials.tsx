"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rohit Mehra",
    feedback:
      "The quality is unbelievably consistent. Tastes like a premium dine-in experience at home.",
  },
  {
    name: "Sneha Arora",
    feedback:
      "Fast delivery in Paschim Vihar and the butter chicken is always rich and fresh.",
  },
  {
    name: "Karan Gulati",
    feedback:
      "Best cloud kitchen option in West Delhi. Packaging, flavour, and portion sizes are excellent.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-gap bg-card/20 bg-[radial-gradient(circle_at_50%_10%,rgba(212,175,55,0.14),transparent_55%)]"
    >
      <div className="container-max px-4">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-gold">
          Social Proof
        </p>
        <h2 className="mt-3 text-center font-heading text-4xl leading-tight text-white sm:text-5xl">
          Trusted by Delhi Food Lovers
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              variants={cardVariants}
              transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
              className={`luxury-card p-8 ${index === 1 ? "shadow-[0_0_45px_rgba(212,175,55,0.16)]" : ""}`}
            >
              <div className="mb-5 flex items-center gap-1 text-gold" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                    <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.79L10 14.74 4.79 17.5l1-5.79-4.21-4.1 5.82-.85L10 1.5Z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-7 text-muted">&ldquo;{testimonial.feedback}&rdquo;</p>
              <p className="mt-6 font-semibold text-soft-gold">{testimonial.name}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
