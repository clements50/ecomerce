import CheckoutInput from "../components/ChekoutInputs";

const ShippingPage = () => {
  return (
    <div>
      <div className="p-4">
        <p className="mb-4 text-xl">Shipping Information</p>
        <form className="flex flex-col gap-6">
          <CheckoutInput labelName={"name"} />
          <CheckoutInput labelName={"last name"} />
          <CheckoutInput labelName={"Address"} />
          <CheckoutInput labelName={"Apartment, suite, ect"} />
          <div className=" grid gap-6 ">
            <CheckoutInput labelName={"City"} />
            <select className="p-2 rounded-md w-full">
              <option>United States</option>
            </select>
          </div>
          <CheckoutInput labelName={"State/Province"} />
          <CheckoutInput labelName={"Postal Code"} />
          <p className="text-xl">Payment</p>
          <div></div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default ShippingPage;
