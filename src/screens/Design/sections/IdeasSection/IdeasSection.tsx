import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Sparkles, Loader2 } from "lucide-react";

export const IdeasSection = (): JSX.Element => {
    const [isGenerating, setIsGenerating] = useState(false);

    // Ideas for each platform
    const [platformIdeas, setPlatformIdeas] = useState([
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
    ]);

    const generateNewIdeas = async () => {
        setIsGenerating(true);
        try {
            const response = await fetch('https://ai.hackclub.com/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [{
                        role: 'user',
                        content: `Generate 4 creative and unique bot ideas for different messaging platforms (Slack, Discord, Signal, Telegram). Each idea should be practical, fun, and something teenagers would actually want to build and use. Format your response as JSON with this structure:
[
  {"platform": "SLACK", "idea": "DESCRIPTION IN ALL CAPS"},
  {"platform": "DISCORD", "idea": "DESCRIPTION IN ALL CAPS"},
  {"platform": "SIGNAL", "idea": "DESCRIPTION IN ALL CAPS"},
  {"platform": "TELEGRAM", "idea": "DESCRIPTION IN ALL CAPS"}
]

Make the ideas creative and different from typical bots - think about things like productivity, entertainment, community building, or unique utilities that would be genuinely useful or fun. Keep the ideas short and snappy.`
                    }]
                }),
            });

            if (response.ok) {
                const data = await response.json();
                const content = data.choices[0].message.content;

                // Try to parse the JSON response
                try {
                    const newIdeas = JSON.parse(content);
                    if (Array.isArray(newIdeas) && newIdeas.length === 4) {
                        setPlatformIdeas(newIdeas);
                    }
                } catch (parseError) {
                    // If JSON parsing fails, try to extract ideas from the text
                    console.log('Failed to parse JSON, using fallback');
                }
            }
        } catch (error) {
            console.error('Error generating ideas:', error);
        } finally {
            setIsGenerating(false);
        }
    };

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
                            className="bg-[#f5e9d4] rounded-xl border-none transition-all duration-300 hover:shadow-lg"
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

                <Button
                    onClick={generateNewIdeas}
                    disabled={isGenerating}
                    className="bg-[#552200] hover:bg-[#441a00] text-white font-['Chivo_Mono',Helvetica] font-medium text-lg px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {isGenerating ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            GENERATING...
                        </>
                    ) : (
                        <>
                            <Sparkles className="mr-2 h-5 w-5" />
                            GENERATE NEW IDEAS
                        </>
                    )}
                </Button>
            </div>
        </section>
    );
};