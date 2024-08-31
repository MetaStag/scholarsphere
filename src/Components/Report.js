// src/Components/Report.js
import React from "react";

function Report() {
  return (
    <div className="mt-20 mx-auto max-w-6xl flex flex-col border-4 p-5 my-10">
      <div className="flex flex-row">
      <div className="ring-primary ring-offset-base-100 w-48 h-48 rounded-full ring ring-offset-2 overflow-hidden mx-10">
      <img
        src={
          "https://www.freeiconspng.com/uploads/profile-icon-9.png"
        }
        alt="imag"
        className="w-44 h-44 object-cover"
            />
      </div>
      <div className="flex flex-col">
        <span>Dr. Jane Smith</span>
        <span>Associate Professor of Computer Science</span>
        <span>Stanford University, USA</span>
        <span className="text-blue-700">janesmith@Stanford.edu.in</span>
      </div>
      </div>
      <div className="stats shadow mt-10">
        <div className="stat place-items-center">
          <div className="stat-title text-primary-800">Citation Count</div>
          <div className="stat-value">95</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title text-primary-800">Publication Count</div>
          <div className="stat-value text-secondary">75</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title text-primary-800">H-Index</div>
          <div className="stat-value">8</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title text-primary-800">Awarded Grants</div>
          <div className="stat-value text-secondary">4</div>
        </div>
      </div>

      <div className="border-2 mt-5 p-3 rounded-lg">
        <h1 className="text-bold text-2xl">Publication Summary</h1>
        <div className="text-primary-800 flex justify-between w-full">
          <span className="flex-1 text-center text-lg">Conference Publications: 80</span>
          <span className="flex-1 text-center text-lg">Journal Publications: 25</span>
          <span className="flex-1 text-center text-lg">Patents: 2</span>
        </div>
      </div>

      <div className="border-2 mt-5 p-3 rounded-lg">
        <h1 className="text-bold text-2xl">Key Publications</h1>
        <div className="border-2 p-2 rounded-lg flex flex-col my-2">
          <span className="text-bold text-lg">Publication Title 1</span>
          <span>Journal of Computer Science, 2021</span>
          <span className="text-primary-800">Read more</span>
        </div>
        <div className="border-2 p-2 rounded-lg flex flex-col my-2">
          <span className="text-bold text-lg">Publication Title 2</span>
          <span>Journal of Computer Science, 2021</span>
          <span className="text-primary-800">Read more</span>
        </div>
        <div className="border-2 p-2 rounded-lg flex flex-col">
          <span className="text-bold text-lg">Publication Title 3</span>
          <span>Journal of Computer Science, 2021</span>
          <span className="text-primary-800">Read more</span>
        </div>

      </div>
      </div>
  );
}

export default Report;
