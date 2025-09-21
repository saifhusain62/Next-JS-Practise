"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function page() {

    const router = useRouter()
     
     const placeorder = () =>{
        alert("Order Confirmed");
        router.push("/")
     }

  return (
    <div>
         <h1>Buy Product</h1>
         <li>100$</li>
         <button className='bg-amber-400 p-5 rounded-xl' onClick={placeorder}>Buy Now</button>
    </div>
  )
}

export default page
