"use client"

import { useEffect, useState } from "react";




export default function Post(){
    const[post, setPost] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((response)=>response.json())
        .then((res)=>{
            console.log(res)
            setPost(res.products)
        })
    },[])
    // console.log(post)

    return(
        <main>
            {post?.map((item,index)=>{
                return(
                    <div key={item.id + index}>
                        <h1>{item.title}</h1>

                    </div>
                )
            })}

        </main>

    )

}