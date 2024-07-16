import styles from "./CircularProgress.module.scss";

const CircularProgress = ({
  size = 30,
  color = "var(--primary-color)",
  thickness = 4,
}) => {
  const s = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      className={styles.root}
      style={{ color, width: s, height: s, borderWidth: thickness }}
    ></div>
  );
};

export default CircularProgress;
