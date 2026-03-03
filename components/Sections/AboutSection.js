import { assets } from "@/assets/assets";
import Image from "next/image";

function AboutSection() {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 mb-15">
            <div>
                <Image 
                    src={assets.AboutImage}
                    alt="About image"
                    className="w-160"
                />
            </div>

            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="font-bold text-lg lg:text-3xl pb-2">Build Reliable Automated Tests Faster</h1>
                <p className="text-xs lg:text-sm text-gray-300">Our testing tool allows teams to record real user workflows and instantly transform
                    them into automated test scenarios. The platform reduces manual
                    effort while improving test accuracy and coverage.
                </p>
                <button className="py-2 lg:py-2 px-4 lg:px-6 text-sm lg:text-lg mt-5 border-2 border-[#5D1BB3] text-[#5D1BB3] font-medium rounded-lg hover:bg-[#5D1BB3] hover:text-white">
                    See documentation
                </button> 
            </div>
        </div>
    )
}

export default AboutSection;