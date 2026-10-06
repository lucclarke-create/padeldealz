import type { Product } from "@/types/catalog";

/** Shared visual stand-in — not a real product photo. */
export const PRODUCT_IMAGE_PLACEHOLDER = "/placeholders/product.svg";

/** Prototype catalog only. Replace this module when a real product source exists. */
export const products: Product[] = [
  {
    id: "prod-bullpadel-vertex-05",
    slug: "bullpadel-vertex-05",
    name: "Bullpadel Vertex 05",
    brand: "Bullpadel",
    category: "racket",
    image: PRODUCT_IMAGE_PLACEHOLDER,
    specs: {
      Vorm: "Diamant",
      Gewicht: "365–375 g",
      Balans: "Hoog",
      Niveau: "Gevorderd",
    },
  },
  {
    id: "prod-nox-at10-genius-18k",
    slug: "nox-at10-genius-18k",
    name: "Nox AT10 Genius 18K",
    brand: "Nox",
    category: "racket",
    image: PRODUCT_IMAGE_PLACEHOLDER,
    specs: {
      Gewicht: "360–375 g",
      Vorm: "Druppel",
      Balans: "Midden",
    },
  },
  {
    id: "prod-adidas-metalbone-34",
    slug: "adidas-metalbone-3-4",
    name: "Adidas Metalbone 3.4",
    brand: "Adidas",
    category: "racket",
    image: PRODUCT_IMAGE_PLACEHOLDER,
    specs: {
      Gewicht: "345–360 g",
      Vorm: "Diamant",
      Balans: "Hoog",
    },
  },
  {
    id: "prod-head-extreme-pro",
    slug: "head-extreme-pro",
    name: "Head Extreme Pro",
    brand: "Head",
    category: "racket",
    image: PRODUCT_IMAGE_PLACEHOLDER,
    specs: {
      Gewicht: "360–365 g",
      Vorm: "Druppel",
      Balans: "Midden-hoog",
    },
  },
  {
    id: "prod-babolat-technical-viper",
    slug: "babolat-technical-viper",
    name: "Babolat Technical Viper",
    brand: "Babolat",
    category: "racket",
    image: PRODUCT_IMAGE_PLACEHOLDER,
    specs: {
      Gewicht: "365 g",
      Vorm: "Diamant",
      Balans: "Hoog",
    },
  },
  {
    id: "prod-siux-electra-st3",
    slug: "siux-electra-st3",
    name: "Siux Electra ST3",
    brand: "Siux",
    category: "racket",
    image: PRODUCT_IMAGE_PLACEHOLDER,
    specs: {
      Gewicht: "355–375 g",
      Vorm: "Druppel",
      Balans: "Midden",
    },
  },
];
