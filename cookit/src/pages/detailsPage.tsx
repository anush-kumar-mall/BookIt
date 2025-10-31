import React from "react";
import Navbar from "../components/common/Navbar";
import ErrorModal from "../components/detailsPage/ErrorModal";
import DetailsContainer from "../components/detailsPage/DetailsContainer";
import useDetailsPage from "../hooks/useDetailsPage";

export default function DetailsPage() {
  const {
    experience,
    errorMessage,
    handleConfirm,
    quantity,
    increaseQuantity,
    decreaseQuantity,
    subtotal,
    tax,
    total,
    selectedDate,
    selectedTime,
    setSelectedDate,
    setSelectedTime,
  } = useDetailsPage();

  if (!experience) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-y-auto relative">
      <Navbar />
      {errorMessage && <ErrorModal message={errorMessage} />}

      <DetailsContainer
        experience={experience}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        setSelectedDate={setSelectedDate}
        setSelectedTime={setSelectedTime}
        quantity={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        subtotal={subtotal}
        tax={tax}
        total={total}
        handleConfirm={handleConfirm}
      />
    </div>
  );
}
