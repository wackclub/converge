import { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Sparkles, Loader2 } from "lucide-react";

export const IdeasSection = (): JSX.Element => {
    const [isGenerating, setIsGenerating] = useState(false);

    // Ideas for each platform
    const [platformIdeas, setPlatformIdeas] = useState([
        {
            platform: "Slack",
            idea: "A meeting scheduler bot (like LettuceMeet or schej.it) that helps people decide on meeting/event times"
        },
        {
            platform: "Discord",
            idea: "A giveaway bot that gives you more raffle tickets after you complete certain tasks (like boosting a server)"
        },
        {
            platform: "Signal",
            idea: "A sticker maker bot that removes the background from images sent to it and converts it into a Signal sticker"
        },
        {
            platform: "Telegram",
            idea: "A news digest bot that subscribes to RSS feeds and gives you a summary of what's new"
        }
    ]);

    // Theme list (40 total)
    const themes = [
        "meme discovery",
        "music recs",
        "flash trivia",
        "daily jokes",
        "movie night inspo",
        "study break challenges",
        "mini coding puzzles",
        "photo-of-the-day contests",
        "emoji art battles",
        "random acts of kindness",
        "fun fact drops",
        "DIY micro-projects",
        "plant-parent check-ins",
        "eco-friendly dares",
        "street food finds",
        "fashion inspo swaps",
        "podcast highlights",
        "book club picks",
        "virtual scavenger hunts",
        "playlist mashups",
        "sport highlight recaps",
        "urban exploration tips",
        "language exchange bites",
        "coffee chat icebreakers",
        "goal-setting sprints",
        "well-being reminders",
        "career curiosity snippets",
        "street art spotlights",
        "tech hack tips",
        "craft-of-the-day",
        "taste-test swaps",
        "budget-life hacks",
        "science wonder bytes",
        "comic strip prompts",
        "flash fiction prompts",
        "photo filter duels",
        "daily haiku drops",
        "joke-off battles",
        "random compliment bot"
    ];

    const getRandomThemes = (count = 4): string[] => {
        const shuffled = [...themes].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const removeThinkTags = (content: string): string => {
        const thinkTagRegex = /^<think>.*?<\/think>\s*/s;
        return content.replace(thinkTagRegex, '').trim();
    };

    const generateNewIdeas = async () => {
        setIsGenerating(true);
        const selectedThemes = getRandomThemes();

        try {
            const response = await fetch('https://ai.hackclub.com/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [{
                        role: 'user',
                        content: `Generate 4 creative and unique bot ideas for different messaging platforms (Slack, Discord, Signal, Telegram). Each idea should be themed around **one** of the following topics: ${selectedThemes.join(", ").toUpperCase()}. Match one idea per theme.

Each idea should be practical, fun, and something teenagers would actually want to build and use. Format your response as JSON with this structure:
[
  {"platform": "Slack", "idea": "Description"},
  {"platform": "Discord", "idea": "Description"},
  {"platform": "Signal", "idea": "Description"},
  {"platform": "Telegram", "idea": "Description"}
]

ONLY output JSON. Do not add any additional information, instructions, questions etc. This means your response should always start with '['
and end with ']' (without the quotes.)`
                    }]
                }),
            });

            if (response.ok) {
                const data = await response.json();
                let content = data.choices[0].message.content;

                try {
                    // Remove <think> tags before parsing
                    content = removeThinkTags(content);
                    console.log('Cleaned content:', content);
                    
                    const newIdeas = JSON.parse(content);
                    if (Array.isArray(newIdeas) && newIdeas.length === 4) {
                        setPlatformIdeas(newIdeas);
                    } else {
                        console.log('Invalid ideas format, using fallback');
                    }
                } catch (parseError) {
                    console.log('Failed to parse JSON, using fallback:', parseError);
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
                <h2 className="text-4xl sm:text-6xl text-center [font-family:'Fraunces',Helvetica] font-bold text-[#552200] mb-4">
                    A few ideas we had...
                </h2>

                <p className="font-['Fraunces',Helvetica] text-[#552200] text-2xl text-center mb-10 text-pretty">
                    These were just suggestions - people made all sorts of amazing things!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 w-full">
                    {platformIdeas.map((item, index) => (
                        <Card
                            key={index}
                            className={`
        bg-[#f5e9d4] rounded-xl border-none transition-all duration-300 hover:shadow-lg
        ${index >= 2 ? "hidden sm:block" : ""}
      `}
                        >
                            <CardContent className="p-6">
                                <h3 className="font-['Fraunces',Helvetica] font-bold text-[#552200] text-xl mb-2">
                                    {item.platform}
                                </h3>
                                <p className="font-['Fraunces',Helvetica] text-[#552200] text-base">
                                    {item.idea}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Button
                    onClick={generateNewIdeas}
                    disabled={isGenerating}
                    className="bg-[#552200] hover:bg-[#441a00] text-white font-['Fraunces',Helvetica] font-medium text-lg px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {isGenerating ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            thinking...
                        </>
                    ) : (
                        <>
                            <Sparkles className="mr-2 h-5 w-5" />
                            generate more ideas!
                        </>
                    )}
                </Button>
            </div>
        </section>
    );
};
