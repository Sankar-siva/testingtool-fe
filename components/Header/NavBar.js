"use client"

import Image from "next/image";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function NavBar() {
    const router = useRouter()

    const [openLogin, setOpenLogin] = useState(false)

    const handleLogin = () => {
        router.push("/sign-in")
    }

    return (
        <nav className="relative flex justify-between items-center px-6 md:px-16 lg:px-32 py-6">
            <div>
                <Image
                    src={assets.logo}
                    alt="Logo"
                    className="w-35 lg:w-45 cursor-pointer"
                />
            </div>

            <div className=" gap-3  ">
                <button
                    className="py-1 px-4 md:py-2 md:px-6 bg-white text-[#5D1BB3] hover:bg-gray-300 rounded-lg cursor-pointer"
                    onClick={handleLogin}    
                >
                    Log in
                </button>

                {/* <button className="py-2 px-6 bg-[#5D1BB3] hover:bg-[#360a6f] text-white rounded-lg cursor-pointer">
                    Sign up
                </button> */}
                {/* <SignedOut>
                    <SignInButton>
                        <button className="py-2 px-6 bg-white text-[#5D1BB3] hover:bg-gray-300 rounded-lg cursor-pointer" >
                            Log in
                        </button>
                    </SignInButton>
                    <SignUpButton>
                        <button className="py-2 px-6 bg-[#5D1BB3] hover:bg-[#360a6f] text-white rounded-lg cursor-pointer">
                            Sign up
                        </button>
                    </SignUpButton>
                </SignedOut> */}


            </div>

            {/* <div className="lg:hidden">
                <button onClick={() => setOpenLogin(!openLogin)}>
                    <Image
                        src={openLogin ? assets.closeIcon : assets.profileIcon}
                        alt="Profile icon"
                        className="bg-white p-1 rounded-lg w-7"
                    />
                </button>

            </div> */}

            {/* {
                openLogin && (
                    <div className="absolute w-full left-0 top-full flex flex-col px-6 py-5 gap-3 bg-black/20 backdrop-blur-lg shadow-lg">
                        <button className="py-2 px-6 bg-white text-[#5D1BB3] rounded-lg cursor-pointer" >
                            Log in
                        </button>

                        <button className="py-2 px-6 bg-[#5D1BB3] hover:bg-[#360a6f] text-white rounded-lg cursor-pointer">
                            Sign up
                        </button>
                    </div>
                )
            } */}
        </nav>
    )
}

export default NavBar;