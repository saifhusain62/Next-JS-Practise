"use client";
import Image from "next/image";
import State from "./State";
import Link from "next/link";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto bg-blue-900 text-white p-5">
      <State/>
      <Link href="./about">About</Link>
    </div>
  );
}
