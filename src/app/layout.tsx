import "./globals.css";

import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "infinite-scroll",
	appLinks: {
		web: {
			url: "https://infinite-scroll-1.vercel.app/",
			should_fallback: true,
		},
	},
	creator: `arun kumar "arunkumar201 github")`,
	description: "it Displayed a list of Anime Cart in an infinite scroll manner",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={cn("bg-secondary-foreground", inter.className)}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
