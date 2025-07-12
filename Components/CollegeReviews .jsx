const CollegeReviews = () => {
  const reviews = [
    {
      id: 1,
      college: "Stanford University",
      reviewer: "Sarah Johnson",
      rating: 5,
      feedback: "Stanford provided me with an incredible academic and social experience. The professors are top-notch!"
    },
    {
      id: 2,
      college: "MIT",
      reviewer: "Alex Kim",
      rating: 4.8,
      feedback: "MIT is intense but amazing. I learned so much and loved being around other driven students."
    },
    {
      id: 3,
      college: "Harvard University",
      reviewer: "Emily Davis",
      rating: 4.7,
      feedback: "Harvard helped me grow intellectually and socially. The campus is beautiful and the opportunities are endless."
    },
    {
      id: 4,
      college: "University of Oxford",
      reviewer: "James Wright",
      rating: 4.9,
      feedback: "The tutorial system is incredibly effective. Oxford’s traditions and academics are unmatched."
    }
  ];

  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Student Reviews</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="border rounded-lg p-5 shadow-md bg-gray-50 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">{review.college}</h3>
            <p className="text-sm text-gray-600 mb-2">By {review.reviewer}</p>
            <p className="text-yellow-500 mb-2">
              {"★".repeat(Math.round(review.rating))}{" "}
              <span className="text-gray-700 ml-1">({review.rating}/5)</span>
            </p>
            <p className="text-gray-700">{review.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegeReviews;
