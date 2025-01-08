import { cn } from '@/lib/utils';
import Marquee from './ui/marquee';
import React from 'react'
import { Fan, Flower} from "lucide-react"


const MarqueeComponent = ({words, className, icon}:{words: string[], className?: string, icon?: boolean}) => {
  const firstRow = words.slice(0, words.length / 2);
  return (
    <div className="">
      <Marquee 
      reverse 
      pauseOnHover 
      className={cn("[--duration:10s] uppercase bg-black", className)}>
        {firstRow.map((review, index) => (
          <div key={index} className='flex gap-4 items-center'>
            <p>{review}</p>
            {icon && <Flower className='text-blue-500'/>}
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default MarqueeComponent