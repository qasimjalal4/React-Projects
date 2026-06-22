import LengthInput from "./LengthInput";
import CheckBoxInput from "./CheckBoxInput";
import PasswordGenerator from "./PasswordGenerator";

const PasswordOptions = ({
  length,
  setLength,
  handleUppercase,
  handleLowercase,
  handleNumbers,
  handleSymbols,
  generateButton,
  upper,
  lower,
  numbers,
  symbols,
}) => {
  return (
    <div className="w-[70%] bg-[#ffffff] mx-auto rounded-lg shadow-md px-5 pb-7">
      <LengthInput length={length} setLength={setLength} />

      <CheckBoxInput
        handleUppercase={handleUppercase}
        handleLowercase={handleLowercase}
        handleNumbers={handleNumbers}
        handleSymbols={handleSymbols}
        upper={upper}
        lower={lower}
        numbers={numbers}
        symbols={symbols}
      />

      <PasswordGenerator generateButton={generateButton} />
    </div>
  );
};

export default PasswordOptions;
