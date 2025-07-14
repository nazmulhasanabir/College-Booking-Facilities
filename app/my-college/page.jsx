"use client";

import { useEffect, useState, useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/config";
import toast from "react-hot-toast";

export default function MyCollegeStatus() {
  const [user] = useAuthState(auth);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewText, setReviewText] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");
  const [reviews, setReviews] = useState([]);

  // Fetch reviews function
  const fetchReviews = useCallback(async () => {
    if (!selectedCollege) return;
    try {
      const res = await fetch(`/api/review?collegeName=${selectedCollege}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      if (Array.isArray(data)) {
        setReviews(data);
      } else {
        console.warn("API response is not an array:", data);
        setReviews([]);
      }
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
      setReviews([]);
    }
  }, [selectedCollege]);

  useEffect(() => {
    if (user?.email) {
      const fetchApplications = async () => {
        try {
          const res = await fetch(`/api/application?email=${user.email}`);
          const data = await res.json();
          setApplications(data || []);
          // Set default selected college to the first application, if available
          if (data && data.length > 0) {
            setSelectedCollege(data[0].collegeName);
          }
        } catch (error) {
          console.error("Error fetching applications:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchApplications();
    }
  }, [user]);

  // Fetch reviews when selectedCollege changes
  useEffect(() => {
    fetchReviews();
  }, [fetchReviews, selectedCollege]);

  const handleReviewSubmit = async () => {
    if (!user || !user.email) {
      toast.error("You must be logged in to submit a review.");
      return;
    }

    if (!reviewText.trim()) {
      toast.error("Please write something!");
      return;
    }

    if (!selectedCollege) {
      toast.error("Please select a college to review.");
      return;
    }

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          review: reviewText.trim(),
          candidateName: user.displayName || user.email,
          collegeName: selectedCollege,
        }),
      });

      if (res.ok) {
        toast.success("Review submitted!");
        setReviewText("");
        fetchReviews(); // Refresh reviews after submission
      } else {
        let data;
        try {
          data = await res.json();
        } catch {
          data = { message: "Unknown error" };
        }
        toast.error(`Error: ${data.message}`);
      }
    } catch (err) {
      console.error("Failed to submit review:", err);
      toast.error("Something went wrong.");
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading application data...</p>;
  }

  if (!applications || applications.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">No Applications Found</h2>
        <p>You haven’t applied to any college yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {applications.map((application, index) => (
        <div key={index} className="bg-white shadow rounded p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <h2 className="text-xl font-bold">{application.collegeName}</h2>
              <p className="text-gray-600">
                Applied on:{" "}
                {new Date(application.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>
                <strong>Candidate Name:</strong> {application.candidateName}
              </p>
              <p>
                <strong>Subject:</strong> {application.subject}
              </p>
              <p>
                <strong>Phone:</strong> {application.phone}
              </p>
              <p>
                <strong>Email:</strong> {application.email}
              </p>
            </div>
            <div>
              <p>
                <strong>Date of Birth:</strong> {application.dob}
              </p>
              <p>
                <strong>Address:</strong> {application.address}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span className="text-yellow-500 font-semibold">Pending</span>
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Review Section */}
      <div className="bg-white p-6 rounded shadow mt-6">
        <h2 className="text-2xl font-bold mb-4">Submit Your Review</h2>
        <select
          value={selectedCollege}
          onChange={(e) => setSelectedCollege(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-4"
        >
          <option value="" disabled>
            Select a college
          </option>
          {applications.map((app, index) => (
            <option key={index} value={app.collegeName}>
              {app.collegeName}
            </option>
          ))}
        </select>
        <textarea
          rows={4}
          placeholder="Write your review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-4"
        />
        <button
          onClick={handleReviewSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Review
        </button>

        {/* Display Reviews */}
        {reviews.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Existing Reviews</h3>
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border rounded-lg p-4 mb-4 bg-gray-50 hover:shadow-lg transition"
              >
                <h4 className="text-lg font-semibold">{review.collegeName}</h4>
                <p className="text-sm text-gray-600">
                  By {review.candidateName}
                </p>
                <p className="text-gray-700 mt-2">{review.review}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
