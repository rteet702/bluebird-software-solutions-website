import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Bluebird Software Solutions, LLC",
    description:
        "A company and website designed and created by Robert Teets, founder of Bluebird Software Solutions, LLC.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}
