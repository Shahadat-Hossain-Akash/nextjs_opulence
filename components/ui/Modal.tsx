import {
    Modal as Modals,
    ModalContent,
    ModalHeader,
    ModalBody
} from "@nextui-org/react";
import { XMarkIcon } from '@heroicons/react/24/outline'

import React, { useState } from 'react'

export default function Modal({ isOpen, onOpenChange, title }: Readonly<{
    isOpen: boolean,
    onOpenChange: () => void,
    title: string
}>) {
    const [selected, setSelected] = useState('')
    const types = ['income', 'expense']
    return (
        <div>
            <Modals
                className="bg-[#0f0f0f]"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                backdrop="opaque"
                size="lg"
                hideCloseButton>
                <ModalContent>
                    {
                        (onClose) => (
                            <>
                                < ModalHeader className="flex justify-between p-4 text-3xl font-thin">
                                    <span>
                                        {title}
                                    </span>
                                    <button onClick={onClose}>
                                        <XMarkIcon className="size-5 stroke-1"/>
                                    </button>
                                </ModalHeader>
                                < ModalBody className="py-4 px-4 gap-1" >
                                    <input type="number" className="bg-[#1a1a1a] rounded-lg p-4 outline-none" autoFocus placeholder="Add amount" />
                                    <input type="text" className="bg-[#1a1a1a] rounded-lg p-4 outline-none" placeholder="Add an description" />
                                    <div className="w-full flex justify-between gap-1">
                                        {types.map((item) => (
                                            <button onClick={() => setSelected(item)} key={item} className={`${item == selected ? 'bg-[#111]' : 'bg-[#1a1a1a]'} p-4 outline-none w-full capitalize rounded-lg`}>{item}</button>
                                        ))}
                                    </div>
                                    <div className="flex gap-2 py-0 w-full">
                                        <button className=" bg-[#0096EA] rounded-lg p-3 outline-none w-full">Save</button>
                                    </div>
                                </ModalBody>
                            </>
                        )
                    }
                </ModalContent>
            </Modals>
        </div>
    )
}
