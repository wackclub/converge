import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
    return (
        <section className="relative w-full py-20 sm:py-32 overflow-hidden">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#fff3d8] via-[#ffedc4] to-[#ffe8b0]" />

            {/* Geometric Patterns (hidden on mobile) */}
            <div className="absolute inset-0 opacity-5 hidden sm:block">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#552200" strokeWidth="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Subtle decorative elements (show on md+) */}
            <div className="absolute top-20 left-5 sm:left-20 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-[#fc7e3b]/10 to-transparent rounded-full blur-2xl hidden md:block" />
            <div className="absolute bottom-20 right-5 sm:bottom-32 sm:right-32 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-[#552200]/8 to-transparent rounded-full blur-xl hidden md:block" />
            <div className="absolute top-1/3 right-5 sm:right-20 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-[#3d3028]/10 to-transparent rounded-full blur-lg hidden md:block" />

            <div className="relative flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
                {/* Enhanced Main Title */}
                <div className="relative mb-6 sm:mb-8">
                    <h1
                        className="[font-family:'Chivo',Helvetica] font-bold text-[#552200] text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wide leading-tight"
                        style={{
                            textShadow: '0 6px 25px rgba(85, 34, 0, 0.25)',
                            background: 'linear-gradient(135deg, #552200 0%, #885544 50%, #552200 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        CONVERGE
                    </h1>

                    {/* Static underline effect */}
                    <div
                        className="absolute -bottom-2 left-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#fc7e3b] to-transparent transform -translate-x-1/2"
                        style={{
                            boxShadow: '0 0 20px rgba(252, 126, 59, 0.4)'
                        }}
                    />
                </div>

                {/* Enhanced Subtitle */}
                <h2
                    className="[font-family:'Chivo_Mono',Helvetica] font-semibold text-[#552200] text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide leading-relaxed mb-12 sm:mb-16"
                    style={{
                        textShadow: '0 3px 15px rgba(85, 34, 0, 0.15)'
                    }}
                >
                    BUILD CHATBOTS, WIN PRIZES
                </h2>

                {/* Enhanced Button Section */}
                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full sm:w-auto">
                    <div className="relative group w-full sm:w-auto">
                        <a href="https://forms.hackclub.com/converge-signup">
                            <Button
                                className="relative h-16 sm:h-20 w-full sm:w-72 bg-gradient-to-r from-[#fc7e3b] to-[#ff6b28] hover:from-[#ff6b28] hover:to-[#fc7e3b] rounded-xl [font-family:'Chivo_Mono',Helvetica] font-bold text-white text-lg sm:text-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
                                style={{
                                    boxShadow: '0 12px 40px rgba(252, 126, 59, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                                }}
                            >
                                <span className="relative z-10">SIGN UP &gt;:)</span>

                                {/* Subtle inner glow */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-white/5" />
                            </Button>
                        </a>

                        {/* Decorative image (hidden on small) */}
                        <img
                            className="w-12 h-12 sm:w-16 sm:h-16 absolute -left-6 -top-6 object-cover transform rotate-6 hover:scale-110 hover:rotate-12 transition-transform duration-200 hidden sm:block"
                            style={{
                                filter: 'drop-shadow(0 6px 15px rgba(252, 126, 59, 0.3))'
                            }}
                            alt="Decorative element"
                            src="https://c.animaapp.com/mc7vj4gxgq9MVb/img/image-1.png"
                        />
                    </div>

                    <a href="#ideas" className="group w-full sm:w-auto">
                        <Button
                            className="relative h-16 sm:h-20 w-full sm:w-72 bg-gradient-to-r from-[#3d3028] to-[#2a221a] hover:from-[#2a221a] hover:to-[#3d3028] rounded-xl [font-family:'Chivo_Mono',Helvetica] font-bold text-white text-lg sm:text-xl shadow-2xl transform hover:scale-105 transition-all duration-200 overflow-hidden"
                            style={{
                                boxShadow: '0 12px 40px rgba(61, 48, 40, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <span className="relative z-10">I NEED IDEAS!</span>

                            {/* Subtle inner glow */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 to-white/10" />
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
};
