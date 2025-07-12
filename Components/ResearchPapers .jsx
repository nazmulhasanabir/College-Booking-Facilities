const ResearchPapers = () => {
  const researchPapers = [
    {
      id: 1,
      title: "Artificial Intelligence in Healthcare",
      author: "John Doe (MIT)",
      link: "https://example.com/ai-healthcare-paper",
      published: "2024-03-15"
    },
    {
      id: 2,
      title: "Quantum Computing & Cryptography",
      author: "Alice Smith (Stanford University)",
      link: "https://example.com/quantum-crypto",
      published: "2024-02-10"
    },
    {
      id: 3,
      title: "Sustainable Energy Solutions",
      author: "Emma Johnson (University of Cambridge)",
      link: "https://example.com/sustainable-energy",
      published: "2023-11-22"
    },
    {
      id: 4,
      title: "Machine Learning in Education",
      author: "David Kim (Harvard University)",
      link: "https://example.com/ml-education",
      published: "2024-01-08"
    },
    {
      id: 5,
      title: "Climate Change Impact on Oceans",
      author: "Sakura Tanaka (University of Tokyo)",
      link: "https://example.com/climate-ocean",
      published: "2023-12-01"
    }
  ];

  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Recommended Research Papers</h2>
      <div className="max-w-5xl mx-auto space-y-6">
        {researchPapers.map((paper) => (
          <div key={paper.id} className="bg-white p-4 rounded shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700">
              <a href={paper.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {paper.title}
              </a>
            </h3>
            <p className="text-gray-700 mt-1">{paper.author}</p>
            <p className="text-gray-500 text-sm">Published: {paper.published}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchPapers;
