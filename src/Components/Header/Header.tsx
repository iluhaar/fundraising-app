import styles from "./header.module.css";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <ul>
          <li>Головна</li>
          <li>Зворотній зв'язок</li>
        </ul>
      </header>
    </>
  );
};
