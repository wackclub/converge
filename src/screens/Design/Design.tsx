import React from "react";
import { Footer } from "./sections/Footer";
import { HelpSection } from "./sections/HelpSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { IdeasSection } from "./sections/IdeasSection";
import { ShopSection } from "./sections/ShopSection";

export const Design = (): JSX.Element => {
    return (
        <main className="flex flex-col w-full bg-[#fbfaf9]" data-model-id="3:27">
            <HeroSection />
            <HowItWorksSection />
            <ShopSection />
            <IdeasSection />    
            <HelpSection />
            <Footer />
        </main>
    );
};
