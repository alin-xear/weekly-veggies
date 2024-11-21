import styles from "./Marquee.module.css";

function Marquee() {
  return (
    <div className={`${styles.marquee} bg-slate-200`}>
      <div>
        <span>&nbsp;🥕🥔🍅🫑🥒🍠🍄‍🟫🫛🥜🍆🍇🍌🍍🍈🍉🥭🍎🍊🍋🍏🍐🍋‍🟩</span>
      </div>
    </div>
  );
}

export default Marquee;
