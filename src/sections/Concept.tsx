import { useState } from "react";
import { useLang } from "@/i18n/LangContext";
import { DtoReveal } from "@/components/DtoReveal";

type Choice = "yes" | "no" | "maybe";

export const Concept = () => {
  const { t } = useLang();
  const [choice, setChoice] = useState<Choice>("maybe");

  const current = t.concept[choice];
  const isMaybe = choice === "maybe";

  const pillBase = "font-editorial text-[18px] px-5 py-2 rounded-full transition-all duration-300";

  return (
    <section id="concept" className="section-pad" style={{ background: "hsl(var(--dto-bg-elev))" }}>
      <div className="container-dto text-center">
        <DtoReveal>
          <div className="kicker mb-5">— {t.concept.eyebrow} —</div>
          <h2
            className="font-editorial text-dto-text mx-auto"
            style={{ fontSize: "clamp(36px, 4.6vw, 60px)", lineHeight: 1.05, fontWeight: 300, maxWidth: 820, letterSpacing: "-0.01em" }}
          >
            {t.concept.title}
          </h2>
          <p className="text-soft mt-6 mx-auto" style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 720 }}>
            {t.concept.text}
          </p>
        </DtoReveal>

        {/* Toggle */}
        <DtoReveal delay={150}>
          <div className="mt-12 inline-flex items-center gap-1" style={{ background: "rgba(15,19,25,0.5)", border: "1px solid rgba(232,228,222,0.15)", padding: 6, borderRadius: 999 }}>
            <button
              type="button"
              onClick={() => setChoice("yes")}
              className={`${pillBase} ${choice === "yes" ? "" : "text-soft hover:text-dto-text"}`}
              style={choice === "yes" ? { background: "hsl(var(--dto-text-soft))", color: "hsl(var(--dto-bg))" } : undefined}
            >
              Oui.
            </button>
            <button
              type="button"
              onClick={() => setChoice("no")}
              className={`${pillBase} ${choice === "no" ? "" : "text-soft hover:text-dto-text"}`}
              style={choice === "no" ? { background: "hsl(var(--dto-text-soft))", color: "hsl(var(--dto-bg))" } : undefined}
            >
              Non.
            </button>
            <button
              type="button"
              onClick={() => setChoice("maybe")}
              className={`${pillBase} italic ${choice === "maybe" ? "" : "text-sage hover:opacity-90"}`}
              style={choice === "maybe" ? { background: "hsl(var(--dto-sage))", color: "hsl(var(--dto-bg))" } : undefined}
            >
              Peut-être.
            </button>
          </div>
        </DtoReveal>

        {/* Big animated word */}
        <div className="mt-12 min-h-[180px] flex flex-col items-center justify-center">
          <h3
            key={choice}
            className={`font-editorial dto-rise ${isMaybe ? "italic text-sage" : "text-dto-text"}`}
            style={{
              fontSize: "clamp(96px, 16vw, 240px)",
              lineHeight: 0.95,
              fontWeight: 300,
              letterSpacing: "-0.02em",
            }}
          >
            {current.word}
          </h3>
          <p
            key={`${choice}-desc`}
            className="font-editorial italic text-soft dto-rise mt-6 mx-auto"
            style={{ fontSize: 26, lineHeight: 1.45, maxWidth: 560 }}
          >
            {current.desc}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Concept;
