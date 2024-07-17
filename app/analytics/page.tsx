import React from 'react'
import '../globals.css'
import Analytics from '@/components/Analytics'
import { Navbar } from '@/components/Navbar'
import Header from '@/components/Header'

export default function AnalyticsPage() {
    return (
        <div className='relative p-2'>
            <Header/>
            <Analytics/>
            <Navbar/>
        </div>
    )
}
