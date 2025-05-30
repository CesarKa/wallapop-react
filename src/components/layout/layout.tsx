import type { ReactNode } from "react";
import Header from "./header";


interface LayoutProps {
    title: string;
    children: ReactNode;
}

export function Layout({ title, children}: LayoutProps) {
    return (
        <div>
            <Header/>
            <main>
                <h1>{title}</h1>
                {children}
            </main>
            <footer/>
        </div>
    );
}