import { Product, ProductCategory } from './types';

export const ASSETS = {
  logo: "https://res.cloudinary.com/dwh993dhi/image/upload/v1764685471/logo_vjx7gh.png",
  hero: "https://res.cloudinary.com/dwh993dhi/image/upload/v1764685471/Composition_Artistique_Maison_Aurore-_Mise_en_sce%CC%80ne_artistique_valorisant_l_univers_olfactif_et_esthe%CC%81tique_mcks1x.webp",
  heroVideo: "https://res.cloudinary.com/dwh993dhi/video/upload/v1764690116/Cre%CC%81ation_d_un_spot_publicitaire_spa-1_tyepe4.mov",
  candlesCollection: "https://res.cloudinary.com/dwh993dhi/image/upload/v1764685464/Collection_Bougies_Maison_Aurore-_Bougies_Classique_180g_69_et_Signature_450g_3_me%CC%80ches_129-149_igav6v.webp",
  candleLifestyle: "https://res.cloudinary.com/dwh993dhi/image/upload/v1764685465/Bougies_Lifestyle_Maison_Aurore-_Mise_en_sce%CC%80ne_lifestyle_des_bougies_dans_un_inte%CC%81rieur_raffine%CC%81_qxmsib.webp",
  diffuserStudio: "https://res.cloudinary.com/dwh993dhi/image/upload/v1764685463/Diffuseurs_Studio_Maison_Aurore-_Photographie_studio_e%CC%81pure%CC%81e_mettant_en_valeur_la_qualite%CC%81_des_mate%CC%81riaux_rq6dok.webp",
  spray: "https://res.cloudinary.com/dwh993dhi/image/upload/v1764685467/Spray_d_Ambiance_Maison_Aurore-_Spray_d_ambiance_100ml_haute_concentration_65_f3h7vd.webp",
  incense: "https://res.cloudinary.com/dwh993dhi/image/upload/v1764685466/Encens_Bakhour_Maison_Aurore-_Encens_artisanal_pot_deluxe_inspiration_orientale_85_ix3s0z.webp",
  spa: "https://res.cloudinary.com/dwh993dhi/image/upload/v1764685462/Ambiance_Spa_Maison_Aurore-_Univers_spa_et_bien-e%CC%82tre_avec_les_parfums_d_inte%CC%81rieur_Maison_Aurore_bst2i2.webp"
};

export const PRODUCTS: Product[] = [
  {
    id: 'c1',
    name: 'Nuit de Velours',
    category: ProductCategory.CANDLE,
    price: 69,
    weight: '180g',
    description: "Une étreinte chaleureuse et mystérieuse, évoquant le silence apaisant d'une nuit étoilée.",
    story: "Nuit de Velours est née d'un souvenir d'hiver dans un chalet alpin, où le feu de bois crépite tandis que la neige étouffe les bruits du monde.",
    image: ASSETS.candlesCollection,
    secondaryImage: ASSETS.candleLifestyle,
    isBestseller: true,
    olfactory: {
      top: ['Safran', 'Bergamote'],
      heart: ['Cèdre', 'Patchouli'],
      base: ['Ambre', 'Vanille Noire'],
      intensity: 4,
      floral: 10,
      woody: 90,
      spicy: 60,
      fresh: 10,
      sweet: 40,
      oriental: 80
    }
  },
  {
    id: 'c2',
    name: 'Lumière d\'Or',
    category: ProductCategory.CANDLE,
    price: 149,
    weight: '450g',
    description: "La majesté d'une bougie signature trois mèches, illuminant l'espace d'un parfum solaire et opulent.",
    story: "Inspirée par les rayons du soleil couchant sur les toits de Paris, Lumière d'Or capture l'instant suspendu où la ville devient dorée.",
    image: ASSETS.candleLifestyle,
    isNew: true,
    olfactory: {
      top: ['Mandarine', 'Néroli'],
      heart: ['Jasmin Sambac', 'Ylang-Ylang'],
      base: ['Santal', 'Musc Blanc'],
      intensity: 5,
      floral: 80,
      woody: 30,
      spicy: 20,
      fresh: 40,
      sweet: 50,
      oriental: 30
    }
  },
  {
    id: 'd1',
    name: 'Jardin Suspendu',
    category: ProductCategory.DIFFUSER,
    price: 110,
    weight: '200ml',
    description: "Une diffusion lente et constante d'un bouquet floral vert et croquant.",
    story: "Hommage aux jardins d'hiver du XIXème siècle, où la nature apprivoisée déploie ses senteurs les plus délicates.",
    image: ASSETS.diffuserStudio,
    olfactory: {
      top: ['Feuille de Figuier', 'Menthe'],
      heart: ['Rose', 'Pivoine'],
      base: ['Mousse de Chêne', 'Vétiver'],
      intensity: 3,
      floral: 70,
      woody: 20,
      spicy: 10,
      fresh: 90,
      sweet: 20,
      oriental: 0
    }
  },
  {
    id: 's1',
    name: 'Brume d\'Orient',
    category: ProductCategory.SPRAY,
    price: 65,
    weight: '100ml',
    description: "Un geste immédiat pour transformer l'atmosphère. Une concentration haute pour une tenue exceptionnelle.",
    story: "Le souvenir vibrant des marchés aux épices de Marrakech, capturé dans un flacon de verre poli.",
    image: ASSETS.spray,
    olfactory: {
      top: ['Cardamome', 'Poivre Rose'],
      heart: ['Encens', 'Cuir'],
      base: ['Oud', 'Benjoin'],
      intensity: 5,
      floral: 10,
      woody: 80,
      spicy: 90,
      fresh: 0,
      sweet: 30,
      oriental: 100
    }
  },
  {
    id: 'i1',
    name: 'Rituel Sacré',
    category: ProductCategory.INCENSE,
    price: 85,
    description: "Bakhour artisanal présenté dans un pot deluxe. Pour les moments de méditation et de recueillement.",
    story: "Fabriqué selon des méthodes ancestrales, ce bakhour invite à la sérénité et à l'élévation spirituelle.",
    image: ASSETS.incense,
    olfactory: {
      top: ['Clou de Girofle'],
      heart: ['Rose de Damas'],
      base: ['Bois d\'Agar', 'Musc'],
      intensity: 5,
      floral: 30,
      woody: 100,
      spicy: 50,
      fresh: 0,
      sweet: 20,
      oriental: 100
    }
  }
];

export const JOURNAL_POSTS = [
  {
    id: 1,
    title: "L'art de la cire végétale",
    excerpt: "Découvrez pourquoi nous avons choisi une cire 100% naturelle pour nos bougies, garantissant une combustion propre et une restitution fidèle du parfum.",
    image: ASSETS.candleLifestyle,
    date: "12 Octobre 2023"
  },
  {
    id: 2,
    title: "Les secrets du Vétiver",
    excerpt: "Plongée au cœur d'Haïti pour comprendre la récolte de cette racine aux notes boisées et fumées qui signe notre collection masculine.",
    image: ASSETS.diffuserStudio,
    date: "28 Septembre 2023"
  },
  {
    id: 3,
    title: "Rituel du soir",
    excerpt: "Comment créer une atmosphère propice au sommeil grâce à nos brumes d'oreiller et nos bougies apaisantes.",
    image: ASSETS.spa,
    date: "15 Septembre 2023"
  }
];