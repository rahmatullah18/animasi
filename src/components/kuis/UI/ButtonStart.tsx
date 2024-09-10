import { TypeButtonStart } from "../../../type/TypeButtonStart";

const ButtonStart = ({ title, handleClick, setIsHover }: TypeButtonStart) => {
  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="px-6 py-4 text-2xl font-semibold text-white uppercase transition-all duration-200 ease-in-out border border-white rounded-lg shadow w-fit hover:scale-150"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default ButtonStart;
