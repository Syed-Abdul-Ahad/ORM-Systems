import React from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  rating: number;
  reviewCount: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  discount,
  rating,
  reviewCount,
  image,
}) => {
  const discountedPrice = price * (1 - discount / 100);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row items-center md:items-center gap-4 hover:shadow-lg transition-shadow cursor-pointer">
      {/* Product Image - Top on mobile, Left on desktop */}
      <div className="shrink-0 w-full md:w-44 h-36 md:h-44 flex items-center justify-center mb-5 md:mb-0">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Info - Middle */}
      <div className="flex-1 flex flex-col justify-center min-w-0 items-center md:items-start text-center md:text-left w-full">
        {/* Product Name */}
        <h3 className="text-black font-bold text-[16px] md:text-[18px] mb-3 md:mb-1 truncate w-full">
          {name}
        </h3>

        {/* Product Description */}
        <p className="text-gray-700 text-[12px] md:text-[14px] mb-2 leading-tight line-clamp-2 w-full">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap w-full">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-black text-[13px] md:text-[14px] font-medium whitespace-nowrap">
            {rating} ({reviewCount})
          </span>
        </div>
      </div>

      {/* Price and Add to Cart - Bottom on mobile, Right on desktop */}
      <div className="shrink-0 flex flex-col items-center md:items-start gap-2 w-full md:w-auto">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <span className="text-black font-bold text-[20px] md:text-[24px] whitespace-nowrap">
            ${discountedPrice.toFixed(2)}
          </span>
        
        <span className="bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap">
              27% off
        </span>
        <button className="bg-[#165DBA] md:hidden hover:bg-blue-700 text-white font-medium text-[13px] px-8 md:px-10 py-2 rounded transition-colors whitespace-nowrap">
          Add to Cart
        </button>
        </div>
        <button className="bg-[#165DBA] hidden md:block hover:bg-blue-700 text-white font-medium text-[13px] px-8 md:px-10 py-2 rounded transition-colors whitespace-nowrap">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
