"use client";

import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdError } from "react-icons/md";

function SignupStep() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [inputCPassword, setInputCPassword] = useState("")

    const [errors, setErrors] = useState({})

    const handleSubmit = () => {
        let newErrors = {}

        if (!inputEmail) {
            newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail)) {
            newErrors.email = "Enter a valid email"
        }

        if (!inputPassword) {
            newErrors.password = "Password is required"
        } else if (inputPassword.length < 6) {
            newErrors.password = "Password must be atleast 6 characters"
        }

        if (!inputCPassword) {
            newErrors.confirmPassword = "Confirm your password"
        } else if (inputCPassword !== inputPassword) {
            newErrors.confirmPassword = "Password do not match"
        }

        setErrors(newErrors)


    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-1 items-center text-center">
                <h2 className="font-bold text-lg">
                    Create Your Account
                </h2>
                <p className="text-sm text-gray-400">
                    Join us today! Please sign up to get started
                </p>
            </div>

            <div className="space-y-4">
                {/* <div className="flex gap-4">
                    <div className="flex flex-col gap-2">
                        <label>First name</label>
                        <input
                            placeholder="First name"
                            className="px-3 py-3 w-full bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:ring-1 focus:ring-purple-300 transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Last name</label>
                        <input
                            placeholder="Last name"
                            className="px-3 py-3 w-full bg-white/10 rounded-xl border border-white/20 focus:outline-none focus:ring-1 focus:ring-purple-300 transition-all"

                        />
                    </div>
                </div> */}

                <div className="flex flex-col gap-2">
                    <label>Email address</label>
                    <input
                        placeholder="Enter your email address"
                        className={`px-3 py-3 md:w-120 bg-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-300 ${errors.email && "border border-red-300 focus:ring-red-300"
                            }`}
                        value={inputEmail}
                        onChange={(e) => {
                            setErrors({})
                            setInputEmail(e.target.value)
                        }}
                    />

                    {errors.email && (
                        <div className="flex items-center gap-1 text-sm text-red-500">
                            <MdError />
                            <p>{errors.email}</p>
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-2 relative">
                    <label>Password</label>
                    <input
                        placeholder="Enter your password"
                        type={showPassword ? "text" : "password"}
                        className={`px-3 py-3 md:w-120 bg-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-300 ${errors.password && "border border-red-300 focus:ring-red-300"
                            }`}
                        value={inputPassword}
                        onChange={(e) => {
                            setErrors({})
                            setInputPassword(e.target.value)
                        }}
                    />

                    {errors.password && (
                        <div className="flex items-center gap-1 text-sm text-red-500">
                            <MdError />
                            <p>{errors.password}</p>
                        </div>
                    )}

                    <button
                        className="absolute right-4 top-12 text-gray-400 hover:text-white"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <IoEyeOff /> : <IoEye />}
                    </button>
                </div>

                <div className="flex flex-col gap-2 relative">
                    <label>Confirm password</label>
                    <input
                        placeholder="Confirm password"
                        type={showConfirmPassword ? "text" : "password"}
                        className={`px-3 py-3 md:w-120 bg-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-300 ${errors.confirmPassword && "border border-red-300 focus:ring-red-300"
                            }`}
                        value={inputCPassword}
                        onChange={(e) => {
                            setErrors({})
                            setInputCPassword(e.target.value)
                        }}
                    />

                    {errors.confirmPassword && (
                        <div className="flex items-center gap-1 text-sm text-red-500">
                            <MdError />
                            <p>{errors.confirmPassword}</p>
                        </div>
                    )}

                    <button
                        className="absolute right-4 top-12 text-gray-400 hover:text-white"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
                    </button>
                </div>

            </div>

            <button
                className='bg-[#5D1BB3] w-full py-3 rounded-xl cursor-pointer flex items-center justify-center gap-1 md:text-[18px] group'
                onClick={handleSubmit}
            >
                Sign up
                <FaCaretRight
                    className='group-hover:translate-x-1 transition-all'
                />
            </button>
        </div>
    );
}

export default SignupStep;