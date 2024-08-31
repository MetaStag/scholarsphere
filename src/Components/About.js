import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Correct import for both useLocation and useNavigate

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

      <div className="flex flex-row">
        {/* Sort/Filter section */}
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

        <div className="overflow-x-auto mx-5">
          <table className="table-auto w-full text-base text-lg">
            {/* head */}
            <thead>
              <tr>
                <th className="p-4">#</th>
                <th className="p-4">Title</th>
                <th className="p-4">Cited By</th>
                <th className="p-4">Year</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th className="p-4">1</th>
                <td className="p-4">Cy Ganderton</td>
                <td className="p-4">412</td>
                <td className="p-4">2014</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th className="p-4">2</th>
                <td className="p-4">Hart Hagerty</td>
                <td className="p-4">223</td>
                <td className="p-4">2009</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th className="p-4">3</th>
                <td className="p-4">Brice Swyre</td>
                <td className="p-4">616</td>
                <td className="p-4">2020</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default About;
