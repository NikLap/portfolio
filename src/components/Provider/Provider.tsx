"use client";

import { Provider as JotaiProvider } from "jotai";
import { PropsWithChildren } from "react";

export type ProviderProps = PropsWithChildren;

function Provider({ children }: ProviderProps) {
	return <JotaiProvider>{children}</JotaiProvider>;
}

export default Provider;
