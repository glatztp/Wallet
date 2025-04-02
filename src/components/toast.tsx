"use client";
import { useEffect } from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-5 right-5 w-72 p-4 bg-green-500 text-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="text-white hover:text-gray-300">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toast;