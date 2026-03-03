'use client'
import { assets } from "@/assets/assets";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";
import CreateProjectModal from "./Modal/CreateProjectModal"
import InviteTeamModal from "./Modal/InviteTeamModal"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { MdGroupAdd } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ProjectsTab from "./Tabs/ProjectsTab"
import ReportsTab from "./Tabs/ReportsTab"
import MyTeamTab from "./Tabs/MyTeamTab"


function HomePage() {
    const [activeTab, setActiveTab] = useState("Project");
    const [openModal, setOpenModal] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [inviteModal, setInviteModal] = useState(false)
    const [projectData, setProjectData] = useState(false)

    const router = useRouter()
    

    const handleClick = () => {
        router.push(`/projects/${encodeURIComponent(projects.name)}`)
    }

    const tabs = ["Project", "Reports", "My team"]

    return (
        <div className="w-full bg-white rounded-xl p-5">
            <div className="flex gap-8 text-gray-600 font-medium">
                {
                    tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative pb-2 text-[12px] md:text-[13px] lg:text-[15px] transition-all duration-200 ${activeTab === tab
                                ? "text-purple-600"
                                : "hover:text-gray-700"
                                }`}
                        >
                            {tab}

                            {activeTab === tab && (
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-600 rounded-full" />
                            )}
                        </button>
                    ))
                }

            </div>

            {
                activeTab === "Project" && (
                    <ProjectsTab
                        openModal={openModal}
                        setOpenModal={setOpenModal}

                    />
                )
            }

            {
                activeTab === "Reports" && (
                    <ReportsTab />
                )
            }

            {
                activeTab === "My team" && (
                    <MyTeamTab
                        inviteModal={inviteModal}
                        setInviteModal={setInviteModal}
                    />
                )
            }

            <CreateProjectModal
                openModal={openModal}
                setOpenModal={setOpenModal}
                projectName={projectName}
                setProjectName={setProjectName}
                projectData={projectData}
                setProjectData={setProjectData}
            />

            <InviteTeamModal
                inviteModal={inviteModal}
                setInviteModal={setInviteModal}
            />


        </div >
    )
}

export default HomePage;