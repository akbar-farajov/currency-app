import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Options from "./Options";
import NumInput from "./NumInput";
import { useState } from "react";
import axios from "axios";

const Currency = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("TRY");
  const [toCurrency, setToCurrency] = useState("USD");
  const [current, setCurrent] = useState(0);

  const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
  const API_Key = "fca_live_gO7IIKXjG2oIpkU2gTrWkbGmhbZwaPkys5jL9prF";

  const changeFromToTo = (e) =>{
    e.preventDefault()
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)

  }

  const convert = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_Key}&base_currency=${fromCurrency}`
    );
    setCurrent((response.data.data[toCurrency] * amount).toFixed(4));
  };

  return (
    <form className="box-border w-[100%] px-4 md:px-10 py-10 rounded-lg bg-slate-50 bg-opacity-80">
      <div className="w-[100%] flex flex-col sm:flex-row items-center justify-between flex-wrap lg:flex-nowrap gap-7 mb-10">
        <NumInput value={amount} label="Amount" onChange={(e) => setAmount(e.target.value)} />

        <Options
        value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          label="From"
        />

        <button onClick={changeFromToTo} className="p-4 border border-gray-400 rounded-full mt-9 text-blue-500">
          <FaArrowRightArrowLeft/>
        </button>

        <Options value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} label="To" />

        <NumInput value={current} readOnly="readOnly" label="Current" />
      </div>

      <button
        onClick={convert}
        className="w-full md:w-fit float-right duration-200 bg-blue-600 hover:bg-blue-400 active:bg-blue-900 rounded-lg px-6 py-3 font-sans font-semibold text-white text-lg"
      >
        Convert
      </button>
    </form>
  );
};

export default Currency;
