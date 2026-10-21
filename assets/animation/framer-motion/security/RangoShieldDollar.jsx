/* Rango Icons - Framer Motion animated icon
 * Design: shield-dollar  |  Category: security  |  Default anim: shine
 *
 * Usage:
 *   import RangoShieldDollar from "./security/RangoShieldDollar.jsx";
 *   <RangoShieldDollar size={96} theme="gold" anim="shine" />
 *
 * Props:
 *   size  - rendered pixel size (default 96)
 *   theme - "gold" | "orange" | "purple"
 *   anim  - "pulse" | "bounce" | "float" | "wiggle" | "pop" | "tilt" | "fade" | "spin" | "shine"
 *   ...any other svg props (className, onClick, style) pass through
 *
 * Requires: framer-motion (npm i framer-motion) and React 18+ (useId).
 */
import { useId } from "react";
import { motion } from "framer-motion";

const THEMES = {"gold": {"bg1": "#26262e", "bg2": "#0a0a0e", "ac1": "#ffedad", "ac2": "#f2c94c", "ac3": "#c9962e", "halo": "#e8b84b", "ring1": "#f6dc8a", "ring2": "#7a5c1c"}, "orange": {"bg1": "#2a1d14", "bg2": "#0d0906", "ac1": "#ffd9a8", "ac2": "#ff9838", "ac3": "#e8660d", "halo": "#ff8c2e", "ring1": "#ffb067", "ring2": "#8a4210"}, "purple": {"bg1": "#241a33", "bg2": "#0c0814", "ac1": "#e6d3ff", "ac2": "#a97bff", "ac3": "#7a3ff2", "halo": "#9b6cff", "ring1": "#cba8ff", "ring2": "#4e2c92"}};

const ANIMS = {
  pulse:  { animate: { scale: [1, 1.06, 1] },       transition: { duration: 1.6, ease: "easeInOut", repeat: Infinity } },
  bounce: { animate: { y: [0, -22, 0] },            transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity } },
  float:  { animate: { y: [0, -14, 0] },            transition: { duration: 3.2, ease: "easeInOut", repeat: Infinity } },
  wiggle: { animate: { rotate: [0, -6, 6, -3, 0] }, transition: { duration: 1.8, ease: "easeInOut", repeat: Infinity } },
  pop:    { animate: { scale: [0.94, 1.05, 0.94] }, transition: { duration: 1.8, ease: "easeInOut", repeat: Infinity } },
  tilt:   { animate: { rotate: [0, 4, 0, -4, 0] },  transition: { duration: 2.6, ease: "easeInOut", repeat: Infinity } },
  fade:   { animate: { opacity: [1, 0.55, 1] },     transition: { duration: 2.4, ease: "easeInOut", repeat: Infinity } },
  spin:   { animate: { rotate: 360 },               transition: { duration: 3.2, ease: "linear", repeat: Infinity } },
  shine:  { animate: {},                            transition: { duration: 3.4, ease: "easeInOut", repeat: Infinity, times: [0, 0.46] } },
};

const GHOST = "<path d=\"M 256 144 L 351.2 180.4 V 242 C 351.2 303.6 312 345.6 256 368 C 200 345.6 160.8 303.6 160.8 242 V 180.4 Z\" fill=\"none\"/><path d=\"M 256 200 V 300.8 M 275.6 216.8 C 275.6 205.6 267.2 200 256 200 C 242 200 233.6 208.4 233.6 219.6 C 233.6 244.8 278.4 236.4 278.4 261.6 C 278.4 272.8 270 281.2 256 281.2 C 242 281.2 233.6 272.8 233.6 261.6\" fill=\"none\"/>";
const MAIN = "<path d=\"M 256 144 L 351.2 180.4 V 242 C 351.2 303.6 312 345.6 256 368 C 200 345.6 160.8 303.6 160.8 242 V 180.4 Z\" fill=\"none\"/><path d=\"M 256 200 V 300.8 M 275.6 216.8 C 275.6 205.6 267.2 200 256 200 C 242 200 233.6 208.4 233.6 219.6 C 233.6 244.8 278.4 236.4 278.4 261.6 C 278.4 272.8 270 281.2 256 281.2 C 242 281.2 233.6 272.8 233.6 261.6\" fill=\"none\"/>";
const GHOST_W = 51.8;
const MAIN_W = 28;
const DEFAULT_ANIM = "shine";

