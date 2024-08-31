import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Table() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const profiles = state?.data || []; // Extract data from location state

  const handleProfileClick = (profile) => {
    navigate("/about", { state: { profile } });
  };

  const handleBackClick = () => {
    navigate(-1);
  };

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
            <th>Name</th>
            <th>Designation</th>
            <th>Institute</th>
            <th>Location</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile, index) => (
            <tr key={index}>
              <td>{profile.Author}</td>
              <td>{profile.Designation}</td>
              <td>{profile.Institute}</td>
              <td>{profile.Location}</td>
              <td>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleProfileClick(profile)}
                >
                  PROFILE
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
