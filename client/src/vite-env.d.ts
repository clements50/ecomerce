type ShopItem = {
  name: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  varients: { size: string; stock: number }[];
  stock: string;
  images: string[];
  id: string;
};
