"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Loading from "@/components/loading";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      router.push("/login");
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return <Loading />;

  return (
    <div className="bg-[#2B2B2B]">
      <Navbar />

      <div className="flex items-center justify-between h-screen px-40">
        <div className="flex flex-col justify-center w-1/2">
          <h1 className="text-6xl font-semibold text-white mb-8">
            Saas Landing
          </h1>
          <h1 className="text-6xl font-semibold text-white">Page Template</h1>
          <div className="text-lg tracking-wider">
            <p className="text-[#AFAFAF] mt-16">
              This is a template Figma file, turned into code
            </p>
            <p className="text-[#AFAFAF] mb-16">
              using Anima. Learn more at AnimaApp.com
            </p>
          </div>
          <div className="ml-0">
            <Link href="/table">
              <button className="bg-[#FFDF90] py-3 px-16 rounded-2xl hover:bg-[#ffd876] transition-colors duration-300 mb-16">
                See Values
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 pl-16 pb-20">
          <Image
            src="/Screenshot.svg"
            className="w-full h-auto bg-[#333333] rounded-2xl"
            alt="Screenshot"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="w-full">
        <Image
          src="/Logos.svg"
          className="w-full h-auto bg-[#333333] rounded-t-2xl"
          alt="Logos"
          width={500}
          height={500}
        />
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white w-[900px] h-[510px] flex justify-center items-center rounded-3xl">
          <Image
            src="/HomeScnd.svg"
            className="h-full w-auto min-w-full min-h-full object-contain mt-24"
            alt="Centralized Image"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="flex justify-center items-center py-16">
        <div className="w-full max-w-6xl px-8">
          <ul className="flex space-x-12 justify-between items-center text-center">
            <li className="flex flex-col items-center">
              <Image
                src="/Cards.svg"
                className="w-12 h-12 mb-4"
                alt="Cards Icon"
                width={50}
                height={50}
              />
              <h3 className="text-xl font-semibold text-white mt-6">
                Customizable Card
              </h3>
              <p className="text-[#AFAFAF] mt-6 opacity-60">
                Customize your own card for your exact income and expense needs.
              </p>
            </li>

            <li className="flex flex-col items-center">
              <Image
                src="/Coin.svg"
                className="w-12 h-12 mb-4"
                alt="Coin Icon"
                width={50}
                height={50}
              />
              <h3 className="text-xl font-semibold text-white mt-6">
                No Payment Fee
              </h3>
              <p className="text-[#AFAFAF] mt-6 opacity-60">
                Transfer your payment all over the world with no payment fee.
              </p>
            </li>

            <li className="flex flex-col items-center">
              <Image
                src="/Purse.svg"
                className="w-12 h-12 mb-4"
                alt="Purse Icon"
                width={50}
                height={50}
              />
              <h3 className="text-xl font-semibold text-white mt-6">
                All in One Place
              </h3>
              <p className="text-[#AFAFAF] mt-6 opacity-60">
                The right place to keep your credit and debit cards, boarding
                passes & more.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-[#BFAFFA] w-[900px] h-[550px] flex flex-col justify-center items-center rounded-3xl">
          <h1 className="text-3xl font-semibold text-[#2b2b2b] text-justify opacity-80 py-10 px-20 -mt-10">
            “Wallet is a great product! All of my most important information is
            there - credit cards, transit cards, boarding passes, tickets, and
            more. And I don&apos;t need to worry because it&apos;s all in one
            place! thanks!”
          </h1>

          <div className="flex items-center justify-start mt-6 p-4 rounded-lg w-full max-w-[900px]">
            <div className="flex items-center justify-start pl-16">
              <div className="w-20 h-20">
                <Image
                  src="/Profile.svg"
                  className="w-full h-auto rounded-full"
                  alt="Profile Icon"
                  width={50}
                  height={50}
                />
              </div>

              <div className="ml-6 flex flex-col justify-start">
                <p className="text-[#2b2b2b] font-semibold">Johnny Owens</p>
                <p className="text-[#2b2b2b] ">CTO - Google Entreprises</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between h-screen px-40">
        <div className="flex flex-col justify-center w-1/2">
          <h1 className="text-6xl font-semibold text-white mb-8">Questions?</h1>
          <h1 className="text-6xl font-semibold text-white">Let&apos;s Talk</h1>
          <div className="text-lg tracking-wider">
            <p className="text-[#AFAFAF] mt-16">
              Contact us through our 24/7 live chat.{" "}
            </p>
            <p className="text-[#AFAFAF] mb-16">
              We&apos;re always happy to help!
            </p>
          </div>
          <div className="ml-0">
            <Link href="/feedback">
              <button className="bg-[#FFDF90] py-3 px-16 rounded-2xl hover:bg-[#ffd876] transition-colors duration-300 mb-16">
                Give Feedback
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 pl-16 pb-20">
          <Image
            src="/SecndScreen.svg"
            className="w-full h-auto bg-[#333333] rounded-2xl"
            alt="Screenshot"
            width={500}
            height={500}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
