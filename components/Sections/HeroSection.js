import { assets } from "@/assets/assets";
import Image from "next/image";

function HeroSection() {
    return (
        <div className="flex flex-col text-center gap-15 items-center justify-center py-12 lg:py-25">


            <div className="flex flex-col items-center gap-10">
                <div className=" bg-white flex text-black px-5 py-3 rounded-3xl">
                    <p className="text-xs md:text-sm lg:text-xl">🚀 Next-Gen Test Automation Platform</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-lg md:text-2xl lg:text-5xl font-bold text-[#5D1BB3]">Automated Testing. Simplified.</h1>
                    <p className="text-sm lg:text-lg max-w-50 lg:max-w-full text-gray-300">Record, replay, and scale your web tests in minutes — <br />
                        no complex setup, no scripting barriers
                    </p> 
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
                    <button className="group flex items-center justify-center gap-2 py-2 w-40 lg:py-4 lg:w-60 bg-[#5D1BB3] rounded-xl">
                        Get started
                        <Image 
                            src={assets.arrowIcon}
                            alt="arrow_icon"
                            className="w-4 lg:w-5 group-hover:translate-x-1 transition"
                        />
                    </button>

                    <button className="group flex items-center justify-center gap-2 py-2 w-40 lg:py-4 lg:w-60 bg-white text-[#5D1BB3] rounded-xl">
                        Request demo
                        <Image 
                            src={assets.mailIcon}
                            alt="mail_icon"
                            className="hidden w-4 lg:w-5 group-hover:block"
                        />
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3">
                <div className="flex items-center justify-center gap-1 bg-black/35 border border-gray-500 p-3 px-6 rounded-4xl">
                    <Image
                        src={assets.browserIcon}
                        alt="BrowserIcon"
                        className="w-6"
                    />
                    <p className="text-[16px] text-gray-300">Cross-Browser Support</p>
                </div>

                <div className="flex items-center justify-center gap-1 bg-black/35 border border-gray-500 p-3 px-6 rounded-4xl">
                    <Image
                        src={assets.docsIcon}
                        alt="BrowserIcon"
                        className="w-6"
                    />
                    <p className="text-[16px] text-gray-300">Detailed Reporting</p>
                </div>

                <div className="flex items-center justify-center gap-1 bg-black/35 border border-gray-500 p-3 px-6 rounded-4xl">
                    <Image
                        src={assets.teamsIcon}
                        alt="BrowserIcon"
                        className="w-6"
                    />
                    <p className="text-[16px] text-gray-300">Team collaboration</p>
                </div>
            </div>


        </div>
    )
}

export default HeroSection;