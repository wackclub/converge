import React from "react";
import { Button } from "../../../../components/ui/button";

export const HowItWorksSection = (): JSX.Element => {
    const platforms = [
        {
            name: "SLACK",
            image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/cd03affb3117df3e7ed2f9d676c959bdbbe1dc6a_image.png",
            width: "w-16",
            height: "h-16",
            leftPosition: "left-0",
        },
        {
            name: "DISCORD",
            image:
                "https://hc-cdn.hel1.your-objectstorage.com/s/v3/d288686d13f35b3c3bc45ca6ed016f2aa1c32eb8_image.png",
            width: "w-16",
            height: "h-16",
            leftPosition: "left-0.5",
        },
        {
            name: "SIGNAL",
            image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/14f040db9b39e738a0be750096b8663473d5ccca_image.png",
            width: "w-16",
            height: "h-16",
            leftPosition: "left-0 rounded-[10px]",
        },
        {
            name: "TELEGRAM",
            image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/11bdee9c24e012c070e079bfa8dd36885ad2f419_image.png",
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

                <div className="font-['Fraunces',Helvetica] text-[#552200] text-xl sm:text-3xl text-center mb-16">
                    <div className="text-pretty space-y-4">
                        <p><b className="font-extrabold">▪ Build one or more bots for a chat app</b> - ideally on <i>different</i> platforms (but that’s optional).</p>
                        <p><b className="font-extrabold">▪ Make them usable.</b> Other people should be able to interact with your bots for themselves.</p>
                        <p><b className="font-extrabold">▪ Earn 🪙 1 token per hour</b> of coding (max 10 tokens). You can split the time across multiple bots - but you’ll need to clock <b className="font-extrabold">at least 4 hours total</b> to unlock the <i>Emporium</i>.</p>
                        <p><b className="font-extrabold">▪ Bonus tokens:</b> Use more than one platform? You get <b className="font-extrabold">+1 token per platform</b> you use to create your bot(s)</p>
                        <p><b className="font-extrabold">▪ Spend your tokens</b> on rewards in the Emporium.</p>
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
