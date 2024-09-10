import React from "react";
import { motion } from "framer-motion";

type TypeQuestion = {
  children: React.ReactNode;
  text: string;
};

const Question = ({ children, text }: TypeQuestion) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="w-[50%]  p-4 space-y-6"
    >
      <div className="flex items-center justify-center w-full p-4 bg-[#004643] border rounded-md shadow-md min-h-40">
        <span className="text-2xl font-semibold text-[#fffffe]">{text}</span>
      </div>
      <div className="grid w-full grid-cols-2 gap-6">{children}</div>
    </motion.div>
  );
};

export default Question;
