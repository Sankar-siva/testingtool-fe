'use client'
import Image from "next/image"
import { assets } from "../../assets/assets"
import { RiFileSettingsFill } from "react-icons/ri";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

function CreateTestcase({ createModal, setCreateModal }) {
    if (!createModal) return null

    const [testcaseName, setTestcaseName] = useState("")
    const [error, setError] = useState("")

    const router = useRouter()
    const params = useParams()

    const handleCreate = () => {
        if (!testcaseName.trim()) {
            setError('Enter valid Testcase name')
            return
        }

        setError("")

        router.push(`/projects/${params.selectedId}/testcases/${encodeURIComponent(testcaseName)}`)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5" onClick={() => setCreateModal(false)}>
            <div className="w-full max-w-5xl bg-white rounded-xl p-5 shadow-2xl" onClick={(e) => e.stopPropagation()} >
                <div className="flex items-center gap-1 pb-4 border-b border-gray-300">
                    <RiFileSettingsFill className="text-[#5D1BB3] text-lg" />
                    <h1 className="text-gray-700 text-[14px] md:text-[16px]">Create new Test case</h1>
                </div>

                <div className="flex flex-col md:flex-row py-4 pt-6">
                    <div className="lg:w-1/2 pb-3 md:pb-0">
                        <label className="text-black ">
                            Testcase name <span className="text-red-500">*</span>
                        </label>
                        <p className="text-sm text-gray-400">Choose a name that best describes your Testcase.</p>
                    </div>
                    <input
                        type="text"
                        className={`w-full border rounded-lg px-4 py-3 text-black font-medium focus:outline-none focus:ring-2 
        ${error
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:ring-purple-100"
                            }`}
                        value={testcaseName}
                        onChange={(e) => {
                            setTestcaseName(e.target.value)
                            if (error) setError("")
                        }}
                    />
                </div>

                <div className="flex flex-col md:flex-row py-4">
                    <div className="md:w-1/2 pb-3 md:pb-0">
                        <label className="text-black ">
                            Add Tag <span className="text-gray-500 text-sm">(optional)</span>
                        </label>
                        <p className="text-sm text-gray-400">Add keywords to categorize this Testcase</p>
                    </div>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black font-medium focus:outline-none focus:ring-2 focus:ring-purple-100"
                    />
                </div>

                <div className="flex flex-col md:flex-row py-4">
                    <div className="md:w-1/2 pb-3 md:pb-0">
                        <label className="text-black ">
                            Add Team members
                        </label>
                        <p className="text-sm text-gray-400">Add team members who'll work with you</p>
                    </div>

                    <div>
                        <p className="text-gray-400 text-sm">No team members available</p>
                    </div>
                    {/* <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black font-medium focus:outline-none focus:ring-2 focus:ring-purple-100"
                    /> */}
                </div>

                <div className="flex flex-col md:flex-row  md:justify-end items-center gap-3 pt-2">
                    <button
                        className="bg-[#F0F0F0] w-full md:w-auto py-3 md:px-8 rounded-lg text-gray-500 hover:bg-gray-200"
                        onClick={() => setCreateModal(false)}
                    >
                        Cancel
                    </button>

                    <button
                        className="bg-[#5D1BB3] w-full md:w-auto py-3 px-6 rounded-lg hover:bg-[#50179A]"
                        onClick={handleCreate}
                    >
                        Create Test case
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateTestcase