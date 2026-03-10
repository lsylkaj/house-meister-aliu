import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080e1a] py-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo in circle */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-md ring-2 ring-white/10 flex-shrink-0">
              <Image
                src="/logo-icon.png"
                alt="Aliu Hausmeisterservice"
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Aliu Hausmeisterservice</div>
              <div className="text-slate-500 text-xs">Mainaustraße 77, 81243 München</div>
            </div>
          </div>

          {/* Contact links */}
          <div className="flex gap-6 text-slate-400 text-xs">
            <a href="tel:+4917635220086" className="hover:text-white transition-colors">
              0176 35220086
            </a>
            <a href="mailto:aliuhausmeister@gmail.com" className="hover:text-white transition-colors">
              aliuhausmeister@gmail.com
            </a>
          </div>

          {/* Legal */}
          <div className="flex gap-5 text-slate-500 text-xs">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-slate-600 text-xs">
            © {year} Aliu Hausmeisterservice · Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
