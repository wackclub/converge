import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../../components/ui/carousel";

import {
    SiHetzner,
    SiVercel,
    SiSupabase,
    SiAnthropic,
    SiCloudflare,
    SiDigitalocean,
    SiGoogleplay,
} from "@icons-pack/react-simple-icons";

const topRowCards = [
    {
        title: "$5 HETZNER CREDITS",
        description:
            "HOST YOUR NEXT PROJECT WITH HETZNER (ONE OF THE BEST BUDGET SERVER PROVIDERS AROUND)",
        color: "bg-[#d83a2c]", // Hetzner red
        tokens: 1,
        Icon: SiHetzner,
    },
    {
        title: "PORKBUN CREDITS",
        description:
            "GET $10 OF PORKBUN CREDITS TO BUY DOMAINS",
        color: "bg-[#ff6b35]", // Porkbun orange
        tokens: 2,
        icon: "🐷",
    },
    {
        title: "VERCEL PRO",
        description:
            "DEPLOY YOUR PROJECTS WITH VERCEL PRO FOR ONE MONTH!",
        color: "bg-[#000000]", // Vercel black
        tokens: 4,
        Icon: SiVercel,
    },
    {
        title: "CURSOR PRO",
        description:
            "ONE MONTH OF CURSOR PRO - THE AI-POWERED CODE EDITOR!",
        color: "bg-[#1e1e1e]", // Cursor dark theme
        tokens: 4,
        icon: "🤖",
    },
    {
        title: "SUPABASE PRO",
        description:
            "ONE MONTH OF SUPABASE PRO FOR YOUR DATABASE & AUTH NEEDS!",
        color: "bg-[#3ecf8e]", // Supabase green
        tokens: 5,
        Icon: SiSupabase,
    },
    {
        title: "GOOGLE PLAY DEVELOPER LICENSE",
        description: "PUBLISH YOUR ANDROID APPS TO THE WORLD!",
        color: "bg-[#4285F4]", // Google blue
        tokens: 5,
        Icon: SiGoogleplay,
    },
];

const bottomRowCards = [
    {
        title: "ANTHROPIC CREDITS",
        description:
            "GET $10 OF ANTHROPIC API CREDITS TO BUILD WITH CLAUDE!",
        color: "bg-[#d97706]", // Anthropic orange/amber
        tokens: 2,
        Icon: SiAnthropic,
    },
    {
        title: "$20 CLOUDFLARE CREDITS",
        description:
            "PERFECT FOR HOSTING WEBSITES (WITH WORKERS & PAGES), STORING IMAGES AND DATA (WITH R2 AND CF IMAGES), AND PROTECTING YOUR WEBSITES FROM DDoS ATTACKS.",
        color: "bg-[#f38020]", // Cloudflare orange
        tokens: 4,
        Icon: SiCloudflare,
    },
    {
        title: "DIGITALOCEAN CREDITS",
        description:
            "GET $25 OF DIGITALOCEAN CREDITS FOR CLOUD INFRASTRUCTURE!",
        color: "bg-[#0080ff]", // DigitalOcean blue
        tokens: 5,
        Icon: SiDigitalocean,
    },
    {
        title: "DISCORD NITRO",
        description: "ONE MONTH OF DISCORD NITRO!",
        color: "bg-[#5865F2]", // Discord blurple
        tokens: 2,
        icon: "🎮",
    },
    {
        title: "SMOLHAJ PLUSHIE",
        description: "FRIEND SHARK. DELIVERED TO YOUR DOOR.",
        color: "bg-[#0ea5e9]", // Ocean blue for shark
        tokens: 6,
        icon: "🦈",
    },
    {
        title: "HACK CLUB STICKERS",
        description: "EXCLUSIVE HACK CLUB STICKER PACK!",
        color: "bg-[#ec3750]", // Hack Club red
        tokens: 1,
        icon: "🏴",
    },
];

export const ShopSection = (): JSX.Element => {
    return (
        <section className="w-full py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-[#f0f0ff] border-t border-b border-[#e2e2e2]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center [font-family:'Chivo',Helvetica] font-bold text-[#552200] mb-2 sm:mb-4">
                    THE EMPORIUM
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center [font-family:'Chivo_Mono',Helvetica] font-light text-[#552200] mb-8 sm:mb-10 lg:mb-12 px-4">
                    SPEND YOUR HARD-EARNED TOKENS ON THESE AWESOME REWARDS!
                </p>

                {/* Top Row Carousel */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto mb-6"
                >
                    <CarouselContent className="-ml-2 sm:-ml-4">
                        {topRowCards.map((card, index) => (
                            <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className={`${card.color} rounded-xl border-none h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                                        <CardContent className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between h-full">
                                            <div className="flex items-center gap-3 mb-2 sm:mb-3">
                                                {card.Icon ? (
                                                    <card.Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                                                ) : (
                                                    <span className="text-2xl sm:text-3xl">{card.icon}</span>
                                                )}
                                                <h3 className="[font-family:'Chivo_Mono',Helvetica] font-semibold text-white text-lg sm:text-xl lg:text-2xl leading-tight">
                                                    {card.title}
                                                </h3>
                                            </div>
                                            <p className="[font-family:'Chivo_Mono',Helvetica] font-light text-white text-xs sm:text-sm flex-grow leading-relaxed">
                                                {card.description}
                                            </p>
                                            <div className="mt-3 sm:mt-4 text-right">
                                                <span className="[font-family:'Chivo_Mono',Helvetica] font-bold text-white text-sm sm:text-base lg:text-lg">
                                                    🪙 {card.tokens} TOKEN{card.tokens > 1 ? 'S' : ''}
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>

                {/* Bottom Row Carousel */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto"
                >
                    <CarouselContent className="-ml-2 sm:-ml-4">
                        {bottomRowCards.map((card, index) => (
                            <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className={`${card.color} rounded-xl border-none h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                                        <CardContent className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between h-full">
                                            <div className="flex items-center gap-3 mb-2 sm:mb-3">
                                                {card.Icon ? (
                                                    <card.Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                                                ) : (
                                                    <span className="text-2xl sm:text-3xl">{card.icon}</span>
                                                )}
                                                <h3 className="[font-family:'Chivo_Mono',Helvetica] font-semibold text-white text-lg sm:text-xl lg:text-2xl leading-tight">
                                                    {card.title}
                                                </h3>
                                            </div>
                                            <p className="[font-family:'Chivo_Mono',Helvetica] font-light text-white text-xs sm:text-sm flex-grow leading-relaxed">
                                                {card.description}
                                            </p>
                                            <div className="mt-3 sm:mt-4 text-right">
                                                <span className="[font-family:'Chivo_Mono',Helvetica] font-bold text-white text-sm sm:text-base lg:text-lg">
                                                    🪙 {card.tokens} TOKEN{card.tokens > 1 ? 'S' : ''}
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>

                {/* Mobile swipe indicator */}
                <div className="flex sm:hidden justify-center mt-4">
                    <p className="text-xs text-[#552200]/60 [font-family:'Chivo_Mono',Helvetica]">
                        ← Swipe to see more →
                    </p>
                </div>
            </div>
        </section>
    );
};