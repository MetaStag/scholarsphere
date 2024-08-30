// src/Components/About.js
import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function About() {
  const { state } = useLocation();
  const { profile } = state || {};
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  if (!profile) {
    return <p>No profile data available</p>;
  }

  return (
    <div className="mt-20 mx-auto text-center max-w-4xl">
      <button
        onClick={handleBackClick}
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mb-6"
      >
        Previous
      </button>
      <h1 className="text-5xl font-bold mb-4">About {profile.name}</h1>
      <div className="flex items-center justify-center mb-6">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-48 h-48 rounded-full ring ring-offset-2">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="ml-6 text-left">
          <h2 className="text-3xl font-bold">{profile.name}</h2>
          <p className="text-xl">Job: {profile.job}</p>
          <p className="text-xl">Country: {profile.country}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
