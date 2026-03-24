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
    <nav className="fixed w-full z-50 liquid-glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sun className="text-brand-gold w-6 h-6" />
          <span className="font-serif text-2xl font-semibold tracking-tight text-white">Brand Name</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium text-white/70">
          <a href="#hero" className="hover:text-brand-gold transition-colors">Home</a>
          <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
          <a href="#menu" className="hover:text-brand-gold transition-colors">Menu</a>
          <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
          <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full border border-white/20 transition-all duration-300 backdrop-blur-md">
            Action Button
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden liquid-glass border-b border-white/5 px-6 py-8 flex flex-col gap-6 text-center"
        >
          <a href="#hero" onClick={() => setIsOpen(false)} className="text-lg font-serif italic text-white">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-serif italic text-white">About</a>
          <a href="#menu" onClick={() => setIsOpen(false)} className="text-lg font-serif italic text-white">Menu</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg font-serif italic text-white">Contact</a>
          <button className="bg-white/10 text-white px-6 py-3 rounded-full border border-white/20">Action</button>
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
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
          alt="Atmospheric Background" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="liquid-glass p-12 rounded-[3rem] border border-white/10"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 uppercase tracking-[0.4em] text-xs font-medium mb-6 block"
          >
            Placeholder Subtitle Text
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl text-white font-serif mb-8 leading-tight"
          >
            Main Headline <br />
            <span className="serif-italic text-brand-gold">Placeholder Slogan</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-white/10 text-white px-10 py-4 rounded-full font-medium hover:bg-white/20 transition-all flex items-center gap-2 group border border-white/20 backdrop-blur-md">
              Primary Action
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-white/70 px-10 py-4 rounded-full font-medium hover:text-white transition-all">
              Secondary Action
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
              alt="Placeholder Image" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-10 -right-10 hidden lg:block w-64 h-64 rounded-[2rem] overflow-hidden border-4 border-white/10 liquid-glass p-2">
             <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
              alt="Placeholder Image" 
              className="w-full h-full object-cover rounded-[1.5rem]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="space-y-8 p-12 liquid-glass rounded-[3rem] border border-white/10">
          <span className="text-brand-gold font-serif italic text-xl">Section Label</span>
          <h2 className="text-4xl md:text-5xl text-white leading-tight">
            Placeholder Title <br /> for Information.
          </h2>
          <p className="text-white/60 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="flex gap-4 items-start">
              <div className="bg-white/5 p-3 rounded-2xl text-brand-gold border border-white/10">
                <Coffee />
              </div>
              <div>
                <h4 className="font-serif text-xl text-white">Feature One</h4>
                <p className="text-sm text-white/40">Short description</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-white/5 p-3 rounded-2xl text-brand-gold border border-white/10">
                <Utensils />
              </div>
              <div>
                <h4 className="font-serif text-xl text-white">Feature Two</h4>
                <p className="text-sm text-white/40">Short description</p>
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
    { name: "Placeholder Item One", price: "00.00", desc: "Brief description of the placeholder item goes here." },
    { name: "Placeholder Item Two", price: "00.00", desc: "Brief description of the placeholder item goes here." },
    { name: "Placeholder Item Three", price: "00.00", desc: "Brief description of the placeholder item goes here." },
    { name: "Placeholder Item Four", price: "00.00", desc: "Brief description of the placeholder item goes here." },
  ];

  return (
    <section id="menu" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-brand-gold/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl text-white mb-6">Placeholder Menu</h2>
        <p className="text-white/40 italic font-serif text-lg">A selection of placeholder content</p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-12">
        {items.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer liquid-glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all"
          >
            <div className="flex justify-between items-baseline mb-2 border-b border-white/10 pb-2">
              <h3 className="text-xl font-serif text-white group-hover:text-brand-gold transition-colors">{item.name}</h3>
              <span className="text-brand-gold font-medium">{item.price}</span>
            </div>
            <p className="text-white/40 text-sm italic">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="bg-white/5 text-white px-12 py-4 rounded-full border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        <div className="liquid-glass text-white p-12 rounded-[3rem] space-y-8 border border-white/10">
          <h2 className="text-4xl font-serif">Contact Info</h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <MapPin className="text-brand-gold shrink-0" />
              <div>
                <p className="font-medium">Placeholder Address</p>
                <p className="text-white/40">City, Country</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Clock className="text-brand-gold shrink-0" />
              <div>
                <p className="font-medium">Opening Hours</p>
                <p className="text-white/40">Mon - Fri: 00:00 - 00:00</p>
                <p className="text-white/40">Sat - Sun: 00:00 - 00:00</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 rounded-[3rem] overflow-hidden h-[400px] lg:h-auto shadow-xl border border-white/10 grayscale opacity-50">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.632225211915!2d13.4385!3d52.5445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMyJzQwLjIiTiAxM8KwMjYnMTguNiJF!5e0!3m2!1sen!2sde!4v1625581234567!5m2!1sen!2sde" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Sun className="text-brand-gold w-5 h-5" />
          <span className="font-serif text-xl font-semibold text-white">Brand Name</span>
        </div>
        <div className="text-white/30 text-sm">
          © {new Date().getFullYear()} Placeholder Brand. All rights reserved.
        </div>
        <div className="flex gap-8 text-xs uppercase tracking-widest text-white/40">
          <a href="#" className="hover:text-white transition-colors">Legal</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-white bg-zinc-950">
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
