import en from "./dictionaries/en.json";
import ru from "./dictionaries/ru.json";

const dictionaries = {
	en,
	ru,
};
export type Locales = keyof typeof dictionaries;
export const getDictionary = (locale: Locales) => dictionaries[locale];
