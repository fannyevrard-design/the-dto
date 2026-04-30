import { useLang } from "@/i18n/LangContext";
import { DtoPhoto } from "@/components/DtoPhoto";
import { DtoReveal } from "@/components/DtoReveal";

export const Mission = () => {
  const { t } = useLang();
  return (
    <section id="mission" className="section-pad">
      <div className="container-dto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center gap-16 lg:gap-[100px]">
        <div>
          <DtoReveal>
            <div className="kicker mb-5">— {t.mission.eyebrow}</div>
            <h2 className="font-editorial text-dto-text" style={{ fontSize: "clamp(36px, 4.6vw, 60px)", lineHeight: 1.05, fontWeight: 300, letterSpacing: "-0.01em" }}>
              {t.mission.title}
            </h2>
          </DtoReveal>
          <DtoReveal delay={120}>
            <p className="text-soft mt-7 text-[16px] leading-[1.7]">{t.mission.p1}</p>
          </DtoReveal>
          <DtoReveal delay={200}>
            <p className="text-soft mt-5 text-[16px] leading-[1.7]">{t.mission.p2}</p>
          </DtoReveal>
          <DtoReveal delay={280}>
            <p className="text-soft mt-5 text-[16px] leading-[1.7]">{t.mission.p3}</p>
          </DtoReveal>
        </div>

        <DtoReveal delay={150}>
          <div className="relative">
            <DtoPhoto label="margaux, 53" ratio="4/5" />
            <span
              className="absolute"
              style={{
                right: -24,
                top: -24,
                background: "hsl(var(--dto-sage))",
                color: "hsl(var(--dto-bg))",
                padding: "12px 18px",
                borderRadius: 4,
                fontFamily: "Manrope",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {t.mission.badge}
            </span>
          </div>
        </DtoReveal>
      </div>
    </section>
  );
};

export default Mission;
