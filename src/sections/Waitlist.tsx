import { useLang } from "@/i18n/LangContext";
import { DtoInlineWaitlist } from "@/components/DtoInlineWaitlist";
import { DtoReveal } from "@/components/DtoReveal";

export const Waitlist = () => {
  const { t } = useLang();
  return (
    <section style={{ background: "hsl(var(--dto-sage))", color: "hsl(var(--dto-bg))", padding: "120px 24px" }}>
      <div className="mx-auto text-center" style={{ maxWidth: 880 }}>
        <DtoReveal>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "hsl(var(--dto-bg) / 0.7)",
              fontWeight: 500,
              marginBottom: 18,
            }}
          >
            — {t.waitlist.eyebrow}
          </div>
          <h2
            className="font-editorial"
            style={{
              fontSize: "clamp(44px, 5.5vw, 76px)",
              lineHeight: 1.05,
              fontWeight: 300,
              letterSpacing: "-0.015em",
              color: "hsl(var(--dto-bg))",
            }}
          >
            {t.waitlist.title}
          </h2>
          <p className="mx-auto mt-5" style={{ fontSize: 17, lineHeight: 1.7, color: "hsl(var(--dto-bg) / 0.78)", maxWidth: 620 }}>
            {t.waitlist.text}
          </p>
        </DtoReveal>
        <DtoReveal delay={150}>
          <DtoInlineWaitlist />
        </DtoReveal>
      </div>
    </section>
  );
};

export default Waitlist;
