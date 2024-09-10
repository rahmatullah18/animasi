// import "./App.css";

import { motion } from "framer-motion";
import { useState } from "react";
import Container from "../components/layouts/Container";
import { slideAnimation } from "../assets/animation/motion";

function Love() {
  const [buttonClick, setButtonClick] = useState<boolean>(false);
  const [animationStage, setAnimationStage] = useState<number>(0);

  const handleAnimationComplete = () => {
    setAnimationStage((prevStage) => prevStage + 1);
  };
  const handleClick = () => {
    setButtonClick(true);
  };
  return (
    <Container>
      {animationStage < 1 && (
        <>
          <motion.div
            {...(buttonClick ? slideAnimation("left") : {})}
            initial={{
              x: -500,
              opacity: 0,
            }}
            onAnimationComplete={handleAnimationComplete}
            className="w-60"
          >
            <img src="/assets/loveLeft.png" alt="" className="" />
          </motion.div>
          <motion.div
            {...(buttonClick ? slideAnimation("right") : {})}
            initial={{
              x: 500,
              opacity: 0,
            }}
            onAnimationComplete={handleAnimationComplete}
            className="w-60"
          >
            <img src="/assets/loveRight.png" alt="" className="" />
          </motion.div>
        </>
      )}

      {animationStage > 1 && (
        <motion.div
          className="w-96"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/assets/kim.png" alt="" className="" />
        </motion.div>
      )}

      <div className="absolute w-fit h-fit bottom-20">
        <button
          className="px-5 py-2 text-xl font-bold text-white uppercase bg-red-500 rounded-md shadow-lg"
          onClick={() => handleClick()}
        >
          Give me love
        </button>
      </div>
    </Container>
  );
}

export default Love;
