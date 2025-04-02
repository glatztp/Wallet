"use client";

import React, { useState, useEffect } from "react";
import { Funnel } from "phosphor-react";

// Definindo um tipo para os dados de cada item
type WalletData = {
  walletName: string;
  balance: number;
  currency: string;
};

type TableProps = {
  data: WalletData[];  // Usando o tipo WalletData
  columns: string[];
};

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const [filteredData, setFilteredData] = useState<WalletData[]>(data);  // Usando o tipo WalletData
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item =>
        item.walletName && typeof item.walletName === 'string' && item.walletName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchQuery, data]);

  // Modificado: Cores para os valores de saldo com base no saldo
  const renderBalance = (balance: number) => {
    return (
      <span className={`${balance >= 0 ? 'text-green-500' : 'text-red-500'} font-semibold`}>
        {balance.toFixed(2)}
      </span>
    );
  };

  // Modificado: Nomes de moedas com cores
  const renderCurrency = (currency: string) => {
    switch (currency) {
      case 'USD':
        return <span className="text-green-500 font-semibold">{currency}</span>;
      case 'EUR':
        return <span className="text-blue-500 font-semibold">{currency}</span>;
      case 'BTC':
        return <span className="text-orange-500 font-semibold">{currency}</span>;
      default:
        return <span className="text-white font-semibold">{currency}</span>;
    }
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-400 bg-[#2B2B2B] p-4">
      <div className="my-4 flex items-center justify-between">
        <div className="flex items-center bg-[#444444] p-2 rounded-lg w-1/3">
          <Funnel size={20} className="text-white mr-2" />
          <input
            type="text"
            className="bg-transparent text-white outline-none w-full"
            placeholder="Search by Wallet Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <span className="text-white text-sm">
          {filteredData.length} Wallets found
        </span>
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
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-[#444444]" : "bg-[#333333]"
              } hover:bg-[#555555] transition-colors duration-200`}
            >
              {columns.map((col, idx) => (
                <td key={idx} className="px-6 py-4 text-white text-sm font-medium">
                  {col === 'balance' ? renderBalance(row[col]) : col === 'currency' ? renderCurrency(row[col]) : row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[#444444] text-white rounded-lg disabled:bg-gray-600"
          >
            Prev
          </button>
          <span className="mx-2 text-white">Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-[#444444] text-white rounded-lg disabled:bg-gray-600"
          >
            Next
          </button>
        </div>
        <div>
          <span className="text-white text-sm">
            Showing {indexOfFirstRow + 1} to {Math.min(indexOfLastRow, filteredData.length)} of {filteredData.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Table;
