'use client'
import React from 'react'
import { PiFingerprintSimpleThin } from "react-icons/pi"

export default function Header() {
  return (
    <div className="w-full h-full flex justify-between items-center mb-2">
    <div className="text-4xl md:text-8xl flex w-full ">Opulence</div>
    <div className=" flex w-full h-full gap-4 items-center justify-end">
      <span>username</span>
      <PiFingerprintSimpleThin className=" bg-transparent hover:bg-zinc-900 rounded-full p-1" size={46} />
    </div>
  </div>
  )
}
