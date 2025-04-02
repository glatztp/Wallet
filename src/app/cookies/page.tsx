"use client";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import Toast from "@/components/toast";

export default function Cookies() {

  const [showToast, setShowToast] = useState(false);
  const handleAcceptCookies = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="bg-[#2B2B2B]">
      <Navbar />
      <div className="min-h-[88.2vh] flex justify-center items-center py-32">
        <div className="bg-[#333333] p-8 rounded-lg w-auto max-w-lg">
          <h2 className="text-white text-2xl mb-4 font-semibold">Cookies 🍪</h2>
          <p className="text-white text-lg">
            We use cookies to improve user experience, and analyze website
            traffic. For these reasons, we may share your site usage data with
            our analytics partners. By clicking “Accept Cookies,” you consent to
            store on your device all the technologies described in our Cookie
            Policy.
          </p>
          <div className="flex mt-4 items-center justify-center">
            <button
              className="bg-[#BFAFF2] text-gray py-2 px-8 rounded-lg hover:bg-[#c9bcf4] w-50"
              onClick={handleAcceptCookies}
            >
              Accept Cookies
            </button>
          </div>
        </div>
      </div>
      {showToast && <Toast message="Cookies accepted!" onClose={() => setShowToast(false)} />}
    </div>
  );
}
