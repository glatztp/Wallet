"use client";

import Link from "next/link";
import '../app/index.css';   
import { SignOut } from "phosphor-react";


export function Navbar() {

  return (
    <div className="flex justify-between items-center font-pp p-6 bg-[#2B2B2B]">
      <div className="text-4xl font-semibold text-white px-14">
        <Link href="/">Wallet</Link>
      </div>
      <ul className="flex space-x-6 justify-between items-center px-4">
            <li className="bg-[#BFAFF2] py-3 px-4 rounded-2xl hover:bg-[#b29cfb] transition-colors duration-200">
              <Link href="/login"><SignOut/></Link>
            </li>
          
        
      </ul>
    </div>
  );
}
