"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigation =()=>{
    router.push("/product/2")

  }


  return (
    <div>
      <button onClick={handleNavigation}> Navigate To About</button>
    </div>
  );
}
