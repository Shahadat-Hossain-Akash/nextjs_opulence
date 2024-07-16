
import { checkBalanceType } from '@/utils/checkBalanceType'
import React from 'react'

export const Card = ({ text, amount }: { text: string, amount: number }) => {
    const renderType = checkBalanceType(text)
    return (
        <div className='w-full h-52 flex flex-col custom-card rounded-2xl gap-2 p-2'>
            <div className=' text-3xl md:text-5xl'>{text}</div>
            <span className={`text-2xl ${renderType}`}>৳{amount}</span>
        </div>
    )
}


