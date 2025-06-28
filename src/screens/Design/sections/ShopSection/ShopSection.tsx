import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../../components/ui/carousel";

export const ShopSection = ({ topRowCards, bottomRowCards }): JSX.Element => {
    return (
        <section className="w-full py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-[#f0f0ff] border-t border-b border-[#e2e2e2]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-6xl text-center [font-family:'Fraunces',Helvetica] font-bold text-[#552200] mb-4">
                    The Emporium
                </h2>
                <p className="font-['Fraunces',Helvetica] text-[#552200] text-2xl text-center mb-10 text-pretty">
                    Spend your hard-earned tokens for some awesome rewards!
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
                    <p className="text-xs text-[#552200]/60 [font-family:'Fraunces',Helvetica]">
                        ← Swipe to see more →
                    </p>
                </div>
            </div>
        </section>
    );
};