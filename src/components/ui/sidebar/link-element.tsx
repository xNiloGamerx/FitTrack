"use client";

import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkElementProps = {
  Icon: LucideIcon;
  label: string;
  href: string;
};

export default function LinkElement({ Icon, label, href }: LinkElementProps) {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <div
        className={clsx(
          "group flex items-center cursor-pointer transition-all gap-3 rounded-lg p-2",
          {
            "bg-primary/35": pathname === href,
          },
        )}
      >
        {/*  */}
        <div
          className={clsx(
            "transition-all group-hover:bg-primary p-2 rounded-lg",
            {
              "bg-primary": pathname === href,
              "bg-primary/35": !(pathname === href),
            },
          )}
        >
          <Icon
            className={clsx(
              "w-5.5 h-5.5 transition-all text-primary group-hover:text-primary-foreground",
              {
                "text-primary-foreground": pathname === href,
              },
            )}
          />
        </div>
        <p>{label}</p>
      </div>
    </Link>
  );
}
