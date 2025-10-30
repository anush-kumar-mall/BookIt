import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/common/navbar";

export default function CheckoutPage() {
  const [quantity, setQuantity] = useState(1);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const price = 999;
  const tax = 59;
  const subtotal = price * quantity;
  const total = subtotal + tax;

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setCurrentDate(formattedDate);
    setCurrentTime(formattedTime);
  }, []);

  const isFormValid =
    fullName.trim() !== "" &&
    email.includes("@") &&
    email.trim().length > 3 &&
    agree;

  const handlePayClick = () => {
    if (!isFormValid) {
      setErrorMessage("Please fill full name, valid email, and agree to terms.");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    const randomRef =
      "REF" + Math.random().toString(36).substring(2, 8).toUpperCase();
    navigate("/confirm", { state: { refId: randomRef } });
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Navbar />

      {/* ✅ Floating error message - Pro centered fade-in animation */}
      {errorMessage && (
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          bg-red-600 text-white px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(239,68,68,0.6)] 
          text-sm font-semibold animate-popIn z-50"
        >
          {errorMessage}
        </div>
      )}

      {/* Responsive Container */}
      <div className="flex flex-col lg:flex-row justify-center items-start px-6 py-10 gap-6">
        {/* Left Section Box */}
        <div className="bg-[#EFEFEF] rounded-xl shadow-md w-full lg:w-[650px] p-6">
          <div className="flex justify-start items-center mb-2">
            <span className="text-gray-600 text-sm">Full Name</span>
            <span className="text-gray-600 text-sm ml-[247px] hidden md:inline">
              Email
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between mb-4 md:space-x-2 space-y-2 md:space-y-0">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full md:w-1/2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm placeholder-[#DDDDDD]"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-1/2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm placeholder-[#DDDDDD]"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center mb-4 sm:space-x-2 space-y-2 sm:space-y-0">
            <input
              type="text"
              placeholder="Promo Code"
              className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm placeholder-[#DDDDDD]"
            />
            <button className="px-4 py-2 bg-[#161616] hover:bg-gray-800 text-white text-sm font-semibold rounded-md w-full sm:w-auto">
              Apply
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="w-4 h-4 accent-gray-600"
            />
            <label htmlFor="terms" className="text-gray-700 text-sm">
              I agree to the{" "}
              <span className="underline cursor-pointer text-gray-800">
                terms
              </span>{" "}
              and{" "}
              <span className="underline cursor-pointer text-gray-800">
                safety policy
              </span>
            </label>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#EFEFEF] rounded-2xl shadow-lg w-full lg:w-[350px] h-auto p-4 flex flex-col justify-between">
          <div className="flex-1 flex flex-col justify-evenly text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Experience</span>
              <span className="text-gray-800 font-semibold">Kayaking</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Date</span>
              <span className="text-gray-800 font-semibold">
                {currentDate}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Time</span>
              <span className="text-gray-800 font-semibold">{currentTime}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Qty</span>
              <span className="text-gray-800 font-semibold">{quantity}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-gray-800 font-semibold">₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Taxes</span>
              <span className="text-gray-800 font-semibold">₹{tax}</span>
            </div>

            <div className="flex justify-between border-t border-gray-300 pt-1">
              <span className="text-gray-900 font-bold">Total</span>
              <span className="text-gray-900 font-bold">₹{total}</span>
            </div>
          </div>

          <button
            onClick={handlePayClick}
            className={`mt-4 font-medium py-2 rounded-lg transition-all text-sm ${
              isFormValid
                ? "bg-[#FFD643] text-black hover:brightness-95 cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-pointer"
            }`}
          >
            Pay and Confirm
          </button>
        </div>
      </div>

      {/* ✅ New smooth pop-in animation */}
      <style>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.9) translate(-50%, -50%); }
          100% { opacity: 1; transform: scale(1) translate(-50%, -50%); }
        }
        .animate-popIn {
          animation: popIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
