import React from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
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
            <button className="bg-[#FFDF90] py-3 px-16 rounded-2xl hover:bg-[#FFDF80] transition-colors duration-100 mb-16">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-1/2 pl-16 pb-20">
          <img
            src="/Screenshot.svg"
            className="w-full h-auto bg-[#333333] rounded-2xl"
            alt="Screenshot"
          />
        </div>
      </div>

      <div className="w-full">
        <img
          src="/Logos.svg"
          className="w-full h-auto bg-[#333333] rounded-t-2xl"
          alt="Logos"
        />
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white w-[900px] h-[510px] flex justify-center items-center rounded-3xl">
          <img
            src="/HomeScnd.svg"
            className="h-full w-auto min-w-full min-h-full object-contain mt-24"
            alt="Centralized Image"
          />
        </div>
      </div>

      <div className="flex justify-center items-center py-16">
        <div className="w-full max-w-6xl px-8">
          <ul className="flex space-x-12 justify-between items-center text-center">
            <li className="flex flex-col items-center">
              <img
                src="/Cards.svg"
                className="w-12 h-12 mb-4"
                alt="Cards Icon"
              />
              <h3 className="text-xl font-semibold text-white mt-6">
                Customizable Card
              </h3>
              <p className="text-[#AFAFAF] mt-6 opacity-60">
                Customize your own card for your exact income and expense needs.
              </p>
            </li>

            <li className="flex flex-col items-center">
              <img src="/Coin.svg" className="w-12 h-12 mb-4" alt="Coin Icon" />
              <h3 className="text-xl font-semibold text-white mt-6">
                No Payment Fee
              </h3>
              <p className="text-[#AFAFAF] mt-6 opacity-60">
                Transfer your payment all over the world with no payment fee.
              </p>
            </li>

            <li className="flex flex-col items-center">
              <img
                src="/Purse.svg"
                className="w-12 h-12 mb-4"
                alt="Purse Icon"
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
            more. And I don't need to worry because it's all in one place!
            thanks!”
          </h1>

          <div className="flex items-center justify-start mt-6 p-4 rounded-lg w-full max-w-[900px]">
            <div className="flex items-center justify-start pl-16">
              <div className="w-20 h-20">
                <img
                  src="/Profile.svg"
                  className="w-full h-auto rounded-full"
                  alt="Profile Icon"
                />
              </div>

              <div className="ml-6 flex flex-col justify-start">
                <p className="text-[#2b2b2b] font-semibold">Johnny Owens</p>

                <div className="flex mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="full"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-[#2B2B2B] opacity-70"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="full"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-[#2B2B2B] opacity-70"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="full"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-[#2B2B2B] opacity-70"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="full"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-[#2B2B2B] opacity-70"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="full"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-[#2b2b2b] opacity-70"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between h-screen px-40">
        <div className="flex flex-col justify-center w-1/2">
          <h1 className="text-6xl font-semibold text-white mb-8">Questions?</h1>
          <h1 className="text-6xl font-semibold text-white">Let's Talk</h1>
          <div className="text-lg tracking-wider">
            <p className="text-[#AFAFAF] mt-16">
              Contact us through our 24/7 live chat.{" "}
            </p>
            <p className="text-[#AFAFAF] mb-16">We’re always happy to help!</p>
          </div>
          <div className="ml-0">
            <button className="bg-[#FFDF90] py-3 px-16 rounded-2xl hover:bg-[#FFDF80] transition-colors duration-100 mb-16">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-1/2 pl-16 pb-20">
          <img
            src="/SecndScreen.svg"
            className="w-full h-auto bg-[#333333] rounded-2xl"
            alt="Screenshot"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
