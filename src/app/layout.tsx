import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";
import { Header } from "@/ui/organisms/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "TrzasQ Next 13 showcase",
};

type PropsType = {
	children: ReactNode;
	modal: ReactNode;
};

export default function RootLayout({ children, modal }: PropsType) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="min-h-screen bg-white">
					<Header />
					<main>{children}</main>
					<footer className=" mt-auto h-max  bg-gray-50 p-12">
						<div className="mx-auto lg:max-w-2xl">
							<p className="text-center">@ trzasq 2023</p>
						</div>
					</footer>
					{modal}
				</div>
			</body>
		</html>
	);
}
