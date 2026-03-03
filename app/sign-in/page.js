"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { FaCaretRight } from 'react-icons/fa'
import { assets } from "../../assets/assets"
import { useRouter } from 'next/navigation'
import { AiFillEdit } from 'react-icons/ai'
import PasswordStep from '../../components/Auth/PasswordStep'
import EmailStep from '../../components/Auth/EmailStep'
import SignupStep from '../../components/Auth/SignupStep'

const usersData = [
    {
        id: 1,
        email: "sankar@gmail.com"
    },

    {
        id: 2,
        email: "siva@gmail.com"
    }
]

function SignInPage() {
    const [userInput, setUserInput] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [error, setError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [step, setStep] = useState("email")

    const router = useRouter()

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleEmailSubmit = () => {
        const email = userInput.trim()

        if (!email) {
            setError("Enter your email")
            return;
        }

        if (!isValidEmail(email)) {
            setError("Enter valid email address")
            return
        }

        const userExist = usersData.some((user) => (
            user.email === email
        ))

        if (userExist) {
            setError("")
            setStep("password")
        } else {
            setError("User not found")
        }
    }

    const handlePasswordSubmit = () => {
        if (!userPassword) {
            setPasswordError("Enter a password")
            return
        }
    }

    const handleSwitch = () => {
        if (step === "signup") {
            setStep("email")
        } else {
            setError("")
            setPasswordError("")
            setUserInput("")
            setUserPassword("")
            setStep("signup")
        }
    }

    return (
        <div className='min-h-screen bg-gradient-out flex items-center justify-center'>
            <div className='relative space-y-5 bg-white/10 p-6 rounded-2xl border border-white/10'>

                <Image
                    src={assets.logo}
                    alt='Logo'
                    className='absolute -top-12 left-1/2 -translate-x-1/2 w-35 md:w-40'
                />

                {
                    step === "email" && (
                        <EmailStep
                            error={error}
                            setError={setError}
                            userInput={userInput}
                            setUserInput={setUserInput}
                            onSubmit={handleEmailSubmit}
                        />
                    )
                }

                {
                    step === "password" && (
                        <PasswordStep
                            userInput={userInput}
                            error={passwordError}
                            setError={setPasswordError}
                            userPassword={userPassword}
                            setUserPassword={setUserPassword}
                            onSubmit={handlePasswordSubmit}
                            setStep={setStep}
                        />
                    )
                }

                {
                    step === "signup" && (
                        <SignupStep

                        />
                    )
                }

                

                {/* <p className='text-center text-sm'> {step === "signup" ? "Already have an account? " : "Don't have an account? " } 
                    <span 
                        className='text-[#5D1BB3] font-bold underline cursor-pointer'
                        onClick={handleSwitch}    
                    >
                        {step === "signup" ? "Log in" : "Sign up"} 
                    </span>
                </p> */}

            </div>


        </div>
    )
}

export default SignInPage