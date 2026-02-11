import React from 'react';
import { ASSETS } from '../constants';

const Universe: React.FC = () => {
  return (
    <div className="bg-maison-ivory min-h-screen pt-32 pb-20">
      {/* Intro */}
      <div className="container mx-auto px-6 max-w-4xl text-center mb-20">
        <h1 className="font-serif text-4xl md:text-5xl text-maison-blue mb-8">L'Âme de la Maison</h1>
        <p className="font-body text-lg text-maison-blue/70 leading-loose">
          Maison Aurore n'est pas simplement une marque de parfums d'intérieur. C'est une invitation à ralentir, à fermer les yeux, et à laisser les souvenirs remonter à la surface par la seule puissance de l'olfaction.
        </p>
      </div>

      {/* Founder */}
      <div className="relative h-[600px] mb-20">
        <img src={ASSETS.candleLifestyle} className="w-full h-full object-cover" alt="Atelier" />
        <div className="absolute inset-0 bg-maison-blue/40" />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="bg-maison-ivory/95 p-10 md:p-16 max-w-2xl mx-4 shadow-2xl text-center">
              <h2 className="font-serif text-3xl text-maison-blue mb-6">Aurore Delmas</h2>
              <p className="font-body text-maison-blue/70 mb-6 italic">
                "J'ai voulu capturer l'odeur de la lumière. Ce moment précis où le soleil touche le velours, où la poussière danse dans un rayon doré."
              </p>
              <p className="font-body text-sm text-maison-blue/60 leading-relaxed">
                Nez créateur et fondatrice, Aurore a parcouru le monde à la recherche des matières les plus nobles avant de revenir à Grasse, berceau de la parfumerie, pour fonder sa maison. Chaque fragrance est une page de son journal intime.
              </p>
           </div>
        </div>
      </div>

      {/* Craftsmanship */}
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="order-2 md:order-1">
             <h3 className="font-serif text-2xl text-maison-blue mb-4">Le Savoir-Faire</h3>
             <p className="font-body text-maison-blue/70 leading-relaxed mb-6">
               Nos bougies sont coulées à la main, une par une, dans notre atelier. Nous utilisons un mélange exclusif de cires végétales garantissant une diffusion optimale sans fumée noire.
             </p>
             <ul className="space-y-4 font-serif text-sm text-maison-blue uppercase tracking-widest">
               <li className="flex items-center"><span className="w-2 h-2 bg-maison-gold rounded-full mr-4"></span>Mèches en coton tressé</li>
               <li className="flex items-center"><span className="w-2 h-2 bg-maison-gold rounded-full mr-4"></span>Parfums de Grasse</li>
               <li className="flex items-center"><span className="w-2 h-2 bg-maison-gold rounded-full mr-4"></span>Verre soufflé bouche</li>
             </ul>
           </div>
           <div className="order-1 md:order-2 h-[400px]">
             <img src={ASSETS.incense} className="w-full h-full object-cover shadow-lg" alt="Artisanat" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Universe;