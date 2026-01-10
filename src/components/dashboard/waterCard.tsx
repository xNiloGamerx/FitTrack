import { ArrowRight, Droplet } from "lucide-react";
import Link from "next/link";

export default function WaterCard() {
  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-3 min-w-70 md:max-w-90 bg-card rounded-2xl">
      {/* w-60 h-60 */}
      <div className="flex items-center justify-center gap-1 w-full pt-3 pb-2 border-b-2 border-sidebar-border">
        <Droplet className="fill-[#00beff] text-[#00beff]" />
        <h2>
          <span className="font-bold">Wasser</span> - Heute
        </h2>
      </div>
      <p className="">1.5L / 2.5L</p>
      <div className="relative flex-1 flex items-center justify-center flex-col w-full justify-self-end pb-3">
        <div className="w-9 h-5 bg-[#5f8794] rounded-t-lg rounded-b-xs"></div>
        <div className="w-5 h-2 bg-[rgba(179,236,255,0.9)]"></div>
        <div className="bg-[rgba(179,236,255,0.9)] w-15 h-25 rounded-lg"></div>
        <div className="absolute bg-[#00bfff94] w-12 h-15 bottom-5.5 rounded-lg"></div>
        {/* Maximale Wasser Höhe: h-22 */}
      </div>
      <div className="flex flex-col items-center justify-start gap-2 w-full px-5 pb-5">
        <div className="flex items-center justify-center gap-2 w-full">
          <button
            className="w-full py-2 bg-secondary rounded-md cursor-pointer transition-all hover:opacity-90 active:opacity-80"
            type="button"
          >
            +250ml
          </button>
          <button
            className="w-full py-2 bg-secondary rounded-md cursor-pointer transition-all hover:opacity-90 active:opacity-80"
            type="button"
          >
            +500ml
          </button>
        </div>
        <Link href={"/tracking"} className="w-full">
          <div className="group flex items-center justify-center gap-1 w-full py-2 bg-primary rounded-md text-primary-foreground cursor-pointer transition-all hover:opacity-90 active:opacity-80">
            <button className="cursor-pointer" type="button">
              Water Tracking
            </button>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}
