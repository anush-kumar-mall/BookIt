import React from "react";

interface Props {
  fullName: string;
  setFullName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  agree: boolean;
  setAgree: (val: boolean) => void;
}

export default function CheckoutForm({
  fullName,
  setFullName,
  email,
  setEmail,
  agree,
  setAgree,
}: Props) {
  return (
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
          <span className="underline cursor-pointer text-gray-800">terms</span>{" "}
          and{" "}
          <span className="underline cursor-pointer text-gray-800">
            safety policy
          </span>
        </label>
      </div>
    </div>
  );
}
