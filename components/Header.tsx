import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { Page } from '../types';
import { ASSETS } from '../constants';

interface HeaderProps {
  cartCount: number;
  onNavigate: (page: Page) => void;
  onToggleCart: () => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onNavigate, onToggleCart, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Boutique', value: 'SHOP' },
    { label: 'L\'Univers', value: 'UNIVERSE' },
    { label: 'Journal', value: 'JOURNAL' },
    { label: 'Contact', value: 'CONTACT' },
  ];

  const textColor = isScrolled || currentPage !== 'HOME' ? 'text-maison-ivory' : 'text-white';
  const logoClass = isScrolled || currentPage !== 'HOME' ? 'h-10' : 'h-16';

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ease-in-out flex flex-col ${
      isScrolled || currentPage !== 'HOME' 
        ? 'bg-maison-blue/95 backdrop-blur-md shadow-lg border-b border-maison-gold/20' 
        : 'bg-transparent'
    }`}>
      
      {/* Top Banner */}
      <div className="bg-maison-gold/95 backdrop-blur-sm text-maison-blue text-[10px] md:text-xs font-serif font-bold uppercase tracking-widest text-center py-2 w-full z-50">
        Livraison gratuite à partir de 90€
      </div>

      <div className={`w-full transition-all duration-500 ${
        isScrolled || currentPage !== 'HOME' ? 'py-4' : 'py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden ${textColor}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <div 
            className="cursor-pointer flex flex-col items-center justify-center absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none lg:flex-row gap-4"
            onClick={() => onNavigate('HOME')}
          >
            <img 
              src={ASSETS.logo} 
              alt="Maison Aurore" 
              className={`transition-all duration-500 object-contain ${logoClass}`} 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`font-serif uppercase tracking-widest text-sm hover:text-maison-gold transition-colors ${
                  currentPage === item.value ? 'text-maison-gold' : textColor
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className={`${textColor} hover:text-maison-gold transition-colors`}>
              <Search size={20} />
            </button>
            <button 
              className={`relative ${textColor} hover:text-maison-gold transition-colors`}
              onClick={onToggleCart}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-maison-gold text-maison-blue text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 bg-maison-blue transform transition-transform duration-500 ease-in-out lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-maison-champagne hover:text-maison-gold">
            <X size={32} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8 -mt-20">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onNavigate(item.value);
                setIsMobileMenuOpen(false);
              }}
              className="font-serif text-2xl text-maison-champagne uppercase tracking-widest hover:text-maison-gold transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;