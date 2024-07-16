import React from 'react'
import {Tiles} from './Tiles'

export const List = () => {
    return (
        <div className='flex w-full h-full justify-between py-4 gap-2 flex-col'>
            <div className='flex w-full h-full justify-between items-center py-4'>
                <span className='text-[44px]'>History</span>
                <div>
                    Filters
                </div>
            </div>
            <Tiles/>
            <Tiles/>
            <Tiles/>
            <Tiles/>
            <Tiles/>
        </div>

    )
}
