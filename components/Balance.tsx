import React from 'react'
import { Card } from './ui/Card'


export const Balance = () => {
  return (
    <div className='w-full h-full flex flex-col md:flex-row bg-[#171717] p-1 gap-1 rounded-2xl'>
      <div className='w-full  md:w-4/6 flex'>
        <Card text='Balance' amount={1000} />
      </div>
      <div className='w-full  md:w-2/6 gap-1 flex flex-col'>
        <div className='w-full h-1/2 flex'>
          <Card text='Income' amount={1000} />
        </div>
        <div className='w-full h-1/2 flex'>
          <Card text='Expense' amount={1000} />
        </div>
      </div>
    </div>
  )
}
