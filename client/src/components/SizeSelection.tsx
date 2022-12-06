import { v4 as uuid } from "uuid";

type SizeSelectionProps = {
  varients: Varient[];
  setSelectedVarient: (varient: { size: string; stock: number }) => void;
  selectedVarient: { size: string; stock: number } | null;
};

const SizeSelection = (props: SizeSelectionProps) => {
  const { varients, setSelectedVarient, selectedVarient } = props;

  const sizeChoices =
    varients.length != 0 &&
    varients.map((varient) => {
      return (
        <button
          key={uuid()}
          onClick={() => setSelectedVarient(varient)}
          className={`flex items-center justify-center p-2 border-gray-300 border-2 rounded-md ${
            varient.stock < 1 && "bg-gray-100"
          } ${selectedVarient?.size === varient.size && "border-black"}`}
          disabled={varient.stock < 1}
        >
          {varient.size}
        </button>
      );
    });

  return <div className="grid grid-cols-4 gap-1 mb-8">{sizeChoices}</div>;
};

export default SizeSelection;
