import { assets } from "@/assets/assets";
import Image from "next/image";

function Footer() {
    return (
        <footer className="bg-black/50">
            <div className="px-6 md:px-16 lg:px-32 flex flex-col lg:flex-row items-start justify-center gap-10 pt-10 pb-6 border-b border-gray-600">
                <div className="w-4/5">
                    <Image 
                        src={assets.logo}
                        alt="Logo"
                        className="w-30 md:w-35 lg:w-40 pb-4"
                    />
                    <p className="text-[13px] lg:text-[14px] text-gray-400">
                        We focus on innovation, stability, and scalability — enabling
                        organizations to accelerate releases without compromising quality.
                    </p>
                </div>

                <div className="w-1/2">
                    <h2 className="font-bold pb-4">Company</h2>

                    <div className="text-sm text-gray-400">
                        <ul className="space-y-2">
                            <li className="hover:text-white hover:underline">
                                <a href="/">Home</a>
                            </li>
                            <li className="hover:text-white hover:underline">
                                <a href="/">About us</a>
                            </li>
                            <li className="hover:text-white hover:underline">
                                <a href="/">Contact us</a>
                            </li>
                            <li className="hover:text-white hover:underline">
                                <a href="/">Privacy policy</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-1/2">
                    <h2 className="font-bold pb-4">Get in touch</h2>
                    <div className="text-sm text-gray-400">
                        <ul className="space-y-2">
                            <li>
                                <p>+91 98765 43210</p>
                            </li>
                            <li>
                                <p>contact@testingtool.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-3" >
                <p className="text-[12px] text-center text-gray-500">© 2026 Testing tool</p>
            </div>
        </footer>
    )
}

export default Footer;