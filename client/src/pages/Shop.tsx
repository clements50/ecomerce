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
          <div className="bg-[url('images/sky.jpeg')] flex items-center justify-center border-gradient-to-r from-red-100 to-blue-50 bg-cover h-full w-full">
            <p className="text-white text-3xl lg:text-6xl lg:w-auto w-60 font-semibold">
              Shop And Checkout Our Best Products Today
            </p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img
            src="../../public/images/Athens_Slate-Grey_Float.png"
            className="h-full w-full object-cover"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="../../public/images/camera.jpg"
            className="h-full w-full object-contain "
          />
        </CarouselItem>
      </Carousel>
      <p className="text-center text-4xl mb-4 font-semibold">Shop</p>
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
