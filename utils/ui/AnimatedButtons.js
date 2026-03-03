import React from 'react'

function AnimatedButtons({text, icon}) {
    return (
        <button className="group relative flex items-center justify-center bg-red-100 p-2 px-3 w-20 rounded-lg text-red-500">
            <span
                className='absolute transition-all duration-300 ease-in-out opacity-100 translate-y-0 group-hover:opacity-0 group-hover:-translate-y-2'>
                Ignore
            </span>
            <IoMdClose className='absolute text-xl transition-all duration-300 ease-in-out opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0' />
        </button>
    )
}

export default AnimatedButtons