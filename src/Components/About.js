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

      <div className="flex flex-row justify-center bg-gray-300 p-10 mb-20">
        <div className="overflow-x-auto transform scale-125">
          <table className="table-auto w-full text-lg">
            {/* head */}
            <thead>
              <tr>
                <th className="p-6">#</th>
                <th className="p-6">Title</th>
                <th className="p-6">Cited By</th>
                <th className="p-6">Year</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th className="p-6">1</th>
                <td className="p-6">Cy Ganderton</td>
                <td className="p-6">412</td>
                <td className="p-6">2014</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th className="p-6">2</th>
                <td className="p-6">Hart Hagerty</td>
                <td className="p-6">223</td>
                <td className="p-6">2009</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th className="p-6">3</th>
                <td className="p-6">Brice Swyre</td>
                <td className="p-6">616</td>
                <td className="p-6">2020</td>
              </tr>
              <tr>
                <th className="p-6">4</th>
                <td className="p-6">Cy Ganderton</td>
                <td className="p-6">412</td>
                <td className="p-6">2014</td>
              </tr>
              <tr>
                <th className="p-6">5</th>
                <td className="p-6">Cy Ganderton</td>
                <td className="p-6">412</td>
                <td className="p-6">2014</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default About;
