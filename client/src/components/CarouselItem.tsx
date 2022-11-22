type CarouselItemProps = {
  children: JSX.Element;
};

const CarouselItem = ({ children }: CarouselItemProps) => {
  return (
    <div className="h-full w-full bg-gray-200 flex-shrink-0">{children}</div>
  );
};

export default CarouselItem;