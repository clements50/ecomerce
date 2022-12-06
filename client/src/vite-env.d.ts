type Varient = { size: string; stock: number };

type ShopItem = {
  name: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  varients: Varient[];
  stock: string;
  images: string[];
  id: string;
};
