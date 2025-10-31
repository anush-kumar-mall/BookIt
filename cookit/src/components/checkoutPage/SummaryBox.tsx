import React from "react";

interface Props {
  quantity: number;
  currentDate: string;
  currentTime: string;
  subtotal: number;
  tax: number;
  total: number;
  isFormValid: boolean;
  handlePayClick: () => void;
}

export default function SummaryBox({
  quantity,
  currentDate,
  currentTime,
  subtotal,
  tax,
  total,
  isFormValid,
  handlePayClick,
}: Props) {
  return (
    <div className="bg-[#EFEFEF] rounded-2xl shadow-lg w-full lg:w-[350px] h-auto p-4 flex flex-col justify-between">
      <div className="flex-1 flex flex-col justify-evenly text-sm space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600 font-medium">Experience</span>
          <span className="text-gray-800 font-semibold">Kayaking</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Date</span>
          <span className="text-gray-800 font-semibold">{currentDate}</span>
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
  );
}
