'use client'
import React from 'react'
import { ArrowLeftStartOnRectangleIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className="w-full h-full flex justify-between items-center">
      <div className="text-5xl md:text-[128px] flex w-full h-full leading-none">Opulence</div>
      <div className=" flex w-full h-full gap-4 items-center justify-end">
        <Link href={'/signin'}>
          <Button className='px-2 py-1 gap-1' color="default" variant="flat" radius='sm' endContent={<ArrowUpRightIcon className="bg-transparent rounded-full size-4 stroke-1" />}>Login</Button>
        </Link>
        <Link href={'/signup'}>
          <Button className='px-2 py-1 gap-1' color="primary" variant="solid" radius='sm' endContent={<ArrowLeftStartOnRectangleIcon className="bg-transparent rounded-full size-5 stroke-1" />}>Register</Button>
        </Link>
      </div>
    </nav>
  )
}

