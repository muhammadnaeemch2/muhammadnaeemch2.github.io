import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import type { SocialIcon as SocialIconType } from "@/data/portfolio";

const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
};

export function SocialIcon({ icon, className }: { icon: SocialIconType; className?: string }) {
  const Icon = icons[icon];
  return <Icon className={className} />;
}
