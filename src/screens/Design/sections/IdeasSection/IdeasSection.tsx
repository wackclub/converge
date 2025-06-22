import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const IdeasSection = (): JSX.Element => {
    // Ideas for each platform
    const platformIdeas = [
        {
            platform: "SLACK",
            idea: "A MEETING SCHEDULER BOT THAT HELPS PEOPLE FIND THE BEST TIME TO MEET BASED ON EVERYONE'S AVAILABILITY + TIMEZONES"
        },
        {
            platform: "DISCORD",
            idea: "A GAME NIGHT ORGANIZER THAT HELPS COMMUNITIES VOTE ON GAMES TO PLAY (AND AUTOMATICALLY CREATES VOICE CHANNELS)"
        },
        {
            platform: "SIGNAL",
            idea: "AN EASY-TO-USE STICKER MAKER THAT CAN REMOVE BACKGROUNDS FROM IMAGES SENT TO THE BOT"
        },
        {
            platform: "TELEGRAM",
            idea: "A DAILY NEWS DIGEST BOT THAT SENDS PERSONALIZED NEWS SUMMARIES WITH RSS FEEDS"
        }
    ];

    return (
        <section className="w-full py-14 bg-[#fffcf6] border-t border-b border-[#e2e2e2]" id="ideas">
            <div className="flex flex-col items-center max-w-4xl mx-auto px-4">
                <h2 className="text-5xl text-center [font-family:'Chivo',Helvetica] font-bold text-[#552200] mb-4">
                    A FEW IDEAS
                </h2>

                <p className="font-['Chivo_Mono',Helvetica] font-light text-[#552200] text-2xl text-center mb-10">
                    THESE ARE JUST SUGGESTIONS - YOU'RE FREE TO BUILD WHATEVER YOU WANT!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 w-full">
                    {platformIdeas.map((item, index) => (
                        <Card
                            key={index}
                            className="bg-[#f5e9d4] rounded-xl border-none"
                        >
                            <CardContent className="p-6">
                                <h3 className="font-['Chivo_Mono',Helvetica] font-medium text-[#552200] text-xl mb-2">
                                    {item.platform}
                                </h3>
                                <p className="font-['Chivo_Mono',Helvetica] font-light text-[#552200] text-base">
                                    {item.idea}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
