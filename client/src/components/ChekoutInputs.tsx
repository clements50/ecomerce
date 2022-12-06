type CheckoutInputProps = {
  labelName: string;
};

const CheckoutInput = ({ labelName }: CheckoutInputProps) => {
  return (
    <div className="relative">
      <label
        htmlFor={labelName}
        className="absolute bg-white -top-2 left-7 px-1 text-sm text-gray-600"
      >
        {labelName}
      </label>
      <input
        id={labelName}
        className="border-2 border-gray-400 rounded-md w-full text-lg focus:outline-none p-1"
      />
    </div>
  );
};
export default CheckoutInput;
