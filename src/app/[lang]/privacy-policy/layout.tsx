import { Metadata } from "next/types";
import config from "@/app/[lang]/config";

const { BASE_URL } = config;

export const metadata: Metadata = {
	title: "Privacy policy",
	description: "Every website needs to have a privacy policy. Or do they have to?",
	keywords: ["unnecessary", "sometimes existing"],
	metadataBase: new URL(BASE_URL),
};

function Layout({ children }: { children: React.ReactNode }) {
	return children;
}

export default Layout;
