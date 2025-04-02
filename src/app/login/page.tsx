"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "../../app/index.css";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "adm@123" && password === "123") {
      localStorage.setItem("authToken", "user-auth-token");
      router.push("/");
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <div className="bg-[#2B2B2B]">
      <div className="min-h-[100vh] flex justify-center items-center py-32">
        <div className="bg-[#333333] p-8 rounded-lg w-auto min-w-lg">
          <h2 className="text-white text-2xl mb- font-semibold"></h2>
          <div className=" flex justify-center text-white text-6xl font-semibold mb-10">
            Wallet
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-white">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#444444] text-white px-4 py-2 rounded-lg w-full mt-2"
                placeholder="adm@123"
              />
            </div>
            <div>
              <label className="text-white">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#444444] text-white px-4 py-2 rounded-lg w-full mt-2"
                placeholder="123"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#BFAFF2] text-gray py-2 px-8 rounded-lg hover:bg-[#b29cfb] w-full mt-4"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
