import React from "react";
import { Button } from "../../../../components/ui/button";

export const HowItWorksSection = (): JSX.Element => {
    // Platform data for mapping
    const platforms = [
        {
            name: "SLACK",
            image: "https://c.animaapp.com/mc7vj4gxgq9MVb/img/image-2.png",
            width: "w-16",
            height: "h-16",
            leftPosition: "left-0",
        },
        {
            name: "DISCORD",
            image:
                "https://c.animaapp.com/mc7vj4gxgq9MVb/img/image-removebg-preview--1--1.png",
            width: "w-16",
            height: "h-16",
            leftPosition: "left-0.5",
        },
        {
            name: "SIGNAL",
            image: "https://c.animaapp.com/mc7vj4gxgq9MVb/img/image-3.png",
            width: "w-16",
            height: "h-16",
            leftPosition: "left-0",
        },
        {
            name: "TELEGRAM",
            image: "https://c.animaapp.com/mc7vj4gxgq9MVb/img/image-4.png",
            width: "w-16",
            height: "h-16",
            leftPosition: "left-[7px]",
        },
    ];

    return (
        <section className="w-full py-14 bg-[#fffcf6] border-t border-b border-[#e2e2e2]">
            <div className="flex flex-col items-center max-w-4xl mx-auto px-4">
                <h2 className="text-5xl text-center [font-family:'Chivo',Helvetica] font-bold text-[#552200] mb-4">
                    HOW THIS WORKS
                </h2>

                <div className="font-['Chivo_Mono',Helvetica] font-light text-[#552200] text-2xl text-center mb-16">
                    <p className="text-pretty">
                        ▪ BUILD TWO CHATBOTS - CHOOSING A DIFFERENT PLATFORM FOR EACH ONE
                        IS HIGHLY ENCOURAGED, BUT NOT REQUIRED
                        <br />▪ OTHER PEOPLE NEED TO BE ABLE TO USE MOST PARTS OF YOUR BOT
                        <br />▪ FOR EACH HOUR YOU CODE YOUR PROJECTS, YOU GAIN 🪙 ONE TOKEN.
                        EARN FOUR TOKENS (OR MORE) TO UNLOCK THE SHOP!
                        <br />▪ IF YOU&apos;RE MAKING BOTS FOR TWO DIFFERENT PLATFORMS, YOU
                        GET ONE
                        EXTRA TOKEN FOR EACH PROJECT!
                        <br />▪ USE TOKENS TO BUY REWARDS IN THE{" "}
                        <span className="line-through">SHOP</span>{" "}
                        <span className="font-normal">EMPORIU</span>
                        <span className="font-light">M.</span>
                    </p>
                </div>

                <h3 className="font-['Chivo_Mono',Helvetica] font-medium text-[#552200] text-[26px] text-center mb-8">
                    SUPPORTED PLATFORMS
                </h3>

                <div className="flex justify-center gap-12 mb-10">
                    {platforms.map((platform, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative mb-4">
                                <img
                                    className={`${platform.width} ${platform.height} ${platform.leftPosition} object-cover`}
                                    alt={platform.name}
                                    src={platform.image}
                                />
                            </div>
                            <span className="font-['Chivo_Mono',Helvetica] font-medium text-[#552200] text-base text-center">
                                {platform.name}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="font-['Chivo_Mono',Helvetica] font-extralight text-[#552200] text-xs text-center max-w-md">
                    IS YOUR FAVOURITE APP NOT ON THIS LIST?
                    <br />
                    <Button
                        variant="link"
                        className="font-['Chivo_Mono',Helvetica] font-extralight text-[#552200] text-xs underline p-0 h-auto"
                    >
                        SEND A REQUEST
                    </Button>{" "}
                    FOR IT TO BE ADDED.
                </p>
            </div>
        </section>
    );
};
