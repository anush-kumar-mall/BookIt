import React, { useState } from "react";
import Navbar from "../components/common/navbar"; 

const SelectTimePage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 999;
  const tax = 5;
  const total = price * quantity + tax;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);

  const dates = ["Oct 22", "Oct 23", "Oct 24", "Oct 25", "Oct 26"];
  const times = [
    { time: "07:00 am", left: "4 left" },
    { time: "09:30 am", left: "3 left" },
    { time: "11:00 am", left: "5 left" },
    { time: "03:00 pm", left: "3 left" },
    { time: "05:00 pm", left: "Sold out" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* ✅ Navbar at the top */}
      <Navbar />

      {/* ✅ Main content */}
      <main className="flex-grow max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 py-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
            alt="Kayaking"
            className="rounded-xl w-full h-80 object-cover shadow-sm"
          />

          <h2 className="text-2xl font-semibold mt-6 mb-1">Kayaking</h2>
          <p className="text-sm text-gray-700 border border-gray-200 p-3 rounded-md mb-6">
            Curated small-group experience. Certified guide. Safety first with
            gear included. Helmet and Life jackets along with an expert will
            accompany in kayaking.
          </p>

          {/* Choose date */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2 text-gray-800">Choose date</h3>
            <div className="flex flex-wrap gap-2">
              {dates.map((d, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 text-sm rounded-md border transition ${
                    i === 0
                      ? "bg-yellow-200 border-yellow-400 font-medium"
                      : "border-gray-300 bg-white hover:bg-gray-100"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Choose time */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2 text-gray-800">Choose time</h3>
            <p className="text-xs text-gray-500 mb-3">
              All dates in IST (GMT +5:30)
            </p>
            <div className="flex flex-wrap gap-2">
              {times.map((t, i) => (
                <button
                  key={i}
                  disabled={t.left === "Sold out"}
                  className={`px-4 py-2 text-sm rounded-md border flex flex-col items-center ${
                    t.left === "Sold out"
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white hover:bg-gray-100 border-gray-300"
                  }`}
                >
                  <span>{t.time}</span>
                  <span className="text-xs text-gray-400">{t.left}</span>
                </button>
              ))}
            </div>
          </div>

          {/* About section */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">About</h3>
            <p className="text-sm text-gray-600 border border-gray-200 rounded-md p-3">
              Scenic routes, trained guides, and safety briefing. Minimum age:
              10.
            </p>
          </div>
        </div>

        {/* RIGHT BOOKING SUMMARY */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-5 h-fit sticky top-24">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Starts at</span>
            <span className="font-medium text-black">₹{price}</span>
          </div>

          {/* Quantity selector */}
          <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
            <span>Quantity</span>
            <div className="flex items-center border rounded-md">
              <button
                onClick={handleDecrease}
                className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Subtotal</span>
            <span>₹{price * quantity}</span>
          </div>

          <div className="flex justify-between text-sm text-gray-600 mb-3">
            <span>Taxes</span>
            <span>₹{tax}</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between items-center text-base font-semibold text-gray-800 mb-4">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button className="w-full py-2 bg-gray-200 text-gray-600 rounded-md font-semibold cursor-not-allowed">
            Confirm
          </button>
        </div>
      </main>
    </div>
  );
};

export default SelectTimePage;
