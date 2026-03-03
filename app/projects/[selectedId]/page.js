"use client"
import React, { useState } from 'react'
import LoggedInHeader from "../../../components/Header/LoggedInHeader"
import FooterLoggedIn from "../../../components/Footer/FooterLoggedIn"
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { assets } from '../../../assets/assets'
import { IoAddCircle, IoArrowBackOutline, IoPlay, IoPlayCircle, IoPlaySharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import CreateTestcase from '../../../components/Modal/CreateTestcase'
import ProjectSettings from '../../../components/Modal/ProjectSettings'
import { GrDocumentConfig, GrDocumentPdf } from 'react-icons/gr'
import { FaEye } from 'react-icons/fa'
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi'
import { MdDownload } from 'react-icons/md'

const testcaseData = [
    {
        id: 1,
        testcaseName: "Login flow",
        reportName: "LoginFlow"
    },

    {
        id: 2,
        testcaseName: "Register page",
        reportName: "Registerpage"
    },


]


function ProjectDetails() {
    const params = useParams()
    const router = useRouter()

    const [createModal, setCreateModal] = useState(false)
    const [settingsModal, setSettingsModal] = useState(false)


    const selectedValue = decodeURIComponent(params.selectedId)
    console.log(selectedValue);

    const isDisabled = testcaseData.length === 0



    return (
        <>
            <LoggedInHeader />
            <div className="flex items-center justify-center px-6  lg:px-16 py-3 lg:py-5">
                <div className="w-full bg-white rounded-xl p-5">
                    <div className='flex items-center gap-4 pb-3'>
                        <div className='flex items-center gap-2'>
                            <button
                                className='group cursor-pointer p-1 hover:bg-[#DEC7FB] rounded'
                                onClick={() => router.back()}
                            >
                                <IoArrowBackOutline
                                    className='text-gray-600 text-xl group-hover:text-[#5D1BB3]'
                                />
                            </button>
                            <div className='flex flex-col items-start md:flex-row md:items-center md:gap-2'>
                                <h2 className='text-gray-600 font-semibold text-sm'>{selectedValue}</h2>
                                <p className='text-gray-500 text-xs'>(1 test cases)</p>
                            </div>
                        </div>

                        <button
                            className='flex text-gray-600 items-center justify-center cursor-pointer p-1 px-3 bg-gray-200 rounded hover:bg-[#DEC7FB] hover:text-[#5D1BB3]'
                            // onClick={() => router.push(`/projects/${selectedValue}/project-settings`)}
                            onClick={() => setSettingsModal(true)}
                        >
                            <IoIosSettings className='text-xl lg:text-base' />
                            <p className='hidden lg:block text-sm'>Project settings</p>
                        </button>
                    </div>

                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='relative bg-gray-100 h-120 rounded-lg md:w-1/2 p-3 flex flex-col'>
                            <h1 className='text-gray-500 text-sm md:text-[16px] pb-2 '>Test cases</h1>

                            <div className='absolute flex gap-3 bottom-5 right-5 '>
                                <button
                                    disabled={isDisabled}
                                    className={`flex items-center gap-1 p-2 rounded-lg text-sm
                                    ${isDisabled
                                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                            : "bg-[#E9D9FE] text-[#5D1BB3] hover:cursor-pointer hover:bg-[#dcc5fb]"
                                        }`}
                                >
                                    <IoPlay />
                                    <p>Run all</p>
                                </button>

                                <button
                                    disabled={isDisabled}
                                    className={`flex items-center gap-1 p-2 rounded-lg text-sm
                                    ${isDisabled
                                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                            : "bg-[#5D1BB3] text-white hover:cursor-pointer hover:bg-[#490e96]"
                                        }`}
                                    onClick={() => setCreateModal(true)}
                                >
                                    <IoAddCircle />
                                    <p>Create Testcase</p>
                                </button>
                            </div>


                            <div className='overflow-y-auto custom-scrollbar'>
                                {
                                    testcaseData.length > 0 ? (
                                        testcaseData.map((data) => (
                                            <div
                                                key={data.id}
                                                className='flex bg-white justify-between p-2 rounded-lg shadow-sm text-gray-500 items-center hover:cursor-pointer my-2'

                                            >
                                                <div className='flex items-center gap-2'>
                                                    <GrDocumentConfig />
                                                    <p>{data.testcaseName}</p>
                                                </div>

                                                <button className='cursor-pointer hover:bg-[#E9D9FE] p-2 hover:text-[#5D1BB3] rounded-lg'>
                                                    <IoPlaySharp />
                                                </button>

                                            </div>
                                        ))
                                    ) : (
                                        <button
                                            className='flex items-center gap-1 p-3 bg-white w-full rounded-lg hover:bg-[#E9D9FE] text-[#5D1BB3]'
                                            onClick={() => setCreateModal(true)}
                                        >
                                            <IoAddCircle />
                                            <p className='text-sm'>Create new test case</p>
                                        </button>
                                    )
                                }

                            </div>




                        </div>

                        <div className='relative bg-gray-100 h-120 rounded-lg md:w-1/2 p-3 flex flex-col'>
                            <h1 className='text-gray-500 text-sm md:text-[16px]  pb-2 '>Reports</h1>

                            <div className='absolute flex gap-3 bottom-5 right-5 '>
                                <button
                                    disabled={isDisabled}
                                    className={`flex items-center gap-1 p-2 rounded-lg text-sm
                                    ${isDisabled
                                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                            : "bg-[#E9D9FE] text-[#5D1BB3] hover:cursor-pointer hover:bg-[#dcc5fb]"
                                        }`}
                                >
                                    <MdDownload />
                                    <p>Download all</p>
                                </button>
                            </div>
                            <div className='overflow-y-auto custom-scrollbar'>
                                {
                                    testcaseData.length > 0 ? (
                                        testcaseData.map((data) => (
                                            <div
                                                key={data.id}
                                                className='flex bg-white justify-between p-2 rounded-lg shadow-sm text-gray-500 items-center hover:cursor-pointer my-2'

                                            >
                                                <div className='flex items-center gap-2'>
                                                    <PiMicrosoftExcelLogoFill />
                                                    <p>{data.reportName}</p>
                                                </div>

                                                <div>
                                                    <button className='cursor-pointer hover:bg-[#E9D9FE] p-2 hover:text-[#5D1BB3] rounded-lg'>
                                                        <MdDownload />
                                                    </button>
                                                    <button className='cursor-pointer hover:bg-[#E9D9FE] p-2 hover:text-[#5D1BB3] rounded-lg'>
                                                        <FaEye />
                                                    </button>
                                                </div>


                                            </div>
                                        ))
                                    ) : (
                                        <div className="flex h-100 flex-col items-center justify-center gap-2">
                                            <Image
                                                src={assets.reportsIcon}
                                                alt="No_reports"
                                                className="w-12 lg:w-16"
                                            />
                                            <p className="text-gray-500 text-[13px] lg:text-[15px] font-medium">No reports available</p>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>

                    <ProjectSettings
                        settingsModal={settingsModal}
                        setSettingsModal={setSettingsModal}
                    />


                </div>
            </div>

            <CreateTestcase
                createModal={createModal}
                setCreateModal={setCreateModal}


            />

            <FooterLoggedIn />
        </>
    )
}

export default ProjectDetails
