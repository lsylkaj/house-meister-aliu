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
              Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und
              Zweck der Verarbeitung von personenbezogenen Daten auf unserer
              Website auf. Wir nehmen den Schutz Ihrer persönlichen Daten sehr
              ernst.
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
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-medium text-[#0f172a] mt-4 mb-1">
              Server-Log-Dateien
            </h3>
            <p>
              Der Provider dieser Website erhebt und speichert automatisch
              Informationen in Server-Log-Dateien, die Ihr Browser automatisch
              übermittelt. Dies sind: Browsertyp und -version, verwendetes
              Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners,
              Uhrzeit der Serveranfrage und IP-Adresse.
            </p>
            <p className="mt-2">
              Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
              Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f
              DSGVO.
            </p>

            <h3 className="font-medium text-[#0f172a] mt-4 mb-1">
              Kontaktaufnahme per Telefon oder E-Mail
            </h3>
            <p>
              Wenn Sie uns per Telefon oder E-Mail kontaktieren, werden Ihre
              Angaben zur Bearbeitung Ihrer Anfrage bei uns gespeichert.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
              bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#0f172a] mb-2">
              4. Cookies und Tracking
            </h2>
            <p>
              Diese Website verwendet keine Cookies und kein
              Tracking-/Analyse-Tools. Es werden keine personenbezogenen Daten
              zu Werbe- oder Analysezwecken erfasst oder an Dritte weitergegeben.
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
              Diese Website wird bei einem externen Dienstleister gehostet
              (Hoster). Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters gespeichert.
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
              gegenüber potenziellen und bestehenden Kunden (Art. 6 Abs. 1
              lit. b DSGVO) und im Interesse einer sicheren, schnellen und
              effizienten Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1
              lit. f DSGVO).
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
