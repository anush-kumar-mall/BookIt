import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const ConfirmationPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const refId = location.state?.refId || "UNKNOWN"; // ✅ Get refId from navigation state

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen text-center bg-gray-100 font-[Poppins] transform -translate-y-36">
        <img
          src="/images/tick.png"
          alt="Success Tick"
          className="w-24 h-24 mb-5"
        />
        <h1 className="text-2xl font-semibold #161616 mb-2">
          Booking Confirmed
        </h1>
        <p className="text-base #656565 mb-5">Ref ID: #{refId}</p>
        <button
          className="bg-gray-300 text-white px-5 py-2 rounded-lg text-base cursor-pointer transition-colors duration-300 hover:bg-blue-800"
          onClick={handleBack}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
