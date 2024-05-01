const NumInput = ({ label, readOnly, onChange, value }) => {
  return (
    <div className="flex flex-col w-full sm:w-fit gap-4">
      <label htmlFor="number" className="text-black font-sans font-bold">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        type="number"
        className="px-2 py-4 border border-gray-400 rounded-md font-sans font-bold outline-blue-500"
      />
    </div>
  );
};

export default NumInput;
