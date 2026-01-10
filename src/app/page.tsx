import StepsCard from "@/components/dashboard/stepsCard";
import WaterCard from "@/components/dashboard/waterCard";
import WeightCard from "@/components/dashboard/weightCard";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col w-full overflow-auto">
      <h1 className="text-2xl font-bold w-full p-4 border-b-2 border-sidebar-border">
        Dashboard
      </h1>
      <div className="flex flex-nowrap md:flex-wrap flex-col md:flex-row gap-5 p-4 w-full h-full md:h-auto">
        <WaterCard />
        <WeightCard />
        <StepsCard />
      </div>

      {/* <svg
        viewBox="0 0 200 140"
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
      </svg> */}
    </div>
  );
}
