import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HelpSection = (): JSX.Element => {
    // Data for the guide cards
    const guideCards = [
        {
            title: "Building a basic Slackbot",
            description:
                "A quick guide to making a Slackbot with commands and message triggers.",
        },
        {
            title: "Making a Discord bot",
            description:
                "Here's how to make a Discord bot with Discord.js.",
        },
        {
            title: "How to build a bot for Telegram",
            description:
                "We'll set up a bot application and create a basic AI support bot.",
        },
    ];

    return (
        <section className="w-full py-14 bg-white border-t border-b border-[#e2e2e2] flex flex-col items-center px-4 sm:px-8">
            <h2 className="text-4xl sm:text-6xl text-center [font-family:'Fraunces',Helvetica] font-bold text-[#552200] mb-4">
                Need help?
            </h2>

            <p className="[font-family:'Fraunces',Helvetica] text-[#552200] text-lg sm:text-2xl text-center mb-10">
                Here are a couple guides to bot dev that could prove helpful. (coming soon!)
            </p>

            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-6 mb-8 w-full">
                {guideCards.map((card, index) => (
                    <Card
                        key={index}
                        className="flex-1 bg-neutral-100 border border-neutral-700 opacity-50 rounded-xl border-none"
                    >
                        <CardContent className="p-4 sm:p-6">
                            <h3 className="[font-family:'Fraunces',Helvetica] font-medium text-black text-base sm:text-lg">
                                {card.title}
                            </h3>
                            <p className="[font-family:'Fraunces',Helvetica] font-light text-black text-sm sm:text-base mt-2">
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
                <Button className="bg-[#552200] hover:bg-[#441a00] text-white font-['Fraunces',Helvetica] font-medium text-2xl px-12 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                    add me to the channel!
                </Button>
            </a>
        </section>
    );
};
