import { motion } from "framer-motion";

import Shot from "../../../../assets/img/shott.jpg";
import { TypeJawabanKuis } from "../../../../type/TypeJabawanKuis";
import Lilin from "../../../../assets/svg/Lilin";

const JawabanDKuis2 = ({ id, resetAnimation }: TypeJawabanKuis) => {
  const number = 4;
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
            transition: { type: "spring", duration: 5 },
          }}
          onAnimationComplete={resetAnimation}
          className="absolute bg-black bg-opacity-90 inset-0 z-[999]"
        >
          <div className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="w-[30rem]">
              <img src={Shot} alt="" />
            </div>
          </div>

          <div className="absolute -bottom-5 left-60">
            <Lilin />
          </div>
          <div className="absolute -bottom-5 right-60">
            <Lilin />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default JawabanDKuis2;
