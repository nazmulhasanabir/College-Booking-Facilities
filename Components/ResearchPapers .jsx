import React from 'react';

const ResearchPapersSection = () => {
  // Data for the featured research papers
  const featuredResearchPapers = [
    {
      id: 1,
      category: "Computer Science and Engineering",
      readTime: "6 min read",
      title: "AI and Data Science Appl...",
      university: "Green University of Bangladesh",
      year: "2003",
      description: "Research on AI-driven solutions for industry",
      funding: "BDT 5M",
      tags: ["Computer", "Student Research", "Private"],
      views: "2.3K",
      downloads: "591",
      comments: "336",
      publishYear: "2024",
      buttonColorFrom: "from-blue-500",
      buttonColorTo: "to-blue-700",
      categoryBg: "bg-blue-100",
      categoryText: "text-blue-800",
      universityLogoBg: "008000", // Hex color for placehold.co
      universityLogoText: "U" // Text for placehold.co
    },
    {
      id: 2,
      category: "Bengali",
      readTime: "11 min read",
      title: "Bengali Literature Studies",
      university: "Dhaka University",
      year: "1921",
      description: "Research on modern Bengali literature",
      funding: "BDT 10M",
      tags: ["Bengali", "Student Research", "Public"],
      views: "2.6K",
      downloads: "306",
      comments: "217",
      publishYear: "2024",
     buttonColorFrom: "from-blue-500",
      buttonColorTo: "to-blue-700",
      categoryBg: "bg-green-100",
      categoryText: "text-green-800",
      universityLogoBg: "8B0000", // Hex color for placehold.co
      universityLogoText: "D" // Text for placehold.co
    },
    {
      id: 3,
      category: "Marine Sciences",
      readTime: "15 min read",
      title: "Marine Biology Research",
      university: "Chittagong University",
      year: "1966",
      description: "Study of marine ecosystems in the Bay of Bengal",
      funding: "BDT 8M",
      tags: ["Marine", "Student Research", "Public"],
      views: "1.9K",
      downloads: "911",
      comments: "164",
      publishYear: "2024",
      buttonColorFrom: "from-blue-500",
      buttonColorTo: "to-blue-700",
      categoryBg: "bg-pink-100",
      categoryText: "text-pink-800",
      universityLogoBg: "FFA500", // Hex color for placehold.co
      universityLogoText: "C" // Text for placehold.co
    },
  ];

  // Data for recommended student research papers
  const recommendedStudentResearch = [
    {
      id: 101,
      title: "Impact of Climate Change on Coastal Ecosystems",
      student: "Aisha Rahman",
      college: "University of Dhaka",
      link: "#",
      date: "2023-05-10"
    },
    {
      id: 102,
      title: "Machine Learning for Disease Prediction",
      student: "Chen Wei",
      college: "Peking University",
      link: "#",
      date: "2024-01-15"
    },
    {
      id: 103,
      title: "Sustainable Urban Planning in Developing Countries",
      student: "Maria Gonzales",
      college: "National University of Singapore",
      link: "#",
      date: "2023-11-20"
    },
    {
      id: 104,
      title: "Advancements in Quantum Computing Algorithms",
      student: "David Lee",
      college: "University of Cambridge",
      link: "#",
      date: "2024-03-01"
    },
    {
      id: 105,
      title: "The Role of AI in Modern Education Systems",
      student: "Fatima Al-Mansoori",
      college: "King Fahd University of Petroleum and Minerals",
      link: "#",
      date: "2023-09-25"
    },
    {
      id: 106,
      title: "Biodiversity Conservation in Tropical Rainforests",
      student: "Juan Perez",
      college: "University of São Paulo",
      link: "#",
      date: "2024-02-18"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Research Papers
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover groundbreaking research conducted by students from our recommended universities
          </p>
        </div>

        {/* Featured Research Section */}
        <div className="relative mb-16"> {/* Increased margin-bottom */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.92 8.725c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
            </svg>
            Featured Research
          </h2>
          <button className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-purple-700 transition duration-300">
            Top Universities
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResearchPapers.map((paper) => (
              <div key={paper.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className={`${paper.categoryBg} ${paper.categoryText} px-3 py-1 rounded-full font-medium`}>{paper.category}</span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {paper.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{paper.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <img src={`https://placehold.co/24x24/${paper.universityLogoBg}/ffffff?text=${paper.universityLogoText}`} alt="University Logo" className="w-6 h-6 rounded-full mr-2" />
                    <span>{paper.university}</span>
                    <span className="ml-2 text-xs text-gray-400">{paper.year}</span>
                  </div>
                  <p className="text-gray-700 text-base mb-4">
                    {paper.description}
                  </p>
                  <div className="flex items-center text-green-700 font-semibold mb-4">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path></svg>
                    <span>Funding: {paper.funding}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {paper.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        {paper.views}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                        {paper.downloads}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                        {paper.comments}
                      </span>
                    </div>
                    <span className="text-gray-600">{paper.publishYear}</span>
                  </div>
                  <button className={`w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${paper.buttonColorFrom} ${paper.buttonColorTo} hover:opacity-90 transition duration-300 shadow-md`}>
                    Read Full Paper →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Student Research Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zm0 4a1 1 0 000 2h11a1 1 0 100-2H3zm0 4a1 1 0 000 2h11a1 1 0 100-2H3zm0 4a1 1 0 000 2h11a1 1 0 100-2H3z" clipRule="evenodd"></path>
            </svg>
            Recommended Student Research
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedStudentResearch.map((paper) => (
              <a href={paper.link} key={paper.id} target="_blank" rel="noopener noreferrer"
                 className="block bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-blue-700 hover:underline mb-2">{paper.title}</h3>
                <p className="text-gray-700 text-sm mb-1">
                  By <span className="font-medium">{paper.student}</span> from {paper.college}
                </p>
                <p className="text-gray-500 text-xs">Published: {new Date(paper.date).toLocaleDateString()}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPapersSection;