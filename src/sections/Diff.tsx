import { useLang } from "@/i18n/LangContext";
import { DtoPhoto } from "@/components/DtoPhoto";
import { DtoReveal } from "@/components/DtoReveal";
import { Hand, MessagesSquare, UserSearch, Sparkles, Hourglass, HelpCircle } from "lucide-react";
import diffClaire from "@/assets/diff-claire.png";
import diffRachid from "@/assets/diff-rachid.png";
import diffPaul from "@/assets/diff-paul.png";
import diffAnna from "@/assets/diff-anna.png";

const POINT_ICONS = [Hand, MessagesSquare, UserSearch, Sparkles, Hourglass, HelpCircle];

export const Diff = () => {
  const { t } = useLang();

  return (
    <section className="section-pad">
      <div className="container-dto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[100px] items-center">
        {/* Left: photo collage */}
        <DtoReveal>
          <div className="grid grid-cols-2 gap-4">
            <DtoPhoto label="claire, 54" ratio="3/4" className="translate-y-6" src={diffClaire} alt="Claire, 54" objectPosition="center 25%" />
            <DtoPhoto label="rachid, 58" ratio="3/4" src={diffRachid} alt="Rachid, 58" objectPosition="center 30%" />
            <DtoPhoto label="paul, 49" ratio="4/3" src={diffPaul} alt="Paul, 49" objectPosition="center 30%" />
            <DtoPhoto label="anna, 47" ratio="4/3" className="-translate-y-4" src={diffAnna} alt="Anna, 47" objectPosition="center 25%" />
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
            {t.diff.points.map(([a, b], i) => {
              const Icon = POINT_ICONS[i] ?? HelpCircle;
              return (
                <DtoReveal key={i} as="li" delay={i * 60}>
                  <div className="flex items-center gap-5 py-4">
                    <span
                      className="grid place-items-center w-9 h-9 shrink-0 rounded-full"
                      style={{ border: "1px solid hsl(var(--dto-sage) / 0.4)", color: "hsl(var(--dto-sage))" }}
                      aria-hidden
                    >
                      <Icon size={16} strokeWidth={1.5} />
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
