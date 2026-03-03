import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function ReportsTab() {
    return (
        <div className="flex items-center justify-center h-120 bg-gray-100 rounded-lg mt-5">
            <div className="flex flex-col items-center justify-center gap-2">
                <Image
                    src={assets.reportsIcon}
                    alt="No_reports"
                    className="w-12 lg:w-16"
                />
                <p className="text-gray-500 text-[13px] lg:text-[15px] font-medium">No reports available</p>
            </div>
        </div>
    )
}

export default ReportsTab