import React from 'react';
import { useSelector } from 'react-redux';
import Button from './Button';

const ProductCard = ({
  title = "12V 100Ah Lithium Battery",
  description = "IPS, Solar ও Home Backup এর জন্য ideal solution",
  price = "৳৩২,৫০০",
  originalPrice = "৳৩২,৫০০",
  image = "/dummyproductimage.png",
  onSeeProduct,
}) => {
  const lang = useSelector((state) => state.lang.lang);
  return (
    <div className="bg-white border border-gray-100 shadow-sm overflow-hidden flex flex-col max-w-[320px] w-full rounded-sm">
      
      {/* Product Image Section */}
      <div className="bg-[#f5f5f5] p-3 sm:p-6 flex items-center justify-center aspect-square relative">
        {image ? (
          <img 
            src={image} 
            alt={title || "Product"} 
            className="max-h-[90%] w-auto object-contain hover:scale-105 transition-transform duration-300 select-none" 
            draggable={false}
          />
        ) : (
          <div className="text-slate-350 text-xs font-sans">No Image</div>
        )}
      </div>

      {/* Product Content Section */}
      <div className="p-3 sm:p-5 flex flex-col flex-grow">
        
        {/* Title */}
        <h3 className="text-[#333333] font-semibold text-xs sm:text-[15px] md:text-lg leading-snug mb-1 sm:mb-2 hover:text-[#C51C1C] transition-colors duration-200 line-clamp-1 truncate select-none h-6 sm:h-7">
          {title || "\u00A0"}
        </h3>

        {/* Description */}
        <p className="hidden sm:block text-slate-500 text-[13px] leading-relaxed mb-4 sm:mb-6 h-[40px] line-clamp-2 select-none">
          {description || "\u00A0"}
        </p>

        {/* Price and Action Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mt-3 sm:mt-auto">
          {/* Price Block */}
          <div className="flex flex-col select-none justify-end min-h-[36px] sm:min-h-[44px]">
            <span className="text-slate-400 line-through text-[10px] sm:text-xs font-semibold leading-none mb-1">
              {originalPrice || "\u00A0"}
            </span>
            <span className="text-sm sm:text-base md:text-xl text-[#1a1a1a] leading-none font-semibold">
              {price || "\u00A0"}
            </span>
          </div>

          {/* Action Button */}
          <Button 
            variant="primary"
            onClick={onSeeProduct} 
            className="w-full sm:w-auto px-3 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs md:text-sm font-semibold shadow-sm text-center"
          >
            {lang === 'bn' ? 'বিস্তারিত দেখুন' : 'See product'}
          </Button>
        </div>

      </div>

    </div>
  );
};

export default ProductCard;