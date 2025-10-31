import React from "react";

export default function ErrorPopup({ message }: { message: string }) {
  return (
    <div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      bg-red-600 text-white px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(239,68,68,0.6)] 
      text-sm font-semibold animate-popIn z-50"
    >
      {message}
    </div>
  );
}
