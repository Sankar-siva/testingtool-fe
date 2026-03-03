"use client"
import { useState, useEffect } from "react"
import { MdDeleteOutline, MdEditDocument } from "react-icons/md"
import EditableStepCard from "../UI/EditableStepCard"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"

function EditTestcaseModal({ isOpen, setIsOpen, steps, setSteps }) {
    if (!isOpen) return null

    const [localSteps, setLocalSteps] = useState([])
    const [selectedRowId, setSelectedRowId] = useState(null)

    const isRowSelected = selectedRowId !== null

    // Sync when opened
    useEffect(() => {
        setLocalSteps(steps)
    }, [steps])

    const handleChange = (index, field, value) => {
        const updated = [...localSteps]
        updated[index][field] = value
        setLocalSteps(updated)
    }

    const handleSave = () => {
        setSteps(localSteps)
        setIsOpen(false)
    }

    const handleRowSelection = (rowId) => {
        setSelectedRowId(rowId)
    }

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        // onClick={() => setIsOpen(false)}
        >
            <div
                className="bg-white w-full max-w-7xl rounded-xl shadow-2xl pb-6 max-h-[80vh] overflow-y-auto custom-scrollbar"
                onClick={() => setSelectedRowId(null)}
            >
                <div className="flex items-center justify-between mb-3 px-6 py-4   border-b shadow-sm bg-white sticky top-0 z-10">
                    <div className="flex gap-2 items-center">
                        <MdEditDocument className="text-xl text-[#5D1BB3]" />
                        <h2 className="text-gray-700 text-[14px] md:text-[16px]">
                            Edit Test Steps
                        </h2>
                    </div>

                    <div className="flex gap-3">
                        <button
                            disabled={!isRowSelected}
                            className={`flex group items-center gap-1 p-1 rounded-3xl px-3 text-sm border transition-all
                                    ${isRowSelected
                                    ? "text-blue-500 border-blue-500 hover:bg-blue-50"
                                    : "text-gray-300 border-gray-200 cursor-not-allowed"}`}
                        >
                            <FaAngleUp className={`transition-transform duration-300 ease-in-out ${isRowSelected ? "group-hover:-translate-y-1" : ""}`} />
                            <span>Move up</span>
                        </button>

                        <button className={`flex group  items-center gap-1 p-1 rounded-3xl px-3 text-sm border transition-all ${isRowSelected ? "text-blue-500  border-blue-500 hover:bg-blue-50" : "text-gray-300 border border-gray-300"}`}>
                            <FaAngleDown className={`transition-transform duration-300 ease-in-out ${isRowSelected ? "group-hover:translate-y-1" : ""}`} />
                            <span>Move Down</span>
                        </button>

                        <button className={`flex items-center gap-1 p-1 rounded-3xl px-3 text-sm border transition-all ${isRowSelected ? " text-red-400  border-red-400 hover:bg-red-50" : " text-gray-300  border-gray-300"}`}>
                            <MdDeleteOutline />
                            <span>Delete</span>
                        </button>
                    </div>

                </div>


                <div className="space-y-3 px-6">
                    {localSteps.map((step, index) => (
                        <EditableStepCard
                            key={step.id}
                            step={step}
                            index={index}
                            handleChange={handleChange}
                            selectedRowId={selectedRowId}
                            setSelectedRowId={setSelectedRowId}
                            onSelect={handleRowSelection}
                        />
                    ))}
                </div>

                <div className="flex justify-end pr-6 mt-6 gap-3  sticky bottom-0 ">
                    <button
                        className="px-5 py-2 bg-gray-300 text-gray-700 rounded-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        Cancel
                    </button>

                    <button
                        className="px-5 py-2 bg-[#5D1BB3] text-white rounded-lg"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>

            </div>
        </div>
    )
}

export default EditTestcaseModal