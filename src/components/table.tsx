"use client";

import React, { useState, useEffect } from "react";
import { WalletData } from "@/types";
import { Funnel } from "phosphor-react";

type TableProps = {
  data: WalletData[];
  columns: (keyof WalletData)[];
};

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const [filteredData, setFilteredData] = useState<WalletData[]>(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage = 5;

  useEffect(() => {
    if (!data) return;
    if (searchQuery === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.walletName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchQuery, data]);

  if (!filteredData || filteredData.length === 0) {
    return <div className="text-white text-center p-4">No data available</div>;
  }

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const currencyColors: Record<string, string> = {
    USD: "text-green-400",
    EUR: "text-blue-400",
    BTC: "text-yellow-400",
  };

  return (
    <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-400 bg-[#2B2B2B] p-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search Wallet"
          className="p-2 w-1/4 rounded bg-[#333] text-white text-center"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Funnel className="text-white ml-2 cursor-pointer" size={24} />
      </div>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-[#333333] text-white">
            {columns.map((col, index) => (
              <th key={index} className="px-6 py-3 text-left font-semibold tracking-wider">
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-[#444444]" : "bg-[#333333]"}>
              {columns.map((col, idx) => {
                let value = row[col];
                let style = "";

                if (col === "balance") {
                  let numValue = typeof value === "number" ? value : parseFloat(value);
                  if (!isNaN(numValue)) {
                    style = numValue >= 0 ? "text-green-400" : "text-red-400";
                  }
                } else if (col === "currency") {
                  style = currencyColors[value] || "";
                }

                return (
                  <td key={idx} className={`px-6 py-4 text-white text-sm font-medium ${style}`}>
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4 text-white">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-600 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(filteredData.length / rowsPerPage)}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={indexOfLastRow >= filteredData.length}
          className="px-4 py-2 bg-gray-600 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
