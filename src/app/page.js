"use client";
import Image from "next/image";
import State from "./State";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Home() {
  const pathname = usePathname()
  return (
    <div className="max-w-7xl mx-auto bg-blue-900 text-white p-5">
      <State/>
      <Link href="./about" className={`${pathname == '/' ? "active": "" }`}>Home</Link>
      <Link href="./about" className={`${pathname == '/about' ? "active": "" }`}>About</Link>
      <Link href="./login">Login</Link>
      <Link href="./registration">Registration</Link>
    </div>
  );
}
