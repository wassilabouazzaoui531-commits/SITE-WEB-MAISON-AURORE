import React, { useState } from 'react';
import { Product } from '../types';
import { ASSETS } from '../constants';
import OlfactoryChart from '../components/OlfactoryChart';
import { Minus, Plus, ChevronLeft, Truck, ShieldCheck } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart, onBack }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'DESCRIPTION' | 'DETAILS'>('DESCRIPTION');

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div className="bg-maison-ivory min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center text-maison-blue/50 hover:text-maison-gold transition-colors mb-8 font-serif uppercase text-xs tracking-widest"
        >
          <ChevronLeft size={16} className="mr-2" /> Retour à la boutique
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Images */}
          <div className="space-y-4">
            <div className="w-full aspect-[4/5] bg-white overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {product.secondaryImage && (
              <div className="grid grid-cols-2 gap-4">
                <img src={product.secondaryImage} alt={`${product.name} ambiance`} className="w-full h-64 object-cover" />
                <div className="w-full h-64 bg-maison-blue/5 flex items-center justify-center p-6 text-center">
                  <p className="font-serif text-maison-blue italic text-lg">"{product.story}"</p>
                </div>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col h-full">
            <div className="mb-2">
              <span className="text-maison-gold font-serif uppercase tracking-widest text-sm">{product.category}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-maison-blue mb-4">{product.name}</h1>
            <div className="text-2xl font-body text-maison-blue mb-8">
              {product.price} € <span className="text-sm text-maison-blue/40 ml-2 font-normal">{product.weight}</span>
            </div>

            <p className="font-body text-maison-blue/70 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Pyramid Text */}
            <div className="bg-white p-6 mb-8 border border-maison-blue/5">
              <h3 className="font-serif text-center text-maison-blue uppercase tracking-widest text-sm mb-4">Pyramide Olfactive</h3>
              <div className="flex flex-col space-y-3 font-body text-sm text-center">
                <div>
                  <span className="text-maison-gold font-bold">Notes de Tête:</span> {product.olfactory.top.join(', ')}
                </div>
                <div>
                  <span className="text-maison-gold font-bold">Notes de Cœur:</span> {product.olfactory.heart.join(', ')}
                </div>
                <div>
                  <span className="text-maison-gold font-bold">Notes de Fond:</span> {product.olfactory.base.join(', ')}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="border-t border-b border-maison-blue/10 py-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                 <div className="flex items-center border border-maison-blue/20">
                    <button onClick={handleDecrement} className="p-3 text-maison-blue hover:text-maison-gold transition-colors"><Minus size={16} /></button>
                    <span className="font-body w-12 text-center text-maison-blue">{quantity}</span>
                    <button onClick={handleIncrement} className="p-3 text-maison-blue hover:text-maison-gold transition-colors"><Plus size={16} /></button>
                 </div>
                 <button 
                  onClick={handleAddToCart}
                  className="flex-1 ml-6 bg-maison-blue text-maison-gold py-3 px-6 font-serif uppercase tracking-widest text-sm hover:bg-maison-blue/90 transition-colors shadow-lg"
                 >
                   Ajouter au panier • {product.price * quantity} €
                 </button>
              </div>
              <div className="flex justify-center space-x-8 text-xs text-maison-blue/60 uppercase tracking-widest">
                <div className="flex items-center"><Truck size={16} className="mr-2" /> Livraison offerte dès 90€</div>
                <div className="flex items-center"><ShieldCheck size={16} className="mr-2" /> Paiement Sécurisé</div>
              </div>
            </div>
            
            {/* Chart */}
            <div>
               <h3 className="font-serif text-maison-blue uppercase tracking-widest text-sm mb-4">Profil Sensoriel</h3>
               <OlfactoryChart profile={product.olfactory} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;