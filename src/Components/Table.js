// src/Components/Table.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Table() {
  const navigate = useNavigate();

  const handleProfileClick = (profile) => {
    navigate("/about", { state: { profile } });
  };
  // previous page pe jaane ke liye ...if not needed remove it
  const handleBackClick = () => {
    navigate(-1);
  };

  const profiles = [
    {
      name: "Hart Hagerty",
      job: "Desktop Support Technician",
      country: "India",
      image: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    },

    {
      name: "Arush Gupta",
      job: "Desktop Support Technician",
      country: "India",
      image: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    },

    {
      name: "Abhibhav Sharma",
      job: "Random job1",
      country: "India",
      image: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    },

    {
      name: "Himanshu",
      job: "Random job2",
      country: "India",
      image: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    },

    {
      name: "Shivam",
      job: "Random job3",
      country: "India",
      image: "https://img.daisyui.com/images/profile/demo/5@94.webp",
    },

    {
      name: "Vishnu",
      job: "Random job4",
      country: "India",
      image: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    },

    {
      name: "Anarghya",
      job: "Random job5",
      country: "India",
      image: "https://img.daisyui.com/images/profile/demo/5@94.webp",
    },
  ];

  return (
    <div className="overflow-x-auto mt-20 mx-auto text-center max-w-4xl">
      <button
        onClick={handleBackClick}
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mb-6"
      >
        Previous
      </button>

      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Country</th>
            <th>Profiles</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile, index) => (
            <tr key={index}>
              <th></th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={profile.image} alt={profile.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{profile.name}</div>
                  </div>
                </div>
              </td>
              <td>{profile.job}</td>
              <td>{profile.country}</td>
              <th>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleProfileClick(profile)}
                >
                  PROFILE
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
