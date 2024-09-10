import React from "react";
import { motion } from "framer-motion";
import Fire from "../../../../assets/svg/Fire";
import SalahBro from "../../../../assets/img/salahbro.jpg";
import Jokowi from "../../../../assets/img/jokowi.jpg";
import { TypeJawabanKuis } from "../../../../type/TypeJabawanKuis";

const JawabanBKuis2 = ({ id, resetAnimation }: TypeJawabanKuis) => {
  const number = 2;
  return (
    <>
      {id === number && (
        <motion.div
          initial={{
            display: "none",
            opacity: 0,
            // opacity: id === number ? 1 : 0,
          }}
          animate={{
            display: id === number ? "" : "none",
            opacity: 1,
            transition: { type: "spring", duration: 3.5 },
          }}
          onAnimationComplete={resetAnimation}
          className="absolute bg-red-500 bg-opacity-50 inset-0 z-[999]"
        >
          <motion.div
            initial={{
              y: 200,
            }}
            animate={{
              y: 0,
              transition: { type: "spring", delay: 2 },
            }}
            className="absolute bottom-0 right-0"
          >
            <div className="w-40 h-40">
              <img src={Jokowi} alt="" />
            </div>
          </motion.div>
          <div className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="w-[30rem]">
              <img src={SalahBro} alt="" />
            </div>
          </div>
          <div className="absolute w-full -bottom-5">
            <div className="flex justify-center">
              <Fire />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default JawabanBKuis2;
