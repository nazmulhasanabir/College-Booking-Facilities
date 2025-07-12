"use client";

import { useEffect, useState } from "react";

const Card_Section = () => {
  const [openId, setOpenId] = useState(null); // For toggling details
  const [colleges, setColleges] = useState([]); // Colleges from backend

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const res = await fetch("/api/college");
        const data = await res.json();
        setColleges(data);
      } catch (error) {
        console.error("Failed to fetch colleges:", error);
      }
    };
    fetchColleges();
  }, []);



  return (
    <section className="py-8 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Top Colleges</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {colleges.slice(0, 3).map((college) => (
          <div key={college._id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-3">{college.name}</h3>
            <p className="text-sm text-gray-700 mt-1">
              Admission Date: {college.admissionDate}
            </p>
            <p className="text-sm text-gray-700">
              Research Count: {college.researchCount}
            </p>

            <button
              // onClick={() => toggleDetails(college._id)}
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
            View Details
            </button>

          
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card_Section;
