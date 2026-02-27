'use client'

import { useState, useEffect } from 'react';
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import Loading from "@/components/Loading";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
}

export default function ProductListingPage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [filters, setFilters] = useState<{ priceRanges: string[], ratings: number[] }>({ 
    priceRanges: [], 
    ratings: [] 
  });

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  // Fetch categories on mount
  useEffect(() => {
    fetch(`${API_BASE_URL}/products/categories`)
      .then(res => res.json())
      .then((data: string[]) => {
        setCategories(data);
        if (data.length > 0) {
          setSelectedCategory(data[0]);
        }
      })
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  // Fetch products when category changes
  useEffect(() => {
    if (!selectedCategory) return;
    
    setLoading(true);
    setVisibleCount(4);
    
    fetch(`${API_BASE_URL}/products/category/${selectedCategory}`)
      .then(res => res.json())
      .then((data: Product[]) => {
        setAllProducts(data);
        setFilteredProducts(data);
        setDisplayedProducts(data.slice(0, 4));
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, [selectedCategory]);

  // Apply filters when filters change
  useEffect(() => {
    let filtered = [...allProducts];

    // Apply price filters
    if (filters.priceRanges.length > 0) {
      filtered = filtered.filter(product => {
        return filters.priceRanges.some(range => {
          const [min, max] = range.split('-').map(Number);
          return product.price >= min && product.price <= max;
        });
      });
    }

    // Apply rating filters
    if (filters.ratings.length > 0) {
      filtered = filtered.filter(product => {
        return filters.ratings.some(minRating => product.rating.rate >= minRating);
      });
    }

    setFilteredProducts(filtered);
    setDisplayedProducts(filtered.slice(0, visibleCount));
  }, [filters, allProducts, visibleCount]);

  // Load more products
  const handleLoadMore = () => {
    const newCount = visibleCount + 4;
    setVisibleCount(newCount);
    setDisplayedProducts(filteredProducts.slice(0, newCount));
  };

  const handleFilterChange = (newFilters: { priceRanges: string[], ratings: number[] }) => {
    setFilters(newFilters);
    setVisibleCount(4); // Reset visible count when filters change
  };

  return (
    <div className="bg-white relative w-full min-h-screen">

      <div className="max-w-7xl mx-auto">
        {/* Mobile Filter Button */}
        <div className="md:hidden px-4 py-4 border-b border-gray-200">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex items-center gap-2 text-black font-semibold text-[16px]"
          >
            Filter
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Filter Overlay */}
        {mobileFilterOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
            <div className="bg-white w-4/5 max-w-sm h-full overflow-y-auto">
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h2 className="text-black font-bold text-[18px]">Filters</h2>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="text-2xl font-bold text-black"
                >
                  &times;
                </button>
              </div>
              <FilterSidebar 
                products={allProducts}
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                onFilterChange={handleFilterChange} 
              />
            </div>
          </div>
        )}

        <div className="flex">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 min-h-screen sticky top-20 h-fit">
            <FilterSidebar 
              products={allProducts}
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              onFilterChange={handleFilterChange} 
            />
          </aside>

          {/* Main Content */}
          <main className="flex-1 px-4 md:px-8 py-6">
            {loading ? (
              <Loading />
            ) : displayedProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No products found matching your filters.</p>
              </div>
            ) : (
              <>
                {/* Products Grid */}
                <div className="grid grid-cols-1 gap-6 mb-8">
                  {displayedProducts.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      id={product.id.toString()}
                      name={product.title}
                      description={product.description}
                      price={product.price}
                      discount={0}
                      rating={product.rating.rate}
                      reviewCount={product.rating.count}
                      image={product.image}
                    />
                  ))}
                </div>

                {/* Load More Button */}
                {visibleCount < filteredProducts.length && (
                  <div className="flex justify-center">
                    <button 
                      onClick={handleLoadMore}
                      className="border cursor-pointer border-black text-black font-medium text-[14px] px-12 py-3 rounded hover:bg-gray-50 transition-colors"
                    >
                      Load More Results
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
