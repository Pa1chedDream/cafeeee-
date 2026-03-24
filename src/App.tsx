/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Coffee, 
  Clock, 
  MapPin, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Utensils, 
  Sun,
  Menu as MenuIcon,
  X
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-olive/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sun className="text-brand-gold w-6 h-6" />
          <span className="font-serif text-2xl font-semibold tracking-tight text-brand-olive">Sonnenschein</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium text-brand-olive/80">
          <a href="#hero" className="hover:text-brand-gold transition-colors">Home</a>
          <a href="#about" className="hover:text-brand-gold transition-colors">Über Uns</a>
          <a href="#menu" className="hover:text-brand-gold transition-colors">Speisekarte</a>
          <a href="#contact" className="hover:text-brand-gold transition-colors">Kontakt</a>
          <button className="bg-brand-olive text-white px-6 py-2 rounded-full hover:bg-brand-gold transition-all duration-300">
            Reservieren
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-olive" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-cream border-b border-brand-olive/10 px-6 py-8 flex flex-col gap-6 text-center"
        >
          <a href="#hero" onClick={() => setIsOpen(false)} className="text-lg font-serif italic">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-serif italic">Über Uns</a>
          <a href="#menu" onClick={() => setIsOpen(false)} className="text-lg font-serif italic">Speisekarte</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg font-serif italic">Kontakt</a>
          <button className="bg-brand-olive text-white px-6 py-3 rounded-full">Reservieren</button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop" 
          alt="Café Interior" 
          className="w-full h-full object-cover brightness-75"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/90 uppercase tracking-[0.3em] text-sm font-medium mb-6 block"
        >
          Willkommen im Herzen der Stadt
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-8xl text-white font-serif mb-8 leading-tight"
        >
          Wo die Sonne <br />
          <span className="serif-italic">immer scheint.</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-white text-brand-olive px-10 py-4 rounded-full font-medium hover:bg-brand-cream transition-all flex items-center gap-2 group">
            Speisekarte entdecken
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-white/50 text-white px-10 py-4 rounded-full font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
            Tisch reservieren
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
              alt="Barista at work" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-10 -right-10 hidden lg:block w-64 h-64 rounded-[2rem] overflow-hidden border-8 border-white shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
              alt="Pastries" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="space-y-8">
          <span className="text-brand-gold font-serif italic text-xl">Unsere Geschichte</span>
          <h2 className="text-4xl md:text-5xl text-brand-olive leading-tight">
            Handgerösteter Kaffee & <br /> hausgemachte Liebe.
          </h2>
          <p className="text-zinc-600 leading-relaxed text-lg">
            Seit über 15 Jahren ist das Café Sonnenschein ein Ort der Begegnung. Wir glauben an die Kraft eines perfekten Espressos und die Wärme eines frisch gebackenen Kuchens. Jede Bohne wird sorgfältig ausgewählt, jede Zutat stammt aus der Region.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="flex gap-4 items-start">
              <div className="bg-brand-cream p-3 rounded-2xl text-brand-gold">
                <Coffee />
              </div>
              <div>
                <h4 className="font-serif text-xl text-brand-olive">Premium Roast</h4>
                <p className="text-sm text-zinc-500">Eigene Röstung</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-brand-cream p-3 rounded-2xl text-brand-gold">
                <Utensils />
              </div>
              <div>
                <h4 className="font-serif text-xl text-brand-olive">Bio-Zutaten</h4>
                <p className="text-sm text-zinc-500">Lokal & Saisonal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuPreview = () => {
  const items = [
    { name: "Sonnenschein Frühstück", price: "14.50", desc: "Zwei Bio-Eier, Avocado, Lachs, Sauerteigbrot & kleiner O-Saft" },
    { name: "Hausgemachter Käsekuchen", price: "4.20", desc: "Nach Omas Geheimrezept mit frischen Beeren" },
    { name: "Flat White", price: "3.90", desc: "Doppelter Espresso mit samtigem Milchschaum" },
    { name: "Avocado Smash", price: "11.80", desc: "Mit pochiertem Ei und Chili-Flocken auf Vollkornbrot" },
  ];

  return (
    <section id="menu" className="py-24 px-6 bg-brand-cream">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl text-brand-olive mb-6">Ausgewählte Köstlichkeiten</h2>
        <p className="text-zinc-600 italic font-serif text-lg">Ein kleiner Vorgeschmack auf unsere Karte</p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-12">
        {items.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="flex justify-between items-baseline mb-2 border-b border-brand-olive/10 pb-2">
              <h3 className="text-xl font-serif text-brand-olive group-hover:text-brand-gold transition-colors">{item.name}</h3>
              <span className="text-brand-gold font-medium">{item.price} €</span>
            </div>
            <p className="text-zinc-500 text-sm italic">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="bg-brand-olive text-white px-12 py-4 rounded-full hover:bg-brand-gold transition-all shadow-lg shadow-brand-olive/20">
          Vollständige Karte ansehen
        </button>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        <div className="bg-brand-olive text-white p-12 rounded-[3rem] space-y-8">
          <h2 className="text-4xl font-serif">Besuchen Sie uns</h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <MapPin className="text-brand-gold shrink-0" />
              <div>
                <p className="font-medium">Sonnenallee 42</p>
                <p className="text-white/60">10437 Berlin, Deutschland</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Clock className="text-brand-gold shrink-0" />
              <div>
                <p className="font-medium">Öffnungszeiten</p>
                <p className="text-white/60">Mo - Fr: 08:00 - 18:00</p>
                <p className="text-white/60">Sa - So: 09:00 - 19:00</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-olive transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-olive transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 rounded-[3rem] overflow-hidden h-[400px] lg:h-auto shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.632225211915!2d13.4385!3d52.5445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMyJzQwLjIiTiAxM8KwMjYnMTguNiJF!5e0!3m2!1sen!2sde!4v1625581234567!5m2!1sen!2sde" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Café Sonnenschein Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-cream py-12 px-6 border-t border-brand-olive/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Sun className="text-brand-gold w-5 h-5" />
          <span className="font-serif text-xl font-semibold text-brand-olive">Sonnenschein</span>
        </div>
        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Café Sonnenschein. Alle Rechte vorbehalten.
        </div>
        <div className="flex gap-8 text-xs uppercase tracking-widest text-brand-olive/60">
          <a href="#" className="hover:text-brand-gold">Impressum</a>
          <a href="#" className="hover:text-brand-gold">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
