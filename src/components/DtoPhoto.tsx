import { type CSSProperties } from "react";

type Ratio = "3/4" | "4/3" | "4/5" | "1/1" | "16/9";

type Props = {
  label: string;
  ratio?: Ratio;
  className?: string;
  style?: CSSProperties;
  src?: string;
  alt?: string;
  objectPosition?: string;
};

const ratioMap: Record<Ratio, string> = {
  "3/4": "aspect-[3/4]",
  "4/3": "aspect-[4/3]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
};

export const DtoPhoto = ({ label, ratio = "3/4", className = "", style, src, alt, objectPosition }: Props) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[4px] ${src ? "" : "photo-stripes"} ${ratioMap[ratio]} ${className}`}
      style={style}
      aria-label={src ? alt ?? label : `Placeholder photo: ${label}`}
    >
      {src && (
        <img
          src={src}
          alt={alt ?? label}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: objectPosition ?? "center" }}
        />
      )}
      {/* Vignette: subtle radial darkening on edges for premium lifestyle look */}
      {src && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(15,19,25,0) 45%, rgba(15,19,25,0.35) 85%, rgba(15,19,25,0.6) 100%)",
          }}
        />
      )}
      {/* Subtle dark gradient for legibility of the label, only when a real image is shown */}
      {src && (
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(15,19,25,0.7), rgba(15,19,25,0))" }}
        />
      )}
      {label && (
        <span
          className="absolute bottom-3 left-3 font-mono-ui text-[11px] tracking-wide"
          style={{ color: "rgba(232,228,222,0.78)" }}
        >
          ◇ {label}
        </span>
      )}
    </div>
  );
};

export default DtoPhoto;
