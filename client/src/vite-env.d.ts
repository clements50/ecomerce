/// <reference types="vite/client" />
//
//
//
type Varient = {
  size: string;
  stock: number;
};

type ShopItem = {
  images: { thumbnail: string; images: string[] };
  name: string;
  brand: string;
  category: string;
  id: string;
  price: number;
  stock: string;
  description: string;
  varients: Varient[];
};
