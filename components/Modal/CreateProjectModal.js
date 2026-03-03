import { IoIosAddCircle } from "react-icons/io";

function CreateProjectModal({ openModal, setOpenModal, projectName, setProjectName, projectData, setProjectData }) {
    if (!openModal) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5" onClick={() => setOpenModal(false)}>  {/* backdrop-blur-sm */}
            <div className="w-full max-w-5xl bg-white rounded-xl p-5 shadow-2xl" onClick={(e) => e.stopPropagation()} >
                <div className="flex items-center gap-1 pb-4 border-b border-gray-300">
                    <IoIosAddCircle className="text-[#5D1BB3] text-lg" />
                    <h1 className="text-gray-700 text-[14px] lg:text-[16px]">Create new project</h1>
                </div>

                <div className="flex flex-col lg:flex-row py-4 pt-6">
                    <div className="lg:w-1/2 pb-3 lg:pb-0">
                        <label className="text-black ">
                            Project name <span className="text-red-500">*</span>
                        </label>
                        <p className="text-sm text-gray-500">Choose a name that best describes your project.</p>
                    </div>
                    <input
                        type="text"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black font-medium focus:outline-none focus:ring-2 focus:ring-purple-100"
                    />
                </div>

                <div className="flex flex-col lg:flex-row py-4">
                    <div className="lg:w-1/2 pb-3 lg:pb-0">
                        <label className="text-black ">
                            Add team members
                        </label>
                        <p className="text-sm text-gray-500">Add teammates who will work on this project.</p>
                    </div>
                    <input
                        type="text"
                        // value={projectName}
                        // onChange={(e) => setProjectName(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-purple-100"
                    />
                </div>

                <div className="flex justify-end items-center gap-3 pt-2">
                    <button
                        className="bg-[#F0F0F0] py-3 px-8 rounded-lg text-gray-500 hover:bg-gray-200"
                        onClick={() => setOpenModal(false) }
                    >
                        Cancel
                    </button>

                    <button 
                        className="bg-[#5D1BB3] py-3 px-6 rounded-lg hover:bg-[#50179A]"
                        onClick={() => {
                            setProjectData(true)
                            setOpenModal(false)
                        }}
                    >
                        Create Project
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateProjectModal;