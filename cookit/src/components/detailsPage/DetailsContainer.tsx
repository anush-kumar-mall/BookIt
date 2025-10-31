import React from "react";
import ExperienceDetails from "./ExperienceDetails";
import BookingSummary from "./BookingSummary";

interface Experience {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
}

interface DetailsContainerProps {
  experience: Experience;
  selectedDate: string;
  selectedTime: string;
  setSelectedDate: (date: string) => void;
  setSelectedTime: (time: string) => void;
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  subtotal: number;
  tax: number;
  total: number;
  handleConfirm: () => void;
}

export default function DetailsContainer({
  experience,
  selectedDate,
  selectedTime,
  setSelectedDate,
  setSelectedTime,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  subtotal,
  tax,
  total,
  handleConfirm,
}: DetailsContainerProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-start items-start px-6 sm:px-10 md:px-16 lg:px-[100px] py-8 sm:py-10 lg:py-[50px] space-y-10 lg:space-y-0 lg:space-x-10">
      <ExperienceDetails
        experience={experience}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        setSelectedDate={setSelectedDate}
        setSelectedTime={setSelectedTime}
      />

      <BookingSummary
        experience={experience}
        quantity={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        subtotal={subtotal}
        tax={tax}
        total={total}
        onConfirm={handleConfirm}
      />
    </div>
  );
}
