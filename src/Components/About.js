import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function About() {
  const { state } = useLocation();
  const { profile } = state || {};
  const navigate = useNavigate();

  if (!profile) {
    return <p>No profile data available</p>;
  }

  const handleGenerateReport = () => {
    navigate("/report", { state: { profile } });
  };

  return (
    <div className="mt-20 text-center">
      <div className="flex items-center justify-center mb-6 relative mx-64">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-48 h-48 rounded-full ring ring-offset-2 overflow-hidden">
            <img
              src={
                profile.image ||
                "https://www.freeiconspng.com/uploads/profile-icon-9.png"
              }
              alt={profile.Author}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="ml-6 text-left">
          <h2 className="text-3xl font-bold mb-4">{profile.Author}</h2>
          <p className="text-xl mb-3">
            {profile.Designation}. {profile.Institute}
          </p>
          <p className="text-xl">{profile.Location}</p>
          <p className="text-xl">{profile.Email}</p>
          <button
            onClick={handleGenerateReport}
            className="btn btn-primary mt-4"
          >
            Generate Report
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-center p-10">
        <div className="transform scale-125">
        <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Title</th>
            <th>Citations count</th>
            <th>Publication count</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>Author</td>
              <td>Designation</td>
              <td>Institute</td>
            </tr>
        </tbody>
      </table>
        </div>
      </div>
    </div>
  );
}

export default About;
