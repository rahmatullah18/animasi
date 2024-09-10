import { TypeJawaban } from "../../../type/TypeJawaban";

const Jawaban = ({
  text,
  handleClick,
  isSelected,
  answer,
  id,
}: TypeJawaban) => {
  return (
    <div
      onClick={() => handleClick(id)}
      className={`w-full cursor-pointer hover:scale-105 transition ease-in-out px-4 py-4 text-lg font-semibold text-center border-2 border-black rounded-md ${
        isSelected && answer
          ? " text-[#001e1d] bg-[#f9bc60]"
          : isSelected && !answer
          ? "text-white bg-red-500"
          : ""
      }`}
    >
      {text}
    </div>
  );
};

export default Jawaban;
