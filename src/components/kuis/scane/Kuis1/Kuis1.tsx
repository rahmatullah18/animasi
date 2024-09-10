import { TypeKuisComponent } from "../../../../type/TypeKuis";
import ButtonStart from "../../UI/ButtonStart";
import TitleKuis from "../../UI/TitleKuis";
import { motion } from "framer-motion";
import { useState } from "react";

const Kuis1 = ({ scene, setScane }: TypeKuisComponent) => {
  const [isStarted, setIsStarted] = useState(false);
  const [isHoverButton, setIsHoverButton] = useState<boolean>(false);

  const handleButtonStart = () => {
    setIsStarted(true);
    setTimeout(() => {
      setScane(1);
    }, 2000);
  };

  return (
    <motion.div
      initial={{
        x: 0,
      }}
      animate={{
        x: isStarted ? -2000 : 0,
        transition: { type: "spring", duration: 4, delay: 0.2 },
      }}
      className="flex items-center justify-center w-full h-screen overflow-hidden bg-[#004643]"
    >
      <div className="flex flex-col space-y-10">
        <TitleKuis title="Kuis Tapera" color="text-white" />
        <div className="flex justify-center">
          <ButtonStart
            isHover={isHoverButton}
            setIsHover={setIsHoverButton}
            title="Mulai Yuk"
            handleClick={handleButtonStart}
          />
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: isHoverButton ? 1 : 0,
        }}
        transition={{ type: "spring" }}
        className="absolute bottom-4 right-4"
      >
        <span className="text-4xl font-bold text-red-500 uppercase">
          Sebaiknya jangan
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Kuis1;
