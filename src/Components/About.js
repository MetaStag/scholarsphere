import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function About() {
  const { state } = useLocation();
  const { profile } = state || {};
  const navigate = useNavigate();

  if (!profile) {
    return (
      <p className="text-center mt-20 text-xl text-red-500">
        No profile data available
      </p>
    );
  }

  const handleGenerateReport = () => {
    navigate("/report", { state: { profile } });
  };

  const renderLinksAndYears = (links, years) => {
    if (!links || !years) return null;
    const linkArray = links.split(",");
    const yearArray = years.split(",");

    return linkArray.map((link, index) => (
      <tr
        key={index}
        className="hover:bg-gray-100 transition-colors duration-200"
      >
        <td className="p-4">
          <a
            href={link.trim()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            {link.trim()}
          </a>
        </td>
        <td className="p-4 text-gray-700">
          {yearArray[index]?.trim() || "N/A"}
        </td>
      </tr>
    ));
  };

  return (
    <div className="mt-16 mx-auto max-w-6xl p-8 bg-gradient-to-br from-white to-blue-100 shadow-2xl rounded-3xl">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <div className="relative group">
            <img
              src={
                profile.image ||
                "https://www.freeiconspng.com/uploads/profile-icon-9.png"
              }
              alt={profile.Author}
              className="w-40 h-40 md:w-56 md:h-56 rounded-full border-8 border-blue-400 object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-90 bg-blue-900 bg-opacity-50 rounded-full transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">
                View Profile
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
          <h2 className="text-5xl font-bold text-gray-800">{profile.Author}</h2>
          <p className="text-xl text-gray-600">
            {profile.Designation}, {profile.Institute}
          </p>
          <p className="text-lg text-gray-600">{profile.Location}</p>
          <p className="text-lg text-gray-600">{profile.Email}</p>
          <button
            onClick={handleGenerateReport}
            className="btn bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg mt-6 transform hover:scale-105 transition-transform duration-300"
          >
            Generate Report
          </button>
        </div>
      </div>

      {/* Contributions Table */}
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">
          Contributions
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg border border-gray-200">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left font-medium text-lg">
                  Contribution
                </th>
                <th className="p-4 text-left font-medium text-lg">Year</th>
              </tr>
            </thead>
            <tbody>{renderLinksAndYears(profile.Links, profile.Year)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default About;