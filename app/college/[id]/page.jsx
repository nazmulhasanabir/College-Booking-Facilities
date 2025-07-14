
// 🧠 This is a Server Component (default in App Router)
export default async function CollegeDetails({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/api/college/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="text-center py-20">College not found!</div>;
  }

  const college = await res.json();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="rounded-xl shadow-md overflow-hidden">
        <img  className="w-full h-64 object-cover" src={college.image} alt="" />
      */
        <div className="p-6 bg-white dark:bg-gray-900">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            {college.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            <strong>Admission Date:</strong> {college.admissionDate}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            <strong>Rating:</strong> {college.rating} ⭐
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            <strong>Research Count:</strong> {college.researchCount.toLocaleString()}
          </p>

          {/* Events */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Events
            </h2>
            {college.events?.length ? (
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {college.events.map((event, index) => (
                  <li key={index}>
                    <strong>{event.name}</strong> — {event.date}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No events listed.</p>
            )}
          </div>

          {/* Sports */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Sports
            </h2>
            <div className="flex flex-wrap gap-2">
              {college.sports?.map((sport, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium dark:bg-blue-800 dark:text-white"
                >
                  {sport}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
