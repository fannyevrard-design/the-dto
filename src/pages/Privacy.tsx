import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LangProvider, useLang } from "@/i18n/LangContext";
import { Nav } from "@/sections/Nav";
import { Footer } from "@/sections/Footer";
import { DtoWaitlistModal } from "@/components/DtoWaitlistModal";

const PrivacyContent = () => {
  const { lang } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = lang === "fr"
      ? "Politique de confidentialité — DatsTheOne"
      : "Privacy Policy — DatsTheOne";
    document.title = title;
    const desc = lang === "fr"
      ? "Politique de confidentialité de DatsTheOne, conforme à la Loi 25 du Québec sur la protection des renseignements personnels."
      : "DatsTheOne Privacy Policy, compliant with Quebec's Law 25 on the protection of personal information.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, [lang]);

  const updated = lang === "fr" ? "Dernière mise à jour : 1er mai 2026" : "Last updated: May 1, 2026";

  return (
    <article
      className="mx-auto"
      style={{ maxWidth: 820, padding: "120px 24px 96px", color: "hsl(var(--dto-text))" }}
    >
      {lang === "fr" ? (
        <>
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-soft mb-4">— Légal</p>
          <h1 className="font-editorial text-[40px] md:text-[56px] leading-[1.05] mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-soft text-[14px] mb-12">{updated}</p>

          <p className="text-[16px] leading-[1.7] mb-8">
            La présente politique de confidentialité explique comment <strong>DatsTheOne</strong>
            (« nous », « notre », « nos ») recueille, utilise, communique et protège vos
            renseignements personnels. Nous nous conformons à la <strong>Loi 25</strong>
            (Loi modernisant des dispositions législatives en matière de protection des
            renseignements personnels) du Québec, ainsi qu'à la Loi sur la protection des
            renseignements personnels dans le secteur privé (LPRPSP) et à la LPRPDE fédérale.
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">1. Responsable de la protection des renseignements personnels</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Conformément à la Loi 25, nous avons désigné un responsable de la protection
            des renseignements personnels que vous pouvez joindre :
          </p>
          <p className="text-[16px] leading-[1.7] mb-4">
            <strong>Responsable de la protection des renseignements personnels</strong><br />
            DatsTheOne<br />
            Montréal, Québec, Canada<br />
            Courriel : <a className="underline" href="mailto:privacy@datstheone.com">privacy@datstheone.com</a>
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">2. Renseignements personnels que nous recueillons</h2>
          <p className="text-[16px] leading-[1.7] mb-4">Nous pouvons recueillir, avec votre consentement :</p>
          <ul className="list-disc pl-6 space-y-2 text-[16px] leading-[1.7] mb-4">
            <li>Informations d'identification : prénom, nom, date de naissance, genre.</li>
            <li>Coordonnées : adresse courriel, numéro de téléphone (facultatif).</li>
            <li>Informations de profil : photos, biographie, intérêts, préférences.</li>
            <li>Données de localisation approximative (ville/région), si vous l'autorisez.</li>
            <li>Données techniques : type d'appareil, système d'exploitation, adresse IP, identifiants.</li>
            <li>Données d'utilisation : interactions, messages échangés, préférences de matching.</li>
          </ul>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">3. Finalités de la collecte</h2>
          <p className="text-[16px] leading-[1.7] mb-4">Nous utilisons vos renseignements pour :</p>
          <ul className="list-disc pl-6 space-y-2 text-[16px] leading-[1.7] mb-4">
            <li>Créer et gérer votre compte ainsi que votre profil.</li>
            <li>Vous suggérer des correspondances pertinentes.</li>
            <li>Permettre les échanges entre membres et assurer la sécurité.</li>
            <li>Améliorer nos services, mener des analyses et prévenir les fraudes.</li>
            <li>Vous informer du lancement, des mises à jour et nouveautés (avec votre consentement).</li>
            <li>Respecter nos obligations légales.</li>
          </ul>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">4. Consentement</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Conformément à la Loi 25, votre consentement est demandé de manière
            <em> manifeste, libre, éclairée et donné à des fins spécifiques</em>. Vous pouvez
            retirer votre consentement à tout moment, sous réserve des obligations légales
            ou contractuelles.
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">5. Communication à des tiers</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Nous ne vendons pas vos renseignements personnels. Nous pouvons partager certains
            renseignements avec des prestataires de services (hébergement, analytique,
            paiement, communications) liés par contrat à des obligations strictes de
            confidentialité et de sécurité. Toute communication hors Québec fait l'objet
            d'une <strong>évaluation des facteurs relatifs à la vie privée (ÉFVP)</strong>
            conformément à l'article 17 de la Loi 25.
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">6. Conservation et destruction</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Vos renseignements sont conservés uniquement pour la durée nécessaire aux
            finalités pour lesquelles ils ont été recueillis. À l'expiration de cette
            période, ils sont détruits ou anonymisés de façon sécuritaire.
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">7. Vos droits (Loi 25)</h2>
          <p className="text-[16px] leading-[1.7] mb-4">Vous avez le droit :</p>
          <ul className="list-disc pl-6 space-y-2 text-[16px] leading-[1.7] mb-4">
            <li>D'accéder à vos renseignements personnels.</li>
            <li>De les faire rectifier s'ils sont inexacts, incomplets ou équivoques.</li>
            <li>De retirer votre consentement et de demander la suppression de votre compte.</li>
            <li>À la <strong>portabilité</strong> : recevoir vos renseignements dans un format technologique structuré et couramment utilisé.</li>
            <li>À la <strong>désindexation</strong> dans les cas prévus par la loi.</li>
            <li>D'être informé en cas de décision automatisée vous concernant et d'en demander la révision.</li>
          </ul>
          <p className="text-[16px] leading-[1.7] mb-4">
            Pour exercer ces droits, écrivez-nous à
            {" "}<a className="underline" href="mailto:privacy@datstheone.com">privacy@datstheone.com</a>.
            Nous y répondrons dans un délai de 30 jours.
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">8. Sécurité</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Nous mettons en place des mesures de sécurité physiques, administratives et
            technologiques raisonnables pour protéger vos renseignements (chiffrement,
            contrôles d'accès, audits, journalisation).
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">9. Incident de confidentialité</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            En cas d'incident de confidentialité présentant un risque de préjudice sérieux,
            nous aviserons sans délai la <strong>Commission d'accès à l'information du Québec
            (CAI)</strong> ainsi que les personnes concernées, et tiendrons un registre des
            incidents conformément à la Loi 25.
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">10. Témoins (cookies)</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Nous utilisons des témoins essentiels au fonctionnement du site et, avec votre
            consentement, des témoins de mesure d'audience. Vous pouvez gérer vos préférences
            via les paramètres de votre navigateur.
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">11. Modifications</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Cette politique peut être mise à jour. La date de dernière mise à jour figure
            en haut de la page. Les changements importants vous seront notifiés.
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">12. Plainte auprès de la CAI</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Si vous estimez que vos droits n'ont pas été respectés, vous pouvez déposer une
            plainte auprès de la Commission d'accès à l'information du Québec :
            {" "}<a className="underline" href="https://www.cai.gouv.qc.ca" target="_blank" rel="noreferrer">www.cai.gouv.qc.ca</a>.
          </p>
        </>
      ) : (
        <>
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-soft mb-4">— Legal</p>
          <h1 className="font-editorial text-[40px] md:text-[56px] leading-[1.05] mb-4">Privacy Policy</h1>
          <p className="text-soft text-[14px] mb-12">{updated}</p>

          <p className="text-[16px] leading-[1.7] mb-8">
            This Privacy Policy explains how <strong>DatsTheOne</strong> collects, uses,
            discloses and protects your personal information. We comply with Quebec's
            <strong> Law 25</strong> (Act to modernize legislative provisions respecting the
            protection of personal information), the Quebec Act respecting the protection
            of personal information in the private sector, and Canada's PIPEDA.
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">1. Privacy Officer</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            In accordance with Law 25, we have appointed a Privacy Officer:
          </p>
          <p className="text-[16px] leading-[1.7] mb-4">
            <strong>Privacy Officer</strong><br />
            DatsTheOne<br />
            Montréal, Québec, Canada<br />
            Email: <a className="underline" href="mailto:privacy@datstheone.com">privacy@datstheone.com</a>
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">2. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 text-[16px] leading-[1.7] mb-4">
            <li>Identification: first and last name, date of birth, gender.</li>
            <li>Contact details: email, optional phone number.</li>
            <li>Profile information: photos, bio, interests, preferences.</li>
            <li>Approximate location (city/region), with your consent.</li>
            <li>Technical data: device type, OS, IP address, identifiers.</li>
            <li>Usage data: interactions, messages, matching preferences.</li>
          </ul>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">3. Purposes</h2>
          <ul className="list-disc pl-6 space-y-2 text-[16px] leading-[1.7] mb-4">
            <li>Create and manage your account and profile.</li>
            <li>Suggest relevant matches.</li>
            <li>Enable communication and ensure safety.</li>
            <li>Improve our services, run analytics and prevent fraud.</li>
            <li>Notify you of launch and updates (with consent).</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">4. Consent</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Under Law 25, consent must be <em>manifest, free, informed and given for
            specific purposes</em>. You may withdraw consent at any time, subject to legal
            or contractual obligations.
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">5. Sharing With Third Parties</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            We do not sell your personal information. We may share data with service
            providers (hosting, analytics, payment, communications) bound by strict
            confidentiality and security obligations. Any transfer outside Quebec is
            subject to a <strong>Privacy Impact Assessment (PIA)</strong> as required by
            section 17 of Law 25.
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">6. Retention and Destruction</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Information is kept only as long as necessary for the purposes for which it
            was collected, then securely destroyed or anonymized.
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">7. Your Rights (Law 25)</h2>
          <ul className="list-disc pl-6 space-y-2 text-[16px] leading-[1.7] mb-4">
            <li>Access your personal information.</li>
            <li>Have it corrected if inaccurate or incomplete.</li>
            <li>Withdraw consent and request deletion of your account.</li>
            <li><strong>Portability</strong>: receive your data in a structured, commonly used format.</li>
            <li><strong>De-indexing</strong> in the cases provided by law.</li>
            <li>Be informed of automated decisions and request a review.</li>
          </ul>
          <p className="text-[16px] leading-[1.7] mb-4">
            To exercise these rights, contact{" "}
            <a className="underline" href="mailto:privacy@datstheone.com">privacy@datstheone.com</a>.
            We will respond within 30 days.
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">8. Security</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            We implement reasonable physical, administrative and technological safeguards
            (encryption, access controls, audits, logging).
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">9. Privacy Incidents</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            In the event of a confidentiality incident presenting a risk of serious harm,
            we will promptly notify the <strong>Commission d'accès à l'information du
            Québec (CAI)</strong> and affected individuals, and maintain an incident
            register as required by Law 25.
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">10. Cookies</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            We use essential cookies and, with your consent, analytics cookies. You may
            manage preferences in your browser settings.
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">11. Changes</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            We may update this Policy. The latest update date is shown at the top.
            Material changes will be communicated to you.
          </p>

          <h2 className="font-editorial text-[26px] mt-12 mb-3">12. Complaints</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            You may file a complaint with the Commission d'accès à l'information du Québec:
            {" "}<a className="underline" href="https://www.cai.gouv.qc.ca" target="_blank" rel="noreferrer">www.cai.gouv.qc.ca</a>.
          </p>
        </>
      )}

      <div className="mt-16">
        <Link to="/" className="font-mono-ui text-[12px] uppercase tracking-[0.18em] underline">
          {lang === "fr" ? "← Retour à l'accueil" : "← Back to home"}
        </Link>
      </div>
    </article>
  );
};

const Privacy = () => {
  return (
    <LangProvider>
      <main className="min-h-screen bg-dto-bg text-dto-text">
        <Nav />
        <PrivacyContent />
        <Footer />
        <DtoWaitlistModal />
      </main>
    </LangProvider>
  );
};

export default Privacy;
