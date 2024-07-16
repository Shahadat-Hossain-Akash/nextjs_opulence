import {
    Modal as Modals,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from "@nextui-org/react";

import React, { useState } from 'react'

export default function Modal({isOpen, onOpenChange, title} : Readonly < {
    isOpen: boolean,
    onOpenChange: () => void,
    title: string
} >) {
    const [selected, setSelected] = useState('')
    const types = ['income', 'expense']
    return (
        <div>
            <Modals
                className="bg-[#0d0d0d]/95"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                backdrop="blur"
                size="lg"
                hideCloseButton>
                <ModalContent>
                    {
                        (onClose) => (
                            <> < ModalHeader className = "flex flex-col gap-4 p-4 text-3xl font-thin"> {
                                title
                            }</ModalHeader> 
                            < ModalBody className = "py-2 px-4" > 
                                <input type="number"  className="custom-input p-3 outline-none" autoFocus placeholder="Add amount"/>
                                <input type="text" className=" custom-card p-3 outline-none" placeholder="Add an description"/>
                                <div className="w-full flex justify-between gap-2">
                                    {types.map((item) => (
                                    <button onClick={() => setSelected(item)} key={item} className={`${item == selected ? 'custom-input-selected' : 'custom-input'} p-3 outline-none w-full capitalize`}>{item}</button>
                                ))}
                                </div>
                        </ModalBody>
                        <ModalFooter className=" flex flex-col gap-2 px-4 pt-0  w-full">
                            <button className="custom-card p-3 outline-none w-full">Save</button>
                            <button className="custom-card p-3 outline-none w-full" onClick={onClose}>Close</button>
                        </ModalFooter>
                    </>
                        )
                    }
                </ModalContent>
            </Modals>
        </div>
    )
}
