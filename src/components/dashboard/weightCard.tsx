import { ArrowRight, WeightTilde } from "lucide-react";
import Link from "next/link";

export default function WeightCard() {
  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-3 md:max-w-90 bg-card rounded-2xl">
      {/* w-60 h-60 */}
      <div className="flex items-center justify-center gap-1 w-full pt-3 pb-2 border-b-2 border-sidebar-border">
        <WeightTilde className="text-primary" />
        <h2>
          <span className="font-bold">Gewicht</span> - Heute
        </h2>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <p className="text-7xl font-bold">85kg</p>
      </div>
      <div className="flex flex-col items-center justify-start gap-2 w-full px-5 pb-5">
        <Link href={"/tracking"} className="w-full">
          <div className="group flex items-center justify-center gap-1 w-full py-2 bg-primary rounded-md text-primary-foreground cursor-pointer transition-all hover:opacity-90 active:opacity-80">
            <button className="cursor-pointer" type="button">
              Enter Weight
            </button>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
          </div>
        </Link>
        <Link href={"/tracking"} className="w-full">
          <div className="group flex items-center justify-center gap-1 w-full py-2 bg-secondary rounded-md text-secondary-foreground cursor-pointer transition-all hover:opacity-90 active:opacity-80">
            <button className="cursor-pointer" type="button">
              Weight Tracking
            </button>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}
