'use client'

import React, { useState, useEffect, useMemo } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

interface FilterSidebarProps {
  products: Product[];
  categories?: string[];
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  onFilterChange?: (filters: { priceRanges: string[], ratings: number[] }) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  products, 
  categories = [],
  selectedCategory = '',
  onCategoryChange,
  onFilterChange 
}) => {
  const [priceFilters, setPriceFilters] = useState<string[]>([]);
  const [ratingFilters, setRatingFilters] = useState<number[]>([]);
  const [showAllPrices, setShowAllPrices] = useState(false);
  const [showAllRatings, setShowAllRatings] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  const [priceExpanded, setPriceExpanded] = useState(true);
  const [ratingExpanded, setRatingExpanded] = useState(true);

  const priceRanges = useMemo(() => {
    if (products.length === 0) return [];

    const prices = products.map(p => p.price);
    const minPrice = Math.floor(Math.min(...prices));
    const maxPrice = Math.ceil(Math.max(...prices));
    
    // creating price ranges based on min and max price, dividing into 4 equal ranges
    const rangeSize = Math.ceil((maxPrice - minPrice) / 4);
    const ranges: { label: string; value: string; count: number }[] = [];
    
    for (let i = 0; i < 4; i++) {
      const rangeMin = minPrice + (i * rangeSize);
      const rangeMax = i === 3 ? maxPrice : minPrice + ((i + 1) * rangeSize);
      
      const count = products.filter(p => p.price >= rangeMin && p.price <= rangeMax).length;
      
      if (count > 0) {
        ranges.push({
          label: `$${rangeMin.toFixed(0)} - $${rangeMax.toFixed(0)} (${count})`,
          value: `${rangeMin}-${rangeMax}`,
          count
        });
      }
    }
    
    return ranges;
  }, [products]);

  // Dynamically generate rating options based on actual ratings
  const ratingOptions = useMemo(() => {
    if (products.length === 0) return [];

    const uniqueRatings = new Set(products.map(p => Math.floor(p.rating.rate)));
    const sortedRatings = Array.from(uniqueRatings).sort((a, b) => b - a);
    
    return sortedRatings.map(rating => {
      const count = products.filter(p => p.rating.rate >= rating).length;
      return {
        label: `${rating} stars & up`,
        value: rating,
        stars: rating,
        count
      };
    });
  }, [products]);

  useEffect(() => {
    onFilterChange?.({ priceRanges: priceFilters, ratings: ratingFilters });
  }, [priceFilters, ratingFilters]);

  const handlePriceChange = (value: string) => {
    const newFilters = priceFilters.includes(value)
      ? priceFilters.filter(f => f !== value)
      : [...priceFilters, value];
    setPriceFilters(newFilters);
  };

  const handleRatingChange = (value: number) => {
    const newFilters = ratingFilters.includes(value)
      ? ratingFilters.filter(f => f !== value)
      : [...ratingFilters, value];
    setRatingFilters(newFilters);
  };

  const renderStars = (count: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < count ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  if (products.length === 0) {
    return (
      <div className="bg-white border-r border-gray-200 p-6">
        <h2 className="text-black font-bold text-[18px] mb-6">Filter</h2>
        <p className="text-gray-500 text-sm">No filters available</p>
      </div>
    );
  }

  return (
    <div className="bg-white border-r border-gray-200 p-6">
      <h2 className="text-black font-bold text-[22px] mb-6">Filter</h2>

      {/* Categories Filter */}
      {categories.length > 0 && (
        <div className="mb-8">
          <button 
            className="flex items-center justify-between w-full mb-4"
            onClick={() => setCategoriesExpanded(!categoriesExpanded)}
          >
            <h3 className="text-black font-semibold text-[16px]">Categories</h3>
            <svg 
              className={`w-4 h-4 text-black transition-transform ${categoriesExpanded ? '' : '-rotate-90'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {categoriesExpanded && (
          <div className="space-y-3">
            {categories.slice(0, showAllCategories ? categories.length : 4).map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange?.(category)}
                className={`w-full text-left text-[14px] transition-colors capitalize hover:text-blue-600 ${
                  selectedCategory === category
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          )}
          
          {categoriesExpanded && categories.length > 4 && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="text-blue-600 text-[13px] font-medium mt-3 hover:underline"
            >
              {showAllCategories ? 'See less' : 'See more'}
            </button>
          )}
        </div>
      )}

      {/* Price Filter */}
      {priceRanges.length > 0 && (
        <div className="mb-8">
          <button 
            className="flex items-center justify-between w-full mb-4"
            onClick={() => setPriceExpanded(!priceExpanded)}
          >
            <h3 className="text-black font-semibold text-[16px]">Price</h3>
            <svg 
              className={`w-4 h-4 text-black transition-transform ${priceExpanded ? '' : '-rotate-90'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {priceExpanded && (
          <div className="space-y-3">
            {priceRanges.slice(0, showAllPrices ? priceRanges.length : 4).map((range) => (
              <label key={range.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={priceFilters.includes(range.value)}
                  onChange={() => handlePriceChange(range.value)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700 text-[14px]">{range.label}</span>
              </label>
            ))}
          </div>
          )}
          
          {priceExpanded && priceRanges.length > 4 && (
            <button
              onClick={() => setShowAllPrices(!showAllPrices)}
              className="text-blue-600 text-[13px] font-medium mt-3 hover:underline"
            >
              {showAllPrices ? 'See less' : 'See more'}
            </button>
          )}
        </div>
      )}

      {/* Rating Filter */}
      {ratingOptions.length > 0 && (
        <div>
          <button 
            className="flex items-center justify-between w-full mb-4"
            onClick={() => setRatingExpanded(!ratingExpanded)}
          >
            <h3 className="text-black font-semibold text-[16px]">Rating</h3>
            <svg 
              className={`w-4 h-4 text-black transition-transform ${ratingExpanded ? '' : '-rotate-90'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {ratingExpanded && (
          <div className="space-y-3">
            {ratingOptions.slice(0, showAllRatings ? ratingOptions.length : 4).map((option) => (
              <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={ratingFilters.includes(option.value)}
                  onChange={() => handleRatingChange(option.value)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <div className="flex items-center gap-2">
                  {renderStars(option.stars)}
                  <span className="text-gray-700 text-[13px]">({option.count})</span>
                </div>
              </label>
            ))}
          </div>
          )}
          
          {ratingExpanded && ratingOptions.length > 4 && (
            <button
              onClick={() => setShowAllRatings(!showAllRatings)}
              className="text-blue-600 text-[13px] font-medium mt-3 hover:underline"
            >
              {showAllRatings ? 'See less' : 'See more'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterSidebar;