import React, { useState, useMemo } from "react";
import { useSales } from "../hooks/useSales";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const TableSales = () => {
  const { sales, loading } = useSales();

  // Semua hooks harus di sini
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });

  // Sorting
  const sortedSales = useMemo(() => {
    if (!sales) return [];
    const sortableSales = [...sales];
    const { key, direction } = sortConfig;
    sortableSales.sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    return sortableSales;
  }, [sales, sortConfig]);

  // Pagination
  const totalPages = Math.ceil(sortedSales.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedSales.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  const requestSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  if (loading) return <div className="p-6">Loading...</div>;

  // Table headers with fixed width
  const headers = [
    { key: "id", label: "ID", width: "w-16" },
    { key: "product", label: "Product", width: "w-56" },
    { key: "category", label: "Category", width: "w-32" },
    { key: "stock", label: "Stock", width: "w-24" },
    { key: "price", label: "Price ($)", width: "w-28" },
    { key: "rating", label: "Rating", width: "w-24" },
  ];

  return (
    <div className="p-6">
      <div className="bg-white shadow-sm rounded-lg overflow-x-auto">
        <table className="min-w-full table-fixed border-collapse">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header) => (
                <th
                  key={header.key}
                  className={`${header.width} px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider cursor-pointer`}
                  onClick={() => requestSort(header.key)}
                >
                  <div className="flex items-center">
                    {header.label}
                    <span className="ml-1">
                      <ChevronUpIcon
                        className={`h-3 w-3 inline-block ${
                          sortConfig.key === header.key &&
                          sortConfig.direction === "asc"
                            ? "text-gray-900"
                            : "text-gray-400"
                        }`}
                      />
                      <ChevronDownIcon
                        className={`h-3 w-3 inline-block ${
                          sortConfig.key === header.key &&
                          sortConfig.direction === "desc"
                            ? "text-gray-900"
                            : "text-gray-400"
                        }`}
                      />
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {currentItems.map((sale) => (
              <tr>
                <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  {sale.id}
                </td>
                <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  {sale.product}
                </td>
                <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  {sale.category}
                </td>
                <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  {sale.stock}
                </td>
                <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  {sale.price}
                </td>
                <td className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  {sale.rating}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center sm:justify-end mt-4 items-center gap-2">

        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md text-white ${
            currentPage === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          Prev
        </button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md text-white ${
            currentPage === totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableSales;
