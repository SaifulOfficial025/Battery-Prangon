import React, { useState } from 'react';

function Images() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  // A list of product images (using dummyproductimage.png for demonstration)
  const productImages = [
    '/dummyproductimage.png',
    '/dummyproductimage.png',
    '/dummyproductimage.png',
    '/dummyproductimage.png',
    '/dummyproductimage.png',
    '/dummyproductimage.png',
  ];

  // Tracks mouse movement over the image container to update origin coordinates
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="w-full flex flex-col gap-4">
      
      {/* Main Product Image Container with Magnifying Glass Zoom Effect */}
      <div 
        className="w-full aspect-square bg-[#f5f5f5] flex items-center justify-center relative overflow-hidden cursor-zoom-in select-none border border-gray-150"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => {
          setIsZoomed(false);
          setZoomPosition({ x: 50, y: 50 }); // Reset origin to center
        }}
        onMouseMove={handleMouseMove}
      >
        <img 
          src={productImages[activeImageIndex]} 
          alt={`Product view ${activeImageIndex + 1}`} 
          className="max-h-[85%] max-w-[85%] w-auto h-auto object-contain transition-transform duration-75 ease-out"
          style={{
            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
            transform: isZoomed ? 'scale(2.2)' : 'scale(1)',
          }}
        />
      </div>

      {/* Horizontally Scrollable Thumbnail Bar */}
      <div className="w-full overflow-x-auto py-1 scrollbar-thin scrollbar-thumb-gray-200 select-none">
        <div className="flex gap-3.5 min-w-max">
          {productImages.map((image, index) => {
            const isActive = index === activeImageIndex;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setActiveImageIndex(index)}
                className={`w-24 h-20 bg-[#f5f5f5] p-2 flex items-center justify-center border transition-all duration-200 focus:outline-none flex-shrink-0 ${
                  isActive 
                    ? 'border-[#C51C1C] ring-1 ring-[#C51C1C]' 
                    : 'border-gray-200 hover:border-gray-400'
                }`}
                aria-label={`Select product view ${index + 1}`}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`} 
                  className={`w-full h-full object-contain transition-opacity duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}

export default Images;