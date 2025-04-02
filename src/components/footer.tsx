import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-[#2B2B2B] h-auto border-t border-[#535353] mx-28">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center py-5">
          <div className="text-4xl font-semibold text-white">Wallet</div>
          <div className="text-[#ffffff] text-lg pr-24 -mb-24 opacity-80">
            Upgrades right to your inbox
          </div>
        </div>
        <div className="flex justify-between items-center mt-12">
          <ul className="flex  font-semibold text-lg">
            <li className="text-white ">
              <Link href="#">©  Wallet 2022</Link>
            </li>
            <li className="text-white px-8">
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li className="text-white px-8">
              <Link href="/cookies">Cookies Policy</Link>
            </li>
            <li className="text-white px-8">
              <Link href="/terms">Terms of Use</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              className="mr-2 bg-[#535353] border border-[#535353] rounded-2xl px-6 py-3 opacity-50 text-white text-start"
              placeholder="Enter your email"
            />
            <button className="bg-[#BFAFF2] text-gray px-6 py-3 rounded-2xl hover:bg-[#c9bcf4] transition-colors duration-200">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
