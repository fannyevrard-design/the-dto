import { useLang } from "@/i18n/LangContext";
import { DtoPhoto } from "@/components/DtoPhoto";
import { DtoReveal } from "@/components/DtoReveal";
import heroMarc from "@/assets/hero-marc.png";
import heroHelene from "@/assets/hero-helene.png";
import heroSophie from "@/assets/hero-sophie.png";
import heroDaniel from "@/assets/hero-daniel.png";

export const Hero = () => {
  const { t, openWaitlist, lang } = useLang();

  return (
    <section id="top" className="relative" style={{ paddingTop: 60, paddingBottom: 0 }}>
      <div className="mx-auto" style={{ maxWidth: 1240, padding: "0 32px" }}>
        {/* Mosaic */}
        <div
          className="hidden md:grid"
          style={{
            gridTemplateColumns: "0.9fr 1.4fr 0.9fr",
            gridTemplateRows: "auto auto auto",
            gap: 16,
          }}
        >
          {/* (1,1) Marc */}
          <DtoReveal delay={0} className="self-end">
            <DtoPhoto label="marc, 56" ratio="3/4" src={heroMarc} alt="Marc, 56" objectPosition="center 30%" />
          </DtoReveal>

          {/* center block spans 3 rows */}
          <DtoReveal delay={120} className="row-span-3 flex flex-col items-center justify-center text-center px-2">
            <span
              className="inline-block mb-6"
              style={{
                background: "hsl(var(--dto-sage))",
                color: "hsl(var(--dto-bg))",
                padding: "10px 18px",
                borderRadius: 4,
                fontFamily: "Manrope",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {t.hero.badge}
            </span>

            <h1
              className="font-editorial text-dto-text"
              style={{
                fontSize: "clamp(44px, 6vw, 86px)",
                lineHeight: 1.02,
                letterSpacing: "-0.015em",
                fontWeight: 300,
              }}
            >
              {t.hero.titleA}
              <br />
              <span className="italic text-sage" style={{ fontWeight: 400 }}>{t.hero.titleB}</span>
            </h1>

            <p className="text-soft mt-6 max-w-[520px]" style={{ fontSize: 17, lineHeight: 1.7 }}>
              {t.hero.subtitle}
            </p>

            <button
              type="button"
              onClick={openWaitlist}
              className="mt-8 rounded-full px-7 py-[14px] text-[14px] font-semibold tracking-wide transition-transform duration-200 hover:-translate-y-[2px]"
              style={{ background: "hsl(var(--dto-text-soft))", color: "hsl(var(--dto-bg))" }}
            >
              {t.hero.cta} →
            </button>
            <p className="text-muted-soft text-[12px] mt-4 max-w-[360px]">{t.hero.micro}</p>
          </DtoReveal>

          {/* (1,3) Hélène */}
          <DtoReveal delay={240} className="self-start">
            <DtoPhoto label={lang === "fr" ? "hélène, 51" : "helene, 51"} ratio="3/4" src={heroHelene} alt="Hélène, 51" objectPosition="center 25%" />
          </DtoReveal>

          {/* (3,1) Sophie */}
          <DtoReveal delay={360} className="self-start">
            <DtoPhoto label="" ratio="4/3" src={heroSophie} alt="Sophie, 48" objectPosition="center 30%" />
          </DtoReveal>

          {/* (3,3) Daniel */}
          <DtoReveal delay={480} className="self-end">
            <DtoPhoto label="daniel, 62" ratio="4/3" src={heroDaniel} alt="Daniel, 62" objectPosition="center 30%" />
          </DtoReveal>
        </div>

        {/* Mobile / tablet stacked */}
        <div className="md:hidden flex flex-col items-center text-center">
          <DtoReveal>
            <span
              className="inline-block mb-6"
              style={{
                background: "hsl(var(--dto-sage))",
                color: "hsl(var(--dto-bg))",
                padding: "10px 18px",
                borderRadius: 4,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {t.hero.badge}
            </span>
            <h1 className="font-editorial text-dto-text" style={{ fontSize: "clamp(40px, 9vw, 60px)", lineHeight: 1.05, fontWeight: 300 }}>
              {t.hero.titleA}
              <br />
              <span className="italic text-sage">{t.hero.titleB}</span>
            </h1>
            <p className="text-soft mt-5 text-[16px] leading-[1.7]">{t.hero.subtitle}</p>
            <button
              type="button"
              onClick={openWaitlist}
              className="mt-7 w-full rounded-full px-6 py-3 text-[14px] font-semibold tracking-wide"
              style={{ background: "hsl(var(--dto-text-soft))", color: "hsl(var(--dto-bg))" }}
            >
              {t.hero.cta} →
            </button>
            <p className="text-muted-soft text-[12px] mt-3">{t.hero.micro}</p>
          </DtoReveal>

          <div className="grid grid-cols-2 gap-3 mt-10 w-full">
            <DtoPhoto label="marc, 56" ratio="3/4" src={heroMarc} alt="Marc, 56" objectPosition="center 30%" />
            <DtoPhoto label={lang === "fr" ? "hélène, 51" : "helene, 51"} ratio="3/4" src={heroHelene} alt="Hélène, 51" objectPosition="center 25%" />
            <DtoPhoto label="sophie, 48" ratio="4/3" src={heroSophie} alt="Sophie, 48" objectPosition="center 30%" />
            <DtoPhoto label="daniel, 62" ratio="4/3" src={heroDaniel} alt="Daniel, 62" objectPosition="center 30%" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
