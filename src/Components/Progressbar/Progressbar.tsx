import styles from "./styles.module.css";

export const Progressbar = ({ progress }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.progress_bar}>
        <div
          className={styles.progress_bar_fill}
          style={{ width: `${progress}%`, backgroundColor: "red" }}
        ></div>
      </div>
      <div className={styles.progress_label}>{progress}%</div>
    </div>
  );
};

type Props = { progress: string };
