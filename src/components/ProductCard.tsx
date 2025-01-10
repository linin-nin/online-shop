import Image from 'next/image'
import React from 'react'


type Props = {
    name: string,
    img: string,
    price: string
}
const ProductCard = ({name, img, price}:Props) => {
  return (
    <div>
        <div className=' relative w-full h-[450px]'>
            <Image src={img} alt='shose' fill className='object-cover h-full w-full' />
            <div className='rounded-md bg-yellow-500 uppercase absolute top-3 left-3 px-2 text-[0.8rem]'>best seller</div>
        </div>
        <div>
            <h3 className='font-bold pt-2 uppercase'>{name}</h3>
            <p>${price}</p>
        </div>
    </div>
  )
}

export default ProductCard