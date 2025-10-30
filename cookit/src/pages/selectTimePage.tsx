import React from "react";
import Navbar from "../components/common/navbar";

export default function SelectTimePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Main Container */}
      <div className="flex justify-start items-start">
        
        {/* Left Section */}
          <div>
                <img
                src="/images/kayaking.jpg"
                alt="Kayaking"
                className="rounded-2xl mt-[50px] ml-[100px] w-[95%] sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[55%] object-cover shadow-md transition-transform duration-300 hover:scale-105"
              />

        {/* Left Section Bottom Part */}
              <div>

              </div>

          </div>

        {/* Right Section */}
      <div>

          </div>

          </div>

      
    </div>
  );
}
