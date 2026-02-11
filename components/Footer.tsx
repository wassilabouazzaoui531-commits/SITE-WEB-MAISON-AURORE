import React from 'react';
import { ASSETS } from '../constants';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-maison-blue text-maison-champagne pt-20 pb-10 border-t border-maison-gold/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <img src={ASSETS.logo} alt="Maison Aurore" className="h-20 opacity-90" />
            <p className="font-body text-sm leading-relaxed text-maison-ivory/70 text-center md:text-left">
              Parfumer l'intérieur, c'est donner une âme à l'architecture. Une invitation au voyage immobile, tissée d'or et de lumière.
            </p>
          </div>

          {/* Boutique */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-maison-gold uppercase tracking-widest mb-6">Boutique</h4>
            <ul className="space-y-4 font-body text-sm text-maison-ivory/80">
              <li className="hover:text-maison-gold cursor-pointer transition-colors">Bougies Parfumées</li>
              <li className="hover:text-maison-gold cursor-pointer transition-colors">Diffuseurs</li>
              <li className="hover:text-maison-gold cursor-pointer transition-colors">Sprays d'Ambiance</li>
              <li className="hover:text-maison-gold cursor-pointer transition-colors">Coffrets Cadeaux</li>
              <li className="hover:text-maison-gold cursor-pointer transition-colors">Cartes Cadeaux</li>
            </ul>
          </div>

          {/* Maison */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-maison-gold uppercase tracking-widest mb-6">Maison</h4>
            <ul className="space-y-4 font-body text-sm text-maison-ivory/80">
              <li className="hover:text-maison-gold cursor-pointer transition-colors">Notre Histoire</li>
              <li className="hover:text-maison-gold cursor-pointer transition-colors">L'Atelier</li>
              <li className="hover:text-maison-gold cursor-pointer transition-colors">Engagements RSE</li>
              <li className="hover:text-maison-gold cursor-pointer transition-colors">Presse</li>
              <li className="hover:text-maison-gold cursor-pointer transition-colors">Espace Revendeurs (B2B)</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-maison-gold uppercase tracking-widest mb-6">Lettre Privée</h4>
            <p className="font-body text-xs text-maison-ivory/60 mb-4">
              Recevez nos invitations exclusives et nos nouveautés en avant-première.
            </p>
            <div className="flex border-b border-maison-gold pb-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-transparent w-full outline-none text-maison-ivory placeholder-maison-ivory/30 font-body"
              />
              <button className="text-maison-gold uppercase text-xs font-bold tracking-widest hover:text-white transition-colors">
                S'inscrire
              </button>
            </div>
            <div className="flex justify-center md:justify-start space-x-6 mt-8">
              <Instagram size={20} className="hover:text-maison-gold cursor-pointer" />
              <Facebook size={20} className="hover:text-maison-gold cursor-pointer" />
              <Mail size={20} className="hover:text-maison-gold cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-maison-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-maison-ivory/40 font-body">
          <p>&copy; 2024 Maison Aurore. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-maison-ivory">Mentions Légales</span>
            <span className="cursor-pointer hover:text-maison-ivory">CGV</span>
            <span className="cursor-pointer hover:text-maison-ivory">Politique de Confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;