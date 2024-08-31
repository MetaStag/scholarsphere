// src/Components/About.js
import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  const { state } = useLocation();
  const { profile } = state || {};

  if (!profile) {
    return <p>No profile data available</p>;
  }

  return (
    <div className="mt-20 mx-auto text-center max-w-4xl">
      <h1 className="text-5xl font-bold mb-10">About {profile.name}</h1>
      <div className="flex items-center justify-center mb-6 relative">
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
          <h2 className="text-3xl font-bold mb-4">{profile.name}</h2>
          <p className="text-xl mb-3">Job: {profile.job}</p>
          <p className="text-xl">Country: {profile.country}</p>
        </div>
      </div>

      {/* for dropdown */}

      <div
        className="collapse bg-base-300"
        style={{ maxWidth: "20rem", left: "20rem" }}
      >
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div
        className="collapse bg-base-300"
        style={{ maxWidth: "20rem", left: "20rem" }}
      >
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div
        className="collapse bg-base-300"
        style={{ maxWidth: "20rem", left: "20rem" }}
      >
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}

export default About;
