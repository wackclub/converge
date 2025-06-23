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
            leftPosition: "left-0 rounded-[10px]",
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
            <div className="flex flex-col items-center max-w-5xl mx-auto px-4">
                <h2 className="text-4xl sm:text-6xl text-center [font-family:'Fraunces',Helvetica] font-bold text-[#552200] mb-4">
                    Here's how it works...
                </h2>

                <div className="font-['Fraunces',Helvetica] text-[#552200] text-3xl text-center mb-16">
                    <div className="text-pretty space-y-4">
                        <p>
                            ▪ <b className="font-extrabold">BUILD TWO CHATBOTS</b> — choosing a different platform for each one
                            is highly encouraged, but not required.
                        </p>

                        <p>
                            ▪ Other people need to be able to use most parts of your bot.
                        </p>

                        <p>
                            ▪ For each hour you code your projects, you gain 🪙 one token.{" "}
                            <b className="font-extrabold">Earn four tokens</b> (or more) to unlock the shop!
                        </p>

                        <p>
                            ▪ If you’re making bots for two different platforms, you get{" "}
                            <b className="font-extrabold">one extra token</b> for each project (so two in total).
                        </p>

                        <p>
                            ▪ Use tokens to buy rewards in the{" "}
                            <span className="line-through">shop</span>{" "}
                            <span className="font-normal">emporium</span>.
                        </p>
                    </div>
                </div>
                <h3 className="font-['Chivo_Mono',Helvetica] font-medium text-[#552200] text-[26dx] text-center mb-8">
                    SUPPORTED PLATFORMS
                </h3>

                <div className="grid grid-cols-2 sm:flex justify-center gap-12 mb-10">
                    {platforms.map((platform, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative mb-4">
                                <img
                                    className={`${platform.width} ${platform.height} ${platform.leftPosition} object-cover`}
                                    alt={platform.name}
                                    src={platform.image}
                                />
                            </div>
                            <span className="font-['Chivo',Helvetica] font-medium text-[#552200] text-base text-center">
                                {platform.name}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="font-['Chivo_Mono',Helvetica] font-light text-[#552200] text-xs text-center max-w-md">
                    IS YOUR FAVOURITE APP NOT ON THIS LIST?
                    <br />
                    <a href="https://forms.hackclub.com/converge-request" className="font-['Chivo_Mono',Helvetica] font-extralight text-[#552200] text-xs underline p-0 h-auto">
                        SEND A REQUEST
                    </a>{" "}
                    FOR IT TO BE ADDED.
                </p>
            </div>
        </section >
    );
};
