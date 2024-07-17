import React from 'react'
import Header from './Header'
import { Balance } from './Balance'
import { List } from './List'
import { Navbar } from './Navbar'

export default function HomePage() {
    return (
        <div className='w-full min-h-screen flex flex-col gap-4 relative'>
            <Navbar />
            <Header />
            <Balance />
            <List />
        </div>
    )
}

