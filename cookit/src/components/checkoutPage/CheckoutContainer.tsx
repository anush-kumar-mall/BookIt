import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import SummaryBox from "./SummaryBox";
import ErrorPopup from "./ErrorPopup";

export default function CheckoutContainer() {
  const [quantity, setQuantity] = useState(1);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const price = 999;
  const tax = 59;
  const subtotal = price * quantity;
  const total = subtotal + tax;

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setCurrentDate(formattedDate);
    setCurrentTime(formattedTime);
  }, []);

  const isFormValid =
    fullName.trim() !== "" &&
    email.includes("@") &&
    email.trim().length > 3 &&
    agree;

  const handlePayClick = () => {
    if (!isFormValid) {
      setErrorMessage("Please fill full name, valid email, and agree to terms.");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    const randomRef =
      "REF" + Math.random().toString(36).substring(2, 8).toUpperCase();
    navigate("/confirm", { state: { refId: randomRef } });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start px-6 py-10 gap-6 relative">
      {errorMessage && <ErrorPopup message={errorMessage} />}

      <CheckoutForm
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        agree={agree}
        setAgree={setAgree}
      />

      <SummaryBox
        quantity={quantity}
        currentDate={currentDate}
        currentTime={currentTime}
        subtotal={subtotal}
        tax={tax}
        total={total}
        isFormValid={isFormValid}
        handlePayClick={handlePayClick}
      />

      <style>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.9) translate(-50%, -50%); }
          100% { opacity: 1; transform: scale(1) translate(-50%, -50%); }
        }
        .animate-popIn {
          animation: popIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
