import React, { useState } from "react";
import Navbar from "../components/common/navbar";

export default function CheckoutPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedDate, setSelectedDate] = useState("Oct 22");
  const [selectedTime, setSelectedTime] = useState("");

  const price = 999;
  const tax = 59;
  const subtotal = price * quantity;
  const total = subtotal + tax;

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Main Container */}
      <div className="relative flex justify-start items-start">
        {/* Left Section Box */}
        <div
          className="absolute bg-[#EFEFEF] rounded-xl shadow-md"
          style={{
            width: "650px",
            height: "auto",
            top: "50px",
            left: "150px",
            paddingTop: "20px",
            paddingRight: "24px",
            paddingBottom: "20px",
            paddingLeft: "24px",
            gap: "16px",
            opacity: 1,
          }}
        >
          {/* Labels */}
          <div className="flex justify-start items-center mb-2">
            <span className="text-gray-600 text-sm">Full Name</span>
            <span className="text-gray-600 text-sm ml-[247px]">Email</span>
          </div>

          {/* Form Inputs */}
<div className="flex justify-between mb-4 space-x-2">
  <input
    type="text"
    placeholder="Full Name"
    className="w-1/2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm placeholder-[#DDDDDD]"
  />
  <input
    type="email"
    placeholder="Email"
    className="w-1/2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm placeholder-[#DDDDDD]"
  />
</div>


          {/* Promo Code Section */}
          <div className="flex items-center mb-4 space-x-2">
            <input
              type="text"
              placeholder="Promo Code"
              className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm placeholder-[#DDDDDD]"
            />
            <button className="px-4 py-2 bg-[#161616] hover:bg-gray-800 text-white text-sm font-semibold rounded-md">
  Apply
</button>

          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
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
        <div className="absolute top-[50px] left-[850px] bg-[#EFEFEF] rounded-2xl w-[350px] h-[290px] shadow-lg p-4 flex flex-col justify-between">

          {/* Details Section */}
          <div className="flex-1 flex flex-col justify-evenly text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Experience</span>
              <span className="text-gray-800 font-semibold">Kayaking</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Date</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={decreaseQuantity}
                  className="w-6 h-6 flex justify-center items-center bg-gray-300 rounded-full text-sm font-bold"
                >
                  −
                </button>
                <span className="text-gray-800 font-semibold">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="w-6 h-6 flex justify-center items-center bg-gray-300 rounded-full text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Time</span>
              <span className="text-gray-800 font-semibold">09:00 am</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Qty</span>
              <span className="text-gray-800 font-semibold">1</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-gray-800 font-semibold">₹{total}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Taxes</span>
              <span className="text-gray-800 font-semibold">₹{total}</span>
            </div>

            <div className="flex justify-between border-t border-gray-300 pt-1">
              <span className="text-gray-900 font-bold">Total</span>
              <span className="text-gray-900 font-bold">₹{total}</span>
            </div>
          </div>

          {/* Bottom Button */}
          <button className="w-full bg-[#FFD643] text-black font-medium py-1 rounded-lg hover:brightness-95 transition-all w-[350px] h-[90px] text-sm">
            Pay and Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
