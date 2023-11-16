import Image from "next/image";
import Link from "next/link";
import React from "react";
import { imagePath } from "src/constants/imagePath";

export default function Header() {
    return (
        <div className="container">
            <div className="flex h-16 place-items-center">
                <Link href={"/"} passHref>
                    <Image src={imagePath.LOGO_FULLLL_GREEN} alt="logo auxo" style={{ width: "100px", height: "auto" }} data-aos="zoom-in" />
                </Link>
                <Link href={"#"} className="ml-auto">
                    <p className="font-bold text-green-900">Service</p>
                </Link>
                <Link href={"#"} className="ml-9">
                    <p className="font-bold text-green-900">About us</p>
                </Link>
            </div>
        </div>
    );
}
