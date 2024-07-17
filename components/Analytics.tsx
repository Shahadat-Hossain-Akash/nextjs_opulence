import React from 'react'
import '../app/globals.css'
import { Chart } from '@/components/Chart'
import CustomTile from './ui/CustomTile'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

export default function Analytics() {
    const dummy = [
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
    ]
    return (
        <div className='w-full min-h-screen p-2 flex flex-col gap-2'>
            <div className='flex items-center gap-2 w-full flex-row justify-end py-2 text-sm'>
                <div className='flex items-center gap-2'>
                    <div className='size-3 rounded-full bg-custom-green'></div>
                    Income
                </div>
                <div className='flex items-center gap-2'>
                    <div className='size-3 rounded-full bg-custom-red'></div>
                    Expense
                </div>
            </div>
            <div className='flex flex-col w-full h-full gap-2'>
                <div className='flex flex-col sm:flex-row w-full gap-2'>
                    <div className='bg-[#1c1c1c] rounded-lg w-full p-4 flex justify-between'>
                        <span>Income transaction count</span>
                        <span className='text-custom-green'>6</span>
                    </div>
                    <div className='bg-[#1c1c1c] rounded-lg w-full p-4 flex justify-between'>
                        <span>Expense transaction count</span>
                        <span className='text-custom-red'>6</span>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row w-full gap-2'>
                    <div className='bg-[#1c1c1c] rounded-lg w-full p-4 flex justify-between'>
                        <Chart />
                    </div>
                    <div className='bg-[#1c1c1c] rounded-lg w-full p-4 flex flex-col justify-between gap-2'>
                        <h1 className='text-2xl'>Recent Transactions</h1>
                        <div className='w-full h-full flex flex-col gap-2 max-h-unit-9xl overflow-y-auto shadow-inner'>
                            {
                                dummy.map((el => (
                                    <CustomTile key={el.label} className='bg-[#262626]/50 py-2'>
                                        <CustomTile.Left>
                                            <span className='text-lg'>{el.label}</span>
                                            <span className='text-md'>${el.amount}</span>
                                        </CustomTile.Left>
                                        <CustomTile.Right>
                                            <CustomTile.Button className='bg-[#1c1c1c] p-4 hover:bg-zinc-900'>
                                                <ArrowUpRightIcon className="bg-transparent rounded-full size-5 stroke-1 h-fit" />
                                            </CustomTile.Button>
                                        </CustomTile.Right>
                                    </CustomTile>
                                )))
                            }
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
