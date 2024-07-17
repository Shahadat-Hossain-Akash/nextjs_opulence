import React from 'react'
import { PiXLight, PiArrowsClockwiseThin } from "react-icons/pi";

export const Tiles = () => {

  return (
    <div className='w-full h-full py-4 px-2 flex bg-[#1a1a1a] border-[1px] border-[#1e1e1e]/70 rounded-xl'>
      <div className='flex w-full h-full flex-col gap-2'>
        <span className='text-3xl'>Balance</span>
        <span className='text-xl'>100000</span>
      </div>
      <div className='w-full flex items-center justify-end gap-4'>
        <button className='bg-[#9C81F7]/5 rounded-2xl p-2 '>
          <PiArrowsClockwiseThin className='hover:rotate-180 transition-transform duration-300' size={32} color='#A085FF'/>
        </button>
        <button className='bg-[#FF5251]/5 rounded-2xl p-2'>
          <PiXLight size={32} color='#FF5251' className='hover:rotate-180 transition-transform duration-300'/>
        </button>
      </div>
    </div>
  )
}
