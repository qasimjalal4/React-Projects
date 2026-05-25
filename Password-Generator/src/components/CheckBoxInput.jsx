export function CheckBoxInput() {
  return (
    <>
      <p>Include: </p>
      <div className="checkbox-container ">
        <div>
          <input type="checkbox" id="uppercase" />
          <label htmlFor="uppercase">Uppercase (A-Z)</label>
        </div>
        <div>
          <input type="checkbox" id="lowercase" />
          <label htmlFor="lowercase">Lowercase (a-z) </label>
        </div>
        <div>
          <input type="checkbox" id="numbers" />
          <label htmlFor="numbers">Numbers (0-9) </label>
        </div>
        <div>
          <input type="checkbox" id="symbols" />
          <label htmlFor="symbols">Symbols (!@#$...) </label>
        </div>
      </div>
    </>
  );
}
