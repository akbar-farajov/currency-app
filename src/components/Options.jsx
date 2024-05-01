const Options = ({label, onChange, value}) => {
    const options = [
        "TRY", "USD", "EUR"
    ]

  return (
    <div className="w-full sm:w-fit flex flex-col flex-1 gap-4">
      <label htmlFor="text" className="text-black font-sans font-bold">{label}</label>
      <select value={value} onChange={onChange} className="px-2 py-4 border border-gray-400 rounded-md font-sans font-bold outline-8 outline-blue-500">
        {options.map((option, index) => <option key={index} className="text-black text-base font-sans my-5">{option}</option>)}
      </select>
    </div>
  );
};

export default Options;
