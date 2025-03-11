"use client"

import { useRouter } from "next/navigation"

export default function AboutLayout({children}){
const router = useRouter()


    const naviagteToUstad=()=>{
        router.push('/about/ustad')
    }

    const navigateToChela=()=>{
        router.push('/about/chela')
    }
    
   return (
    <main>
        <h3>Welcome To Haryana</h3>
        <button onClick={naviagteToUstad}>ustad</button>
        <button onClick={navigateToChela}>chela</button>

        


    <h4>{children}</h4>

    </main>
)
    

}