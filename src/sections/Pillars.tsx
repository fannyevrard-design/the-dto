import { useLang } from "@/i18n/LangContext";
import { DtoPhoto } from "@/components/DtoPhoto";
import { DtoReveal } from "@/components/DtoReveal";

const photoLabels = ["camille, 52", "thomas, 60", "sara, 46"];

export const Pillars = () => {
  const { t } = useLang();
  return (
    <section id="features" className="section-pad" style={{ background: "hsl(var(--dto-bg-elev))" }}>
      <div className="container-dto">
        <DtoReveal>
          <div className="kicker mb-5">{t.pillars.eyebrow}</div>
          <h2 className="font-editorial text-dto-text max-w-[820px]" style={{ fontSize: "clamp(36px, 4.6vw, 60px)", lineHeight: 1.05, fontWeight: 300, letterSpacing: "-0.01em" }}>
            {t.pillars.title}
          </h2>
        </DtoReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.pillars.items.map((it, i) => (
            <DtoReveal key={it.n} delay={i * 120}>
              <article
                className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-[3px]"
                style={{
                  border: "1px solid rgba(232,228,222,0.10)",
                  borderRadius: 4,
                  background: "rgba(232,228,222,0.025)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(170,176,159,0.4)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(232,228,222,0.10)")}
              >
                <div style={{ height: 140 }}>
                  <DtoPhoto label={photoLabels[i] ?? "—"} ratio="16/9" className="!h-full !aspect-auto" />
                </div>
                <div className="p-7">
                  <div className="font-editorial italic text-sage text-[15px]">{it.n} —</div>
                  <h3 className="font-editorial text-dto-text mt-2" style={{ fontSize: 26, lineHeight: 1.15, fontWeight: 400 }}>
                    {it.t}
                  </h3>
                  <p className="text-soft mt-3 text-[14.5px] leading-[1.7]">{it.d}</p>
                </div>
              </article>
            </DtoReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;