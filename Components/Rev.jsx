"use client"
import { useEffect, useState } from "react";

const Rev = () => {
const [reviews , setReview] = useState([])
useEffect(()=>{
  const fetchReview = async () =>{
    try{
      const res = await fetch('/api/review')
      const data = await res.json()
      setReview(data)
    } catch (error) {
        console.error("Failed to fetch colleges:", error);
      }
    
  }
fetchReview()
},[])

  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Student Reviews</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {reviews.map((review,rev) => (
          <div key={rev} className="border rounded-lg p-5 shadow-md bg-gray-50 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">{review.collegeName}</h3>
            <p className="text-sm text-gray-600 mb-2">By {review.candidateName}</p>
            <p className="text-yellow-500 mb-2">
              {"★".repeat(Math.round(review.rating))}{" "}
              <span className="text-gray-700 ml-1">({review.rating}/5)</span>
            </p>
            <p className="text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rev;
