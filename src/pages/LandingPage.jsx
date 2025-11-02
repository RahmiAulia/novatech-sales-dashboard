import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="relative bg-slate-800 h-96 flex items-end px-8">
        {/* dashboard button */}
        <div className="absolute top-6 right-5">
          <Link
            to="/"
            className="bg-blue-800 hover:bg-blue-300 text-white px-4 py-2 rounded-3xl transition-colors"
          >
            Dashboard
          </Link>
        </div>

        {/* teks landing page */}
        <div className="pb-10">
          <p className="text-white font-semibold text-6xl">Landing Page</p>
        </div>
      </div>

      <div className="p-5 flex justify-center">
        <p>Halaman ini akan menjadi sebuah landing page</p>
      </div>
    </>
  );
};

export default LandingPage;
