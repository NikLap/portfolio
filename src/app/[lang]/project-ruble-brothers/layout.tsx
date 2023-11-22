import { Metadata } from "next/types";
import config from "@/app/[lang]/config";

const { BASE_URL } = config;

export const metadata: Metadata = {
	title: "Ruble brothers",
	description:
		"Presenting a money exchange landing page design that is intuitive, user-friendly, and modern. Our design will make it easy for customers to quickly and securely exchange money.",
	keywords: [
		"design",
		"money exchange",
		"intuitive",
		"user-friendly",
		"modern",
		"ruble brothers",
	],
	metadataBase: new URL(BASE_URL),
};

function Layout({ children }: { children: React.ReactNode }) {
	return children;
}

export default Layout;
