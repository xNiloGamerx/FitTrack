import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type BottomNavigationLinkElementProps = {
  Icon: LucideIcon;
  label: string;
  tooltip: string;
  href: string;
};

export default function BottomNavigationLinkElement({
  Icon,
  label,
  tooltip,
  href,
}: BottomNavigationLinkElementProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link href={href} title={tooltip} className="w-full">
      <div className="group flex flex-col gap-2 items-center justify-center cursor-pointer transition-all rounded-lg p-2">
        <div
          className={clsx(
            "flex items-center justify-center py-1 transition-all w-1/2 rounded-full",
            {
              "w-full bg-primary/35": active,
            },
          )}
        >
          <Icon
            className={clsx(
              "w-6 h-6 transition-all text-foreground group-hover:text-primary group-hover:scale-105 group-active:scale-110",
              {
                "text-primary": active,
              },
            )}
          />
        </div>
        <p
          className={clsx("transition-all text-xs", {
            "text-primary": active,
          })}
        >
          {label}
        </p>
      </div>
    </Link>
  );
}
