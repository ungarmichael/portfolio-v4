import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

const clash = localfont({
	src: [
		{
			path: "../../public/fonts/ClashDisplay-Bold.ttf",
		},
	],
	variable: "--font-clash",
});

const druk = localfont({
	src: [
		{
			path: "../../public/fonts/Druk-Wide-Bold.ttf",
		},
	],
	variable: "--font-druk",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${clash.variable} ${sora.variable} ${druk.variable}`}
		>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
