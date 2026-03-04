import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LocationSection from "@/components/LocationSection";
import MenuCard from "@/components/MenuCard";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import Testimonials from "@/components/Testimonials";

const orderUrl =
  "https://www.zomato.com/ncr/annapurna-rasoi-2-paschim-vihar-new-delhi/order";

const menuItems = [
  {
    name: "Butter Chicken Royale",
    description: "Slow-cooked tomato gravy, hand-ground spices, buttery finish.",
    price: "₹349",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Dal Makhani Signature",
    description: "Creamy black lentils simmered overnight with aromatic smoke.",
    price: "₹259",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Paneer Tikka Gold",
    description: "Char-grilled paneer cubes in chef's saffron-spiced marinade.",
    price: "₹299",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Delhi Kadhai Chicken",
    description: "Wok-finished chicken with capsicum, onion, and bold masala.",
    price: "₹339",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Jeera Rice Elegance",
    description: "Fragrant basmati tossed with roasted cumin and ghee.",
    price: "₹179",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Garlic Naan Basket",
    description: "Tandoor-fired naan brushed with garlic butter and herbs.",
    price: "₹99",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function Home() {
  return (
    <PageTransition>
      <Navbar orderUrl={orderUrl} />
      <Hero orderUrl={orderUrl} />

      <section className="border-y border-gold/20 bg-card/70 py-4">
        <div className="container-max px-4 text-center text-sm font-semibold tracking-wide text-soft-gold sm:text-base">
          Only limited kitchen slots left for tonight in West Delhi. Order now.
        </div>
      </section>

      <Featured orderUrl={orderUrl} />

      <section id="menu" className="section-gap">
        <div className="container-max px-4">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Signature Menu
          </p>
          <h2 className="mt-3 text-center font-heading text-4xl leading-tight text-white sm:text-5xl">
            Crafted for Delhi Cravings
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {menuItems.map((item) => (
              <MenuCard key={item.name} {...item} orderUrl={orderUrl} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <LocationSection />
      <Footer />
    </PageTransition>
  );
}
