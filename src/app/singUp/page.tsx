"use client";

import { NavbarC } from "@/components/navbarclean";
import Toast from "@/components/toast";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
    setErrorMessage("");
  };

  const validateForm = () => {
    if (!email || !password || !confirmPassword) {
      return "Please fill all the fields.";
    }

    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }

    return "";
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="bg-[#2B2B2B]">
      <NavbarC />
      <div className="min-h-[89.2vh] flex justify-center items-center py-32">
        <div className="bg-[#333333] p-8 rounded-lg w-auto min-w-lg">
          <h2 className="text-white text-2xl mb-4 font-semibold">Sign Up</h2>
          <form onSubmit={handleSignUp} className="space-y-5">
            <div>
              <label htmlFor="email" className="text-white">
                Email:
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
                className="bg-[#444444] text-white px-4 py-2 rounded-lg w-full mt-2"
                aria-describedby="email-error"
                aria-invalid={errorMessage ? "true" : "false"}
              />
            </div>
            <div>
              <label htmlFor="password" className="text-white">
                Password:
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => handleInputChange(e, setPassword)}
                className="bg-[#444444] text-white px-4 py-2 rounded-lg w-full mt-2"
                aria-describedby="password-error"
                aria-invalid={errorMessage ? "true" : "false"}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="text-white">
                Confirm Password:
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => handleInputChange(e, setConfirmPassword)}
                className="bg-[#444444] text-white px-4 py-2 rounded-lg w-full mt-2"
                aria-describedby="confirm-password-error"
                aria-invalid={errorMessage ? "true" : "false"}
              />
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm mt-2" id="form-error">
                {errorMessage}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="bg-[#BFAFF2] text-gray py-2 px-8 rounded-lg hover:bg-[#b29cfb] w-full mt-4"
              >
                Sign Up
              </button>
            </div>
          </form>

          {showToast && (
            <Toast
              message="Sign up successful!"
              onClose={() => setShowToast(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
