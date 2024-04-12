import Header from "@/components/Header";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-urbanist',
});

export const metadata: Metadata = {
    title: "Taskk",
    description: "Task management dashboard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${urbanist.variable} bg-black text-white font-urbanist w-full scroll-smooth lg:grid lg:grid-cols-12 lg:items-start`}>
                <Header />

                <main className="py-8 grid gap-4 px-4 min-h-screen lg:px-8 lg:col-span-9 lg:mt-4 lg:rounded-tl-3xl lg:border bg-neutral-900 lg:text-neutral-400 lg:border-neutral-700 lg:sticky lg:top-0">
                    {children}
                </main>
            </body>
        </html>
    );
}
