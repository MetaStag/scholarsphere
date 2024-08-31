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
    <div className="mt-20 text-center">
      <div className="flex items-center justify-center mb-6 relative mx-64">
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
          <p className="text-xl mb-3">{profile.job}.{profile.college}</p>
          <p className="text-xl">{profile.country}</p>
          <p className="text-xl">{profile.mail}</p>
        </div>
      </div>

      <div className="flex flex-row">
      {/* Sort/Filter */}
      <div className="flex flex-row mx-64">
      <div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">Sort</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Filter</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      </div>
      </div>
      <div>
        <div className="bg-gray-200 p-5 max-w-auto">
          <span>Title</span>
          <span>Cited by</span>
          <span>Year</span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;
