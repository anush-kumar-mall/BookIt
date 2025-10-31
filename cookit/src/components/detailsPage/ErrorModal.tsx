import React from "react";

interface ErrorModalProps {
  message: string;
}

export default function ErrorModal({ message }: ErrorModalProps) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50">
        <div className="bg-white border border-red-400 shadow-xl rounded-lg p-6 text-center max-w-sm w-[90%] animate-fade-in">
          <h2 className="text-red-600 font-semibold text-lg mb-2">Oops!</h2>
          <p className="text-gray-700 text-sm mb-4">{message}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md text-sm font-medium"
          >
            OK
          </button>
        </div>
      </div>

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
  );
}
