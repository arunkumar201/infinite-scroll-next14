"use client";

import { ChevronUp } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const GoToTop: React.FC = () => {
	const [visible, setVisible] = useState(true);

	const [ref, inView] = useInView({
		triggerOnce: true,
	});

	const handleScrollTop = () => {
		const currentPosition = window.pageYOffset;
		const targetPosition = 0;

		// Toggle scroll position between top and bottom
		const newPosition = currentPosition === 0 ? window.innerHeight : 0;

		window.scrollTo({
			top: newPosition,
			behavior: "smooth",
		});
	};

	const handleVisibility = (inView: boolean) => {
		setVisible(!inView);
	};

	return (
		<div
			ref={ref}
			className={`fixed bottom-24 md:bottom-12 right-4 z-50 ${
				visible ? "block" : "hidden"
			} hover:bg-slate-700 rounded-2xl`}
		>
			<ChevronUp
				onClick={handleScrollTop}
				size={40}
				className="text-gray-50  "
				style={{ cursor: "pointer" }}
			/>
		</div>
	);
};

export default GoToTop;
