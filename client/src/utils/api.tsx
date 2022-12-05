import shopItems from "../data/data.json";

export const getAllShopItems = () => {
  return shopItems as ShopItem[];
};

export const getShopItem = (id: string) => {
  const shopItem = shopItems.find((item) => item.id === id);
  return shopItem as ShopItem;
};
