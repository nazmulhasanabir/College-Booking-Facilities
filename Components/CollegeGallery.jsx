const CollegeGallery = () => {
  const galleryImages = [
    {
      id: 1,
      imageUrl: "https://endeavor.org/wp-content/uploads/2025/02/IMG_8735.png",
      alt: "Stanford Graduates"
    },
    {
      id: 2,
      imageUrl: "https://www.whoi.edu/wp-content/uploads/2019/02/degree-program2.jpg  ",
      alt: "MIT Graduates"
    },
    {
      id: 3,
      imageUrl: "https://mediacdn.cincopa.com/v2/1024159/1343!N2kEAwxC0DQVKD/1/Lipofsky-268166.jpg",
      alt: "Harvard Graduates"
    },
    {
      id: 4,
      imageUrl: "https://www.conted.ox.ac.uk/about/mnt/images/001_graduation-2015-eduardo-el-hage-1024x683.jpg",
      alt: "Oxford Graduates"
    },
    {
      id: 5,
      imageUrl: "https://media.thetab.com/blogs.dir/7/files/2020/05/graduation-e1589478504594.jpeg",
      alt: "Cambridge Graduates"
    },
    {
      id: 6,
      imageUrl: "https://www.businessbecause.com/uploads/default/news/images/f2e11fbdd2b13ef91aabe0e6e3e16f9666b5f7cf.png ",
      alt: "University of Tokyo Graduates"
    }
  ];

  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">College Graduation Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {galleryImages.map((img) => (
          <div key={img.id} className="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
            <img
              src={img.imageUrl}
              alt={img.alt}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center text-sm text-gray-700 mt-2">{img.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegeGallery;
