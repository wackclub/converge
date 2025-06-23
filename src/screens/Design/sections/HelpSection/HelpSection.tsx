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
        <section className="w-full py-14 bg-white border-t border-b border-[#e2e2e2] flex flex-col items-center px-4 sm:px-8">
            <h2 className="text-4xl sm:text-6xl text-center [font-family:'Chivo',Helvetica] font-bold text-[#552200] mb-4">
                NEED HELP?
            </h2>

            <p className="[font-family:'Chivo_Mono',Helvetica] font-light text-[#552200] text-lg sm:text-2xl text-center mb-10">
                HERE ARE A COUPLE GUIDES TO BOT DEV THAT COULD PROVE HELPFUL:
            </p>

            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-6 mb-8 w-full">
                {guideCards.map((card, index) => (
                    <Card
                        key={index}
                        className="flex-1 bg-neutral-100 rounded-xl border-none"
                    >
                        <CardContent className="p-4 sm:p-6">
                            <h3 className="[font-family:'Chivo_Mono',Helvetica] font-medium text-black text-base sm:text-lg">
                                {card.title}
                            </h3>
                            <p className="[font-family:'Chivo_Mono',Helvetica] font-light text-black text-sm sm:text-base mt-2">
                                {card.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <p className="[font-family:'Chivo_Mono',Helvetica] font-light text-[#552200] text-sm sm:text-base text-center mb-6">
                STILL NEED A HAND? JOIN THE{' '}
                <a href="https://hackclub.slack.com/archives/C091UF79VDM" target="_blank" className="underline">
                    #CONVERGE
                </a>{' '}
                CHANNEL ON THE SLACK
            </p>

            <a href="https://hackclub.slack.com/archives/C091UF79VDM" target="_blank" className="w-full sm:w-auto">
                <Button className="w-full sm:w-[318px] h-[51px] bg-[#3d3028] rounded text-white hover:bg-[#4d3d33]">
                    <span className="[font-family:'Chivo_Mono',Helvetica] font-normal text-base sm:text-xl">
                        ADD ME TO THE CHANNEL
                    </span>
                </Button>
            </a>
        </section>
    );
};
