import React from 'react'

import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})

interface headerProps {
    label: string
}


const Header = ({ label }: headerProps) => {
    return (
        <div className={cn("w-full flex flex-col gap-y-4 items-center justify-center", font)}>
            <h1 className={cn("text-3xl font-semibold")}>
                🔐 Auth
            </h1>
            <p className='text-muted-foreground text-sm'>
                {label}
            </p>
        </div>
    )
}

export default Header
