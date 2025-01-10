"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import MenuSideBar from './MenuSideBar'
import { Divide } from 'lucide-react'

const Nav = () => {
  const [navbar, setNavbar] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setNavbar(false) // Close the menu when clicking outside
    }
  }

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden"
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.body.style.overflow = "auto"
      document.removeEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.body.style.overflow = "auto"
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [navbar])

  return (
    <div className='bg-white container py-5 flex items-center justify-between'>
        {/* logo */}
        <div className='font-bold text-[1.5rem]'>
            Style.
        </div>
        <nav className='flex items-center gap-3'>
            <div className='border-2 rounded-full border-black p-2'>
                <input type="text" placeholder='search'/>
            </div>
            <Button>Login</Button>
            <Button onClick={() => setNavbar(!navbar)}>Shop</Button>
        </nav>
    </div>
  )
}

export default Nav