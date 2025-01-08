import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'


type Props = {
    name: string
}
const ProductCardWithoutMark = ({name}:Props) => {
  return (
    <div>
        <div className=' relative w-full h-[500px]'>
            <Image src="/p2.jpg" alt='shose' fill className='object-cover h-full w-full' />
            <Button className='absolute top-5 left-5'>Limited edtion</Button>
        </div>
    </div>
  )
}

export default ProductCardWithoutMark