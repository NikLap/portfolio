import { Locales, getDictionary } from "@/app/[lang]/dictionaries";

const useDictionary = (lang: Locales) => {
	return getDictionary(lang);
};
export default useDictionary;
