import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Universe from './pages/Universe';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import { Page, Product, CartItem } from './types';
import { ShoppingBag, X, Trash2 } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('HOME');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Simple hash router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'shop') setCurrentPage('SHOP');
      else if (hash === 'universe') setCurrentPage('UNIVERSE');
      else if (hash === 'journal') setCurrentPage('JOURNAL');
      else if (hash === 'contact') setCurrentPage('CONTACT');
      else setCurrentPage('HOME');
      
      // Reset selected product if navigating top level
      if (hash && hash !== 'product') setSelectedProduct(null);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    setSelectedProduct(null);
    window.location.hash = page.toLowerCase();
    window.scrollTo(0, 0);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('PRODUCT_DETAIL');
    window.scrollTo(0, 0);
  };

  const addToCart = (product: Product, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const renderPage = () => {
    if (selectedProduct && currentPage === 'PRODUCT_DETAIL') {
      return (
        <ProductDetail 
          product={selectedProduct} 
          onAddToCart={addToCart} 
          onBack={() => navigate('SHOP')} 
        />
      );
    }

    switch (currentPage) {
      case 'HOME': return <Home onNavigate={navigate} onProductClick={handleProductClick} />;
      case 'SHOP': return <Shop onProductClick={handleProductClick} />;
      case 'UNIVERSE': return <Universe />;
      case 'JOURNAL': return <Journal />;
      case 'CONTACT': return <Contact />;
      default: return <Home onNavigate={navigate} onProductClick={handleProductClick} />;
    }
  };

  return (
    <div className="font-sans antialiased text-maison-blue selection:bg-maison-gold selection:text-white">
      <Header 
        cartCount={cartCount} 
        onNavigate={navigate} 
        onToggleCart={() => setIsCartOpen(true)}
        currentPage={currentPage}
      />

      <main>
        {renderPage()}
      </main>

      <Footer />

      {/* Cart Sidebar Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300">
            <div className="p-6 flex items-center justify-between border-b border-maison-blue/10">
              <h2 className="font-serif text-xl text-maison-blue uppercase tracking-widest">Votre Panier</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-maison-blue hover:text-maison-gold">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-maison-blue/40">
                  <ShoppingBag size={48} className="mb-4 opacity-50" />
                  <p className="font-body">Votre panier est vide</p>
                  <button onClick={() => { setIsCartOpen(false); navigate('SHOP'); }} className="mt-4 text-maison-gold hover:underline font-serif text-sm">
                    Découvrir nos créations
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-24 bg-gray-100 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-serif text-maison-blue text-sm uppercase">{item.name}</h4>
                          <p className="text-xs text-maison-blue/60 mt-1">{item.weight}</p>
                        </div>
                        <div className="flex justify-between items-end">
                          <p className="font-body text-sm">{item.quantity} x {item.price} €</p>
                          <button onClick={() => removeFromCart(item.id)} className="text-maison-blue/40 hover:text-red-500">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-6 bg-maison-ivory border-t border-maison-blue/10">
              <div className="flex justify-between items-center mb-6">
                <span className="font-serif uppercase tracking-widest text-sm">Total</span>
                <span className="font-serif text-xl">{cartTotal} €</span>
              </div>
              <button className="w-full bg-maison-blue text-maison-gold py-4 font-serif uppercase tracking-widest text-sm hover:bg-maison-blue/90 transition-colors disabled:opacity-50" disabled={cart.length === 0}>
                Commander
              </button>
              <p className="text-center text-[10px] uppercase tracking-widest text-maison-blue/40 mt-4">
                Livraison et taxes calculées à l'étape suivante
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;