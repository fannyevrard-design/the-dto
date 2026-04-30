import { useLang } from "@/i18n/LangContext";

export const DtoLangSwitch = ({ tone = "light" }: { tone?: "light" | "dark" }) => {
  const { lang, setLang } = useLang();
  const activeColor = tone === "dark" ? "text-dto-bg" : "text-dto-soft";
  const inactive = tone === "dark" ? "text-dto-bg/45" : "text-dto-soft/45";
  const divider = tone === "dark" ? "text-dto-bg/35" : "text-dto-soft/35";

  const base = "font-body text-[12px] tracking-[0.18em] uppercase transition-colors duration-200";

  return (
    <div className="inline-flex items-center gap-2 select-none">
      <button
        type="button"
        onClick={() => setLang("fr")}
        className={`${base} ${lang === "fr" ? `${activeColor} font-semibold` : `${inactive} font-normal hover:opacity-80`}`}
        aria-pressed={lang === "fr"}
      >
        FR
      </button>
      <span className={`${base} ${divider}`}>/</span>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`${base} ${lang === "en" ? `${activeColor} font-semibold` : `${inactive} font-normal hover:opacity-80`}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
};

export default DtoLangSwitch;
