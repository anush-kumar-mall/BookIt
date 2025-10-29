import React from "react";
import Navbar from "../components/common/navbar"; 

const ConfirmationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ✅ Navbar at the top */}
      <Navbar />

      {/* ✅ Main content centered */}
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <h1 className="text-xl font-semibold text-gray-800 mb-1">
          Booking Confirmed
        </h1>

        <p className="text-gray-500 text-sm mb-6">Ref ID: HUF56&SO</p>

        <button
          className="bg-gray-200 text-gray-700 text-sm font-medium px-4 py-1.5 rounded hover:bg-gray-300 transition"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
