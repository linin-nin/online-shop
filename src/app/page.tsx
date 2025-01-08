"use client"

import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import ProductCardWithoutMark from "@/components/ProductCardWithoutMark";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { highligh } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";


const products = [
  {name: "hello"},
  {name: "hello"},
  {name: "hello"},
  {name: "hello"},
]

const productslimited = [
  {name: "PREFORMENCE SERIES"},
  {name: "LIMITED EDITION"},
  {name: "KIDS COLLECTION"},
]

gsap.registerPlugin(ScrollTrigger)
export default function Home() {

  useEffect(() => {
    let ctx = gsap.context(() => {
      const containers = gsap.utils.toArray(".image-container") as HTMLElement[]
      containers.forEach((container) => {
        let image = container.querySelector(".img");
      
        let tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              scrub: true,
              pin: false
            },
          }); 
          tl.from(image, {
            yPercent: -40,
            ease: "none",
          }).to(image, {
            yPercent: 40,
            ease: "none",
          }); 
      });
    })
    return () => ctx.revert()
  })

  return (
    <main className="">
      <div>
        <div className="h-[100vh] relative image-container overflow-hidden">
          <Image src="/hero-cover.jpg" alt="cover" fill className="object-cover h-full w-full -z-30 img" />
          <div className="px-10 pt-10">
            <h1 className="text-[4.5rem] font-bold">Step-up Your Stride</h1>
            <p className="text-[1.5rem] mt-16">Premium Athletic Footwear</p>
            <Button className="bg-black mt-3 text-yellow-500 hover:bg-white hover:text-black border-2 border-black">Shop now</Button>
          </div>
        </div>
        <div className="backdrop-blur-md bg-white/50 rounded-md w-[500px] h-[300px] text-center absolute bottom-1 right-14 p-3">
          <div className="bg-white rounded-md relative w-full h-full flex justify-between gap-x-10">
              <div className="relative h-full w-full">
                <Image src="/p1.jpg" alt="shose" fill className="object-cover w-full h-full" />
              </div>
              <div className="pr-5 pt-5 text-left">
                <h3 className="font-bold">MARATHON MASTER</h3>
                <p className="h-[150px]">$140.00</p>
                <Button className="hover:bg-black hover:text-yellow-500">Add to card</Button>
              </div>
          </div>
        </div>
      </div>

      <div className="bg-white container py-20">
        <div className="flex justify-between items-center pb-10">
          <h3 className="uppercase">BEst seller</h3>
          <Button>view all</Button>
        </div>
        <div className="grid grid-cols-4 gap-7">
          {
            products.map((items, i) => (
              <ProductCard key={i} name={items.name}/>
            ))
          }
        </div>
      </div>

      <div className="relative">
        <div className="h-[100vh] relative image-container overflow-hidden">
          <Image src="/cover2.jpg" alt="cover" fill className="object-cover h-full w-full -z-30 img" />
          <div className="px-10 pt-10">
            <h1 className="text-[4.5rem] font-bold">20% Off Kids Styles</h1>
            <p className="text-[1.5rem] mt-16">Exclusive, one-time offer</p>
            <Button className="bg-black mt-3 text-yellow-500 hover:bg-white hover:text-black border-2 border-black">Shop now</Button>
          </div>
        </div>
        <div className="backdrop-blur-md bg-white/50 rounded-md w-[500px] h-[300px] text-center absolute bottom-1 right-14 p-3">
          <div className="bg-white rounded-md relative w-full h-full flex justify-between gap-x-10">
              <div className="relative h-full w-full">
                <Image src="/p1.jpg" alt="shose" fill className="object-cover w-full h-full" />
              </div>
              <div className="pr-5 pt-5 text-left">
                <h3 className="font-bold">MARATHON MASTER</h3>
                <p className="h-[150px]">$140.00</p>
                <Button className="hover:bg-black hover:text-yellow-500">Add to card</Button>
              </div>
          </div>
        </div>
      </div>
      
      <Marquee words={highligh} className="text-white text-[1.5rem]" icon/>
      <div className="bg-white container py-20">
        <div className="flex justify-between items-center pb-10">
          <h3 className="uppercase">BEst seller</h3>
          <Button>view all</Button>
        </div>
        <div className="grid grid-cols-3 gap-7">
          {
            productslimited.map((items, i) => (
              <ProductCardWithoutMark key={i} name={items.name}/>
            ))
          }
        </div>
      </div>

      <div className="relative">
        <div className="h-[100vh] relative image-container overflow-hidden">
          <Image src="/cover1.jpg" alt="cover" fill className="object-cover h-full w-full -z-30 img" />
          <div className="px-10 pt-10">
            <h1 className="text-[4.5rem] font-bold">20% Off Kids Styles</h1>
            <p className="text-[1.5rem] mt-16">Exclusive, one-time offer</p>
            <Button className="bg-black mt-3 text-yellow-500 hover:bg-white hover:text-black border-2 border-black">Shop now</Button>
          </div>
        </div>
        <div className="backdrop-blur-md bg-white/50 rounded-md w-[500px] h-[300px] text-center absolute bottom-1 right-14 p-3">
          <div className="bg-white rounded-md relative w-full h-full flex justify-between gap-x-10">
              <div className="relative h-full w-full">
                <Image src="/p1.jpg" alt="shose" fill className="object-cover w-full h-full" />
              </div>
              <div className="pr-5 pt-5 text-left">
                <h3 className="font-bold">MARATHON MASTER</h3>
                <p className="h-[150px]">$140.00</p>
                <Button className="hover:bg-black hover:text-yellow-500">Add to card</Button>
              </div>
          </div>
        </div>
      </div>

      <div className="bg-white container py-20">
        <h3 className="uppercase">CUSTOMER REVIEWS</h3>
        <div className="ml-[470px] mt-10 flex items-center gap-5">
          <ReviewCard/>
          <ReviewCard/>
        </div>
      </div>

    </main>
  );
}
