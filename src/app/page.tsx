import { Droplet } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl font-bold w-full p-4 border-b-2 border-sidebar-border">
        Dashboard
      </h1>
      <div className="p-4 w-full">
        <div className="flex flex-col items-center justify-center gap-2 bg-card w-50 h-50 rounded-2xl">
          <div className="flex items-center justify-center gap-1 w-full py-1 border-b-2 border-sidebar-border">
            <Droplet className="fill-[#00beff] text-[#00beff]" />
            <h2>
              <span className="font-bold">Wasser</span> - Heute
            </h2>
          </div>
          <p className="">1.5L / 2.5L</p>
        </div>
      </div>

      <svg width="140" height="260" viewBox="0 0 140 260">
        <defs>
          <clipPath id="glassClip">
            <path d="M40 20 H100 V200 Q70 240 40 200 Z" />
          </clipPath>
        </defs>

        <rect
          x="0"
          y={100}
          width="140"
          height={50}
          fill="#4fc3f7"
          clipPath="url(#glassClip)"
          style={{ transition: "y 0.6s ease, height 0.6s ease" }}
        />

        <path
          d="M40 20 H100 V200 Q70 240 40 200 Z"
          fill="none"
          stroke="#222"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
}
