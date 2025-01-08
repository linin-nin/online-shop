import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <div className='bg-black text-white py-10'>
        <div className='container'>
            <Link className='text-[2rem] font-bold' href="/">
                Ryst.
            </Link>
            <div className='ml-[450px]'>
                <div className='rounded-md flex flex-col gap-y-5 bg-yellow-300 px-10 py-5 text-black'>
                    <h2 className='text-[1.5rem]'>Stay updated, sign up to receive exclusive updates and offers</h2>
                    <label htmlFor="submit" className='uppercase font-bold'>email*</label>
                    <input type="text"  placeholder='' className='rounded-md w-full border-2 border-black bg-yellow-300 p-2'/>
                    <div className='flex itexe justify-between'>
                        <div className=''>
                            <input type="checkbox" className='p-2 mr-2' />
                            <label htmlFor="">Yes, subscribe me to your newsletter.</label>
                        </div>
                        <Button>Sumite</Button>
                    </div>
                </div>
                <p className='mt-10'>© 2035 by Ryst</p>
            </div>
        </div>
    </div>
  )
}

export default Footer