export default function RangoShieldDollar({ size = 96, theme = "gold", anim, ...rest }) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const t = THEMES[theme] || THEMES.gold;
  const mode = anim || DEFAULT_ANIM;
  const a = ANIMS[mode] || ANIMS.pulse;
  const ac = "url(#" + uid + "-ac)";
  const ghost = GHOST.replace(/ACID/g, uid + "-ac");
  const main = MAIN.replace(/ACID/g, uid + "-ac");
  const spin = mode === "spin";
  const shine = mode === "shine";

  const core = (
    <g>
      <rect x="16" y="16" width="480" height="480" rx="112" fill={"url(#" + uid + "-bg)"} />
      <motion.circle cx="256" cy="252" r="205" fill={"url(#" + uid + "-gl)"}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.6, ease: "easeInOut", repeat: Infinity }} />
      <rect x="16" y="16" width="480" height="480" rx="112" fill={"url(#" + uid + "-sh)"} />
      <rect x="17.5" y="17.5" width="477" height="477" rx="110.5" fill="none"
        stroke={"url(#" + uid + "-rg)"} strokeWidth="3.5" />
    </g>
  );

  const layers = (extra) => (
    <g fill="none" stroke={ac} strokeLinecap="round" strokeLinejoin="round">
      <g opacity="0.26" strokeWidth={GHOST_W} dangerouslySetInnerHTML={{ __html: ghost }} />
      <g strokeWidth={MAIN_W} dangerouslySetInnerHTML={{ __html: main }} />
      {extra}
    </g>
  );

  return (
    <motion.svg width={size} height={size} viewBox="0 0 512 512" fill="none"
      xmlns="http://www.w3.org/2000/svg" {...rest}>
      <defs>
        <linearGradient id={uid + "-bg"} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={t.bg1} />
          <stop offset="1" stopColor={t.bg2} />
        </linearGradient>
        <linearGradient id={uid + "-ac"} gradientUnits="userSpaceOnUse" x1="116" y1="116" x2="396" y2="396">
          <stop offset="0" stopColor={t.ac1} />
          <stop offset="0.45" stopColor={t.ac2} />
          <stop offset="1" stopColor={t.ac3} />
        </linearGradient>
        <linearGradient id={uid + "-rg"} gradientUnits="userSpaceOnUse" x1="40" y1="40" x2="472" y2="472">
          <stop offset="0" stopColor={t.ring1} stopOpacity="0.9" />
          <stop offset="0.5" stopColor={t.ring2} stopOpacity="0.28" />
          <stop offset="1" stopColor={t.ring2} stopOpacity="0.6" />
        </linearGradient>
        <radialGradient id={uid + "-gl"} gradientUnits="userSpaceOnUse" cx="256" cy="250" r="205">
          <stop offset="0" stopColor={t.halo} stopOpacity="0.24" />
          <stop offset="1" stopColor={t.halo} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={uid + "-sh"} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.09" />
          <stop offset="0.42" stopColor="#fff" stopOpacity="0.02" />
          <stop offset="0.52" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        {shine && (
          <linearGradient id={uid + "-shn"} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#fff" stopOpacity="0.15" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        )}
        {shine && (
          <clipPath id={uid + "-cp"}>
            <rect x="16" y="16" width="480" height="480" rx="112" />
          </clipPath>
        )}
      </defs>
      {spin ? (
        <g>
          {core}
          <motion.g style={{ originX: 0.5, originY: 0.5 }} animate={a.animate} transition={a.transition}>
            {layers(null)}
          </motion.g>
        </g>
      ) : (
        <motion.g style={{ originX: 0.5, originY: 0.5 }} animate={a.animate} transition={a.transition}>
          {core}
          {layers(shine ? (
            <g clipPath={"url(#" + uid + "-cp)"}>
              <motion.rect x="-130" y="-160" width="260" height="880" fill={"url(#" + uid + "-shn)"}
                style={{ originX: 0.5, originY: 0.5 }}
                animate={{ x: [-620, 1140], rotate: 16 }} transition={a.transition} />
            </g>
          ) : null)}
        </motion.g>
      )}
    </motion.svg>
  );
}
