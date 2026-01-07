"use client";

import { useMediaQuery } from "react-responsive";
import BottomNavigation from "./bottomNavigation";
import { Sidebar } from "./sidebar";
import { useEffect, useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 768 });

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="w-full h-screen dark">
      <main className="relative flex flex-col-reverse md:flex-row w-full h-full">
        {isDesktop ? <Sidebar /> : <BottomNavigation />}
        {children}
      </main>
    </div>
  );
}
