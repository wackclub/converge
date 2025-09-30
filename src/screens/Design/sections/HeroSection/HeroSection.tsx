import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
    return (
        <section className="relative w-full py-20 sm:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fff3d8] via-[#ffedc4] to-[#ffe8b0]" />

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

            <div className="absolute top-20 left-5 sm:left-20 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-[#fc7e3b]/10 to-transparent rounded-full blur-2xl hidden md:block" />
            <div className="absolute bottom-20 right-5 sm:bottom-32 sm:right-32 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-[#552200]/8 to-transparent rounded-full blur-xl hidden md:block" />
            <div className="absolute top-1/3 right-5 sm:right-20 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-[#3d3028]/10 to-transparent rounded-full blur-lg hidden md:block" />

            <div className="relative flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
                <div className="relative mb-6 sm:mb-8">
                    <h1
                        className="[font-family:'Fraunces',Helvetica] font-bold text-[#552200] text-4xl sm:text-6xl lg:text-8xl tracking-wide leading-tight"
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

                    <div
                        className="absolute -bottom-2 left-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#fc7e3b] to-transparent transform -translate-x-1/2"
                        style={{
                            boxShadow: '0 0 20px rgba(252, 126, 59, 0.4)'
                        }}
                    />
                </div>

                <h2
                    className="[font-family:'Fraunces',Helvetica] font-semibold text-[#552200] text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide leading-relaxed mb-6 sm:mb-8"
                    style={{
                        textShadow: '0 3px 15px rgba(85, 34, 0, 0.15)'
                    }}
                >
                    Built bots, won prizes 🎉
                </h2>

                <p className="[font-family:'Fraunces',Helvetica] font-medium text-[#552200] text-lg sm:text-xl md:text-2xl tracking-wide leading-relaxed mb-12 sm:mb-16">
                    (Converge has ended - thanks for being awesome!)
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full sm:w-auto">
                    <div className="relative group w-full sm:w-auto">
                        <Button
                            disabled
                            className="relative h-16 sm:h-20 w-full sm:w-72 bg-gradient-to-r from-[#fc7e3b]/40 to-[#ff6b28]/40 rounded-xl [font-family:'Fraunces',Helvetica] font-bold text-white/60 text-lg sm:text-2xl shadow-xl cursor-not-allowed"
                            style={{
                                boxShadow: '0 12px 40px rgba(252, 126, 59, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <span className="relative z-10 [font-family:'Fraunces',Helvetica]">signups closed :(</span>

                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 to-white/3" />
                        </Button>

                        <img
                            className="w-12 h-12 sm:w-16 sm:h-16 absolute -left-6 -top-6 object-cover transform rotate-6 opacity-50 hidden sm:block"
                            style={{
                                filter: 'drop-shadow(0 6px 15px rgba(252, 126, 59, 0.2)) grayscale(50%)'
                            }}
                            alt="Decorative element"
                            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/5faf84562045e3887c2c92757e5218e172e747bc_image.png"
                        />
                    </div>

                    <Button
                        disabled
                        className="relative h-16 sm:h-20 w-full sm:w-72 bg-gradient-to-r from-[#3d3028]/40 to-[#2a221a]/40 rounded-xl [font-family:'Fraunces',Helvetica] font-bold text-white/60 text-lg sm:text-2xl shadow-xl overflow-hidden cursor-not-allowed"
                        style={{
                            boxShadow: '0 12px 40px rgba(61, 48, 40, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                        }}
                    >
                        <span className="relative z-10">submissions closed</span>

                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/3 to-white/5" />
                    </Button>
                </div>
                <p className="[font-family:'Chivo_Mono',Helvetica] text-[#552200] text-md tracking-wide leading-relaxed mt-8">This was for teens aged 18 and under in the Hack Club community.<br />Check out <a href="https://hackclub.com/slack" className="underline">Hack Club Slack</a> for future events!</p>
            </div>
        </section>
    );
};
