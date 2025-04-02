"use client";

import { Navbar } from "@/components/navbar";
import React, { useState } from "react";

const FeedbackPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState<number>(5);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
    setRating(5);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#2b2b2b] text-white flex justify-center items-center p-6">
        <div className="max-w-lg w-full bg-[#2A2A2A] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-400">
          {isSubmitted ? (
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-[#BFAFF2]">Feedback Submitted!</h2>
              <p className="text-lg text-gray-400">Thank you for your feedback. We will get in touch with you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold mb-6 text-center">Leave Your Feedback</h2>

              <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 mt-2 bg-transparent border-2 border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#bfaff2] transition-all duration-200"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 mt-2 bg-transparent border-2 border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#bfaff2] transition-all duration-200"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Your Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-24 p-3 mt-2 bg-transparent border-2 border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#bfaff2] transition-all duration-200"
                  rows={4}
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="rating" className="block text-sm font-medium text-gray-300">Rating</label>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`text-2xl ${index < rating ? "text-yellow-400" : "text-gray-400"} hover:text-yellow-500 transition-all duration-300`}
                      onClick={() => setRating(index + 1)}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#bfaff2] hover:bg-[#af9dec] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
