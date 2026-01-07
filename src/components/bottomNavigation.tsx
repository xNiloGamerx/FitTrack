import BottomNavigationLinkElement from "./ui/bottomNavigation/bottom-navigation-link-element";
import { navigationSites } from "@/lib/navigationSites";
import { User } from "lucide-react";

export default function BottomNavigation() {
  return (
    <div className="flex items-start w-full h-23 pt-2 bg-sidebar">
      <div className="flex items-center justify-around w-full px-5">
        {navigationSites.map((site) => (
          <BottomNavigationLinkElement
            key={site.name}
            Icon={site.icon}
            label={site.name}
            tooltip={site.tooltip}
            href={site.href}
          />
        ))}

        <BottomNavigationLinkElement
          key={"user"}
          Icon={User}
          label={"Profile"}
          tooltip={"Your Profile"}
          href={"/profile"}
        />
      </div>
    </div>
  );
}
