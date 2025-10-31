import React from "react";
import Navbar from "../components/common/Navbar";
import CheckoutContainer from "../components/checkoutPage/CheckoutContainer";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Navbar />
      <CheckoutContainer />
    </div>
  );
}
