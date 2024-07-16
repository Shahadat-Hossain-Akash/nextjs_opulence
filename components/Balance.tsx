import React from 'react'
import { Card } from './Card'

export const Balance = () => {
  return (
    <div className='w-full h-full py-4 flex flex-col'>
        <div>
            <Card text='Balance' amount={1000}/>
        </div>
        <div className='flex w-full h-52 gap-2 py-2'>
            <Card text='Income' amount={1000}/>
            <Card text='Expense' amount={1000}/>
        </div>
    </div>
  )
}
