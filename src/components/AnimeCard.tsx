import { Star, Tv } from "lucide-react";

import BlurImage from "./BlurImage";
import { MotionDiv } from "./Motion";

export interface AnimeProp {
	id: string;
	name: string;
	image: {
		original: string;
	};
	kind: string;
	episodes: number;
	episodes_aired: number;
	score: string;
}

interface Prop {
	anime: AnimeProp;
	index: number;
}

const stagger = 0.25;

const variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};
const AnimeCard = ({ anime, index }: Prop) => {
	return (
		<MotionDiv
			variants={variants}
			initial="hidden"
			animate="visible"
			transition={{
				delay: index * stagger,
				ease: "easeInOut",
				duration: 0.5,
			}}
			viewport={{ amount: 0 }}
			className="max-w-sm rounded relative w-full border-2 border-slate-900 shadow-xl rounded-t-2xl"
		>
			<div className="max-w-sm rounded relative w-full h-[28rem]">
				<BlurImage name={anime.name} url={anime.image.original} />
			</div>
			<div className="py-6 px-4 flex flex-col gap-3 bg-pink-200">
				<div className="flex justify-between items-center gap-1">
					<h2 className="font-bold text-gray-800 tracking-widest text-xl  line-clamp-1	">
						{anime.name}
					</h2>
					<div className="py-1 px-2 bg-slate-900 text-gray-50 rounded-sm">
						<p className=" text-sm font-bold capitalize">{anime.kind}</p>
					</div>
				</div>
				<div className="flex gap-4 items-center justify-between">
					<div className="flex flex-row gap-2 items-center">
						<Tv  className="text-slate-900"/>
						<p className="text-base text-black font-bold mt2">
							{anime.episodes || anime.episodes_aired}
						</p>
					</div>
					<div className="flex flex-row gap-2 items-center">
						<Star  className="text-sky-800"/>
						<p className="text-base font-bold text-[#000000]">{anime.score}</p>
					</div>
				</div>
			</div>
		</MotionDiv>
	);
};

export default AnimeCard;
