import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Table() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const profiles = state?.data || []; // Extract data from location state
  console.log(profiles.n)

  const handleProfileClick = (profile) => {
    navigate("/about", { state: { profile } });
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="overflow-x-auto mt-20 mx-auto text-center max-w-5xl p-4 bg-white shadow-lg rounded-lg">
      <button
        onClick={handleBackClick}
        className="btn btn-primary mb-6 px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        Go Back
      </button>

      <table className="table-auto w-full bg-gray-100 rounded-lg shadow-md">
        {/* head */}
        <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <tr>
            <th className="p-3 text-lg font-semibold tracking-wide">Name</th>
            <th className="p-3 text-lg font-semibold tracking-wide">
              Designation
            </th>
            <th className="p-3 text-lg font-semibold tracking-wide">
              Institute
            </th>
            <th className="p-3 text-lg font-semibold tracking-wide">
              Location
            </th>
            <th className="p-3 text-lg font-semibold tracking-wide">Profile</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile, index) => (
            <tr
              key={index}
              className="bg-white hover:bg-gray-100 transition-colors"
            >
              <td className="p-3 border-b border-gray-200 font-bold">
                {profile.Author}
              </td>
              <td className="p-3 border-b border-gray-200">
                {profile.Designation}
              </td>
              <td className="p-3 border-b border-gray-200">
                {profile.Institute}
              </td>
              <td className="p-3 border-b border-gray-200">
                {profile.Location}
              </td>
              <td className="p-3 border-b border-gray-200">
                <button
                  className="btn btn-outline btn-primary px-4 py-1 rounded-full transition-transform transform hover:scale-105"
                  onClick={() => handleProfileClick(profile)}
                >
                  View Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
