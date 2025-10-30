import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/common/navbar";

interface Experience {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
}

export default function SelectDatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [experience, setExperience] = useState<Experience | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dates = ["Oct 22", "Oct 23", "Oct 24", "Oct 25", "Oct 26"];
  const times = [
    { time: "8:00 AM", left: 3 },
    { time: "11:00 AM", left: 5 },
    { time: "2:00 PM", left: 2 },
    { time: "5:00 PM", left: 0 },
  ];

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/experiences/${id}`);
        setExperience(res.data);
      } catch (err) {
        console.error("Error fetching experience:", err);
      }
    };
    fetchExperience();
  }, [id]);

  if (!experience) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        Loading...
      </div>
    );
  }

  const price = experience.price;
  const tax = 59;
  const subtotal = price * quantity;
  const total = subtotal + tax;

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) {
      setErrorMessage("⚠️ Please select both date and time before confirming!");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-y-auto relative">
      <Navbar />

      {/* Error Modal */}
      {errorMessage && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50">
            <div className="bg-white border border-red-400 shadow-xl rounded-lg p-6 text-center max-w-sm w-[90%] animate-fade-in">
              <h2 className="text-red-600 font-semibold text-lg mb-2">
                Oops!
              </h2>
              <p className="text-gray-700 text-sm mb-4">{errorMessage}</p>
              <button
                onClick={() => setErrorMessage("")}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md text-sm font-medium"
              >
                OK
              </button>
            </div>
          </div>

          {/* Animation style */}
          <style>
            {`
              @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
              }
              .animate-fade-in {
                animation: fadeIn 0.2s ease-out;
              }
            `}
          </style>
        </>
      )}

      {/* Container */}
      <div className="flex flex-col lg:flex-row justify-start items-start px-6 sm:px-10 md:px-16 lg:px-[100px] py-8 sm:py-10 lg:py-[50px] space-y-10 lg:space-y-0 lg:space-x-10">
        
        {/* Left Section */}
        <div className="relative w-full lg:w-auto">
          <img
            src={process.env.PUBLIC_URL + experience.image}
            alt={experience.title}
            className="rounded-2xl w-full max-w-[650px] h-auto lg:h-[310px] object-cover shadow-md transition-transform duration-300 hover:scale-105"
          />

          <div className="mt-6 w-full max-w-[650px]">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">{experience.title}</h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4">{experience.description}</p>

            {/* Choose Date */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Choose Date</h3>
              <div className="flex gap-3 flex-wrap">
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
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Choose Time</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {times.map((t) => {
                  const isSoldOut = t.left === 0;
                  return (
                    <button
                      key={t.time}
                      onClick={() => !isSoldOut ? setSelectedTime(t.time) : null}
                      disabled={isSoldOut}
                      className={`p-2 rounded-lg border text-xs sm:text-sm font-medium flex flex-col items-center justify-center transition-all ${
                        isSoldOut
                          ? "bg-[#6A6A6A] border-[#6A6A6A] text-white cursor-not-allowed"
                          : selectedTime === t.time
                          ? "bg-[#FFD643] border-[#FFD643]"
                          : "bg-white border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      <span>{t.time}</span>
                      <span
                        className={`text-[10px] sm:text-xs ${
                          isSoldOut ? "text-white font-medium" : "text-gray-500"
                        }`}
                      >
                        {isSoldOut ? "Sold Out" : `${t.left} left`}
                      </span>
                    </button>
                  );
                })}
              </div>

              <p className="text-[10px] sm:text-xs text-gray-500 mt-2">
                *All times are in IST (GMT +5:30)
              </p>

              {/* About Section */}
              <h3 className="font-semibold text-gray-800 mb-4 mt-6 text-sm sm:text-base">About</h3>
              <div className="bg-[#EEEEEE] rounded-[4px] p-4 w-full max-w-[650px] h-auto shadow-sm flex items-center">
                <p className="text-gray-700 text-sm text-center leading-relaxed">
                  Scenic routes, trained guides, and safety briefing. Minimum age: 10.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Booking Section */}
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
              <span className="text-gray-900 font-bold font-inter">Total</span>
              <span className="text-gray-900 font-bold">₹{total}</span>
            </div>
          </div>

          <button
            onClick={handleConfirm}
            className="w-full bg-[#D7D7D7] text-black h-[38px] font-medium py-1 rounded-lg transition-all text-sm hover:bg-[#FFD643] mt-4"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
