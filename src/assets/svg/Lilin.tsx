import style from "../css/lilin.module.css";

const Lilin = () => {
  return (
    <div className={style.holder}>
      <div className={style.candle}>
        <div className={style.blinking_glow} />
        <div className={style.thread} />
        <div className={style.glow} />
        <div className={style.flame} />
      </div>
    </div>
  );
};

export default Lilin;
