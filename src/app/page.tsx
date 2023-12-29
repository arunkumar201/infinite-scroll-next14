import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

import GoToTop from "@/components/GoToTop";
import LoadMore from "@/components/LoadMore";
import { Smile } from "lucide-react";
import { getAnime } from "./_actions";

export default async function Home() {
	const data = await getAnime(7);
	return (
		<main className="items-center justify-between p-28 mb-7 sm:p-16 py-20 px-8 flex flex-col gap-10 -mt-12">
			<div className="flex flex-start w-full items-center -mb-3 gap-2 decoration-purple-500	underline decoration-4 	 decoration-dotted	">
				<Smile size={40} className="text-pink-500" />
				<h1 className="text-start text-bold text-gray-200 tracking-tight text-2xl md:text-4xl w-full">
					Explore Anime
				</h1>
			</div>

			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
				{data}
			</section>
			<LoadMore />
			<div className="absolute">
				
			<GoToTop/>
			</div>
		</main>
	);
}
