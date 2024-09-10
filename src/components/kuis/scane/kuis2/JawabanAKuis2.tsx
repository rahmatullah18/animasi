import { motion } from "framer-motion";

import Leo from "../../../../assets/img/leonardo.jpg";
import Basuki from "../../../../assets/img/basuki.png";
import { TypeJawabanKuis } from "../../../../type/TypeJabawanKuis";

const JawabanAKuis2 = ({ id, resetAnimation }: TypeJawabanKuis) => {
  const number = 1;
  return (
    <>
      {id === number && (
        <motion.div className="absolute bg-[#004643] bg-opacity-90 inset-0 z-[999]">
          <div className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <motion.div
              initial={{
                display: "none",
                opacity: 0,
                // opacity: id === number ? 1 : 0,
              }}
              animate={{
                display: id === number ? "" : "none",
                opacity: 1,
                scale: [0, 1, 2, 1],
                rotate: [100, 0],
                transition: { type: "spring", duration: 6 },
              }}
              onAnimationComplete={resetAnimation}
              className="w-[30rem]"
            >
              <img src={Leo} alt="" />
            </motion.div>
          </div>

          <div>
            <div className="absolute">
              <motion.div
                initial={{
                  x: -350,
                }}
                animate={{
                  x: 2000,
                  transition: { type: "spring", duration: 8, delay: 2 },
                }}
                className=""
              >
                <img src={Basuki} alt="" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default JawabanAKuis2;
