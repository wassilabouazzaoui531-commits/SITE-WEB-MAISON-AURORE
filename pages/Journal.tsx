import React from 'react';
import { JOURNAL_POSTS, ASSETS } from '../constants';

const Journal: React.FC = () => {
  return (
    <div className="bg-maison-ivory min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-maison-gold text-2xl mb-4 block">❦</span>
          <h1 className="font-serif text-4xl md:text-5xl text-maison-blue mb-6">Le Journal</h1>
          <p className="font-body text-maison-blue/60 max-w-2xl mx-auto italic">
            Inspirations, savoir-faire et art de vivre. Plongez dans les coulisses de la Maison Aurore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {JOURNAL_POSTS.map((post, index) => (
            <div key={post.id} className={`group cursor-pointer ${index === 0 ? 'md:col-span-2' : ''}`}>
              <div className="overflow-hidden aspect-video mb-6 relative">
                 <div className="absolute inset-0 bg-maison-blue/20 group-hover:bg-maison-blue/0 transition-colors z-10 duration-500"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-center md:text-left">
                <span className="text-xs font-serif text-maison-gold uppercase tracking-widest mb-2 block">{post.date}</span>
                <h2 className={`font-serif text-maison-blue group-hover:text-maison-gold transition-colors mb-4 ${index === 0 ? 'text-3xl' : 'text-2xl'}`}>
                  {post.title}
                </h2>
                <p className="font-body text-maison-blue/70 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="text-maison-blue border-b border-maison-blue/30 pb-1 hover:text-maison-gold hover:border-maison-gold transition-colors font-serif uppercase text-xs tracking-widest">
                  Lire l'article
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;