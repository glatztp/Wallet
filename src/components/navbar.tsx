// components/Navbar.tsx
"use client";

import { useAuth } from "@/contexts/AuthContext"; 
import Link from "next/link";
import { useRouter } from "next/navigation";
import '../app/index.css';   


export function Navbar() {
  const { isAuthenticated, logout } = useAuth(); 
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/"); 
  };

  return (
    <div className="flex justify-between items-center font-pp p-6 bg-[#2B2B2B]">
      <div className="text-4xl font-semibold text-white px-14">
        <Link href="/">Wallet</Link>
      </div>

      <ul className="flex space-x-6 justify-between items-center px-8">
        {isAuthenticated ? (
          <li className="text-white px-8">
            <button
              onClick={handleLogout}
              className="bg-[#BFAFF2] py-3 px-16 rounded-2xl hover:bg-[#c9bcf4] transition-colors duration-100"
            >
              Logout
            </button>
          </li>
        ) : (
          <>
            <li className="text-white px-8">
              <Link href="/signup">Sign Up</Link>
            </li>
            <li className="bg-[#BFAFF2] py-3 px-16 rounded-2xl hover:bg-[#c9bcf4] transition-colors duration-100">
              <Link href="/login">Log In</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
