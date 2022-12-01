import Card from "../components/Card";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import { useRouteLoaderData } from "react-router-dom";
import { useId } from "react";

const Shop = () => {
  const items: ShopItem[] = useRouteLoaderData("root") as ShopItem[];

  return (
    <>
      <Carousel>
        <CarouselItem>
          <div className="bg-hero-pattern flex items-center justify-center bg-cover h-full w-full">
            <p className="text-white text-3xl lg:text-6xl lg:w-auto w-60">
              Shop And Checkout Our Best Products Today
            </p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img
            src="images/blackshoes.jpg"
            className="h-full w-full object-cover"
          />
        </CarouselItem>
        <CarouselItem>
          <img src="images/camera.jpg" className="h-full w-full object-cover" />
        </CarouselItem>
      </Carousel>
      <p className="text-center text-4xl mb-4 font-semibold">Shop</p>
      <div className="grid w-fit grid-cols-2 max-w-7xl gap-4 p-8 m-auto md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
        {items.map((item) => {
          return (
            <Card
              key={useId()}
              name={item.name}
              thumbnail={item.images.thumbnail}
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
