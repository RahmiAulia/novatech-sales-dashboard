import React, { useState } from "react";

const DateRangeFilter = ({ onChange }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleChange = () => {
    // Kirim tanggal ke parent
    onChange({ startDate, endDate });
  };

  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-md shadow-sm">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          onBlur={handleChange}
          className="mt-1 p-2 border rounded-md text-sm"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          onBlur={handleChange}
          className="mt-1 p-2 border rounded-md text-sm"
        />
      </div>
    </div>
  );
};

export default DateRangeFilter;
