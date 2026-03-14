import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Aliu Hausmeisterservice",
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#1a4a7a] transition-colors mb-10"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold text-[#0f172a] mb-10">Impressum</h1>

        <section className="space-y-8 text-slate-600 text-sm leading-relaxed">
          <div>
            <h2 className="text-base font-semibold text-[#0f172a] mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Aliu Hausmeisterservice<br />
              Mainaustraße 77<br />
              81243 München<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#0f172a] mb-2">Kontakt</h2>
            <p>
              Telefon:{" "}
              <a href="tel:+4917635220086" className="text-[#1a4a7a] hover:underline">
                0176 35220086
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:aliuhausmeister@gmail.com" className="text-[#1a4a7a] hover:underline">
                aliuhausmeister@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#0f172a] mb-2">
              Steuernummer
            </h2>
            <p>
              Steuernummer: 14410631092
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#0f172a] mb-2">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Nexhmedin Aliu<br />
              Mainaustraße 77<br />
              81243 München
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#0f172a] mb-2">
              Domain
            </h2>
            <p>
              Die Domain <strong>aliu-hausmeisterservice.de</strong> ist registriert bei:<br />
              IONOS SE<br />
              Elgendorfer Str. 57<br />
              56410 Montabaur<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#0f172a] mb-2">
              Hosting
            </h2>
            <p>
              Diese Website wird gehostet bei:<br />
              Vercel Inc.<br />
              340 Pine Street, Suite 701<br />
              San Francisco, CA 94104<br />
              USA
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#0f172a] mb-2">
              Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a4a7a] hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="mt-3">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#0f172a] mb-2">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
