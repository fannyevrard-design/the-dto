import { type CSSProperties } from "react";

type Ratio = "3/4" | "4/3" | "4/5" | "1/1" | "16/9";

type Props = {
  label: string;
  ratio?: Ratio;
  className?: string;
  style?: CSSProperties;
};

const ratioMap: Record<Ratio, string> = {
  "3/4": "aspect-[3/4]",
  "4/3": "aspect-[4/3]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
};

export const DtoPhoto = ({ label, ratio = "3/4", className = "", style }: Props) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[4px] photo-stripes ${ratioMap[ratio]} ${className}`}
      style={style}
      aria-label={`Placeholder photo: ${label}`}
    >
      <span className="absolute bottom-3 left-3 font-mono-ui text-[11px] tracking-wide" style={{ color: "rgba(232,228,222,0.6)" }}>
        ◇ {label}
      </span>
    </div>
  );
};

export default DtoPhoto;
