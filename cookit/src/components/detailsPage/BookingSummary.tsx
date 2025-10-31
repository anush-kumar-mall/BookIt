import React from "react";

interface Experience {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
}

interface BookingSummaryProps {
  experience: Experience;
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  subtotal: number;
  tax: number;
  total: number;
  onConfirm: () => void;
}

export default function BookingSummary({
  experience,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  subtotal,
  tax,
  total,
  onConfirm,
}: BookingSummaryProps) {
  const price = experience.price;

  return (
    <div className="bg-[#EFEFEF] rounded-2xl w-full sm:w-[400px] lg:w-[350px] h-auto lg:h-[250px] shadow-lg p-4 flex flex-col justify-between">
      <div className="flex-1 flex flex-col justify-evenly text-sm space-y-2 sm:space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600 font-medium">Starts at</span>
          <span className="text-gray-800 font-semibold">₹{price}</span>
        </div>

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
        onClick={onConfirm}
        className="w-full bg-[#D7D7D7] text-black h-[38px] font-medium py-1 rounded-lg transition-all text-sm hover:bg-[#FFD643] mt-4"
      >
        Confirm
      </button>
    </div>
  );
}
