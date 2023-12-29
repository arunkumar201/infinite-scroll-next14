"use client";

import AnimeCard, { AnimeProp } from "./AnimeCard";
import React, { useEffect, useState } from "react";

import { Loader } from "lucide-react";
import { getAnime } from "@/app/_actions";
import { useInView } from "react-intersection-observer";

let page = 2;
const LoadMore = () => {
	const [data, setData] = useState<any[]>([]);

	const { ref, inView } = useInView();

	useEffect(() => {
		let isMounted = true;

		if (inView) {
			getAnime(page).then((res) => {
				console.log(res[0]);

				const timeoutId = setTimeout(() => {
					if (isMounted) {
						setData([...data, ...res]);
						page++;
					}
				}, 400);

				return () => {
					clearTimeout(timeoutId);
					isMounted = false;
				};
			});
		}

		return () => {
			isMounted = false;
		};
	}, [inView, data]);

	return (
		<>
			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
				{data}
			</section>

			<div className="mt-6" ref={ref}>
				<Loader size={48} className="animate-spin text-indigo-600" />
			</div>
		</>
	);
};

export default LoadMore;
