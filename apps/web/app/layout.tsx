import "@repo/tailwind-config/globals.css";

import type { Metadata } from "next";
import { ThemeScript } from "next-app-theme/theme-script";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Aman Nambisan",
	description: "Portfolio website for Aman Nambisan",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang="en">
			<head>
				<ThemeScript />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
