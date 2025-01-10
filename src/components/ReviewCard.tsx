import { cn } from '@/lib/utils'
import React from 'react'


interface Props {
  name: string,
  className?: string,
  heading: string,
  body: string
}
const ReviewCard = ({name, body, heading, className}:Props) => {
  return (
    <div className={cn("border text-[0.9rem] border-black p-8 rounded-md w-full", className)}>
        <h3 className='pb-5'>{heading}</h3>
        <p className='mt-2 h-[100px]'>{body}</p>
        <h2 className='uppercase font-bold  pt-10'>{name}</h2>
    </div>
  )
}

export default ReviewCard