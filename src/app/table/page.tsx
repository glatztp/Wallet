import React from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Table from "@/components/table";
import { faker } from "@faker-js/faker";

const generateWalletData = (num: number) => {
  const data = [];

  for (let i = 0; i < num; i++) {
    const balance = parseFloat((Math.random() * 20000 - 10000).toFixed(2));

    data.push({
      walletName: `Wallet ${i + 1}`,
      balance: balance,
      creationDate: faker.date.past().toISOString().split("T")[0], 
      currency: faker.helpers.arrayElement(["USD", "EUR", "BTC"]), 
    });
  }

  return data;
};

const walletData = generateWalletData(50); 
const columns = ["walletName", "balance", "creationDate", "currency"];

export default function WalletPage() {
  return (
    <div className="bg-[#2b2b2b]">
      <Navbar />
      <div className="px-40 bg-[#2b2b2b]">
        <Table data={walletData} columns={columns} />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
