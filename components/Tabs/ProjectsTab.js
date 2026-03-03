import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoIosAddCircleOutline, IoMdAdd, IoMdAddCircle } from 'react-icons/io'

const projects = [
    {
        id: 1,
        name: "MyWeb-Testcase",
        createdBy: "Siva"
    },

    {
        id: 2,
        name: "MyWeb-Testcase2",
        createdBy: "sankar"
    },
]

function ProjectsTab({ openModal, setOpenModal }) {
    const router = useRouter()

    return (
        <div className="flex items-center justify-center h-120 bg-gray-100 rounded-lg mt-5">
            {
                projects.length > 0 ? (
                    <div className="relative h-120 w-full px-3 pb-5">
                        <div className="flex flex-col h-full overflow-y-auto custom-scrollbar pr-2">

                            <button
                                className="absolute right-8 bottom-8 flex items-center rounded-3xl gap-1 py-3 px-3 hover:shadow-lg hover:bg-[#4c0f9c] bg-[#5D1BB3]"
                                onClick={() => setOpenModal(!openModal)}
                            >
                                <IoMdAdd
                                    className="text-white text-xl"
                                />

                                <p className="hidden md:block">Create new project</p>
                            </button>
                            {
                                projects.map((project) => (

                                    <div
                                        key={project.id}
                                        className="flex justify-between w-full bg-white p-3 mt-3 rounded-lg shadow-sm hover:shadow-lg"
                                        onClick={
                                            () => {
                                                router.push(`/projects/${encodeURIComponent(project.name)}`)
                                            }
                                        }
                                    >
                                        <div className="space-y-2">
                                            <p className="text-gray-700 font-bold text-sm md:text-[14px]">{project.name}</p>
                                            <p className="text-gray-500 text-xs">Created by {project.createdBy}</p>
                                        </div>
                                        <div className="text-end">
                                            <p className="hidden md:block text-gray-400 text-xs">Last updated on Feb 11</p>

                                        </div>
                                    </div>

                                ))
                            }

                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col gap-3 items-center justify-center'>
                        <p className='text-gray-400 text-xs md:text-sm'>Create your first project</p>
                    <button
                        className="flex items-center justify-center gap-1 p-3 rounded-lg hover:bg-[#5D1BB3] bg-[#e7d5fd] text-[#5D1BB3] hover:text-white group"
                        onClick={() => setOpenModal(!openModal)}
                    >

                        <IoMdAddCircle 
                            className='text-xl'
                        />


                        <p className=" text-[14px] md:text-[15px] font-medium">
                            Create new Project
                        </p>

                    </button>
                    </div>
                )
            }

        </div>
    )
}

export default ProjectsTab