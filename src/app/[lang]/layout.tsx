import config from "@/app/[lang]/config";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import JotaiProvider from "@/components/Provider/Provider";
import ButtonCursor from "@/components/buttons/ButtonCursor";
import { LOCALES } from "@/middleware";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import { Locales } from "./dictionaries";
import "./globals.css";
import Menu from "./menu";
import ModalPortal from "./modal-portal";

const { BASE_URL } = config;

const matterFont = localFont({
	src: [
		{
			path: "../../../public/fonts/matter-font/Matter-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../../public/fonts/matter-font/Matter-Light.otf",
			weight: "300",
			style: "normal",
		},
	],
});

const geologicaFont = localFont({
	src: [
		{
			path: "../../../public/fonts/geologica-font/Geologica-VariableFont.ttf",
			weight: "300",
		},
	],
});

export async function generateStaticParams() {
	return LOCALES.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
	title: "itsgeorge: Designing Exceptional User Experiences",
	description:
		"I'm George Palkin, a friendly UX/UI designer crafting creative solutions for exceptional user experiences, empowering companies through innovation.",
	metadataBase: new URL(BASE_URL),
};

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: Locales };
}) {
	return (
		<html lang={params.lang}>
			<head>
				<title>Portfolio</title>
				<link rel="icon" href="/en/Favicon.svg" type="image/x-icon" />
			</head>
			<JotaiProvider>
				<body
					className={
						params.lang === "ru" ? geologicaFont.className : matterFont.className
					}
				>
					<ButtonCursor />
					<div className="min-h-screen">
						<Navbar lang={params.lang} />
						<main>{children}</main>
					</div>
					<Footer lang={params.lang} />
					<Menu lang={params.lang} />
					<ModalPortal />
					<Toaster
						position="bottom-center"
						toastOptions={{
							style: {
								borderRadius: "10px",
								background: "hsla(0, 0%, 7%, 1)",
								color: "hsla(0, 0%, 50%, 1)",
							},
						}}
					/>
				</body>
			</JotaiProvider>
		</html>
	);
}
