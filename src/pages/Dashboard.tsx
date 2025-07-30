// pages/Dashboard.tsx
import React from "react";
import cardData from "../data/dashboard.json";

const Dashboard: React.FC = () => {
  const handleCheckIn = () => {
    alert("Checked In Successfully!");
  };

  return (
    <div className="p-2 sm:p-6">
      <h1 className="font-bold text-2xl mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {cardData.map((card) =>
          card.id === 4 ? (
            <div
              key={card.id}
              className="bg-white shadow-md rounded-xl p-3 hover:shadow-lg transition flex flex-col justify-between font-bold"
            >
              <p className="mt-4 text-center">{card.content}</p>
              <button
                onClick={handleCheckIn}
                className="mt-2 bg-green-700 hover:bg-green-900 text-white py-2 rounded-md transition m-3"
              >
                Check In
              </button>
            </div>
          ) : (
            <div
              key={card.id}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
              <p className="text-gray-600 mt-4 font-bold">{card.content}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Dashboard;
