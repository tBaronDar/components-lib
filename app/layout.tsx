import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/Geist/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/Geist/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const interVariable = localFont({
	src: "./fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
	variable: "--font-inter",
	weight: "200 800",
});

const rubik = Rubik({ weight: "variable", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Components Library",
	description: "A library of pre-fabed web components",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${interVariable.variable} ${rubik.className}`}>
				{children}
			</body>
		</html>
	);
}
