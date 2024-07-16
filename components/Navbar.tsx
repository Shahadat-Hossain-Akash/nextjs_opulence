'use client'
import {useRouter} from 'next/navigation';
import React, {useState, useMemo, useCallback} from 'react';
import {PiPlusThin} from "react-icons/pi";
import { useDisclosure } from '@nextui-org/react';
import Modal from './Modal';

export const Navbar = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [selected, setSelected] = useState('dashboard');
    const router = useRouter()

    const handleDashboardClick = useCallback(() => {
        setSelected('dashboard');
        router.push('/')
    }, []);

    const handleAnalyticsClick = useCallback(() => {
        setSelected('analytics');
        router.push('/analytics')
    }, []);

    const selectedClass = useMemo(() => (
        selected === 'dashboard'
            ? 'custom-selected'
            : ''
    ), [selected]);

    return (
        <>
        <div
            className='fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] md:w-full max-w-[600px]  h-16 custom-card mb-2 z-10'>
            <div
                className='text-md md:text-xl flex gap-2 items-center h-full justify-between'>
                <div className='h-full text-white'>
                    <button
                        onClick={handleDashboardClick}
                        className={`px-4 py-2 ${selectedClass} h-full transition-transform duration-600 ease-in-out`}>
                        Dashboard
                    </button>
                    <button
                        onClick={handleAnalyticsClick}
                        className={`px-4 py-2 ${selected !== 'dashboard'
                            ? 'custom-selected'
                            : ''} h-full transition-transform duration-300 ease-in-out`}>
                        Analytics
                    </button>
                </div>
                <div>
                    <button onClick={onOpen} className='p-2 hover:rotate-180 transition-transform duration-300'>
                        <PiPlusThin color='white' size={40}/>
                    </button>
                </div>
            </div>
        </div>
        {isOpen && <Modal title='Add new Transaction' isOpen={isOpen} onOpenChange={onOpenChange} />}
        </>
    );
};
