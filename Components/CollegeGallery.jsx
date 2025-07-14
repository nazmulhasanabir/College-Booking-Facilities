/* eslint-disable @next/next/no-img-element */
import { BlurFade } from "@/Components/blur-fade";

const CollegeGallery = () => {
  const galleryImages = [
    {
      id: 1,
      imageUrl: "https://endeavor.org/wp-content/uploads/2025/02/IMG_8735.png",
      alt: "Stanford Graduates",
      height: "h-64"
    },
    {
      id: 2,
      imageUrl: "https://www.whoi.edu/wp-content/uploads/2019/02/degree-program2.jpg",
      alt: "MIT Graduates",
      height: "h-80"
    },
    {
      id: 3,
      imageUrl: "https://mediacdn.cincopa.com/v2/1024159/1343!N2kEAwxC0DQVKD/1/Lipofsky-268166.jpg",
      alt: "Harvard Graduates",
      height: "h-72"
    },
    {
      id: 4,
      imageUrl: "https://www.conted.ox.ac.uk/about/mnt/images/001_graduation-2015-eduardo-el-hage-1024x683.jpg",
      alt: "Oxford Graduates",
      height: "h-96"
    },
    {
      id: 5,
      imageUrl: "https://media.thetab.com/blogs.dir/7/files/2020/05/graduation-e1589478504594.jpeg",
      alt: "Cambridge Graduates",
      height: "h-56"
    },
    {
      id: 6,
      imageUrl: "https://www.businessbecause.com/uploads/default/news/images/f2e11fbdd2b13ef91aabe0e6e3e16f9666b5f7cf.png",
      alt: "University of Tokyo Graduates",
      height: "h-64"
    }
  ];

  return (
    <section className="py-10 px-4 bg-gradient-to-br from-gray-50 to-white" id="college-gallery">
      <BlurFade delay={0.25} inView>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">College Graduation Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating achievements and milestones from prestigious institutions around the world
          </p>
        </div>
      </BlurFade>
      
      <div className="max-w-7xl mx-auto">
        {/* Masonry Layout using CSS Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <BlurFade key={img.id} delay={0.25 + idx * 0.1} inView>
              <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="overflow-hidden">
                  <img
                    src={img.imageUrl}
                    alt={img.alt}
                    className={`w-full ${img.height} object-cover group-hover:scale-110 transition-transform duration-700`}
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-center text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                    {img.alt}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeGallery;