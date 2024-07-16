import React from 'react'
import { PiXLight, PiArrowsClockwiseThin } from "react-icons/pi";

export const Tiles = () => {

  return (
    <div className='custom-tile w-full h-full py-4 px-2 flex'>
      <div className='flex w-full h-full flex-col gap-2'>
        <span className='text-3xl'>Balance</span>
        <span className='text-xl'>100000</span>
      </div>
      <div className='w-full flex items-center justify-end gap-4'>
        <button className=' custom-card p-2 '>
          <PiArrowsClockwiseThin className='hover:rotate-180 transition-transform duration-300' size={32} color='#A085FF'/>
        </button>
        <button className=' custom-card p-2'>
          <PiXLight size={32} color='#FF5251' className='hover:rotate-180 transition-transform duration-300'/>
        </button>
      </div>
    </div>
  )
}
