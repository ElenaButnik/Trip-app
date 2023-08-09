import s from "./Button.module.scss";

export const Button = ({ style, children, onClick, currentPage }) => {
  return (
    <button className={s.button} style={style} onClick={onClick}>
      {children}
    </button>
  );
};
