import { useLang } from "@/i18n/LangContext";
import { DtoPhoto } from "@/components/DtoPhoto";
import { DtoReveal } from "@/components/DtoReveal";
import missionMargauxDavid from "@/assets/mission-margaux-david.png";

export const Mission = () => {
  const { t, openWaitlist } = useLang();
  return (
    <section id="mission" className="section-pad">
      <div className="container-dto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center gap-10 lg:gap-[100px]">
        <DtoReveal className="order-1 lg:hidden">
          <div className="kicker mb-5">{t.mission.eyebrow}</div>
          <h2 className="font-editorial text-dto-text" style={{ fontSize: "clamp(36px, 4.6vw, 60px)", lineHeight: 1.05, fontWeight: 300, letterSpacing: "-0.01em" }}>
            {t.mission.title}
          </h2>
        </DtoReveal>

        <DtoReveal delay={150} className="order-2 lg:order-2">
          <div className="relative">
            <DtoPhoto label="Margaux, 52 & David, 58" ratio="4/5" src={missionMargauxDavid} alt="Margaux et David" objectPosition="center 25%" />
            <span
              className="absolute right-3 top-3 lg:-right-6 lg:-top-6"
              style={{
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

        <div className="order-3 lg:order-1">
          <DtoReveal className="hidden lg:block">
            <div className="kicker mb-5">{t.mission.eyebrow}</div>
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
          <DtoReveal delay={360}>
            <div className="mt-8">
              <button
                type="button"
                onClick={openWaitlist}
                className="rounded-full px-7 py-[14px] text-[14px] font-semibold tracking-wide transition-transform duration-200 hover:-translate-y-[2px]"
                style={{ background: "hsl(var(--dto-text-soft))", color: "hsl(var(--dto-bg))" }}
              >
                {t.hero.cta} →
              </button>
              <div className="mt-4 flex items-center gap-2 text-[12px] text-dto-soft">
                <span aria-hidden style={{ color: "hsl(var(--dto-sage))", letterSpacing: "1px" }}>★★★★★</span>
                <span>Déjà + de 500 inscrits</span>
              </div>
              <p className="text-muted-soft text-[12px] mt-2 max-w-[360px]">{t.hero.micro}</p>
            </div>
          </DtoReveal>
        </div>
      </div>
    </section>
  );
};

export default Mission;