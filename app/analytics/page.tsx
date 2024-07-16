import React from 'react'
import '../globals.css'
import { Chart } from '@/components/Chart'
import { Tiles } from '@/components/Tiles'

export default function Analytics() {
    return (
        <div className='w-full min-h-screen p-2 flex flex-col gap-2'>
            <div className='flex items-center gap-2 w-full flex-row justify-end py-2'>
                <div className='flex items-center gap-2'>
                    <div className='w-9 h-3 bg-custom-green rounded-2xl'></div>
                    Income
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-9 h-3 bg-custom-red rounded-2xl'></div>
                    Expense
                </div>
            </div>
            <Chart/>
            
        </div>
    )
}
