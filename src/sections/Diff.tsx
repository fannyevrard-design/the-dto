import { useLang } from "@/i18n/LangContext";
import { DtoPhoto } from "@/components/DtoPhoto";
import { DtoReveal } from "@/components/DtoReveal";

export const Diff = () => {
  const { t } = useLang();

  return (
    <section className="section-pad">
      <div className="container-dto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[100px] items-center">
        {/* Left: photo collage */}
        <DtoReveal>
          <div className="grid grid-cols-2 gap-4">
            <DtoPhoto label="claire, 54" ratio="3/4" className="translate-y-6" />
            <DtoPhoto label="rachid, 58" ratio="3/4" />
            <DtoPhoto label="paul, 49" ratio="4/3" />
            <DtoPhoto label="anna, 47" ratio="4/3" className="-translate-y-4" />
          </div>
        </DtoReveal>

        {/* Right: text + numbered points */}
        <div>
          <DtoReveal>
            <div className="kicker mb-5">— {t.diff.eyebrow}</div>
            <h2 className="font-editorial text-dto-text" style={{ fontSize: "clamp(36px, 4.6vw, 60px)", lineHeight: 1.05, fontWeight: 300, letterSpacing: "-0.01em" }}>
              {t.diff.title}
            </h2>
            <p className="text-soft mt-6" style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 520 }}>{t.diff.text}</p>
          </DtoReveal>

          <ul className="mt-10 divide-y divide-dto-soft/10 border-y border-dto-soft/10">
            {t.diff.points.map(([a, b], i) => (
              <DtoReveal key={i} as="li" delay={i * 60}>
                <div className="flex items-baseline gap-5 py-4">
                  <span className="font-editorial italic text-sage text-[18px] w-8 shrink-0">0{i + 1}</span>
                  <p className="text-soft text-[17px]">
                    <span className="text-muted-soft">{a}</span>{" "}
                    <span className="text-dto-text">{b}</span>
                  </p>
                </div>
              </DtoReveal>
            ))}
          </ul>

          <DtoReveal delay={200}>
            <p className="mt-8 font-editorial italic text-sage text-[20px] leading-[1.5]" style={{ maxWidth: 560 }}>
              {t.diff.close}
            </p>
          </DtoReveal>
        </div>
      </div>
    </section>
  );
};

export default Diff;
