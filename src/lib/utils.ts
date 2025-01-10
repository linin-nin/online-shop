import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const reviews = [
  "Free Shipping on all intl. orders over $50",
  "Free Shipping on all intl. orders over $50",
  "Free Shipping on all intl. orders over $50",
  "Free Shipping on all intl. orders over $50",
  "Free Shipping on all intl. orders over $50",
]

export const highligh = [
  "New Energy, Same High Quality",
  "New Energy, Same High Quality",
  "New Energy, Same High Quality",
  "New Energy, Same High Quality",
  "New Energy, Same High Quality",
  "New Energy, Same High Quality",
]

export const products = [
  {
    name: "hello",
    img: [
      "/p1.jpg",
      "/p12.jpg",
    ],
    price: "12.40"
  },
  {
    name: "hello",
    img: [
      "/p1.jpg",
      "/p12.jpg",
    ],
    price: "30.00"
  },
  {
    name: "hello",
    img: [
      "/p1.jpg",
      "/p12.jpg",
    ],
    price: "15.00"
  },
  {
    name: "hello",
    img: [
      "/p1.jpg",
      "/p12.jpg",
    ],
    price: "10.50"
  },
]



