import Card from "../components/Card";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import { useRouteLoaderData } from "react-router-dom";

const Shop = () => {
  const items: ShopItem[] = useRouteLoaderData("root") as ShopItem[];

  return (
    <>
      <Carousel>
        <CarouselItem>
          <p className="text-3xl">1</p>
        </CarouselItem>
        <CarouselItem>
          <p className="text-3xl">2</p>
        </CarouselItem>
        <CarouselItem>
          <p className="text-3xl">3</p>
        </CarouselItem>
      </Carousel>
      <div className="grid w-fit grid-cols-2 max-w-7xl gap-4 p-8 m-auto md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
        {items.map((item) => {
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
    </>
  );
};

export default Shop;
