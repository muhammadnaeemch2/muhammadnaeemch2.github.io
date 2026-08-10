import type { ComponentType, SVGProps } from "react";
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiReact,
  SiSnowflake,
  SiTypescript,
} from "react-icons/si";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

// Official brand icon + brand color for each skill. Skills without an
// official logo (soft skills, niche tools not covered by the icon set) simply
// render without an icon.
export const skillIcons: Record<string, { icon: IconComponent; color: string }> = {
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  React: { icon: SiReact, color: "#61DAFB" },
  "React Native": { icon: SiReact, color: "#61DAFB" },

  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  Express: { icon: SiExpress, color: "currentColor" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },

  MongoDB: { icon: SiMongodb, color: "#47A248" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Snowflake: { icon: SiSnowflake, color: "#29B5E8" },

  Git: { icon: SiGit, color: "#F05033" },
};
