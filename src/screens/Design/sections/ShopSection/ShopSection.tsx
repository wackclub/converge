import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../../components/ui/carousel";

export const ShopSection = (): JSX.Element => {
    // Define card data to avoid repetition
    const shopCards = [
        {
            title: "$5 HETZNER CREDITS",
            description:
                "INCREDIBLY GOOD BUDGET HOSTING. GET YOUR NEXT PROJECT UP FOR THE WORLD TO USE!",
        },
        {
            title: "CUSTOM DISCORD BOT",
            description:
                "GET A PERSONALIZED DISCORD BOT BUILT FOR YOUR SERVER BY OUR EXPERT TEAM!",
        },
        {
            title: "1-HOUR MENTORSHIP",
            description:
                "BOOK A 1-HOUR MENTORSHIP SESSION WITH AN EXPERIENCED CHATBOT DEVELOPER!",
        },
        {
            title: "PREMIUM SLACK THEME",
            description:
                "UNLOCK A SET OF EXCLUSIVE SLACK THEMES TO CUSTOMIZE YOUR WORKSPACE!",
        },
        {
            title: "AI MODEL FINE-TUNING",
            description:
                "GET HELP FINE-TUNING AN AI MODEL FOR YOUR SPECIFIC USE CASE!",
        },
        {
            title: "CODE REVIEW",
            description:
                "HAVE YOUR CHATBOT CODE REVIEWED BY A PROFESSIONAL DEVELOPER!",
        },
        {
            title: "DIGITAL SWAG PACK",
            description:
                "RECEIVE A PACK OF DIGITAL GOODIES INCLUDING WALLPAPERS, ICONS, AND MORE!",
        },
        {
            title: "CHATBOT WORKSHOP",
            description:
                "JOIN AN EXCLUSIVE ONLINE WORKSHOP TO LEVEL UP YOUR CHATBOT SKILLS!",
        },
    ];

    return (
        <section className="w-full py-16 bg-gradient-to-b from-white to-[#f0f0ff] border-t border-b border-[#e2e2e2]">
            <div className="container mx-auto px-4">
                <h2 className="text-6xl text-center [font-family:'Chivo',Helvetica] font-bold text-[#552200] mb-4">
                    THE EMPORIUM
                </h2>
                <p className="text-xl text-center [font-family:'Chivo_Mono',Helvetica] font-light text-[#552200] mb-12">
                    SPEND YOUR HARD-EARNED TOKENS ON THESE AWESOME REWARDS!
                </p>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-5xl mx-auto"
                >
                    <CarouselContent>
                        {shopCards.map((card, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="bg-[#6b6de8] rounded-xl border-none h-[250px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                        <CardContent className="p-6 flex flex-col justify-between h-full">
                                            <h3 className="[font-family:'Chivo_Mono',Helvetica] font-semibold text-white text-2xl mb-3">
                                                {card.title}
                                            </h3>
                                            <p className="[font-family:'Chivo_Mono',Helvetica] font-light text-white text-sm flex-grow">
                                                {card.description}
                                            </p>
                                            <div className="mt-4 text-right">
                                                <span className="[font-family:'Chivo_Mono',Helvetica] font-bold text-white text-lg">
                                                    🪙 {Math.floor(Math.random() * 5) + 1} TOKENS
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
};
