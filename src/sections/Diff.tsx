import { useLang } from "@/i18n/LangContext";
import { DtoPhoto } from "@/components/DtoPhoto";
import { DtoReveal } from "@/components/DtoReveal";
import { DtoStackedCards } from "@/components/DtoStackedCards";
import diffClaire from "@/assets/diff-claire.png";
import diffRachid from "@/assets/diff-rachid.png";
import diffPaul from "@/assets/diff-paul.png";
import diffAnna from "@/assets/diff-anna.png";
import icon01 from "@/assets/icons/diff-01.svg";
import icon02 from "@/assets/icons/diff-02.svg";
import icon03 from "@/assets/icons/diff-03.svg";
import icon04 from "@/assets/icons/diff-04.svg";
import icon05 from "@/assets/icons/diff-05.svg";
import icon06 from "@/assets/icons/diff-06.svg";

const POINT_ICONS = [icon01, icon02, icon03, icon04, icon05, icon06];

export const Diff = () => {
  const { t, openWaitlist } = useLang();

  return (
    <section id="concept" className="section-pad">
      <div className="container-dto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[100px] items-center">
        {/* Left: photo collage (moves below text on mobile) */}
        <DtoReveal className="order-2 lg:order-1">
          {/* Mobile: stacked playing-card style */}
          <div className="lg:hidden">
            <DtoStackedCards
              cards={[
                { src: diffClaire, alt: "Claire, 54", label: "Sports de plein air", objectPosition: "center 25%" },
                { src: diffRachid, alt: "Rachid, 58", label: "Course à pied", objectPosition: "center 30%" },
                { src: diffPaul, alt: "Paul, 49", label: "J'ai un chien", objectPosition: "center 25%" },
                { src: diffAnna, alt: "Anna, 47", label: "Voyages", objectPosition: "center 20%" },
              ]}
            />
          </div>
          {/* Desktop: original 2x2 grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <DtoPhoto label="" ratio="3/4" className="translate-y-6" src={diffClaire} alt="Claire, 54" objectPosition="center 25%" />
            <DtoPhoto label="" ratio="3/4" src={diffRachid} alt="Rachid, 58" objectPosition="center 30%" />
            <DtoPhoto label="" ratio="4/5" src={diffPaul} alt="Paul, 49" objectPosition="center 25%" />
            <DtoPhoto label="" ratio="4/5" className="-translate-y-4" src={diffAnna} alt="Anna, 47" objectPosition="center 20%" />
          </div>
        </DtoReveal>

        {/* Right: text + numbered points */}
        <div className="order-1 lg:order-2">
          <DtoReveal>
            <div className="kicker mb-5">{t.diff.eyebrow}</div>
            <h2 className="font-editorial text-dto-text" style={{ fontSize: "clamp(36px, 4.6vw, 60px)", lineHeight: 1.05, fontWeight: 300, letterSpacing: "-0.01em" }}>
              {t.diff.title}
            </h2>
            <p className="text-soft mt-6" style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 520 }}>{t.diff.text}</p>
          </DtoReveal>

          <ul className="mt-6 divide-y divide-dto-soft/10">
            {t.diff.points.map(([a, b], i) => {
              const iconSrc = POINT_ICONS[i] ?? POINT_ICONS[0];
              return (
                <DtoReveal key={i} as="li" delay={i * 60}>
                  <div className="flex items-center gap-5 py-2.5">
                    <span className="grid place-items-center w-10 h-10 shrink-0" aria-hidden>
                      <span
                        className="block w-7 h-7"
                        style={{
                          backgroundColor: "hsl(var(--dto-sage))",
                          WebkitMaskImage: `url(${iconSrc})`,
                          maskImage: `url(${iconSrc})`,
                          WebkitMaskRepeat: "no-repeat",
                          maskRepeat: "no-repeat",
                          WebkitMaskPosition: "center",
                          maskPosition: "center",
                          WebkitMaskSize: "contain",
                          maskSize: "contain",
                        }}
                      />
                    </span>
                    <p className="text-soft text-[17px]">
                      <span className="text-muted-soft">{a}</span>{" "}
                      <span className="text-dto-text">{b}</span>
                    </p>
                  </div>
                </DtoReveal>
              );
            })}
          </ul>

          <DtoReveal delay={200}>
            <p className="mt-5 font-editorial italic text-sage text-[20px] leading-[1.5]" style={{ maxWidth: 560 }}>
              {t.diff.close}
            </p>
          </DtoReveal>
          <DtoReveal delay={280}>
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

export default Diff;
