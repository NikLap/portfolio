"use client";

import { useEffect, useState } from "react";

const useCssVariableValue = (name: string) => {
	const [value, setValue] = useState<string | null>(null);

	useEffect(() => {
		const value = getComputedStyle(document.documentElement).getPropertyValue(name);
		setValue(value);
	}, []);

	return value;
};

export default useCssVariableValue;
