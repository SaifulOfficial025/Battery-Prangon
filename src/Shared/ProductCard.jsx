import React from 'react';
import Button from './Button';

const ProductCard = ({
  title = "12V 100Ah Lithium Battery",
  description = "IPS, Solar ও Home Backup এর জন্য ideal solution",
  price = "৳৩২,৫০০",
  originalPrice = "৳৩২,৫০০",
  image = "/dummyproductimage.png",
  onSeeProduct,
}) => {
  return (
    <div className="bg-white  border border-gray-100 shadow-sm overflow-hidden flex flex-col max-w-[320px] w-full">
      
      {/* Product Image Section */}
      <div className="bg-[#f5f5f5] p-6 flex items-center justify-center aspect-square relative">
        <img 
          src={image} 
          alt={title} 
          className="max-h-[85%] w-auto object-contain hover:scale-105 transition-transform duration-300 select-none" 
        />
      </div>

      {/* Product Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Title */}
        <h3 className="text-[#333333] font-bold text-lg leading-snug mb-2 hover:text-[#C51C1C] transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-[13px] leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Price and Action Section */}
        <div className="flex items-center justify-between mt-auto">
          {/* Price Block */}
          <div className="flex flex-col">
            {originalPrice && (
              <span className="text-slate-400 line-through text-xs font-semibold leading-none mb-1">
                {originalPrice}
              </span>
            )}
            <span className="text-xl font-black text-[#1a1a1a] leading-none">
              {price}
            </span>
          </div>

          {/* Reusable Button */}
          <Button 
            onClick={onSeeProduct} 
            variant="primary" 
            className="px-6 py-2.5 text-sm font-bold shadow-sm"
          >
            See product
          </Button>
        </div>

      </div>

    </div>
  );
};

export default ProductCard;