import React, { useState } from "react";
import Navbar from "../components/common/navbar";

export default function SelectDatePage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedDate, setSelectedDate] = useState("Oct 22");
  const [selectedTime, setSelectedTime] = useState("");

  const price = 999;
  const tax = 59;
  const subtotal = price * quantity;
  const total = subtotal + tax;

  const dates = ["Oct 22", "Oct 23", "Oct 24", "Oct 25", "Oct 26"];
  const times = [
    { time: "8:00 AM", left: 3 },
    { time: "11:00 AM", left: 5 },
    { time: "2:00 PM", left: 2 },
    { time: "5:00 PM", left: 0 }, // Sold Out
  ];

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Main Container */}
      <div className="relative flex justify-start items-start">
        {/* Left Section */}
        <div className="relative mt-[50px] ml-[100px]">
          <img
            src="/images/kayaking.jpg"
            alt="Kayaking"
            className="rounded-2xl w-[650px] h-[310px] object-cover shadow-md transition-transform duration-300 hover:scale-105"
          />

          {/* Bottom Section (Under Image) */}
          <div className="mt-6 w-[650px]">
            <h2 className="text-xl font-semibold mb-2">Kayaking Adventure</h2>
            <p className="text-gray-600 text-sm mb-4">
              Curated small-group experience. Certified guide. Safety first with gear included. Helmet and Life jackets along with an expert will accompany in kayaking.
            </p>

            {/* Choose Date */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Choose Date</h3>
              <div className="flex gap-3">
                {dates.map((date) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                      selectedDate === date
                        ? "bg-[#FFD643] border-[#FFD643]"
                        : "bg-white border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            {/* Choose Time */}
            <div className="mb-2">
              <h3 className="font-semibold text-gray-800 mb-2">Choose Time</h3>
              <div className="grid grid-cols-4 gap-3">
                {times.map((t) => {
                  const isSoldOut = t.left === 0;
                  return (
                    <button
                      key={t.time}
                      onClick={() =>
                        !isSoldOut ? setSelectedTime(t.time) : null
                      }
                      disabled={isSoldOut}
                      className={`p-2 rounded-lg border text-sm font-medium flex flex-col items-center justify-center transition-all ${
                        isSoldOut
                          ? "bg-[#6A6A6A] border-[#6A6A6A] text-white cursor-not-allowed"
                          : selectedTime === t.time
                          ? "bg-[#FFD643] border-[#FFD643]"
                          : "bg-white border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      <span>{t.time}</span>
                      <span
                        className={`text-xs ${
                          isSoldOut
                            ? "text-white font-medium"
                            : "text-gray-500"
                        }`}
                      >
                        {isSoldOut ? "Sold Out" : `${t.left} left`}
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                *All times are in IST (GMT +5:30)
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="absolute top-[50px] left-[800px] bg-[#EFEFEF] rounded-2xl w-[350px] h-[250px] shadow-lg p-4 flex flex-col justify-between">
          {/* Top Title */}
          <h2 className="text-lg font-semibold text-center mb-1">
            Booking Details
          </h2>

          {/* Details Section */}
          <div className="flex-1 flex flex-col justify-evenly text-sm">
            {/* Row 1 */}
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Starts at</span>
              <span className="text-gray-800 font-semibold">₹{price}</span>
            </div>

            {/* Row 2 */}
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Quantity</span>
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

            {/* Row 3 */}
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-gray-800 font-semibold">₹{subtotal}</span>
            </div>

            {/* Row 4 */}
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Taxes</span>
              <span className="text-gray-800 font-semibold">₹{tax}</span>
            </div>

            {/* Row 5 */}
            <div className="flex justify-between border-t border-gray-300 pt-1">
              <span className="text-gray-900 font-bold">Total</span>
              <span className="text-gray-900 font-bold">₹{total}</span>
            </div>
          </div>

          {/* Bottom Button */}
          <button className="w-full bg-[#D7D7D7] text-black font-medium py-1 rounded-lg hover:bg-gray-300 transition-all text-sm">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
