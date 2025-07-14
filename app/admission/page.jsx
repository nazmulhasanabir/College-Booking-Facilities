"use client";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/config";
import toast from "react-hot-toast";

export default function AdmissionPage() {
  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [user] = useAuthState(auth);

  const [formData, setFormData] = useState({
    candidateName: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    image: null,
  });

  useEffect(() => {
    const fetchCollege = async () => {
      try {
        const res = await fetch("/api/college");
        const data = await res.json();
        setColleges(data);
      } catch (error) {
        console.log("Failed to fetch colleges:", error);
      }
    };
    fetchCollege();
  }, []);

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        candidateName: user.displayName || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    for (let key in formData) {
      formPayload.append(key, formData[key]);
    }
    formPayload.append("collegeName", selectedCollege);

    try {
      const res = await fetch("/api/application", {
        method: "POST",
        body: formPayload,
      });

      const result = await res.json();
      if (res.ok) {
        toast.success("Application submitted successfully!");
        setFormData({
          candidateName: "",
          subject: "",
          email: "",
          phone: "",
          address: "",
          dob: "",
          image: null,
        });
        setSelectedCollege(null);
      } else {
        toast.error(result?.message || "Failed to submit application.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Admission</h1>

      {!selectedCollege ? (
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Select a College
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {colleges.map((college) => (
              <div
                key={college._id || college.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {college.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    📍 {college.location || "Unknown Location"}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-yellow-600 font-medium">
                      ⭐ {college.rating || "N/A"}
                    </p>
                    <button
                      onClick={() => setSelectedCollege(college.name)}
                      className="text-blue-600 text-sm font-medium hover:underline"
                    >
                      Apply Now →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-6">
          <h2 className="text-2xl font-semibold mb-4">
            Admission Form – {selectedCollege}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="candidateName"
              value={formData.candidateName}
              onChange={handleChange}
              placeholder="Candidate Name"
              required
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Candidate Email"
              required
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Candidate Phone Number"
              required
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
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
      )}
    </div>
  );
}
