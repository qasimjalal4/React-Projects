export function LengthInput({ length, setLength }) {
  return (
    <>
      <div className="length-container">
        <span className="label">Password Length</span>
        <span className="password-length">{length}</span>
      </div>
      <input
        type="range"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        min={8}
        max={20}
        className="range-selector"
      />
    </>
  );
}
