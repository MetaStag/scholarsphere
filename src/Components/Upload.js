import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";

function Upload() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name); // Check if file is being selected
      Papa.parse(file, {
        complete: (results) => {
          console.log("Parsed results:", results.data); // Check parsed data
          setData(results.data);
        },
        header: true, // If your CSV file has headers
      });
    }
  };

  const handleNextClick = () => {
    if (data.length === 0) {
      document.getElementById("my_modal_1").showModal();
    } else {
      navigate("/table", { state: { data } });
    }
  };

  return (
    <div className="mt-20 mx-auto text-center max-w-4xl">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mb-6"
      >
        Previous
      </button>
      <h1 className="text-5xl font-bold mb-4">Upload CSV Datasheet</h1>
      <div className="flex flex-col bg-neutral p-5 items-start rounded-xl bg-gray-100">
        <span className="text-xl font-bold">File Upload</span>
        <input
          type="file"
          accept=".csv"
          className="file-input w-full max-w-xs self-center"
          onChange={handleFileUpload}
        />
        <button onClick={handleNextClick} className="btn btn-primary self-end">
          Next
        </button>
      </div>

      {/* Modal Code */}
      <dialog id="my_modal_1" className="modal">
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
