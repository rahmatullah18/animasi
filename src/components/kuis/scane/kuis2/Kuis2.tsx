import { TypeKuisComponent } from "../../../../type/TypeKuis";
import Jawaban from "../../UI/Jawaban";
import Question from "../../UI/Question";
import useKuis2 from "../../../../hooks/kuis/useKuis2";
import JawabanBKuis2 from "./JawabanBKuis2";
import JawabanCKuis2 from "./JawabanCKuis2";
import JawabanDKuis2 from "./JawabanDKuis2";
import JawabanAKuis2 from "./JawabanAKuis2";

const Kuis2 = ({ scene, setScane }: TypeKuisComponent) => {
  const { answers, id = 0, setId } = useKuis2();

  const resetAnimation = () => {
    setId(0);
  };

  return (
    <>
      {/* id 2 */}
      <JawabanAKuis2 id={id} resetAnimation={resetAnimation} />
      {/* id 2 */}
      <JawabanBKuis2 id={id} resetAnimation={resetAnimation} />
      {/* id 3 */}
      <JawabanCKuis2 id={id} resetAnimation={resetAnimation} />
      {/* id 4 */}
      <JawabanDKuis2 id={id} resetAnimation={resetAnimation} />
      <Question text="1. Apa kepanjangan dari TAPERA?">
        {answers.map((item, idx) => {
          return <Jawaban {...item} key={idx} />;
        })}
      </Question>
    </>
  );
};

export default Kuis2;
