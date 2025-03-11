"use client"

import { useEffect, useState } from "react"

export default function Home(){
    const [products, setProducts] = useState({});

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(res=>setProducts(res))

    },[])
    console.log(products)
    

    return (
    <h1>Home !!!!</h1>
    )
}