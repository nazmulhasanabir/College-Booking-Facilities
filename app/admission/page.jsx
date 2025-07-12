"use client";
import { useState } from "react";

const colleges = [
  { id: 1, name: "Stanford University" },
  { id: 2, name: "MIT" },
  { id: 3, name: "Harvard University" },
  { id: 4, name: "University of Oxford" }
];

export default function AdmissionPage() {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [formData, setFormData] = useState({
    candidateName: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`Admission submitted for ${selectedCollege}`);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Admission</h1>

      {/* Step 1: Select a College */}
      {!selectedCollege ? (
        <div className="max-w-2xl mx-auto grid gap-4">
          <h2 className="text-xl font-semibold mb-4">Select a College:</h2>
          {colleges.map((college) => (
            <button
              key={college.id}
              onClick={() => setSelectedCollege(college.name)}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              {college.name}
            </button>
          ))}
        </div>
      ) : (
        <>
          {/* Step 2: Admission Form */}
          <div className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-6">
            <h2 className="text-2xl font-semibold mb-4">
              Admission Form – {selectedCollege}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="candidateName"
                placeholder="Candidate Name"
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Candidate Email"
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Candidate Phone Number"
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="date"
                name="dob"
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                required
                className="w-full"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setSelectedCollege(null)}
                className="w-full text-sm text-blue-600 mt-2 underline"
              >
                ← Back to College List
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
