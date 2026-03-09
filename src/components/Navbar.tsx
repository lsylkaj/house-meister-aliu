"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Image
            src="/logo-icon.png"
            alt="Aliu Hausmeisterservice Logo"
            width={40}
            height={40}
            className="object-contain rounded-md"
          />
          <span
            className={`font-bold text-lg tracking-tight transition-colors ${
              scrolled ? "text-[#1a4a7a]" : "text-white"
            }`}
          >
            Aliu Hausmeisterservice
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-[#1e3a5f] ${
                scrolled ? "text-slate-600" : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+4917635220086"
            className="ml-2 text-sm font-semibold bg-[#1a4a7a] text-white px-5 py-2 rounded-full hover:bg-[#163d66] transition-colors"
          >
            Jetzt anrufen
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled
              ? "text-slate-700 hover:bg-slate-100"
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-[#1e3a5f] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+4917635220086"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold bg-[#1a4a7a] text-white px-5 py-2.5 rounded-full text-center hover:bg-[#163d66] transition-colors"
          >
            Jetzt anrufen
          </a>
        </div>
      )}
    </header>
  );
}
