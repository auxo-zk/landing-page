import type { Metadata } from "next";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./globals.scss";
import AOSInit from "src/components/AOSInit/AOSInit";
import { fontInter } from "src/fonts/fonts";
import Header from "src/layout/Header/Header";
import Footer from "src/layout/Footer/Footer";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "src/constants";
import { imagePath } from "src/constants/imagePath";

export const metadata: Metadata = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    keywords: ["zkSync", "zk", "auxo", "funding", "organization", "project raise fund", "Auro wallet", "o1js", "mina"],
    publisher: "Auxo",
    robots: {
        follow: true,
        index: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        url: SITE_URL,
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        siteName: SITE_TITLE,
        countryName: "Vietnam",
        images: {
            url: SITE_URL + imagePath.THUMBNAIL.src,
            secureUrl: imagePath.THUMBNAIL.src,
            type: "image/jpg",
            width: imagePath.THUMBNAIL.width,
            height: imagePath.THUMBNAIL.height,
        },
    },
    twitter: {
        card: "summary_large_image",
        site: "@site",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: {
            url: SITE_URL + imagePath.THUMBNAIL.src,
            secureUrl: imagePath.THUMBNAIL.src,
            type: "image/jpg",
            width: imagePath.THUMBNAIL.width,
            height: imagePath.THUMBNAIL.height,
        },
    },
    appleWebApp: {
        capable: true,
        title: "Auxo",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <AOSInit />
            <body className={`${fontInter.className} relative`}>
                <div className="overflow-hidden relative">
                    <Header />
                    <div className="mt-16">{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
