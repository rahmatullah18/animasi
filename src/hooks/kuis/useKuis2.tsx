import { useState } from "react";
import { TypeJawaban } from "../../type/TypeJawaban";
import { MappingSelectedTrueFalse } from "../../helper/MappingSelectedTrueFalse";

const useKuis2 = () => {
  const [id, setId] = useState<number>();
  const jabawan1 = (id: number) => {
    const isSelectedAnswers = MappingSelectedTrueFalse(id, answers);
    setAnswers(isSelectedAnswers);
    setId(id);
  };
  const jabawan2 = (id: number) => {
    const isSelectedAnswers = MappingSelectedTrueFalse(id, answers);
    setAnswers(isSelectedAnswers);
    setId(id);
  };
  const jabawan3 = (id: number) => {
    const isSelectedAnswers = MappingSelectedTrueFalse(id, answers);
    setAnswers(isSelectedAnswers);
    setId(id);
  };
  const jabawan4 = (id: number) => {
    const isSelectedAnswers = MappingSelectedTrueFalse(id, answers);
    setAnswers(isSelectedAnswers);
    setId(id);
  };

  const [answers, setAnswers] = useState<TypeJawaban[]>([
    {
      id: 1,
      text: "a. Tabungan Perumahan Rakyat",
      handleClick: jabawan1,
      isSelected: false,
      answer: true,
    },
    {
      id: 2,
      text: "b. Tabungan Penderitaan Rakyat",
      handleClick: jabawan2,
      isSelected: false,
      answer: false,
    },
    {
      id: 3,
      text: "c. Tabungan Pemerasan Rakyat",
      handleClick: jabawan3,
      isSelected: false,
      answer: false,
    },
    {
      id: 4,
      text: "d. Tabungan Perusak Republik",
      handleClick: jabawan4,
      isSelected: false,
      answer: false,
    },
  ]);

  return { answers, id, setId };
};

export default useKuis2;
