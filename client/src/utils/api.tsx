import shopItems from "../data/data.json";

export const getAllShopItems = () => {
  return shopItems;
};

export const getShopItem = (id: string) => {
  const shopItem = shopItems.find((item: ShopItem) => item.id === id);
  return shopItem;
};
