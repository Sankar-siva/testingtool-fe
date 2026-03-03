import ModalContainer from "../../utils/ui/ModalContainer"
import { IoIosSettings } from "react-icons/io";


function ProjectSettings({ settingsModal, setSettingsModal }) {
    return (
        <ModalContainer
            openModal={settingsModal}
            onClick={() => setSettingsModal(false)}
        >
            <div className="flex items-center gap-1 pb-4 border-b border-gray-300">
                <IoIosSettings className="text-[#5D1BB3] text-lg" />
                <h1 className="text-gray-700 text-[14px] lg:text-[16px]">Project settings</h1>
            </div>

            <div className="flex flex-col md:flex-row  md:justify-end items-center gap-3 pt-2">
                <button
                    className="bg-[#F0F0F0] w-full md:w-auto py-3 md:px-8 rounded-lg text-gray-500 hover:bg-gray-200"
                    onClick={() => setSettingsModal(false)}
                >
                    Close
                </button>

                <button
                    className="bg-[#5D1BB3] w-full md:w-auto py-3 px-6 rounded-lg hover:bg-[#50179A]"
                >
                    Save
                </button>
            </div>
        </ModalContainer>
    )
}

export default ProjectSettings