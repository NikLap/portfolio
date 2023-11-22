import { Metadata } from "next/types";
import config from "@/app/[lang]/config";

const { BASE_URL } = config;

export const metadata: Metadata = {
	title: "Yandex",
	description:
		"Yandex Match is a new dating service that can help you find a person with similar hobbies thanks to the new feature — «Maximum Match»!",
	keywords: ["design", "dating service", "Maximum Match", "yandex"],
	metadataBase: new URL(BASE_URL),
};

function Layout({ children }: { children: React.ReactNode }) {
	return children;
}

export default Layout;
