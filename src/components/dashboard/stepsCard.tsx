import { ArrowRight, Footprints } from "lucide-react";
import Link from "next/link";

export default function StepsCard() {
  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-3 min-w-70 md:max-w-90 bg-card rounded-2xl">
      {/* w-60 h-60 */}
      <div className="flex items-center justify-center gap-1 w-full pt-3 pb-2 border-b-2 border-sidebar-border">
        <Footprints className="text-primary" />
        <h2>
          <span className="font-bold">Schritte</span> - Heute
        </h2>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="relative flex items-center justify-center h-full rounded-full px-5">
          <svg
            viewBox="0 0 200 107"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <title>Step Visualisation</title>

            <path
              d="M10 100 A90 90 0 0 1 190 100"
              className="fill-none stroke-muted stroke-14 [stroke-linecap:round]"
            />
            <path
              d="M10 100 A90 90 0 0 1 190 100"
              className="fill-none stroke-14 [stroke-linecap:round] stroke-primary [stroke-dasharray:283] [stroke-dashoffset:0] transition-all"
            />
          </svg>
          <div className="flex items-center justify-center flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-6.5 ">
            <Footprints className="w-9 h-9 text-primary" />
            <p className="text-4xl font-bold">7.900</p>
            <p className="text-md text-muted-foreground">Ziel: 10.000</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-2 w-full px-5 pb-5">
        <Link href={"/analytics"} className="w-full">
          <div className="group flex items-center justify-center gap-1 w-full py-2 bg-primary rounded-md text-primary-foreground cursor-pointer transition-all hover:opacity-90 active:opacity-80">
            <button className="cursor-pointer" type="button">
              Step Analytics
            </button>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
          </div>
        </Link>
        <Link href={"/settings"} className="w-full">
          <div className="group flex items-center justify-center gap-1 w-full py-2 bg-secondary rounded-md text-secondary-foreground cursor-pointer transition-all hover:opacity-90 active:opacity-80">
            <button className="cursor-pointer" type="button">
              Step Settings
            </button>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}
