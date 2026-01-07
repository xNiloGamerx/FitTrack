import { ChartLine, Flame, HomeIcon, LucideIcon, Timer } from "lucide-react";

type NavigationSites = {
  icon: LucideIcon;
  name: string;
  tooltip: string;
  href: string;
};

export const navigationSites: NavigationSites[] = [
  {
    icon: HomeIcon,
    name: "Home",
    tooltip: "Go to homepage",
    href: "/",
  },
  {
    icon: Timer,
    name: "Tracking",
    tooltip: "Track deine Werte",
    href: "/tracking",
  },
  {
    icon: Flame,
    name: "Ernährung",
    tooltip: "Schau dir deine aktuelle Ernährung an",
    href: "/nutrition",
  },
  {
    icon: ChartLine,
    name: "Analyse",
    tooltip: "Schau dir Analysen an",
    href: "/analytics",
  },
];
