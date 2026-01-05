"use client";

import clsx from "clsx";
import { User } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type UserLinkElementProps = {
  src?: string | StaticImageData | null;
  alt?: string | null;
  username: string;
  sportsDirection: string;
};

export default function UserLinkElement({
  src,
  alt,
  username,
  sportsDirection,
}: UserLinkElementProps) {
  const pathname = usePathname();
  const href = "/profile";

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
        {src && alt ? (
          <Image
            src={src}
            alt={alt}
            width={35}
            height={35}
            className="rounded-lg w-9.5 h-9.5"
          />
        ) : (
          <div
            className={clsx(
              "transition-all group-hover:bg-primary p-2 rounded-lg",
              {
                "bg-primary": pathname === href,
                "bg-primary/35": !(pathname === href),
              },
            )}
          >
            <User
              className={clsx(
                "w-5.5 h-5.5 transition-all text-primary group-hover:text-primary-foreground",
                {
                  "text-primary-foreground": pathname === href,
                },
              )}
            />
          </div>
        )}

        <div className="flex flex-col justify-center">
          <p className="">{username}</p>
          <p className="text-xs text-muted-foreground">{sportsDirection}</p>
        </div>
      </div>
    </Link>
  );
}
