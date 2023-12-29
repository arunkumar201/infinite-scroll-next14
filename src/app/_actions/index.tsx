"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const getAnime = async (page: number, limit: number = 8) => {
	try {
		const res = await fetch(
			`https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=popularity`,
			{
				next: {
					revalidate: 3600 * 24 * 3, //every 3 days
				},
			}
		);
		const data = await res.json();

		return data.map((anime: AnimeProp, index: number) => (
			<AnimeCard key={anime.id} anime={anime} index={index} />
		));
	} catch (error) {
		console.log(`error occurred while fetching anime: ${error}`);
	}
};
