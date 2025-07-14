"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const AllColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
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

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p className="text-center mt-8">Loading colleges...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">All Colleges</h1>

      {/* Search Field */}
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by college name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* College Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.length > 0 ? (
          filteredColleges.map((college) => (
            <div
              key={college._id || college.id}
              className="bg-white p-4 shadow rounded-lg"
            >
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-2">{college.name}</h2>
              <p>🎓 Admission Dates: {college.admissionDates?.join(", ")}</p>
              <p>📚 Research History: {college.researchHistory}</p>
              <Link href={`/college/${college._id || college.id}`}>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No colleges found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllColleges;
