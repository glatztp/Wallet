import Link from "next/link";
import "../app/globals.css";
import "../app/index.css";

export function NavbarC() {
  return (
    <div className="flex justify-between items-center font-pp p-6 bg-[#2B2B2B]">
      <div className="text-4xl font-semibold text-white px-14">
        <Link href="/">Wallet</Link>
      </div>

      
    </div>
  );
}
