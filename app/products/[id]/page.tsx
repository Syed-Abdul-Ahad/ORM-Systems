'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';
import Loading from '@/components/Loading';
import SearchBar from '@/components/SearchBar';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params.id as string;
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  // Fetch product details
  useEffect(() => {
    if (!productId) return;
    
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleProductClick = (productId: number) => {
    router.push(`/products/${productId}`);
  };

  if (loading) {
    return (
        <Loading />
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }


  return (
    <div className="w-full px-4 md:px-12 py-8 max-w-7xl mx-auto bg-white">
      {/* Product Details Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
        {/* Product Image */}
        <div className="w-full md:w-[45%] bg-white border border-gray-200 rounded-lg p-8 flex items-center justify-center">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-[55%] flex flex-col">
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-2">
            {product.title}
          </h2>

          {/* Description */}
          <h1 className="text-sm text-black mb-3 uppercase">
            {product.description}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 md:w-5 md:h-5 ${
                  index < Math.round(product.rating.rate) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
            <span className="text-sm text-black font-medium">
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>

         <hr className="border-t border-gray-200 my-1" />

          {/* Category */}
          <div className="mb-6 mt-2">
            <span className="text-sm text-black">
              <span className="font-semibold">Category:</span>{' '}
              <span className="ml-2">{product.category}</span>
            </span>
          </div>

          {/* Price and Quantity Row */}
          <div className="flex items-center gap-4 mb-6">
            {/* Price Section */}
            <div className="flex items-center gap-3">
              <span className="text-3xl md:text-4xl font-bold text-black">
                ${product.price.toFixed(2)}
              </span>
              <span className="bg-green-600 text-white text-sm font-bold px-2 py-1 rounded">
                27% off
              </span>
            </div>
            
            {/* Quantity Selector */}
            <div className="flex items-center gap-0">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="w-7 h-7 border border-gray-300 flex items-center justify-center text-xl font-bold hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-10 h-7 border border-gray-300 text-center text-lg font-medium"
                min="1"
              />
              <button
                onClick={() => handleQuantityChange(1)}
                className="w-7 h-7 border border-gray-300 flex items-center justify-center text-xl font-bold hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 text-white text-base font-medium py-2 px-10 rounded hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
            <button className="w-10 h-10 border-2 border-gray-300 rounded flex items-center justify-center hover:text-red-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar onProductClick={handleProductClick} />
    </div>
  );
}
