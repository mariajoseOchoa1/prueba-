import React from 'react';
import { Link } from "gatsby";


const ProductCard = ({ product }) => (
  <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
    <h3 className="text-lg sm:text-xl font-medium title-font mb-2">{ product.title }</h3>
    <p className="bg-white leading-relaxed text-base mb-4">{ product.content }</p>
    <Link to={ product.path } className="text-blue-500 inline-flex items-center">Conocer más
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
);

export default ProductCard;
