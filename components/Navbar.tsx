'use client'
import React, { useEffect, useState} from 'react';
import { PiPlusThin } from "react-icons/pi";
import { useDisclosure } from '@nextui-org/react';
import Modal from './ui/Modal';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { toggleActiveState } from '@/redux/features/navbar-slice';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const pathName = usePathname()
    const selected = useSelector((state: RootState) => (state.navbarReducer as { value: { activeRoute: string } }).value.activeRoute)
    const dispatch = useDispatch()
    const handleActiveState = (label: string) => {
        dispatch(toggleActiveState(label));
    };

    const links = [
        {
            link: '/', label: "Dashboard"
        },
        {
            link: '/analytics', label: "Analytics"
        },
    ]
    
    useEffect(() => {
        function getUrlPathName(){
            if(pathName !== selected.toLowerCase()){
                if(pathName.length > 1){
                    const splitUrl = pathName.split('/')
                    const capitalized = splitUrl[1].charAt(0).toUpperCase() + splitUrl[1].slice(1)
                    handleActiveState(capitalized)
                }
            }
        }
        getUrlPathName()
    }, [pathName])
    return (
        <>
            <div
                className='fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] md:w-full max-w-[600px] bg-[#1E1E1E] backdrop-blur-md mb-2 z-10 rounded-2xl'>
                <div
                    className='text-sm md:text-md flex gap-2 items-center h-full justify-between p-1'>
                    <div className='h-full text-white flex w-full gap-1'>
                        {links.map((el => (
                            <Link key={el.label} href={el.link} >
                                <button onClick={() => handleActiveState(el.label)} className={`p-3 rounded-xl ${selected === el.label && "bg-[#171717]"} ${selected !== el.label && "hover:bg-zinc-800 capitalize"}  h-full w-full transition-colors duration-500 ease-in-out`}>
                                    {el.label}
                                </button>
                            </Link>
                        )))}
                    </div>
                    <div>
                        <button onClick={onOpen} className='p-2  bg-[#0096EA] rounded-xl '>
                            <PiPlusThin color='white' size={32} className='hover:rotate-180 transition-transform duration-300' />
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && <Modal title='Add Transaction' isOpen={isOpen} onOpenChange={onOpenChange} />}
        </>
    );
};