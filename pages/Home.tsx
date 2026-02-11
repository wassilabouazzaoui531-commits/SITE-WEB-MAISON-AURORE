import React from 'react';
import { ASSETS, PRODUCTS } from '../constants';
import { Product, Page } from '../types';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Star } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
  onProductClick: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onProductClick }) => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="bg-maison-ivory">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <video 
            src={ASSETS.heroVideo} 
            poster={ASSETS.hero}
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-maison-blue/30 to-maison-blue/50" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-white/90 font-serif text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in-up">
            Haute Parfumerie d'Intérieur
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 drop-shadow-lg leading-tight">
            L'Art de <br/> <span className="text-white italic">l'Invisible</span>
          </h1>
          <button 
            onClick={() => onNavigate('SHOP')}
            className="group mt-8 px-8 py-4 border border-white text-white hover:bg-white hover:text-maison-blue transition-all duration-300 uppercase tracking-widest text-sm font-serif"
          >
            Découvrir la Collection
          </button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 container mx-auto text-center max-w-4xl">
        <span className="text-maison-gold text-2xl mb-4 block">❦</span>
        <h2 className="font-serif text-3xl md:text-4xl text-maison-blue mb-8">
          Une symphonie pour les sens
        </h2>
        <p className="font-body text-lg text-maison-blue/70 leading-loose">
          Maison Aurore capture l'essence des souvenirs précieux. Nos créations sont des voyages immobiles, façonnés à la main dans le respect de la haute artisanerie française. Chaque bougie, chaque parfum est une promesse d'élégance et de sérénité.
        </p>
        <button 
          onClick={() => onNavigate('UNIVERSE')}
          className="mt-10 text-maison-blue border-b border-maison-blue hover:text-maison-gold hover:border-maison-gold transition-colors font-serif uppercase text-xs tracking-widest pb-1"
        >
          Notre Histoire
        </button>
      </section>

      {/* Categories Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-[600px] md:h-[500px]">
        <div 
          className="relative group cursor-pointer overflow-hidden"
          onClick={() => onNavigate('SHOP')}
        >
          <img src={ASSETS.diffuserStudio} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Diffuseurs" />
          <div className="absolute inset-0 bg-maison-blue/20 group-hover:bg-maison-blue/10 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center bg-maison-ivory/90 px-8 py-6 shadow-xl backdrop-blur-sm">
                <h3 className="font-serif text-2xl text-maison-blue uppercase tracking-widest">Diffuseurs</h3>
                <span className="block mt-2 text-xs font-body text-maison-blue/60 italic">Signature Olfactive Permanente</span>
             </div>
          </div>
        </div>
        <div 
          className="relative group cursor-pointer overflow-hidden"
          onClick={() => onNavigate('SHOP')}
        >
          <img src={ASSETS.candlesCollection} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Bougies" />
          <div className="absolute inset-0 bg-maison-blue/20 group-hover:bg-maison-blue/10 transition-colors" />
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center bg-maison-ivory/90 px-8 py-6 shadow-xl backdrop-blur-sm">
                <h3 className="font-serif text-2xl text-maison-blue uppercase tracking-widest">Bougies</h3>
                <span className="block mt-2 text-xs font-body text-maison-blue/60 italic">Lumière & Chaleur</span>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-serif text-3xl text-maison-blue mb-2">Sélection du Parfumeur</h2>
              <p className="font-body text-maison-blue/50 italic">Nos icônes intemporelles</p>
            </div>
            <button 
              onClick={() => onNavigate('SHOP')}
              className="hidden md:flex items-center space-x-2 text-maison-gold hover:text-maison-blue transition-colors uppercase text-xs font-bold tracking-widest"
            >
              <span>Tout voir</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} onClick={onProductClick} />
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance / Values */}
      <section className="bg-maison-blue text-maison-champagne py-20 border-t border-maison-gold/30">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border border-maison-gold rounded-full flex items-center justify-center mb-6">
              <Star size={20} className="text-maison-gold" />
            </div>
            <h4 className="font-serif text-lg uppercase tracking-widest mb-2">Artisanat Français</h4>
            <p className="font-body text-sm text-maison-ivory/60 px-8">Fabriqué à la main dans notre atelier, avec des cires végétales et des parfums de Grasse.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border border-maison-gold rounded-full flex items-center justify-center mb-6">
              <span className="font-serif text-xl">∞</span>
            </div>
            <h4 className="font-serif text-lg uppercase tracking-widest mb-2">Éco-Responsable</h4>
            <p className="font-body text-sm text-maison-ivory/60 px-8">Ingrédients sourcés éthiquement, packagings recyclables et rechargeable.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border border-maison-gold rounded-full flex items-center justify-center mb-6">
              <span className="font-serif text-lg">🎁</span>
            </div>
            <h4 className="font-serif text-lg uppercase tracking-widest mb-2">Art d'Offrir</h4>
            <p className="font-body text-sm text-maison-ivory/60 px-8">Chaque commande est préparée avec soin dans notre coffret signature.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;