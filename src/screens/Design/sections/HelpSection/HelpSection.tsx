import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HelpSection = (): JSX.Element => {
    // Data for the guide cards
    const guideCards = [
        {
            title: "BUILDING A BASIC SLACKBOT",
            description:
                "BY THE END OF THIS GUIDE, YOU'LL HAVE BUILT A SLACKBOT OF YOUR OWN!",
        },
        {
            title: "MAKING A DISCORD BOT",
            description:
                "BY THE END OF THIS GUIDE, YOU'LL HAVE BUILT A DISCORD BOT OF YOUR OWN!",
        },
        {
            title: "HOW TO BUILD A BOT FOR TELEGRAM",
            description:
                "BY THE END OF THIS GUIDE, YOU'LL HAVE BUILT A TELEGRAM BOT OF YOUR OWN!",
        },
    ];

    return (
        <section className="w-full py-14 bg-white border-t border-b border-[#e2e2e2] flex flex-col items-center">
            <h2 className="text-6xl text-center [font-family:'Chivo',Helvetica] font-bold text-[#552200] mb-4">
                NEED HELP?
            </h2>

            <p className="[font-family:'Chivo_Mono',Helvetica] font-light text-[#552200] text-2xl text-center mb-10">
                HERE ARE A COUPLE GUIDES TO BOT DEV THAT COULD PROVE HELPFUL:
            </p>

            <div className="flex gap-[22px] mb-8">
                {guideCards.map((card, index) => (
                    <Card
                        key={index}
                        className="w-[337px] bg-neutral-100 rounded-xl border-none"
                    >
                        <CardContent className="p-4">
                            <h3 className="[font-family:'Chivo_Mono',Helvetica] font-medium text-black text-base whitespace-nowrap">
                                {card.title}
                            </h3>
                            <p className="[font-family:'Chivo_Mono',Helvetica] font-light text-black text-sm my-1">
                                {card.description.split("\n").map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        {i < card.description.split("\n").length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <p className="[font-family:'Chivo_Mono',Helvetica] font-light text-[#552200] text-base text-center mb-6">
                <span>STILL NEED A HAND? JOIN THE </span>
                <a href="https://hackclub.slack.com/archives/C091UF79VDM" target="_blank" className="underline">#CONVERGE</a>
                <span> CHANNEL ON THE SLACK</span>
            </p>

            <a href="https://hackclub.slack.com/archives/C091UF79VDM" target="_blank">
                <Button className="w-[318px] h-[51px] bg-[#3d3028] rounded text-white hover:bg-[#4d3d33]">
                    <span className="[font-family:'Chivo_Mono',Helvetica] font-normal text-xl">
                        ADD ME TO THE CHANNEL
                    </span>
                </Button>
            </a>
        </section>
    );
};
