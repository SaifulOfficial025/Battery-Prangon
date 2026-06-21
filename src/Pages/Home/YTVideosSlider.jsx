import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../Layout/Container/Container';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { PiPlayFill } from 'react-icons/pi';
import { fetchYTVideos } from '../../Redux/YTVideos';

const translations = {
  en: {
    title: 'Watch Our Videos',
    noVideos: 'No videos available.',
    error: 'Failed to load videos. Please try again later.'
  },
  bn: {
    title: 'আমাদের ভিডিও গ্যালারি',
    noVideos: 'কোন ভিডিও পাওয়া যায়নি।',
    error: 'ভিডিও লোড করতে ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।'
  }
};

const getYouTubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

function YTVideosSlider() {
  const dispatch = useDispatch();
  const { videos, loading, error } = useSelector((state) => state.ytVideos);
  const lang = useSelector((state) => state.lang.lang);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [activePlayId, setActivePlayId] = useState(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    dispatch(fetchYTVideos());
  }, [dispatch]);

  // Update visible cards dynamically based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1025) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, videos.length - visibleCards);

  // Keep current index in bound when screen size changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, maxIndex, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setActivePlayId(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setActivePlayId(null);
  };

  // Touch / swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const SWIPE_THRESHOLD = 40;
    if (diff > SWIPE_THRESHOLD) {
      nextSlide(); // swipe left → next
    } else if (diff < -SWIPE_THRESHOLD) {
      prevSlide(); // swipe right → prev
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const totalDots = maxIndex + 1;
  const t = translations[lang] || translations.en;

  return (
    <section className="py-4 sm:py-8 bg-white overflow-hidden">
      <Container>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-8 pb-3 sm:pb-4 border-b border-gray-100">
          <h2 className="text-[#1a1a1a] font-semibold text-xl md:text-3xl font-sans">
            {t.title}
          </h2>
          {!loading && !error && videos.length > 0 && totalDots > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all duration-200 active:scale-95"
                aria-label="Previous slide"
              >
                <FiChevronLeft className="text-lg sm:text-xl" />
              </button>
              <button
                onClick={nextSlide}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all duration-200 active:scale-95"
                aria-label="Next slide"
              >
                <FiChevronRight className="text-lg sm:text-xl" />
              </button>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 justify-items-center w-full animate-pulse">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="w-full aspect-video sm:aspect-square bg-gray-200 rounded-sm" />
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <p className="text-center text-red-500 font-medium text-sm py-8 font-sans">
            {t.error}
          </p>
        )}

        {/* Empty State */}
        {!loading && !error && videos.length === 0 && (
          <p className="text-center text-slate-400 font-medium text-sm py-8 font-sans">
            {t.noVideos}
          </p>
        )}

        {/* Carousel Viewport */}
        {!loading && !error && videos.length > 0 && (
          <div
            className="relative w-full overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / videos.length)}%)`,
                width: `${(videos.length / visibleCards) * 100}%`
              }}
            >
              {videos.map((video) => {
                const videoId = getYouTubeId(video.link);
                const thumbnailSrc = video.thumbnail || (videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '/dummyvideo.jpg');

                return (
                  <div
                    key={video.id}
                    className="px-1.5 sm:px-3 box-border"
                    style={{ width: `${100 / videos.length}%` }}
                  >
                    <div className="w-full aspect-video sm:aspect-square overflow-hidden border border-gray-100 shadow-sm relative group bg-black rounded-sm">

                      {activePlayId === video.id && videoId ? (
                        /* Play YouTube Video Embed */
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                          title={video.name}
                          className="w-full h-full object-cover"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        /* Thumbnail and Play Button overlay */
                        <>
                          <img
                            src={thumbnailSrc}
                            alt={video.name}
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 select-none"
                            draggable={false}
                          />

                          {/* Play Button Overlay */}
                          <div
                            onClick={() => setActivePlayId(video.id)}
                            className="absolute inset-0 flex items-center justify-center bg-black/25 hover:bg-black/35 transition-colors duration-300 cursor-pointer z-10"
                          >
                            <div className="w-14 h-10 sm:w-16 sm:h-12 bg-[#FF0000] rounded-xl flex items-center justify-center text-white shadow-md hover:scale-110 hover:bg-red-600 transition-all duration-300">
                              <PiPlayFill className="text-xl sm:text-2xl ml-0.5" />
                            </div>
                          </div>

                          {/* Video Title Gradient Overlay at bottom */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 sm:p-5 text-left z-10 pointer-events-none">
                            <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base leading-tight select-none line-clamp-2">
                              {video.name}
                            </h3>
                          </div>
                        </>
                      )}

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Dot Navigation & Progress Bar */}
        {!loading && !error && videos.length > 0 && totalDots > 1 && (
          <div className="flex flex-col items-center gap-2 mt-4 sm:mt-8">
            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-1.5">
              {Array.from({ length: totalDots }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrentIndex(i); setActivePlayId(null); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-6 bg-[#C51C1C]'
                      : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}

      </Container>
    </section>
  );
}

export default YTVideosSlider;