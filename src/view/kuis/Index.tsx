import { useState } from "react";
import Kuis1 from "../../components/kuis/scane/Kuis1/Kuis1";
import Kuis2 from "../../components/kuis/scane/kuis2/Kuis2";
import { useSelector } from "react-redux";

const Kuis = () => {
  const {} = useSelector((state: any) => state.kuis);

  const [scene, setScene] = useState<number>(0);
  return (
    <>
      {scene <= 0 && <Kuis1 scene={scene} setScane={setScene} />}
      {scene === 1 && <Kuis2 scene={scene} setScane={setScene} />}
    </>
  );
};

export default Kuis;
