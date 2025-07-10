import React from "react";
import { Footer } from "./sections/Footer";
import { HelpSection } from "./sections/HelpSection";
import { FaqSection } from "./sections/FaqSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { IdeasSection } from "./sections/IdeasSection";
import { ShopSection } from "./sections/ShopSection";
import {
    SiHetzner,
    SiVercel,
    SiSupabase,
    SiAnthropic,
    SiCloudflare,
    SiDigitalocean,
    SiGoogleplay,
} from "@icons-pack/react-simple-icons";

export const Design = (): JSX.Element => {
    const topRowCards = [
        {
            title: "$5 HETZNER CREDITS",
            description:
                "HOST YOUR NEXT PROJECT WITH HETZNER (ONE OF THE BEST BUDGET SERVER PROVIDERS AROUND)",
            color: "bg-[#d83a2c]",
            tokens: 1,
            Icon: SiHetzner,
        },
        {
            title: "PORKBUN CREDITS",
            description:
                "GET $10 OF PORKBUN CREDITS TO BUY DOMAINS",
            color: "bg-[#ff6b35]",
            tokens: 2,
            icon: "🐷",
        },
        {
            title: "CURSOR PRO",
            description:
                "ONE MONTH OF CURSOR PRO - THE AI-POWERED CODE EDITOR",
            color: "bg-[#1e1e1e]",
            tokens: 4,
            icon: "🤖",
        },
        {
            title: "ATCHANNEL SHIRT",
            description:
                "@CHANNEL SHIRT. LIMITED EDITION",
            color: "bg-[#3ecf8e]",
            tokens: 3,
            icon: "👕",
        },
        {
            title: "GOOGLE PLAY DEVELOPER LICENSE",
            description: "PUBLISH YOUR ANDROID APPS TO THE WORLD. LIFETIME LICENSE.",
            color: "bg-[#4285F4]",
            tokens: 5,
            Icon: SiGoogleplay,
        },
    ];

    const bottomRowCards = [
        {
            title: "AI CREDITS",
            description:
                "GET $10 OF ANTHROPIC/OPENAI/OPENROUTER API CREDITS TO BUILD WITH AI MODELS",
            color: "bg-[#d97706]",
            tokens: 2,
            icon: "🤖",
        },
        {
            title: "$20 CLOUDFLARE CREDITS",
            description:
                "PERFECT FOR HOSTING WEBSITES (WITH WORKERS & PAGES), STORING IMAGES AND DATA (WITH R2 AND CF IMAGES), AND PROTECTING YOUR WEBSITES FROM DDoS ATTACKS.",
            color: "bg-[#f38020]",
            tokens: 4,
            Icon: SiCloudflare,
        },
        {
            title: "DISCORD NITRO",
            description: "ONE MONTH OF DISCORD NITRO!",
            color: "bg-[#5865F2]",
            tokens: 2,
            icon: "🎮",
        },
        {
            title: "BLAHAJ PLUSHIE",
            description: "FRIEND SHARK. DELIVERED TO YOUR DOOR.",
            color: "bg-[#0ea5e9]",
            tokens: 6,
            icon: "🦈",
        },
        {
            title: "HACK CLUB STICKERS",
            description: "STICKERS! NO EXPLANATION NEEDED HERE.",
            color: "bg-[#ec3750]",
            tokens: 1,
            icon: "🏴",
        },
        {
            title: "GREENCLOUD VPS CREDITS",
            description: "$5 CREDITS. BUDGET PROVIDER, BUT CAN HAVE BAD SUPPORT.",
            color: "bg-[#007a6d]",
            tokens: 1,
            icon: "🏴",
        },
    ];

    return (
        <main className="flex flex-col w-full bg-[#fbfaf9]" data-model-id="3:27">
            <HeroSection />
            <HowItWorksSection />
            <ShopSection topRowCards={topRowCards} bottomRowCards={bottomRowCards} />
            <IdeasSection />
            <FaqSection />
            <HelpSection />
            <Footer />
        </main>
    );
};
