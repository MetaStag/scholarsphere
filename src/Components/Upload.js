import React from "react";
import { useNavigate } from "react-router-dom";

function Upload() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/table");
  };
  // same wahi previous page
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="mt-20 mx-auto text-center max-w-4xl">
      <button
        onClick={handleBackClick}
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mb-6"
      >
        Previous
      </button>
      <h1 className="text-5xl font-bold mb-4">Upload Excel Datasheet</h1>
      <p className="text-xl mb-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
        egestas dolor, vitae dictum est tempus quis. Phasellus euismod, libero
        vel vestibulum viverra. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec euismod egestas dolor, vitae dictum est tempus
        quis. Phasellus euismod, libero vel vestibulum viverra
      </p>
      <div className="flex flex-col bg-neutral p-5 items-start rounded-xl">
        <span className="text-xl font-bold">File Upload</span>
        <span>Upload your document here</span>
        <div className="flex flex-col border-2 border-dashed border-primary self-center p-5 rounded-md w-full py-10 px-5 m-5">
          <div className="self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
              />
            </svg>
          </div>
          <span className="text-lg">Drag your file to start uploading</span>
          <span className="text-lg">--------or--------</span>
          <input
            type="file"
            className="file-input w-full max-w-xs self-center"
          />
        </div>
        <span>Only support .csv files</span>
        <button onClick={handleNextClick} className="btn btn-primary self-end">
          Next
        </button>
      </div>
    </div>
  );
}

export default Upload;
