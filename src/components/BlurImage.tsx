"use client";

import Image from "next/image";
import { useState } from "react";

export default function BlurImage({
	url,
	name,
}: {
	url: string;
	name: string;
}) {
	const [isLoading, setLoading] = useState(true);

	return (
		<Image
			src={`https://shikimori.one${url}`}
			alt={name}
			fill={true}
			quality={100}
			objectFit="cover"
			className={`rounded-t-xl absolute w-full object-fill
              duration-700 ease-in-out group-hover:opacity-75 hover:scale-105 hover:shadow-2xl
              ${isLoading ? "blur-2xl backdrop" : "blur-0 grayscale-0"})`}
			onLoad={() => setLoading(false)}
		/>
	);
}
