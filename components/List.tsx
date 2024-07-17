import React from 'react'
import { PiArrowsClockwiseThin, PiXLight } from 'react-icons/pi';
import CustomTile from './ui/CustomTile';
import DropDown from './ui/DropDown';
import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/outline'

export const List = () => {
    const dummy = [
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
        { label: "Balance", amount: 1000 },
    ]
    const monthOptions = [
        { value: "", label: "Month" },
        { value: "January", label: "January" },
        { value: "February", label: "February" },
        { value: "March", label: "March" },
        { value: "April", label: "April", isFixed: true },
        { value: "May", label: "May" },
        { value: "June", label: "June" },
        { value: "July", label: "July" },
        { value: "August", label: "August" },
        { value: "September", label: "September" },
        { value: "October", label: "October" },
        { value: "November", label: "November" },
        { value: "December", label: "December" },
    ];
    const timeOptions = [
        { value: "Latest", label: "Latest" },
        { value: "Oldest", label: "Oldest" },
    ];
    return (
        <div className='flex w-full h-full justify-between py-4 gap-2 flex-col'>
            <div className='flex flex-col sm:flex-row w-full h-full justify-between gap-3 py-4'>
                <span className='text-5xl'>History</span>
                <div className='flex flex-row gap-1 '>
                    <div className='w-40 '>
                        <DropDown options={monthOptions} />
                    </div>
                    <div className='w-40'>
                        <DropDown options={timeOptions} />
                    </div>
                </div>
            </div>
            <div className='w-full h-full bg-[#171717] flex flex-col gap-1 p-1 rounded-2xl'>
                {
                    dummy.map((el) => (
                        <CustomTile key={el.label} className='py-4'>
                            <CustomTile.Left className='gap-1'>
                                <span className='text-3xl'>Balance</span>
                                <span className='text-xl'>100000</span>
                            </CustomTile.Left>
                            <CustomTile.Right>
                                <CustomTile.Button className='bg-[#9C81F7]/5 p-4'>
                                    <PencilSquareIcon className='hover:-translate-y-1 transition-transform duration-300 size-5 stroke-1' color='#A085FF' />
                                </CustomTile.Button>
                                <CustomTile.Button className='bg-[#FF5251]/5 p-4'>
                                    <XMarkIcon color='#FF5251' className='hover:rotate-180 transition-transform duration-300 size-5 stroke-1' />
                                </CustomTile.Button>
                            </CustomTile.Right>
                        </CustomTile>
                    ))}
            </div>
        </div>
    )
}
