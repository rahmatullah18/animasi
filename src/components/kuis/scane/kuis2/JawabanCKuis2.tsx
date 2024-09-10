import React from "react";
import { motion } from "framer-motion";
import Fire from "../../../../assets/svg/Fire";
import SalahBro from "../../../../assets/img/salahbro.jpg";
import Kucing from "../../../../assets/img/cat.jpg";
import { TypeJawabanKuis } from "../../../../type/TypeJabawanKuis";

const JawabanCKuis2 = ({ id, resetAnimation }: TypeJawabanKuis) => {
  const numberLooping = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const number = 3;
  return (
    <>
      {id === number && (
        <motion.div
          initial={{
            display: "none",
            opacity: 0,
          }}
          animate={{
            display: id === number ? "" : "none",
            opacity: 1,
            transition: { type: "spring", duration: 3.5 },
          }}
          onAnimationComplete={resetAnimation}
          className="absolute bg-black bg-opacity-90 inset-0 z-[999]"
        >
          <div className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="w-[30rem]">
              <img src={Kucing} alt="" />
            </div>
          </div>
          <div className="absolute bottom-0 w-full">
            <div className="flex items-center justify-center w-full gap-4 ">
              {numberLooping.map((z, idx) => {
                return (
                  <motion.div
                    initial={{ y: 300 }}
                    animate={{ y: 0 }}
                    transition={{
                      type: "spring",
                      duration: 3,
                      delay: Number(`0.${idx}`),
                    }}
                    className="w-40"
                    key={idx}
                  >
                    <img src={Kucing} alt="" />
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="absolute top-0 w-full">
            <div className="flex items-center justify-center w-full gap-4 ">
              {numberLooping.map((z, idx) => {
                return (
                  <motion.div
                    initial={{ y: -300 }}
                    animate={{ y: 0 }}
                    transition={{
                      type: "spring",
                      duration: 3,
                      delay: Number(`0.${idx}`),
                    }}
                    className="w-40"
                    key={idx}
                  >
                    <img src={Kucing} alt="" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default JawabanCKuis2;
