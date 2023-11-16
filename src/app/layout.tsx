import type { Metadata } from "next";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./globals.scss";
import AOSInit from "src/components/AOSInit/AOSInit";
import { fontInter } from "src/fonts/fonts";
import Header from "src/layout/Header/Header";
import Footer from "src/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Auxo",
    description: "EXPLORE THE FUTURE OF ON-CHAIN FUNDING",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <AOSInit />
            <body className={`${fontInter.className} relative`}>
                <div className="overflow-hidden">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
