import React from 'react'
import { FaCaretRight } from 'react-icons/fa'
import { MdError } from 'react-icons/md'

function EmailStep({ error, setError, userInput, setUserInput, onSubmit }) {
    return (
        <div className='space-y-4'>
            <div className='flex flex-col gap-1 items-center'>
                <h2 className='font-bold text-lg'>Sign in to Testing tool</h2>
                <p className='text-sm text-gray-400'>Welcome back! Please signin to continue</p>
            </div>

            <div className='flex flex-col gap-2'>
                <label>Email address</label>
                <input
                    placeholder='Enter your email'
                    className={`px-3 py-4 md:w-120 bg-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-purple-300 ${error && "border border-red-300 focus:ring-red-300"
                        }`}
                    value={userInput}
                    required
                    onChange={(e) => {
                        setError("")
                        setUserInput(e.target.value)

                    }}
                />
                {
                    error && (
                        <div className='flex  items-center text-sm gap-1 text-red-500'>
                            <MdError />
                            <p>{error}</p>
                        </div>
                    )
                }
            </div>

            <button
                className='bg-[#5D1BB3] w-full py-3 rounded-xl cursor-pointer flex items-center justify-center gap-1 md:text-[18px] group'
                onClick={onSubmit}
            >
                Continue
                <FaCaretRight
                    className='group-hover:translate-x-1 transition-all'
                />
            </button>

            <hr className='text-white/30' />

                <div className='group flex flex-col items-center gap-2'>
                    <p>New to Testing tool?</p>
                    <button
                        className="
                                    bg-white text-[#5D1BB3] w-full p-3 rounded-lg
                                    transition-transform duration-150 ease-out
                                    hover:scale-[1.02] 
                                    active:scale-[0.98]"
                    >
                        Request for account
                    </button>
                </div>
        </div>
    )
}

export default EmailStep