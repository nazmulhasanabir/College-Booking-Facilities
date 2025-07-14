"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const AllColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your backend API
    const fetchColleges = async () => {
      try {
        const res = await fetch("/api/college");
        const data = await res.json();
        setColleges(data);
      } catch (error) {
        console.error("Error fetching colleges:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  if (loading) {
    return <p className="text-center mt-8">Loading colleges...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">All Colleges</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <div key={college._id || college.id} className="bg-white p-4 shadow rounded-lg">
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{college.name}</h2>
            <p>⭐ {college.rating}</p>
            <p>🎓 Admission: {college.admissionDate}</p>
            <p>📚 Research: {college.researchCount}</p>
          <Link href={`/college/${college._id }`}>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
                Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllColleges;
