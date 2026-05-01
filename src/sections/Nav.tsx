import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LangContext";
import { DtoLangSwitch } from "@/components/DtoLangSwitch";
import dtoLogo from "@/assets/dto-logo.svg";

export const Nav = () => {
  const { t, openWaitlist } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: scrolled ? "rgba(15,19,25,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        transition: "background 320ms ease, backdrop-filter 320ms ease",
        borderBottom: scrolled ? "1px solid rgba(232,228,222,0.06)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex items-center justify-between" style={{ maxWidth: 1240, padding: "20px 48px" }}>
        <a href="#top" className="flex items-baseline gap-3 group">
          <img src={dtoLogo} alt="DatsTheOne" className="h-6 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#concept" className="font-body text-[13px] tracking-wide text-soft hover:text-dto-text transition-colors">{t.nav.concept}</a>
          <a href="#mission" className="font-body text-[13px] tracking-wide text-soft hover:text-dto-text transition-colors">{t.nav.mission}</a>
          <a href="#features" className="font-body text-[13px] tracking-wide text-soft hover:text-dto-text transition-colors">{t.nav.features}</a>
          <span aria-hidden className="h-4 w-px bg-dto-soft/20" />
          <DtoLangSwitch />
          <button
            type="button"
            onClick={openWaitlist}
            className="rounded-full border border-dto-soft/40 px-5 py-2 text-[13px] tracking-wide text-dto-soft hover:bg-dto-soft hover:text-dto-bg transition-colors"
          >
            {t.nav.cta} →
          </button>
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label="Menu"
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="block h-px w-6 bg-dto-soft" />
          <span className="block h-px w-6 bg-dto-soft" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 dto-fade" style={{ background: "hsl(var(--dto-bg))", paddingTop: 80 }}>
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 h-10 w-10 grid place-items-center text-dto-soft text-xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <div className="container-dto flex flex-col gap-8 mt-10">
            <a href="#concept" onClick={() => setMenuOpen(false)} className="font-editorial text-[32px] text-dto-text">{t.nav.concept}</a>
            <a href="#mission" onClick={() => setMenuOpen(false)} className="font-editorial text-[32px] text-dto-text">{t.nav.mission}</a>
            <a href="#features" onClick={() => setMenuOpen(false)} className="font-editorial text-[32px] text-dto-text">{t.nav.features}</a>
            <div className="pt-4"><DtoLangSwitch /></div>
            <button
              type="button"
              onClick={() => { setMenuOpen(false); openWaitlist(); }}
              className="rounded-full border border-dto-soft/40 px-6 py-3 text-[14px] tracking-wide text-dto-soft self-start"
            >
              {t.nav.cta} →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
