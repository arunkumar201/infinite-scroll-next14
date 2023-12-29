import { GITHUB_URL, LINKEDIN_URL, PORTFOLIO_URL, TWITTER_URL } from "@/constant";
import { Github, Linkedin, Twitter } from "lucide-react";

import Link from "next/link";

export default function Footer() {
	return (
		<footer className=" text-white  w-full fixed bottom-0 flex justify-center">
			<div className="flex justify-around items-center text-center bg-[#161921] container backdrop-blur-3xl opacity-80 rounded-xl mb-2 py-3">
				<div className="col-span-4 sm:col-span-1 ">
					<Link
						className="flex flex-col items-center space-y-2 "
						href={GITHUB_URL}
						target="_blank"
					>
						<Github className="w-6 h-6" />
						<span className="hover:underline">Github</span>
					</Link>
				</div>
				<div className="col-span-4 sm:col-span-1">
					<Link
						className="flex flex-col items-center space-y-2"
						href={TWITTER_URL}
						target="_blank"
					>
						<Twitter className="w-6 h-6" />
						<span className="hover:underline">Twitter</span>
					</Link>
				</div>
				<div className="col-span-4 sm:col-span-1">
					<Link
						className="flex flex-col items-center space-y-2"
						href={PORTFOLIO_URL}
						target="_blank"
					>
						<Linkedin className="w-6 h-6" />
						<span className="hover:underline">Portfolio</span>
					</Link>
				</div>
				<div className="col-span-4 sm:col-span-1">
					<Link
						className="flex flex-col items-center space-y-2"
						href={LINKEDIN_URL}
						target="_blank"
					>
						<Linkedin className="w-6 h-6" />
						<span className="hover:underline">LinkedIn</span>
					</Link>
				</div>
			</div>
		</footer>
	);
}
