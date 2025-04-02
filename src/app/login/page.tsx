"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { NavbarC } from "@/components/navbarclean";
export default function Login() {
  const { isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) {
      router.push("http://localhost:3000");
    }
  }, [isAuthenticated, router]);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("authToken", "user-auth-token");
      router.push("http://localhost:3000");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };
  return (
    <div className="bg-[#2B2B2B]">
      {" "}
      <NavbarC />{" "}
      <div className="min-h-[89.2vh] flex justify-center items-center py-32">
        {" "}
        <div className="bg-[#333333] p-8 rounded-lg w-auto min-w-lg">
          {" "}
          <h2 className="text-white text-2xl mb-4 font-semibold">Login</h2>{" "}
          <form onSubmit={handleLogin} className="space-y-5">
            {" "}
            <div>
              {" "}
              <label className="text-white">Email:</label>{" "}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#444444] text-white px-4 py-2 rounded-lg w-full mt-2"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="text-white">Password:</label>{" "}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#444444] text-white px-4 py-2 rounded-lg w-full mt-2"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <button
                type="submit"
                className="bg-[#BFAFF2] text-gray py-2 px-8 rounded-lg hover:bg-[#c9bcf4] w-full mt-4"
              >
                {" "}
                Login{" "}
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
