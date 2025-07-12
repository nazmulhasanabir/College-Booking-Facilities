"use client";

const colleges = [
  {
    id: 1,
    name: "Stanford University",
    image: "/images/stanford.jpg",
    rating: 4.8,
    admissionDate: "2024-12-01",
    researchCount: 2847,
    events: [
      { name: "Tech Innovation Summit", date: "2024-03-15" },
      { name: "Career Fair", date: "2024-04-20" }
    ],
    sports: ["Football", "Basketball", "Swimming"]
  },
  {
    id: 2,
    name: "MIT",
    image: "/images/mit.jpg",
    rating: 4.9,
    admissionDate: "2024-01-01",
    researchCount: 3156,
    events: [
      { name: "Hackathon", date: "2024-02-28" },
      { name: "Science Fair", date: "2024-03-25" }
    ],
    sports: ["Rowing", "Track & Field", "Sailing"]
  },
  {
    id: 3,
    name: "Harvard University",
    image: "/images/harvard.jpg",
    rating: 4.7,
    admissionDate: "2024-01-01",
    researchCount: 2934,
    events: [
      { name: "Model UN", date: "2024-03-08" },
      { name: "Business Competition", date: "2024-04-12" }
    ],
    sports: ["Football", "Ice Hockey", "Basketball"]
  },
  {
    id: 4,
    name: "University of Oxford",
    image: "/images/oxford.jpg",
    rating: 4.6,
    admissionDate: "2024-10-15",
    researchCount: 2456,
    events: [
      { name: "Oxford Debates", date: "2024-03-30" },
      { name: "May Morning", date: "2024-05-01" }
    ],
    sports: ["Rowing", "Cricket", "Rugby"]
  },
  {
    id: 5,
    name: "University of Tokyo",
    image: "/images/tokyo.jpg",
    rating: 4.5,
    admissionDate: "2024-04-01",
    researchCount: 2678,
    events: [
      { name: "Komaba Festival", date: "2024-05-25" },
      { name: "Conference", date: "2024-07-10" }
    ],
    sports: ["Baseball", "Judo", "Swimming"]
  },
  {
    id: 6,
    name: "Cambridge University",
    image: "/images/cambridge.jpg",
    rating: 4.8,
    admissionDate: "2024-10-01",
    researchCount: 2789,
    events: [
      { name: "Science Festival", date: "2024-03-20" },
      { name: "May Week", date: "2024-06-10" }
    ],
    sports: ["Rowing", "Cricket", "Rugby"]
  }
];
const AllColleges = () => {
 
 
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">All Colleges</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <div key={college.id} className="bg-white p-4 shadow rounded-lg">
            <img src={college.image} alt={college.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{college.name}</h2>
            <p>⭐ {college.rating}</p>
            <p>🎓 Admission: {college.admissionDate}</p>
            <p>📚 Research: {college.researchCount}</p>
            <button
              
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
            >
                Details
            </button>
         
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllColleges;
