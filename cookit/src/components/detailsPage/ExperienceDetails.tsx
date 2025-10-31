import React from "react";

interface Experience {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
}

interface ExperienceDetailsProps {
  experience: Experience;
  selectedDate: string;
  selectedTime: string;
  setSelectedDate: (date: string) => void;
  setSelectedTime: (time: string) => void;
}

export default function ExperienceDetails({
  experience,
  selectedDate,
  selectedTime,
  setSelectedDate,
  setSelectedTime,
}: ExperienceDetailsProps) {
  // ✅ Generate next 5 days dynamically (starting from tomorrow)
  const dates = Array.from({ length: 5 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1); // start from tomorrow
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  });

  const times = [
    { time: "8:00 AM", left: 3 },
    { time: "11:00 AM", left: 5 },
    { time: "2:00 PM", left: 2 },
    { time: "5:00 PM", left: 0 },
  ];

  return (
    <div className="relative w-full lg:w-auto">
      <img
        src={process.env.PUBLIC_URL + experience.image}
        alt={experience.title}
        className="rounded-2xl w-full max-w-[650px] h-auto lg:h-[310px] object-cover shadow-md transition-transform duration-300 hover:scale-105"
      />

      <div className="mt-6 w-full max-w-[650px]">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          {experience.title}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-4">
          {experience.description}
        </p>

        {/* Choose Date */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
            Choose Date
          </h3>
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
          <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
            Choose Time
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {times.map((t) => {
              const isSoldOut = t.left === 0;
              return (
                <button
                  key={t.time}
                  onClick={() => !isSoldOut && setSelectedTime(t.time)}
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
                      isSoldOut
                        ? "text-white font-medium"
                        : "text-gray-500"
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
          <h3 className="font-semibold text-gray-800 mb-4 mt-6 text-sm sm:text-base">
            About
          </h3>
          <div className="bg-[#EEEEEE] rounded-[4px] p-4 w-full max-w-[650px] h-auto shadow-sm flex items-center">
            <p className="text-gray-700 text-sm text-center leading-relaxed">
              Scenic routes, trained guides, and safety briefing. Minimum age: 10.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
