import React, { useState, useEffect } from 'react';
import Container from '../../Layout/Container/Container';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const initialVideos = [
  {
    id: 1,
    title: "Powerix Battery Service Solutions",
    videoId: "uXPzrr_L3vY",
    thumbnail: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 2,
    title: "Lithium Battery & Solar System Connection Guide",
    videoId: "sU-yvM8oUfA",
    thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 3,
    title: "Dakota Lithium 12V 135Ah Battery Test",
    videoId: "9x-zL2m53H4",
    thumbnail: "https://images.unsplash.com/photo-1548613053-220ef4b80702?auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 4,
    title: "IPS & Home Backup Battery Setup",
    videoId: "JtW9wX569wM",
    thumbnail: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 5,
    title: "New Technology Solar Panel Installation",
    videoId: "YcoGkGshzH8",
    thumbnail: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 6,
    title: "Office & Business Power Backup System",
    videoId: "rWlH93C3bZc",
    thumbnail: "https://images.unsplash.com/photo-1548613053-220ef4b80702?auto=format&fit=crop&w=600&h=600&q=80"
  }
];

function YTVideosSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [activePlayId, setActivePlayId] = useState(null);

  // Update visible cards dynamically based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, initialVideos.length - visibleCards);

  // Keep current index in bound when screen size changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, maxIndex, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) return 0;
      return prev + 1;
    });
    setActivePlayId(null); // Stop playing video when sliding
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) return maxIndex;
      return prev - 1;
    });
    setActivePlayId(null); // Stop playing video when sliding
  };

  return (
    <section className="py-8 bg-white overflow-hidden">
      <Container>
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
          {/* <h2 className="text-[#1a1a1a] font-extrabold text-2xl md:text-3xl font-sans">
            YouTube Video Reviews
          </h2> */}
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all duration-200"
              aria-label="Previous slide"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all duration-200"
              aria-label="Next slide"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative w-full overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              width: `${(initialVideos.length / visibleCards) * 100}%`
            }}
          >
            {initialVideos.map((video) => (
              <div 
                key={video.id}
                className="px-3 box-border"
                style={{ width: `${100 / initialVideos.length}%` }}
              >
                <div className="w-full aspect-square  overflow-hidden border border-gray-100 shadow-sm relative group bg-black">
                  
                  {activePlayId === video.id ? (
                    /* Play YouTube Video Embed */
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                      title={video.title}
                      className="w-full h-full object-cover"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    /* Thumbnail and Play Button overlay */
                    <>
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 select-none"
                      />
                      
                      {/* Play Button Overlay */}
                      <div 
                        onClick={() => setActivePlayId(video.id)}
                        className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors duration-300 cursor-pointer z-10"
                      >
                        <div className="w-16 h-12 bg-[#FF0000] rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                          {/* Youtube Play Triangle SVG */}
                          <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Video Title Gradient Overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-left z-10 pointer-events-none">
                        <h3 className="text-white font-bold text-sm md:text-base leading-tight select-none">
                          {video.title}
                        </h3>
                      </div>
                    </>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Card Count Progress Indicator at bottom */}
        <div className="flex flex-col items-center gap-2 mt-8">
          <div className="text-slate-500 font-semibold text-xs md:text-sm select-none">
            Showing video {currentIndex + 1} of {initialVideos.length}
          </div>
          {/* Fills progress dynamically relative to slide index */}
          <div className="w-32 h-1 bg-slate-100 rounded-full overflow-hidden relative">
            <div 
              className="absolute top-0 bottom-0 left-0 bg-[#C51C1C] transition-all duration-300 rounded-full"
              style={{ width: `${((currentIndex + 1) / initialVideos.length) * 100}%` }}
            />
          </div>
        </div>

      </Container>
    </section>
  );
}

export default YTVideosSlider;