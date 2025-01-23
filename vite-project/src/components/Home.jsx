import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96 text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">
          Welcome to Gym Trainer
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          Achieve your fitness goals with our personalized training sessions.
        </p>
        <p className="text-gray-500 mb-6">
          Our professional trainers are here to guide you every step of the way.
        </p>
        {localStorage.getItem("oneMonthTotal") && (
          <p>
            Your Last Calculated One Month Total:-
            {
              localStorage.getItem("oneMonthTotal")
              //   localStorage.getItem("oneMonthTotal")
              //   localStorage.getItem("oneMonthTotal")
            }
          </p>
        )}
        {localStorage.getItem("twoMonthTotal") && (
          <p>
            Your Last Calculated Two Month Total:-
            {localStorage.getItem("twoMonthTotal")}
          </p>
        )}
        {localStorage.getItem("threeMonthTotal") && (
          <p className="mb-4">
            Your Last Calculated Three Month Total:-
            {localStorage.getItem("threeMonthTotal")}
          </p>
        )}
        <Link
          to="/calculate"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 "
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
