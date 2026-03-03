"use client"

import Image from "next/image";
import { assets } from "../../assets/assets"
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";

function LoggedInHeader() {
    const [showModal, setShowModal] = useState(false)

    return (
        <header className="relative flex items-center justify-between px-5 lg:px-16 py-5 text-gray-600 bg-white shadow-sm z-50" >
            <div className=" flex gap-2 items-center">
                <Image
                    src={showModal ? assets.closeIcon : assets.navIcon}
                    alt="nav-icon"
                    className="lg:hidden w-6"
                    onClick={() => setShowModal(!showModal)}
                />

                <Image
                    src={assets.logo}
                    alt="logo"
                    className="w-28 lg:w-38 cursor-pointer"

                />
            </div>

            <div className="flex items-center justify-center gap-3">
                <button className="group hidden lg:flex items-center gap-2 px-2 py-2 rounded-sm hover:bg-[#f2e8fe]">
                    <Image
                        src={assets.docsIcon}
                        alt="invite_icon"
                        className="w-6"
                    />
                    <p className="group-hover:text-black">See documentation</p>
                </button>

                <button className="group hidden lg:flex px-2 py-2 rounded-sm items-center gap-2 hover:bg-[#f2e8fe]">
                    <Image
                        src={assets.helpIcon}
                        alt="Help_icon"
                        className="w-6"

                    />
                    <p className="group-hover:text-black">Help & support</p>
                </button>

                <UserButton />

                {
                    showModal && (
                        <div className="absolute w-full top-full left-0  bg-white/90 backdrop-blur-lg border-t shadow-sm">
                            <button className="flex w-full items-center gap-2 py-3 rounded-sm hover:bg-[#f2e8fe] px-6">
                                <Image
                                    src={assets.docsIcon}
                                    alt="invite_icon"
                                    className="w-6"
                                />
                                <p className="text-[15px]">Invite my team</p>
                            </button>

                            <button className="flex w-full px-6 py-3 rounded-sm items-center gap-2 hover:bg-[#f2e8fe]">
                                <Image
                                    src={assets.helpIcon}
                                    alt="Help_icon"
                                    className="w-6"

                                />
                                <p className="text-[15px]">Help & support</p>
                            </button>
                        </div>
                    )
                }

            </div>
        </header>
    )
}

export default LoggedInHeader;