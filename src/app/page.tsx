import WaterCard from "@/components/dashboard/waterCard";
import WeightCard from "@/components/dashboard/weightCard";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col w-full overflow-auto">
      <h1 className="text-2xl font-bold w-full p-4 border-b-2 border-sidebar-border">
        Dashboard
      </h1>
      <div className="flex flex-col md:flex-row gap-5 p-4 w-full h-full md:h-auto">
        <WaterCard />
        <WeightCard />
      </div>

      {/* <svg width="140" height="260" viewBox="0 0 140 260">
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
      </svg> */}
    </div>
  );
}
