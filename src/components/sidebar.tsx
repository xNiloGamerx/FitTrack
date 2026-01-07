"use client";

import { HomeIcon, Flame, Dumbbell, Timer, User, Settings } from "lucide-react";
import LinkElement from "./ui/sidebar/link-element";
import LogoName from "./ui/logo-name";
import UserLinkElement from "./ui/sidebar/user-link-element";
import { navigationSites } from "@/lib/navigationSites";

export function Sidebar() {
	return (
		<nav className="flex flex-col justify-start items-start gap-10 w-70 h-full bg-sidebar p-4">
			{/* Logo */}
			<LogoName />

			{/* Navigation Buttons */}
			<div className="flex flex-col gap-2 flex-1 w-full">
				{navigationSites.map((site) => {
					return (
						<LinkElement
							key={site.name}
							Icon={site.icon}
							label={site.name}
							tooltip={site.tooltip}
							href={site.href}
						/>
					);
				})}
			</div>

			{/* User Navigation Buttons */}
			<div className="flex flex-col gap-2 justify-center w-full">
				{/* <div className="group flex items-center cursor-pointer transition-all gap-3 rounded-lg">
          <div className="transition-all bg-primary/35 group-hover:bg-primary p-2 rounded-lg">
            <User className="w-5.5 h-5.5 transition-all text-primary group-hover:text-primary-foreground" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="">Niklas Bronner</p>
            <p className="text-xs text-muted-foreground">Kraftsport</p>
          </div>
        </div> */}
				<UserLinkElement
					username="Niklas Bronner"
					sportsDirection="Kraftsport"
				></UserLinkElement>
				<LinkElement
					Icon={Settings}
					label="Settings"
					tooltip="Go to Settings"
					href="/settings"
				/>
			</div>
		</nav>
	);
}
