import Image from "next/image";
import Link from "next/link";



// function Card({name}){
//     return <h4> {`Hi welcome to the child ${name}`}</h4>
// }






export default function About(){

    return (
    <main> 
        {/* <Card name= "sabse badi bachi"/>
        <h1> Welcome to about page </h1>
        <Link href={"/about/chela"}>chela</Link>
        <br/>
        <Link href={"about/ustad"}>ustad</Link>
        <Card name ="chhoti bachi"/>
        <Card name ="badi bachi"/> */}
    <Image width={200} height={100} alt="img" src="/file.svg"/>


        </main>
    )
}