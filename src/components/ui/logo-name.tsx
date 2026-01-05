import { Flame } from "lucide-react";
import Link from "next/link";

export default function LogoName() {
	return (
		<Link href={"/"}>
			<div className="flex items-center gap-3 p-2">
				<div className="bg-primary p-2 rounded-lg">
					<Flame className="w-6 h-6 text-primary-foreground" />
				</div>
				<h1 className="text-xl font-bold">FitTrack</h1>
			</div>
		</Link>
	);
}
