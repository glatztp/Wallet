// components/Loading.tsx
"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#2B2B2B]  flex justify-center items-center z-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-4 border-transparent border-t-[#BFAFF2] rounded-full animate-spin"></div>
        <p className="text-[#BFAFF2] mt-4 text-lg font-semibold">Loading</p>
      </div>
    </div>
  );
}
