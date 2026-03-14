import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Aliu Hausmeisterservice",
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#1a4a7a] transition-colors mb-10"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold text-[#0f172a] mb-10">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-slate-600 text-sm leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-[#0f172a] mb-2">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Diese Website ist eine reine Informationsseite. Es gibt
              <strong> kein Kontaktformular, keine Registrierung, keinen
              Login und keine Kommentarfunktion</strong>. Wir erfassen,
              speichern oder verarbeiten keinerlei personenbezogene Daten
              der Besucher dieser Website.
            </p>
            <p className="mt-3">
              Die einzigen technisch unvermeidlichen Daten sind
              Server-Log-Dateien, die automatisch beim Aufruf jeder Website
              entstehen (siehe Abschnitt 3). Diese werden von unserem
              Hosting-Anbieter Vercel verwaltet und nicht von uns ausgewertet.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#0f172a] mb-2">
              2. Verantwortlicher
            </h2>
            <p>
              Aliu Hausmeisterservice<br />
              Mainaustraße 77, 81243 München<br />
              Telefon: 0176 35220086<br />
              E-Mail: aliuhausmeister@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#0f172a] mb-2">
              3. Technische Daten beim Websiteaufruf
            </h2>
            <h3 className="font-medium text-[#0f172a] mt-4 mb-1">
              Server-Log-Dateien
            </h3>
            <p>
              Beim Aufruf dieser Website werden vom Hosting-Anbieter (Vercel)
              automatisch technische Zugriffsdaten gespeichert. Dies ist bei
              jeder Website technisch notwendig und umfasst: Browsertyp,
              Betriebssystem, Referrer-URL, IP-Adresse und Uhrzeit des Abrufs.
            </p>
            <p className="mt-2">
              Wir als Betreiber haben auf diese Logs keinen aktiven Zugriff
              und werten sie nicht aus. Diese Daten werden nicht mit anderen
              Datenquellen zusammengeführt und nicht an Dritte weitergegeben.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="font-medium text-[#0f172a] mt-4 mb-1">
              Kein Kontaktformular
            </h3>
            <p>
              Diese Website enthält kein Kontaktformular. Eine Kontaktaufnahme
              ist ausschließlich per Telefon oder E-Mail möglich. Dabei
              speichern wir Ihre Angaben nur zur Bearbeitung Ihrer Anfrage
              und löschen diese danach. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. b DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#0f172a] mb-2">
              4. Cookies, Tracking und Analyse
            </h2>
            <p>
              Diese Website verwendet <strong>keine Cookies</strong>,
              kein Google Analytics, kein Facebook Pixel und keinerlei
              sonstige Tracking- oder Analyse-Tools. Es werden
              keine Nutzerprofile erstellt und keine Daten zu Werbe-
              oder Analysezwecken erfasst oder an Dritte weitergegeben.
              Ein Cookie-Banner ist daher nicht erforderlich.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#0f172a] mb-2">
              5. Schriftarten
            </h2>
            <p>
              Diese Website verwendet Web-Schriftarten, die lokal auf unserem
              Server eingebunden sind. Es findet keine Verbindung zu externen
              Servern statt. Ihre IP-Adresse wird dabei nicht an Dritte
              übermittelt.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#0f172a] mb-2">
              6. Hosting
            </h2>
            <p>
              Diese Website wird gehostet bei:
            </p>
            <p className="mt-2">
              <strong>Vercel Inc.</strong><br />
              340 Pine Street, Suite 701<br />
              San Francisco, CA 94104, USA<br />
              Website: <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#1a4a7a] hover:underline">vercel.com</a><br />
              Datenschutz: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#1a4a7a] hover:underline">vercel.com/legal/privacy-policy</a>
            </p>
            <p className="mt-3">
              Die Domain <strong>aliu-hausmeisterservice.de</strong> ist registriert bei IONOS SE,
              Elgendorfer Str. 57, 56410 Montabaur, Deutschland.
            </p>
            <p className="mt-3">
              Die personenbezogenen Daten, die auf dieser Website erfasst werden,
              werden auf den Servern von Vercel gespeichert. Mit Vercel wurde ein
              Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO geschlossen.
              Der Einsatz erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an einer sicheren und effizienten
              Bereitstellung unseres Online-Angebots).
            </p>
            <p className="mt-3">
              Vercel ist ein US-amerikanisches Unternehmen. Die Datenübertragung
              in die USA erfolgt auf Grundlage der Standardvertragsklauseln der
              EU-Kommission gemäß Art. 46 Abs. 2 lit. c DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#0f172a] mb-2">
              7. Ihre Rechte
            </h2>
            <p>Sie haben gegenüber uns folgende Rechte:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
              aliuhausmeister@gmail.com
            </p>
            <p className="mt-3">
              Sie haben außerdem das Recht, sich bei der zuständigen
              Datenschutz-Aufsichtsbehörde zu beschweren. In Bayern ist dies
              das Bayerische Landesamt für Datenschutzaufsicht (BayLDA),
              Promenade 27, 91522 Ansbach.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
