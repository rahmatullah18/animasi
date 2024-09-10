import { useState } from "react";
import Container from "../components/layouts/Container";
import { motion } from "framer-motion";
import Baby from "../../public/assets/siklus/baby.png";
import WTF from "../../public/assets/siklus/R.gif";
import Death from "../../public/assets/siklus/Death.png";

const Siklus = () => {
  const [animationStage, setAnimationStage] = useState<number>(0);

  const onAnimationComplete = () => {
    setAnimationStage((state: number) => state + 1);
  };
  return (
    <Container>
      {animationStage > 0 && (
        <>
          {/* pembuka */}
          <motion.h1
            initial={{
              opacity: 1,
              y: 200,
            }}
            animate={{
              opacity: 1,
              transition: { type: "spring", duration: 2, delay: 2 },
              y: -150,
            }}
            className="w-full font-semibold text-center uppercase text-9xl"
          >
            Three Stages Of Life
          </motion.h1>
          <div className="flex">
            <motion.div
              className="h-80 "
              initial={{
                x: -100,
                y: 1000,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { type: "spring", duration: 2, delay: 4 },
              }}
            >
              <img src={Baby} className="w-full h-full" alt="" />
              <div className="text-5xl font-semibold text-center">BORN</div>
            </motion.div>
            <motion.div
              className="h-80"
              initial={{
                x: 0,
                y: 1000,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { type: "spring", duration: 2, delay: 7 },
              }}
            >
              <img src={WTF} className="w-full h-full" alt="" />
              <div className="text-5xl font-semibold text-center">
                WHAT THE F*CK IS THIS
              </div>
            </motion.div>
            <motion.div
              className="h-80"
              initial={{
                x: 100,
                y: 1000,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { type: "spring", duration: 2, delay: 10 },
              }}
            >
              <img src={Death} className="w-full h-full" alt="" />
              <div className="text-5xl font-semibold text-center">Death</div>
            </motion.div>
          </div>
          {/* content */}
        </>
      )}

      <div className="absolute w-fit h-fit bottom-20">
        {animationStage === 0 && (
          <button
            className="px-5 py-2 text-xl font-bold text-white uppercase transition-all duration-300 ease-in-out delay-200 bg-red-500 rounded-md shadow-lg"
            onClick={() => onAnimationComplete()}
          >
            Start
          </button>
        )}
      </div>
    </Container>
  );
};

export default Siklus;
