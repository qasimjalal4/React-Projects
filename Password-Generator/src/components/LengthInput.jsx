const LengthInput = ({ length, setLength }) => {
  return (
    <>
      <div className="flex justify-between pt-3 mb-3">
        <span className="font-semibold text-base">Password Length</span>
        <span className="text-[#3b82f6] text-lg font-bold">{length}</span>
      </div>
      <input
        type="range"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        min={8}
        max={20}
        className="range-selector"
      />
    </>
  );
}


export default LengthInput