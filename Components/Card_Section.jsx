const Card_Section = () => {
  const colleges = [
    {
      id: 1,
      name: "Stanford University",
      image: "https://money-assets.money.com/mcp/2025/243744.jpg",
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
      image: "https://imageio.forbes.com/specials-images/imageserve//620ba39ca87ddcbad6bf109e/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      admissionDate: "2024-01-01",
      researchCount: 3156,
      events: [
        { name: "Hackathon 2024", date: "2024-02-28" },
        { name: "Science Fair", date: "2024-03-25" }
      ],
      sports: ["Rowing", "Track & Field", "Sailing"]
    },
    {
      id: 3,
      name: "Harvard University",
      image: "https://smapse.com/storage/2014/12/harvard-university9.jpg",
      admissionDate: "2024-01-01",
      researchCount: 2934,
      events: [
        { name: "Model UN", date: "2024-03-08" },
        { name: "Business Competition", date: "2024-04-12" }
      ],
      sports: ["Football", "Ice Hockey", "Basketball"]
    }
  ];

  return (
    <section className="py-8 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Top Colleges</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {colleges.map((college) => (
          <div key={college.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={college.image} alt={college.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-3">{college.name}</h3>
            <p className="text-sm text-gray-700 mt-1">Admission Date: {college.admissionDate}</p>
            <p className="text-sm text-gray-700">Research Count: {college.researchCount}</p>

            <div className="mt-3">
              <h4 className="font-semibold">Events:</h4>
              <ul className="list-disc ml-5 text-sm text-gray-600">
                {college.events.map((event, idx) => (
                  <li key={idx}>
                    {event.name} ({event.date})
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-semibold">Sports:</h4>
              <ul className="list-disc ml-5 text-sm text-gray-600">
                {college.sports.map((sport, idx) => (
                  <li key={idx}>{sport}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card_Section;
