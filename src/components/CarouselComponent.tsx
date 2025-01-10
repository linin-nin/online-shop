import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import ReviewCard from './ReviewCard'

const CarouselComponent = () => {
  return (
    <Carousel className="w-full max-w-4xl">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className='flex gap-2'>
                <ReviewCard 
                className='text-white bg-black'
                name='Channa' 
                heading='“ECO-FRIENDLY AND DURABLE”' 
                body="“I'm a review. Click to edit me and add text that says something nice about you and your work. Share a bit of critical acclaim and spur some excitement for your latest project.”"
                />
                <ReviewCard 
                className='bg-white text-black'
                name='Theary' 
                heading='“PERFECT FOR URBAN RUNNERS"' 
                body="“I'm a review. Click to edit me and add text from a critic who has evaluated you and your work.”"
                />
                
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselComponent