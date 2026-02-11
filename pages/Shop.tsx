import React, { useState } from 'react';
import { PRODUCTS, ASSETS } from '../constants';
import { Product, ProductCategory } from '../types';
import ProductCard from '../components/ProductCard';

interface ShopProps {
  onProductClick: (product: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'ALL'>('ALL');

  const filteredProducts = activeCategory === 'ALL' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-maison-ivory min-h-screen pt-32 pb-20">
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-maison-blue mb-6">La Boutique</h1>
        <p className="font-body text-maison-blue/60 max-w-2xl mx-auto">
          Explorez notre collection de créations olfactives. Des bougies envoûtantes aux diffuseurs élégants, chaque pièce est conçue pour sublimer votre intérieur.
        </p>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-6 mb-12 overflow-x-auto">
        <div className="flex justify-center min-w-max space-x-8 border-b border-maison-blue/10 pb-4">
          <button 
            onClick={() => setActiveCategory('ALL')}
            className={`font-serif text-sm uppercase tracking-widest transition-colors pb-2 ${activeCategory === 'ALL' ? 'text-maison-blue border-b-2 border-maison-gold' : 'text-maison-blue/40 hover:text-maison-blue'}`}
          >
            Tous
          </button>
          {Object.values(ProductCategory).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-serif text-sm uppercase tracking-widest transition-colors pb-2 ${activeCategory === cat ? 'text-maison-blue border-b-2 border-maison-gold' : 'text-maison-blue/40 hover:text-maison-blue'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onClick={onProductClick} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-maison-blue/50">Aucun produit dans cette catégorie pour le moment.</p>
          </div>
        )}
      </div>
      
      {/* B2B Promo */}
      <div className="container mx-auto px-6 mt-32">
        <div className="bg-maison-blue text-maison-champagne p-12 md:p-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <img src={ASSETS.spray} className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-10 mix-blend-overlay" alt="" />
          <div className="relative z-10 max-w-lg">
            <h3 className="font-serif text-3xl mb-4">Pour les professionnels</h3>
            <p className="font-body text-maison-ivory/70 mb-8">
              Vous souhaitez distribuer nos créations ou offrir des cadeaux d'affaires d'exception ? Rejoignez notre réseau de partenaires privilégiés.
            </p>
            <button className="border border-maison-gold text-maison-gold px-8 py-3 uppercase text-xs tracking-widest hover:bg-maison-gold hover:text-maison-blue transition-colors">
              Espace Revendeurs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;