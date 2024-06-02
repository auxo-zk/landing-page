import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LINK_APP_COMMITTEE, LINK_DOCS } from "src/constants";
import { imagePath } from "src/constants/imagePath";

export default function Header() {
    return (
        <div className="w-full fixed top-0 z-50 bg-white bg-opacity-70 backdrop-blur-md shadow-sm">
            <div className="container flex h-16 place-items-center">
                <Link href={"/"} passHref>
                    <Image src={imagePath.LOGO_FULLLL_GREEN} alt="logo auxo" style={{ width: "100px", height: "auto" }} data-aos="zoom-in" />
                </Link>
                <Link href={LINK_DOCS} passHref className="ml-auto" target="_blank">
                    <p className="font-bold text-green-900">Docs</p>
                </Link>
                <Link href={LINK_APP_COMMITTEE} passHref target="_blank" className="ml-9">
                    <p className="font-bold text-white rounded-xl px-4 py-3" style={{ background: "#043E35" }}>
                        Launch App
                    </p>
                </Link>
            </div>
        </div>
    );
}
