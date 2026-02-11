import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-maison-ivory min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-maison-blue mb-6">Contactez-nous</h1>
          <p className="font-body text-maison-blue/60">
            Notre conciergerie est à votre disposition pour toute question relative à votre commande ou pour vous conseiller dans vos choix olfactifs.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-sm border border-maison-blue/5">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="font-serif text-xs uppercase tracking-widest text-maison-blue mb-2">Prénom</label>
                <input type="text" className="border-b border-maison-blue/20 py-2 outline-none focus:border-maison-gold bg-transparent font-body text-maison-blue" />
              </div>
              <div className="flex flex-col">
                <label className="font-serif text-xs uppercase tracking-widest text-maison-blue mb-2">Nom</label>
                <input type="text" className="border-b border-maison-blue/20 py-2 outline-none focus:border-maison-gold bg-transparent font-body text-maison-blue" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="font-serif text-xs uppercase tracking-widest text-maison-blue mb-2">Email</label>
              <input type="email" className="border-b border-maison-blue/20 py-2 outline-none focus:border-maison-gold bg-transparent font-body text-maison-blue" />
            </div>

            <div className="flex flex-col">
              <label className="font-serif text-xs uppercase tracking-widest text-maison-blue mb-2">Sujet</label>
              <select className="border-b border-maison-blue/20 py-2 outline-none focus:border-maison-gold bg-transparent font-body text-maison-blue">
                <option>Suivi de commande</option>
                <option>Conseil produit</option>
                <option>Presse & Partenariats</option>
                <option>Autre</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-serif text-xs uppercase tracking-widest text-maison-blue mb-2">Message</label>
              <textarea rows={5} className="border-b border-maison-blue/20 py-2 outline-none focus:border-maison-gold bg-transparent font-body text-maison-blue"></textarea>
            </div>

            <div className="pt-6 text-center">
              <button className="bg-maison-blue text-maison-gold px-10 py-4 font-serif uppercase tracking-widest text-sm hover:bg-maison-blue/90 transition-colors">
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;