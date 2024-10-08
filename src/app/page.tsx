import Image from "next/image";
import Link from "next/link";
import SwapCard from "src/components/SwapCard/SwapCard";
import { IconLeftArrow } from "src/components/icon/icon";
import { imagePath } from "src/constants/imagePath";
import { fontRaleway } from "src/fonts/fonts";

export default function Home() {
    return (
        <main className="container">
            <div className="banner text-center relative">
                <div className="wave"></div>
                <div className="wave" style={{ animationDelay: "2s" }}></div>
                <div className="wave" style={{ animationDelay: "4s" }}></div>
                <div
                    className="absolute bottom-0"
                    style={{
                        left: "50%",
                        zIndex: 0,
                        translate: "-50% 50%",
                        background: "radial-gradient(50% 50% at 50% 50%, #6cb4b0 0%, rgba(255, 255, 255, 0) 82.29%)",
                        maxWidth: "287px",
                        width: "100%",
                        aspectRatio: "527/150",
                    }}
                ></div>
                {/* <p className="pt-10 relative" style={{ color: "#2C978F", fontWeight: "700" }} data-aos="zoom-in-up">
                    {"Supported by Mina's zkIgnite Program"}
                </p> */}
                <p className={`${fontRaleway.className} typo1 uppercase mx-auto mt-4 relative`} style={{ maxWidth: "890px" }} data-aos="zoom-in-down" data-aos-delay="700">
                    Explore the Future of On-chain Funding
                </p>
                <p className="mx-auto relative mt-6" style={{ maxWidth: "675px", color: "#666D6C", lineHeight: "22px" }} data-aos="zoom-in-down" data-aos-delay="1300">
                    We introduce the first on-chain funding platform with privacy-preserving that offers a vibrant ecosystem for project builders, investors, and campaign organizers.
                </p>

                <Image className="mt-16 mx-auto relative logo-3d-width" src={imagePath.LOGO_3D} alt="Logo icon auxo" style={{ height: "auto" }} data-aos="zoom-in-up" data-aos-delay="1000" />
            </div>
            {/* ******************************************************************************************************************************************************* */}
            <div
                className="text-center mt-36 px-4"
                style={{ borderRadius: "12px", border: "1px solid #37A9A2", background: "linear-gradient(29deg, #EEF5F5 13.9%, rgba(255, 255, 255, 0.00) 49.05%)" }}
                data-aos="flip-left"
            >
                <p className="typo2 mt-11">What are you looking for?</p>

                <div className="mt-14 flex flex-wrap justify-center mb-14 gap-x-20 gap-y-10">
                    <div>
                        <Image
                            className="img-responsive"
                            src={imagePath.LOOKING_FOR}
                            alt="USDT icon"
                            style={{ width: "100%", maxWidth: "430px", height: "auto" }}
                            data-aos="fade-right"
                            data-aos-delay="500"
                        />
                    </div>
                    <div>
                        <div className="item_looking_for" data-aos="fade-left" data-aos-delay="500">
                            <p className="typo4">For Builders</p>
                            <p className="typo5">Raise fund for your project</p>
                        </div>
                        <div className="item_looking_for" data-aos="fade-left" data-aos-delay="800">
                            <p className="typo4">For Organizers</p>
                            <p className="typo5">Organize a funding campaign</p>
                        </div>
                        <div className="item_looking_for" data-aos="fade-left" data-aos-delay="1100">
                            <p className="typo4">For Investors</p>
                            <p className="typo5">{"Protect your investor's right"}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ******************************************************************************************************************************************************* */}

            <div className="mt-20">
                <p className="typo2 mt-11 text-center" data-aos="zoom-in-up">
                    Our solutions
                </p>

                <SwapCard />
            </div>
        </main>
    );
}
