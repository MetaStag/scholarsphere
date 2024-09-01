import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import BarC from "./BarC";
import PieC from "./PieC";

function estimateHIndex(totalCitations) {
  return Math.floor(Math.sqrt(totalCitations));
}

function Report() {
  const { state } = useLocation();
  const { profile } = state || {};

  if (!profile) {
    return <p>No profile data available</p>;
  }

  const hIndex = estimateHIndex(profile.Citation);

  return (
    <div className="mt-20 mx-auto max-w-6xl">
      <motion.div
        className="flex flex-col items-center text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="ring-primary ring-offset-base-100 w-48 h-48 rounded-full ring ring-offset-2 overflow-hidden shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={
              profile.image ||
              "https://www.freeiconspng.com/uploads/profile-icon-9.png"
            }
            alt={profile.Author}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <h1 className="text-4xl font-extrabold mt-6">{profile.Author}</h1>
        <p className="text-xl text-gray-600 mt-2">{profile.Designation}</p>
        <p className="text-xl text-gray-600">{profile.Institute}</p>
        <p className="text-xl text-blue-700 mt-2">{profile.Email}</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.div
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <BarC />
        </motion.div>
        <motion.div
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <PieC />
        </motion.div>
      </motion.div>

      <div className="stats shadow mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        <motion.div
          className="stat place-items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-lg p-4"
          whileHover={{ scale: 1.05 }}
        >
          <div className="stat-title">Citation Count</div>
          <div className="stat-value">{profile.Citation}</div>
        </motion.div>

        <motion.div
          className="stat place-items-center bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-4"
          whileHover={{ scale: 1.05 }}
        >
          <div className="stat-title">Publication Count</div>
          <div className="stat-value">{profile.Publication}</div>
        </motion.div>

        <motion.div
          className="stat place-items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg p-4"
          whileHover={{ scale: 1.05 }}
        >
          <div className="stat-title">H-Index</div>
          <div className="stat-value">{hIndex}</div>
        </motion.div>

        <motion.div
          className="stat place-items-center bg-gradient-to-r from-teal-400 to-indigo-500 text-white rounded-lg p-4"
          whileHover={{ scale: 1.05 }}
        >
          <div className="stat-title">Awarded Grants</div>
          <div className="stat-value">4</div>
        </motion.div>
      </div>

      <motion.div
        className="border-2 mt-5 p-5 rounded-lg bg-gray-50 shadow-md hover:shadow-lg transition-shadow duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h1 className="text-bold text-3xl mb-4">Publication Summary</h1>
        <div className="text-primary-800 flex justify-between w-full">
          <span className="flex-1 text-center text-lg">
            Conference Publications: 80
          </span>
          <span className="flex-1 text-center text-lg">
            Journal Publications: 25
          </span>
          <span className="flex-1 text-center text-lg">Patents: 2</span>
        </div>
      </motion.div>

      <motion.div
        className="border-2 mt-5 p-5 rounded-lg bg-gray-50 shadow-md hover:shadow-lg transition-shadow duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h1 className="text-bold text-3xl mb-4">Key Publications</h1>
        <div className="border-2 p-4 rounded-lg flex flex-col my-3">
          <span className="text-bold text-xl">
            Plastic deformation of B2-NiTi
          </span>
          <span>Journal of Computer Science, 2005</span>
          <span className="text-primary-800 underline cursor-pointer">
            Read more
          </span>
        </div>
        <div className="border-2 p-4 rounded-lg flex flex-col my-3">
          <span className="text-bold text-xl">
            Modeling of Plane Strain Fatigue Crack Closure
          </span>
          <span>Journal of Computer Science, 2007</span>
          <span className="text-primary-800 underline cursor-pointer">
            Read more
          </span>
        </div>
        <div className="border-2 p-4 rounded-lg flex flex-col my-3">
          <span className="text-bold text-xl">
            Constraint Effect in Thermo-Mechanical Fatigue
          </span>
          <span>Journal of Computer Science, 2010</span>
          <span className="text-primary-800 underline cursor-pointer">
            Read more
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default Report;
