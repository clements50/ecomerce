import CheckoutInput from "../components/ChekoutInputs";
import { Country, State } from "country-state-city";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const ShippingPage = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("--");
  const [selectedState, setSelectedState] = useState<string>("--");

  const countries = Country.getAllCountries();

  const selectedCountryDetails = countries.find(
    (c) => c.name === selectedCountry
  );

  console.log(selectedCountryDetails);

  const states = State.getStatesOfCountry(selectedCountryDetails?.isoCode);

  const countryOpts = countries.map((c) => (
    <option key={uuid()}>{c.name}</option>
  ));

  const stateOpts = states.map((s) => <option key={uuid()}>{s.name}</option>);

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

            <div className="relative w-full">
              <label className="absolute -top-3 left-7 p-1 bg-white text-xs text-gray-600">
                Country
              </label>
              <select
                className="p-2 rounded-md bg-white border-2 border-gray-300 w-full"
                onChange={(e) => setSelectedCountry(e.target.value)}
                value={selectedCountry}
              >
                <option disabled>--</option>
                {countryOpts}
              </select>
            </div>

            <div className="relative w-full">
              <label className="absolute -top-3 left-7 p-1 bg-white text-xs text-gray-600">
                State/Province
              </label>
              <select
                className="p-2 rounded-md bg-white border-2 border-gray-300 w-full"
                onChange={(e) => setSelectedState(e.target.value)}
                value={selectedState}
              >
                <option disabled>--</option>
                {stateOpts}
              </select>
            </div>
          </div>
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
