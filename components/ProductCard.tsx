import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="group cursor-pointer flex flex-col items-center"
      onClick={() => onClick(product)}
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100 mb-6">
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-maison-gold text-maison-blue text-[10px] font-bold px-3 py-1 uppercase tracking-widest z-10">
            Nouveau
          </span>
        )}
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick view overlay could go here */}
        <div className="absolute inset-0 bg-maison-blue/0 group-hover:bg-maison-blue/10 transition-colors duration-300"></div>
        <button className="absolute bottom-0 left-0 w-full bg-maison-blue text-maison-gold py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-serif uppercase text-xs tracking-widest">
          Découvrir
        </button>
      </div>

      <h3 className="font-serif text-lg text-maison-blue mb-2 group-hover:text-maison-gold transition-colors text-center">
        {product.name}
      </h3>
      <p className="font-body text-xs text-maison-blue/60 uppercase tracking-widest mb-2">
        {product.category}
      </p>
      <span className="font-body text-maison-blue font-medium">
        {product.price} €
      </span>
    </div>
  );
};

export default ProductCard;