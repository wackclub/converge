import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
    return (
        <section className="relative w-full py-32 bg-[#fff3d8]">
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                <h1 className="[font-family:'Chivo',Helvetica] font-semibold text-[#552200] text-9xl tracking-[0] leading-normal">
                    CONVERGE
                </h1>

                <h2 className="[font-family:'Chivo_Mono',Helvetica] font-semibold text-[#552200] text-4xl tracking-[0] leading-normal">
                    BUILD CHATBOTS, WIN PRIZES
                </h2>

                <div className="flex items-start gap-6 mt-12">
                    <div className="relative">
                        <Button className="h-[77px] w-[261px] bg-[#fc7e3b] hover:bg-[#fc7e3b]/90 rounded [font-family:'Chivo_Mono',Helvetica] font-medium text-white text-2xl">
                            SIGN UP &gt;:)
                        </Button>
                        <img
                            className="w-[67px] h-[67px] absolute -left-6 -top-4 object-cover"
                            style={{ transform: 'rotate(4deg)' }}
                            alt="Image"
                            src="https://c.animaapp.com/mc7vj4gxgq9MVb/img/image-1.png"
                        />
                    </div>

                    <a href="#ideas">
                        <Button
                            variant="default"
                            className="h-[77px] w-[261px] bg-[#3d3028] hover:bg-[#3d3028]/90 rounded [font-family:'Chivo_Mono',Helvetica] font-medium text-white text-2xl"
                        >
                            I NEED IDEAS!
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
};
