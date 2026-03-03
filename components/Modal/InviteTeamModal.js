import { assets } from "@/assets/assets"
import Image from "next/image"
import { useState } from "react";

const teamMembers = [
    {
        id: 1,
        email: "sankar@gmail.com",
        username: "Sankar siva"
    },

    {
        id: 2,
        email: "srk@gmail.com",
        username: "Srk"
    },

    {
        id: 3,
        email: "siva@gmail.com",
        username: "Siva"
    },
]

function InviteTeamModal({ inviteModal, setInviteModal }) {
    if (!inviteModal) return null;

    const [emailInput, setEmailInput] = useState("")
    const [selectedMembers, setSelectedMembers] = useState([])
    const [showDropdown, setShowDropdown] = useState(false)

    const filteredMembers = teamMembers.filter(member => member.email.toLowerCase().includes(emailInput.toLowerCase()) &&
        !selectedMembers.find(m => m.id === member.id))

    const handleClick = (member) => {
        setSelectedMembers(prev => [...prev, member])
        setEmailInput("")
        setShowDropdown(false)
        console.log(member.username);

    }

    const removeMember = (id) => {
        setSelectedMembers(prev => prev.filter(m => m.id !== id))
    }


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5" onClick={() => setInviteModal(false)}>
            <div className=" w-full max-w-5xl bg-white rounded-xl p-5 shadow-2xl" onClick={(e) => e.stopPropagation()} >
                <div className="flex items-center justify-start gap-2">
                    <Image
                        src={assets.inviteIconFilled}
                        alt="invite"
                        className="w-6"

                    />
                    <p className="text-gray-700">Invite my team</p>
                </div>

                <div className="py-6 relative">

                    <p className="text-gray-700 text-[16px]">Teammate's email</p>
                    <p className="text-gray-500 text-sm">They must already have an account to be invited.</p>


                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-3 text-black font-medium focus:outline-none focus:ring-2 focus:ring-purple-100"
                        value={emailInput}
                        onChange={(e) => {
                            setEmailInput(e.target.value)
                            setShowDropdown(true)
                        }}
                    />


                    {showDropdown && emailInput && (
                        <div className="absolute bg-white w-full mt-2 border border-gray-300 p-2 rounded-xl shadow-lg max-h-40 overflow-y-auto z-50 custom-scrollbar">
                            {
                                filteredMembers.length > 0 ? (
                                    filteredMembers.map(member => (
                                        <div
                                            className="px-4 py-2 cursor-pointer border-b border-gray-300 space-y-1"
                                            onClick={() => handleClick(member)}
                                            key={member.id}
                                        >
                                            <p className="text-gray-600 text-[16px] font-semibold">{member.username}</p>
                                            <p className="text-gray-400 text-sm">{member.email}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-gray-400 text-center py-2">
                                        <p>No users found</p>
                                    </div>
                                )
                                
                            }
                        </div>
                    )}
                </div>

                {selectedMembers.length > 0 && (
                    <div className="flex flex-wrap gap-2 pb-4">
                        {selectedMembers.map(member => (
                            <div
                                key={member.id}
                                className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                            >
                                <span>{member.username}</span>
                                <button
                                    onClick={() => removeMember(member.id)}
                                    className="text-purple-500 hover:text-purple-700"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex justify-end gap-3">
                    <button
                        className="bg-[#F0F0F0] py-3 px-8 rounded-lg text-gray-500 hover:bg-gray-200"
                        onClick={() => setInviteModal(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-[#5D1BB3] py-3 px-8 rounded-lg hover:bg-[#50179A]"
                    >
                        Save
                    </button>
                </div>

                <p className="text-end text-[12px] lg:text-[14px] text-gray-500 pt-3">(They’ll receive an invitation to join your workspace)</p>
            </div>
        </div>
    )
}

export default InviteTeamModal