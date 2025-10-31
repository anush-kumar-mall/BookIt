import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function useDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [experience, setExperience] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const tax = 59;

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await axios.get(
          `https://bookit-1-y1x6.onrender.com/api/experiences/${id}`
        );
        setExperience(res.data);
      } catch (err) {
        console.error("Error fetching experience:", err);
      }
    };
    fetchExperience();
  }, [id]);

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : q));

  const subtotal = experience ? experience.price * quantity : 0;
  const total = subtotal + tax;

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) {
      setErrorMessage("⚠️ Please select both date and time before confirming!");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }
    navigate("/checkout");
  };

  return {
    experience,
    errorMessage,
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
    handleConfirm,
  };
}
