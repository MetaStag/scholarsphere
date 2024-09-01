import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";

function Upload() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (results) => {
          setData(results.data);
        },
        header: true,
      });
    }
  };

  const handleNextClick = () => {
    if (data.length === 0) {
      // Show the modal if no file is uploaded
      document.getElementById("upload_warning_modal").showModal();
    } else {
      navigate("/table", { state: { data } });
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="mt-20 mx-auto text-center max-w-5xl p-6 bg-white shadow-lg rounded-lg">
      <button
        onClick={handleBackClick}
        className="btn btn-primary mb-6 px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        Go Back
      </button>
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Upload CSV Datasheet
      </h1>
      <p className="text-lg mb-10 text-gray-600">
        Upload your CSV datasheet containing basic information of the
        professors.
      </p>
      <div className="bg-gray-100 p-6 rounded-xl shadow-md">
        <span className="text-xl font-semibold">File Upload</span>
        <span className="block text-gray-600 mb-4">
          Upload your document here
        </span>
        <div className="border-2 border-dashed border-blue-400 p-6 mx-20 rounded-md bg-gray-200">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
              />
            </svg>
          </div>
          <div className="flex flex-col">
          <span className="text-lg text-gray-700 mb-2">
            Drag your file to start uploading
          </span>
          <span className="text-lg text-gray-600 mb-4">--------or--------</span>
          <input
            type="file"
            accept=".csv"
            className="file-input w-full max-w-xs mx-auto"
            onChange={handleFileUpload}
          />
          </div>
        </div>
        <span className="block text-gray-600 mt-2">
          Only .csv files are supported
        </span>
        <button
          onClick={handleNextClick}
          className="btn btn-primary mt-6 px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Next
        </button>
      </div>

      {/* Modal Code */}
      <dialog id="upload_warning_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">No file uploaded!</h3>
          <p className="py-4">Please upload a CSV file before proceeding.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Upload;
