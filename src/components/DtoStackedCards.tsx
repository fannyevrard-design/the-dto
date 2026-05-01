import { useEffect, useRef, useState } from "react";

type Card = {
  src: string;
  alt: string;
  label: string;
  objectPosition?: string;
};

type Props = {
  cards: Card[];
  className?: string;
};

/**
 * Mobile-only stacked photo cards. The top card cycles to the back on an interval,
 * creating a "playing-card shuffle" effect. Pauses on hover/touch.
 */
export const DtoStackedCards = ({ cards, className = "" }: Props) => {
  const [order, setOrder] = useState<number[]>(() => cards.map((_, i) => i));
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(() => {
      setOrder((prev) => {
        const next = [...prev];
        const first = next.shift();
        if (first !== undefined) next.push(first);
        return next;
      });
    }, 1800);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused]);

  const advance = () => {
    setOrder((prev) => {
      const next = [...prev];
      const first = next.shift();
      if (first !== undefined) next.push(first);
      return next;
    });
  };

  return (
    <div
      className={`relative mx-auto w-full max-w-[320px] aspect-[3/4] ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onClick={advance}
      role="button"
      aria-label="Photos defilantes - cliquez pour faire defiler"
    >
      {order.map((cardIdx, position) => {
        const card = cards[cardIdx];
        const total = cards.length;
        // position 0 = top of stack
        const rotations = [-4, 3, -2, 5];
        const offsets = [0, 14, 28, 42];
        const scales = [1, 0.96, 0.92, 0.88];
        const isTop = position === 0;
        const z = total - position;
        return (
          <div
            key={cardIdx}
            className="absolute inset-0 rounded-[6px] overflow-hidden shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)]"
            style={{
              transform: `translateX(${offsets[position] ?? 42}px) translateY(${(offsets[position] ?? 42) * 0.4}px) rotate(${rotations[position] ?? 0}deg) scale(${scales[position] ?? 0.85})`,
              transformOrigin: "center",
              transition: "transform 600ms cubic-bezier(.2,.7,.2,1), opacity 600ms ease",
              zIndex: z,
              opacity: position >= 4 ? 0 : 1,
            }}
          >
            <img
              src={card.src}
              alt={card.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: card.objectPosition ?? "center" }}
            />
            {/* subtle vignette */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(15,19,25,0) 50%, rgba(15,19,25,0.45) 100%)",
              }}
            />
            {card.label && (
              <span
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-[12px] font-medium"
                style={{
                  background: "hsl(var(--dto-sage))",
                  color: "hsl(var(--dto-bg))",
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  letterSpacing: "0.02em",
                }}
              >
                {card.label}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DtoStackedCards;
