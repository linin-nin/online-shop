"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'

const Nav = () => {

  const [navbar, setNabar] = useState(false)
  return (
    <div className='bg-white container py-5 flex items-center justify-between'>
        {/* logo */}
        <div className='font-bold text-[1.5rem]'>
            Style.
        </div>
        <nav className='flex items-center gap-7'>
            <div className='border-2 rounded-full border-black p-2'>
                <input type="text" placeholder='search'/>
            </div>
            <Button>Login</Button>
            <Button onClick={() => setNabar(!navbar)}>Menu</Button>
        </nav>
        {navbar && 
        <div className='bg-red-500 absolute right-0 w-[500px]'>
          <span className='cursor-pointer' onClick={() => setNabar(!navbar)}>close</span>
          <h1>Hello Navbar</h1>
        </div>}
    </div>
  )
}

export default Nav