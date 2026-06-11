import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Container from '../../Layout/Container/Container';
import ProductCard from '../../Shared/ProductCard';

const productsData = [
  {
    id: 1,
    title: "12V 100Ah Lithium Battery",
    description: "Ideal solution for IPS, Solar and Home Backup",
    price: "৳32,500",
    originalPrice: "৳32,500",
    image: "/dummyproductimage.png",
    hasDiscount: true,
    discountText: "20% off"
  },
  {
    id: 2,
    title: "12V 100Ah Lithium Battery",
    description: "Ideal solution for IPS, Solar and Home Backup",
    price: "৳32,500",
    originalPrice: "৳32,500",
    image: "/dummyproductimage.png",
    hasDiscount: false
  },
  {
    id: 3,
    title: "12V 100Ah Lithium Battery",
    description: "Ideal solution for IPS, Solar and Home Backup",
    price: "৳32,500",
    originalPrice: "৳32,500",
    image: "/dummyproductimage.png",
    hasDiscount: false
  },
  {
    id: 4,
    title: "12V 100Ah Lithium Battery",
    description: "Ideal solution for IPS, Solar and Home Backup",
    price: "৳32,500",
    originalPrice: "৳32,500",
    image: "/dummyproductimage.png",
    hasDiscount: false
  },
  {
    id: 5,
    title: "12V 100Ah Lithium Battery",
    description: "Ideal solution for IPS, Solar and Home Backup",
    price: "৳32,500",
    originalPrice: "৳32,500",
    image: "/dummyproductimage.png",
    hasDiscount: false
  },
  {
    id: 6,
    title: "12V 100Ah Lithium Battery",
    description: "Ideal solution for IPS, Solar and Home Backup",
    price: "৳32,500",
    originalPrice: "৳32,500",
    image: "/dummyproductimage.png",
    hasDiscount: false
  }
];

function FeaturedProducts() {
  const navigate = useNavigate();
  return (
    <section id="products" className=" bg-white">
      <Container>
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-6 sm:mb-8 border-b border-gray-100 pb-3 sm:pb-4 gap-2 sm:gap-0">
          <h2 className="text-[#1a1a1a] font-semibold text-xl md:text-3xl font-sans text-center sm:text-left">
            Popular Battery Collection
          </h2>
       
        </div>

        {/* 6-Card Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 justify-items-center">
          {productsData.slice(0, 6).map((product) => (
            <div key={product.id} className="relative w-full flex justify-center">
              <div className="relative max-w-[320px] w-full">
                
                {/* Highlight badge on discounted card (Card 1) */}
                {product.hasDiscount && (
                  <div className="absolute top-1 right-1 sm:top-3 sm:right-3 z-10 w-12 h-12 sm:w-12 sm:h-12 flex items-center justify-center">
                    {/* Crimson Jagged Burst SVG Seal */}
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#C51C1C] fill-current drop-shadow-md">
                      <path d="M50 0 L58 15 L74 8 L74 26 L92 23 L85 40 L100 50 L85 60 L92 77 L74 74 L74 92 L58 85 L50 100 L42 85 L26 92 L26 74 L8 77 L15 60 L0 50 L15 40 L8 23 L26 26 L26 8 L42 15 Z" />
                    </svg>
                    <span className="relative z-10 text-white font-semibold text-[10px] sm:text-[10px] leading-tight text-center select-none uppercase">
                      20%<br />off
                    </span>
                  </div>
                )}

                <ProductCard 
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  onSeeProduct={() => navigate(`/product-details/${product.id}`)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link 
            to="/products" 
            className="text-sm md:text-md font-semibold text-slate-500 hover:text-[#C51C1C] transition-colors duration-200"
          >
            See more
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProducts;