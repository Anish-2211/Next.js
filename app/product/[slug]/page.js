"use client"

import { useParams } from "next/navigation"

export default function ProductSlug(){
    const {slug} = useParams();

    return <h4> Product is: {slug}</h4>
}