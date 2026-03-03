import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { FaCaretRight } from 'react-icons/fa'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { MdError } from 'react-icons/md'

function PasswordStep({ userInput, userPassword, setUserPassword, error, setError, onSubmit, setStep }) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='space-y-4'>
            <div className='flex flex-col gap-1 items-center'>
                <h2 className='font-bold text-lg'>Enter your password</h2>
                <p className='text-sm text-center text-gray-400'>Enter the password associated with</p>
                <span className='flex items-center gap-2 text-sm'>{userInput}
                    <button
                        className='cursor-pointer text-lg text-[#5D1BB3]'
                        onClick={() => {
                            setStep("email");
                            setUserPassword("");
                            setError("")
                        }}
                    >
                        <AiFillEdit />
                    </button>
                </span>
            </div>

            <div className='relative flex flex-col gap-2'>
                <label>Password</label>
                <input
                    placeholder='Enter your password'
                    type={showPassword ? 'text' : 'password'}
                    className={`px-3 py-4 md:w-120 bg-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-purple-300 ${error && "border border-red-500 focus:ring-red-300"
                        }`}

                    value={userPassword}
                    required
                    onChange={(e) => {
                        setError("")
                        setUserPassword(e.target.value)

                    }}
                />

                <button
                    className='absolute right-5 top-13 text-lg text-gray-500 hover:text-white'
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <IoEyeOff /> : <IoEye />}

                </button>
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
                Log in
                <FaCaretRight
                    className='group-hover:translate-x-1 transition-all'
                />
            </button>

            <div className='flex justify-center pt-2'>
                <button className='text-sm hover:underline cursor-pointer'>
                    Forget password?
                </button>
            </div>

        </div>
    )
}

export default PasswordStep