"use client";

import { ComponentPropsWithRef, PropsWithChildren } from "react";

type _LayoutProps = {};

export type LayoutProps = _LayoutProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"div">>, keyof _LayoutProps>;

function Layout({ children }: { children: React.ReactNode }) {
	return children;
}

export default Layout;
