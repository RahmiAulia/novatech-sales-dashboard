import React, { useState, useMemo } from "react";
import BarChartCard from "../components/dashboard_page/BarChartCard";
import LineChartCard from "../components/dashboard_page/LineChartCard";
import DateRangeFilter from "../components/dashboard_page/DateRangeFilter";
import Header from "../components/header/Header";
import { useSales } from "../components/hooks/useSales";
import Navbar from "../components/navbar/Navbar";

export default function Dashboard() {
  const { sales } = useSales();
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });

  const filteredSales = useMemo(() => {
    if (!dateRange.startDate || !dateRange.endDate) return sales;
    const start = new Date(dateRange.startDate);
    const end = new Date(dateRange.endDate);
    return sales.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= start && itemDate <= end;
    });
  }, [sales, dateRange]);

  return (
    <div className="min-h-full">
      <Navbar />
      <Header title="Sales Dashboard" />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Sales Dashboard
          </h1> */}

          {/* Date Range Filter */}
          <div className="p-5">
            <DateRangeFilter onChange={setDateRange} />
          </div>

          {/* Line Chart */}
          <div className="p-5">
            <LineChartCard sales={filteredSales} />
          </div>

          {/* Bar Chart */}
          <div className="p-5">
            <BarChartCard sales={filteredSales} />
          </div>
        </div>
      </main>
    </div>
  );
}
