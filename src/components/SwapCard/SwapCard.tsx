"use client";
import { IconLeftArrow } from "../icon/icon";
import Image from "next/image";
import { useState } from "react";
import { imagePath } from "src/constants/imagePath";

export default function SwapCard() {
    const [active, setActive] = useState<"post1" | "post2" | "post3">("post1");

    function selectPost(value: "post1" | "post2" | "post3") {
        const posts = [document.getElementById("post1"), document.getElementById("post2"), document.getElementById("post3")];

        let topPost: HTMLElement | null = null;
        let midPost: HTMLElement | null = null;
        let bottomPost: HTMLElement | null = null;
        for (let post of posts) {
            if (post) {
                if (post.classList.contains("post_solution_1")) {
                    topPost = post;
                } else if (post.classList.contains("post_solution_2")) {
                    midPost = post;
                } else if (post.classList.contains("post_solution_3")) {
                    bottomPost = post;
                }
            }
        }
        if (!topPost || !midPost || !bottomPost) return;
        if (topPost.id == value) return;

        setActive(value);

        topPost.classList.remove("post_solution_1");
        midPost.classList.remove("post_solution_2");
        bottomPost.classList.remove("post_solution_3");
        bottomPost.classList.remove("move_out");

        topPost.classList.add("post_solution_3");
        topPost.classList.add("move_out");

        if (midPost.id == value) {
            midPost.classList.add("post_solution_1");

            bottomPost.classList.add("post_solution_2");
        }
        if (bottomPost.id == value) {
            midPost.classList.add("post_solution_2");

            bottomPost.classList.add("post_solution_1");
        }
    }
    return (
        <>
            <div className="flex justify-center gap-3 mt-4 mb-7">
                <button className="btn-slide" style={{ background: active == "post1" ? "#FC8C69" : "" }} onClick={() => selectPost("post1")} data-aos="fade-right" data-aos-delay="1000"></button>
                <button className="btn-slide" style={{ background: active == "post2" ? "#FC8C69" : "" }} onClick={() => selectPost("post2")} data-aos="fade-right" data-aos-delay="700"></button>
                <button className="btn-slide" style={{ background: active == "post3" ? "#FC8C69" : "" }} onClick={() => selectPost("post3")} data-aos="fade-right" data-aos-delay="400"></button>
            </div>
            <div className="solution">
                <div id="post1" className="post_solution post_solution_1" data-aos="fade-right" data-aos-delay="1000" onClick={() => selectPost("post2")}>
                    <div>
                        <p className="typo3 mb-3">Funding Activities</p>
                        <p className="subtitle">Diversity & Transparency</p>
                        <p className="desc">Explore diverse forms of funding activities and implement them on-chain to ensure both transparency and privacy protection.</p>
                        <div className="note">
                            <IconLeftArrow />
                            <p className="note_title">Non-profit Funding - Grants</p>
                        </div>
                        <div className="note">
                            <IconLeftArrow />
                            <p className="note_title">For-profit Funding - Equity Investment</p>
                        </div>
                    </div>
                    <div>
                        <Image className="solution-img" src={imagePath.SOLUTION1} alt="auxo solution 1" />
                    </div>
                </div>
                <div id="post2" className="post_solution post_solution_2" data-aos="fade-right" data-aos-delay="700" onClick={() => selectPost("post3")}>
                    <div>
                        <p className="typo3 mb-3">Investment Framework</p>
                        <p className="subtitle">On-chain Implementation</p>
                        <p className="desc">
                            Create a framework with streamline workflows, implemented on smart contracts, to provide services to projects builders, investors and organizers in different funding
                            application procedures.
                        </p>
                        <div className="note">
                            <IconLeftArrow />
                            <p className="note_title">Pre-investment Period</p>
                        </div>
                        <div className="note">
                            <IconLeftArrow />
                            <p className="note_title">Investment Period</p>
                        </div>
                        <div className="note">
                            <IconLeftArrow />
                            <p className="note_title">Post-investment Period</p>
                        </div>
                    </div>
                    <div>
                        <Image className="solution-img" src={imagePath.SOLUTION2} alt="auxo solution 1" />
                    </div>
                </div>
                <div id="post3" className="post_solution post_solution_3" data-aos="fade-right" data-aos-delay="400" onClick={() => selectPost("post1")}>
                    <div>
                        <p className="typo3 mb-3">Privacy Protection</p>
                        <p className="subtitle">Threshold Homomorphic Encryption with Zero-knowledge Proof</p>
                        <p className="desc">Utilize ZKP technology in more complex ways to solve problems related to user’s privacy protection.</p>
                    </div>
                    <div>
                        <Image className="solution-img" src={imagePath.SOLUTION3} alt="auxo solution 1" />
                    </div>
                </div>
            </div>
        </>
    );
}

function ButtonSlide() {
    return <></>;
}
