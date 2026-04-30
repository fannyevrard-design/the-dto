import { useLang } from "@/i18n/LangContext";

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer style={{ background: "hsl(var(--dto-bg))", borderTop: "1px solid rgba(232,228,222,0.08)", padding: "80px 56px 40px" }}>
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <div className="font-editorial text-dto-text" style={{ fontSize: 26 }}>DatsTheOne</div>
            <p className="font-editorial italic text-sage mt-4 text-[16px] leading-[1.5]" style={{ maxWidth: 320 }}>
              "{t.footer.slogan}"
            </p>
          </div>
          <div>
            <div className="kicker mb-4">{t.footer.contact}</div>
            <a href="mailto:info@datstheone.com" className="block text-soft text-[14px] hover:text-dto-text transition-colors">info@datstheone.com</a>
            <p className="text-muted-soft text-[14px] mt-2">{t.footer.city}</p>
          </div>
          <div>
            <div className="kicker mb-4">{t.footer.follow}</div>
            <a href="#" className="block text-soft text-[14px] hover:text-dto-text transition-colors">Instagram</a>
            <a href="#" className="block text-soft text-[14px] hover:text-dto-text transition-colors mt-2">Facebook</a>
          </div>
          <div>
            <div className="kicker mb-4">{t.footer.legal}</div>
            <a href="#" className="block text-soft text-[14px] hover:text-dto-text transition-colors">{t.footer.privacy}</a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-dto-soft/10 flex flex-col md:flex-row justify-between gap-3">
          <p className="text-muted-soft text-[12px]">{t.footer.rights}</p>
          <p className="font-editorial italic text-sage text-[13px]">{t.footer.sub}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
