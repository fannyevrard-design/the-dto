import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LangContext";
import dtoLogo from "@/assets/dto-logo.svg";
import appStoreBadge from "@/assets/app-store-badge.png";
import googlePlayBadge from "@/assets/google-play-badge.png";

export const Footer = () => {
  const { t, lang } = useLang();
  const ink = "hsl(var(--dto-bg))";
  const privacyHref = lang === "fr" ? "/politique-de-confidentialite" : "/privacy";
  return (
    <footer
      id="contact"
      style={{
        background: "hsl(var(--dto-sage))",
        color: ink,
        borderTop: "1px solid rgba(15,19,25,0.12)",
        padding: "80px 56px 40px",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <img src={dtoLogo} alt="DatsTheOne" className="h-7 w-auto" style={{ filter: "brightness(0)" }} />
            <p className="font-editorial italic mt-4 text-[16px] leading-[1.5]" style={{ maxWidth: 320, color: ink }}>
              "{t.footer.slogan}"
            </p>
          </div>
          <div>
            <div className="mb-4 font-mono-ui text-[11px] uppercase tracking-[0.18em]" style={{ color: ink }}>{t.footer.contact}</div>
            <a href="mailto:info@datstheone.com" className="block text-[14px] transition-opacity hover:opacity-70" style={{ color: ink }}>info@datstheone.com</a>
            <p className="text-[14px] mt-2" style={{ color: ink, opacity: 0.75 }}>{t.footer.city}</p>
          </div>
          <div>
            <div className="mb-4 font-mono-ui text-[11px] uppercase tracking-[0.18em]" style={{ color: ink }}>{t.footer.follow}</div>
            <a href="https://www.instagram.com/_datstheone/" target="_blank" rel="noopener noreferrer" className="block text-[14px] transition-opacity hover:opacity-70" style={{ color: ink }}>Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61557210707571" target="_blank" rel="noopener noreferrer" className="block text-[14px] mt-2 transition-opacity hover:opacity-70" style={{ color: ink }}>Facebook</a>
          </div>
          <div>
            <div className="mb-4 font-mono-ui text-[11px] uppercase tracking-[0.18em]" style={{ color: ink }}>{t.footer.legal}</div>
            <Link to={privacyHref} className="block text-[14px] transition-opacity hover:opacity-70" style={{ color: ink }}>{t.footer.privacy}</Link>
            <div className="mt-5 flex flex-col gap-2">
              <a href="#" aria-label="Download on the App Store" className="transition-opacity hover:opacity-80">
                <img src={appStoreBadge} alt="Télécharger dans l'App Store" className="h-10 w-auto" />
              </a>
              <a href="#" aria-label="Get it on Google Play" className="transition-opacity hover:opacity-80">
                <img src={googlePlayBadge} alt="Disponible sur Google Play" className="h-10 w-auto" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 flex flex-col md:flex-row justify-between gap-3" style={{ borderTop: "1px solid rgba(15,19,25,0.15)" }}>
          <p className="text-[12px]" style={{ color: ink, opacity: 0.75 }}>{t.footer.rights}</p>
          <p className="font-editorial italic text-[13px]" style={{ color: ink }}>{t.footer.sub}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
