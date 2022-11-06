import Card from "../components/Card";
import ShopItems from "../data/data.json";

const Shop = () => {
  return (
    <div className="flex flex-wrap py-8 justify-center gap-2 w-screen m-auto lg:w-8/12">
      {ShopItems.map((item) => {
        return (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default Shop;
