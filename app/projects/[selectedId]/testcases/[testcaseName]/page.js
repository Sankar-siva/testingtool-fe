'use client'
import { useParams, useRouter } from 'next/navigation'
import LoggedInHeader from '../../../../../components/Header/LoggedInHeader'
import { IoArrowBackOutline } from "react-icons/io5";
import Image from 'next/image';
import { assets } from '../../../../../assets/assets';
import { FaCaretDown, FaSave } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import FooterLoggedIn from '../../../../../components/Footer/FooterLoggedIn';
import { useState } from 'react';
import EditTestcaseModal from '../../../../../components/Modal/EditTestcaseModal';

const stepsData = [
  {
    id: 1,
    action: "Open browser",
    object: "Chrome",
    input: "",
    description: "Launch browser"
  },
  {
    id: 2,
    action: "Click",
    object: "Login button",
    input: "",
    description: "Click login"
  },

  {
    id: 3,
    action: "Click",
    object: "Login button",
    input: "",
    description: "Click login"
  },

  {
    id: 4,
    action: "Click",
    object: "Login button",
    input: "",
    description: "Click login"
  },

  {
    id: 5,
    action: "Click",
    object: "Login button",
    input: "",
    description: "Click login"
  },

  {
    id: 6,
    action: "Click",
    object: "Login button",
    input: "",
    description: "Click login"
  },

  {
    id: 7,
    action: "Click",
    object: "Login button",
    input: "",
    description: "Click login"
  },

  {
    id: 8,
    action: "Click",
    object: "Login button",
    input: "",
    description: "Click login"
  },

  {
    id: 9,
    action: "Click",
    object: "Login button",
    input: "",
    description: "Click login"
  },

  {
    id: 10,
    action: "Click",
    object: "Login button",
    input: "",
    description: "Click login"
  },

  {
    id: 11,
    action: "Click",
    object: "Login button",
    input: "",
    description: "Click login"
  },


]


export default function TestcaseDetails() {
  const params = useParams()
  const router = useRouter()

  const [steps, setSteps] = useState(stepsData)
  const [isEditOpen, setIsEditOpen] = useState(false)

  return (
    <>
      <LoggedInHeader />
      <div className="flex items-center justify-center px-6  lg:px-16 py-3 lg:py-5">
        <div className="relative w-full bg-white rounded-xl p-5">
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
              <h2 className='text-gray-600 font-semibold text-sm'>
                <span className='font-normal text-gray-500'>{params.selectedId} / </span>
                {decodeURIComponent(params.testcaseName)}
              </h2>
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-2 my-4'>

            <input
              type='url'
              className='md:w-[75%] text-gray-700 placeholder-gray-400 p-3 border border-gray-300 hover:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100'
              placeholder='Enter url'
            />

            <div className='flex gap-2'>
              <div className='flex items-center px-3 border border-gray-300 hover:border-gray-500 rounded-lg gap-2'>
                <Image
                  src={assets.chromeIcon}
                  alt='chrome'
                  className='w-7'
                />
                <FaCaretDown className='text-gray-700' />
              </div>

              <button className='flex gap-2 items-center p-3 px-7 border border-gray-300 rounded-lg text-[#5D1BB3] hover:bg-[#450c90] hover:text-white'>
                <FaPlay />
                <p>Start</p>
              </button>

              <button className='p-3 border px-4 border-gray-300 rounded-lg text-gray-600 hover:text-white hover:bg-blue-500'>
                <FaPause />
              </button>

              <button className='p-3 border px-4 border-gray-300 rounded-lg text-red-400 hover:text-white hover:bg-red-400'>
                <FaStop />
              </button>

            </div>

          </div>

          <p className='text-gray-500 text-sm py-2'>Recorded actions</p>

          <div className='bg-[#EFEFEF] p-2 flex text-gray-600 text-[14px] rounded-lg sticky top-0 z-10'>
            <div className="flex-1 font-medium">
              Action
            </div>

            <div className="flex-1 font-medium">
              Object
            </div>

            <div className="flex-1 font-medium">
              Input
            </div>

            <div className="flex-1 font-medium">
              Description
            </div>
          </div>

          <div className='h-100 overflow-y-auto custom-scrollbar'>

            {
              stepsData.map((steps) => (
                <div
                  key={steps.id}
                  className='flex bg-white shadow-sm border p-3 my-2 cursor-pointer rounded-lg hover:bg-purple-50'
                  onClick={() => setIsEditOpen(true)}
                >
                  <div className='flex flex-1 items-center text-gray-700'>
                    <p className='w-[80%]'>{steps.action}</p>
                  </div>

                  <div className='flex-1 min-w-0 text-gray-700'>
                    <p className='truncate pr-5'>{steps.object}</p>
                  </div>

                  <div className='hidden md:block flex-1 min-w-0 text-gray-700'>
                    <p className='truncate pr-5'>{steps.input}</p>
                  </div>

                  <div className='hidden md:block flex-1 min-w-0 text-gray-700'>
                    <p className='truncate pr-5'>{steps.description}</p>
                  </div>
                </div>
              ))
            }



          </div>

          <button className='absolute bottom-8 right-10 bg-[#5D1BB3] flex items-center gap-2 p-3 rounded-3xl shadow- hover:bg-[#480d95]'>
            <FaSave />
            <span>Save Testcase</span>
          </button>


        </div>



      </div>

      <EditTestcaseModal
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        steps={stepsData}
        setSteps={setSteps}
      />


      <FooterLoggedIn />
    </>
  )
}
