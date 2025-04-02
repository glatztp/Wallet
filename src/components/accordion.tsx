"use client";
import { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-[#535353]">
      <div
        onClick={toggleAccordion}
        className="cursor-pointer text-white text-lg py-3 flex justify-between items-center"
      >
        <span>{title}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen py-4" : "max-h-0 py-0"
        }`}
        style={{ transition: "max-height 0.3s ease-in-out" }}
      >
        <div className="text-white">{children}</div>
      </div>
    </div>
  );
};
