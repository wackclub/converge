import React from "react";

export const Footer = (): JSX.Element => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-10 bg-[#3d3028] text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="[font-family:'Chivo',Helvetica] font-semibold text-2xl mb-2">CONVERGE</h3>
                        <p className="[font-family:'Chivo',Helvetica] font-light text-sm opacity-80">
                            MADE WITH {"<3"} BY <a href="https://skyfall.dev/" className="underline" target="_blank">SKYFALL</a>
                            <br />
                            <span>THANKS TO <a href="https://www.jukeboxprint.com/custom-stickers" className="underline">JUKEBOX</a> FOR THE STICKERS!</span>
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <p className="[font-family:'Chivo',Helvetica] font-light text-sm opacity-80">
                            &copy; {currentYear} Hack Club
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
