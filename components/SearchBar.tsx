'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Product {
  id: number;
  title: string;
  image: string;
}

interface SearchBarProps {
  onProductClick: (productId: number) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onProductClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  // Debounced search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setSearchLoading(true);
    const debounceTimer = setTimeout(async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products/`);
        const data = await response.json();
        const filtered = data.filter((p: Product) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filtered.slice(0, 4)); // Show max 4 results
      } catch (error) {
        console.error('Error searching products:', error);
      } finally {
        setSearchLoading(false);
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const handleProductClick = (productId: number) => {
    onProductClick(productId);
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div className="max-w-2xl mx-auto mb-8 relative">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full text-base focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>

      {/* Search Results Dropdown */}
      {(searchQuery.trim() && (searchResults.length > 0 || searchLoading)) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-lg font-bold text-black mb-4 text-center">Products</h3>
            {searchLoading ? (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <div className="space-y-3">
                {searchResults.map((result) => (
                  <div
                    key={result.id}
                    onClick={() => handleProductClick(result.id)}
                    className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer transition-colors"
                  >
                    <div className="relative w-16 h-16 shrink-0 bg-white border border-gray-200 rounded">
                      <Image
                        src={result.image}
                        alt={result.title}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <p className="text-sm text-black line-clamp-2 flex-1">
                      {result.title}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
