import Image from 'next/image'
import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { MdDone, MdGroupAdd } from 'react-icons/md'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

function MyTeamTab({ setInviteModal, inviteModal }) {
    const [showInvites, setShowInvites] = useState(false)

    const invites = ["Sankar"]


    return (
        <div className="relative flex items-center justify-center h-120 bg-gray-100 rounded-lg mt-5">
            <div className=' flex flex-col items-center gap-3'>
                <p className='text-gray-400 text-xs md:text-sm'>No Team members added yet</p>
                <button
                    className="flex items-center gap-2 p-3 rounded-lg hover:bg-[#5D1BB3] bg-[#e7d5fd] text-white group"
                    onClick={() => setInviteModal(true)}
                >
                    <Image
                        src={assets.inviteIconFilled}
                        alt="add-icon"
                        className="w-4 lg:w-6 group-hover:hidden"
                    />

                    <Image
                        src={assets.inviteIcon}
                        alt="add-icon-filled"
                        className="w-4 lg:w-6 hidden group-hover:block"
                    />


                    <p className="text-[#5D1BB3] text-[13px] lg:text-[15px] font-medium group-hover:text-white">
                        Invite Team mates
                    </p>

                </button>
            </div>


            <button
                className="absolute group text-gray-600 bottom-5 flex items-center px-5 justify-between w-[95%] cursor-pointer p-3 bg-white rounded-xl shadow-sm hover:shadow-xl"
                onClick={() => setShowInvites(prev => !prev)}
            >
                <div className="flex items-center gap-2">
                    <MdGroupAdd />
                    <p>Invites <span className='text-xs bg-red-500 p-1 px-2 text-white rounded-2xl'>{ invites.length > 0 && invites.length }</span> </p>
                </div>

                <div className="flex items-center text-sm p-1 px-2 gap-1 group-hover:text-[#5D1BB3] group-hover:bg-[#f2e8fe] rounded-lg">
                    {showInvites ? <FaChevronDown /> : <FaChevronUp />}
                    <p className="text-sm w-18 text-start">{showInvites ? "Show less" : "Show more"}</p>
                </div>
            </button>
            <div
                className={`absolute bottom-20 w-[95%] mx-auto left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg transition-all duration-300 ease-initial 
                            ${showInvites ? "p-4 opacity-100" : "p-0 opacity-0"}`}
            >
                {
                    invites.length > 0 ? (
                        invites.map((invite, index) => (
                            <div
                                className="flex flex-col md:flex-row gap-3 items-center justify-between p-2"
                                key={index}
                            >
                                <p className="text-gray-500 text-sm">You’ve been invited to join {invite}'s team</p>
                                <div className="flex gap-3">
                                    <button className="group relative flex items-center justify-center bg-red-100 p-2 px-3 w-20 rounded-lg text-red-500">
                                        <span
                                            className='absolute transition-all duration-300 ease-in-out opacity-100 translate-y-0 group-hover:opacity-0 group-hover:-translate-y-2'>
                                            Ignore
                                        </span>
                                        <IoMdClose className='absolute text-xl transition-all duration-300 ease-in-out opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0' />
                                    </button>

                                    <button className="group relative flex items-center justify-center bg-green-100 py-5 px-3 w-20 rounded-lg text-green-500">
                                        <span
                                            className='absolute transition-all duration-300 ease-in-out opacity-100 translate-y-0 group-hover:opacity-0 group-hover:-translate-y-2'>
                                            Accept
                                        </span>
                                        <MdDone className='absolute text-xl transition-all duration-300 ease-in-out opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0' />
                                    </button>
                                </div>
                            </div>
                        ))

                    ) : (
                        <div>
                            <p className='text-gray-400'>No invites found</p>
                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default MyTeamTab