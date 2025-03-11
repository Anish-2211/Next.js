"use client"
import { useParams } from "next/navigation"


export default async function DynamicPage(){
const aboutId = useParams();
console.log(aboutId)

    return <>
    <h1>About Dynamic !!!!</h1>
    <h1>Hi this is {aboutId.pageId}</h1>    
    </>
    
}