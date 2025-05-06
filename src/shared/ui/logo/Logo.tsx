import styles from './logo.module.css';

export const Logo = () => {
  return (
    <a href='/' aria-label='Главная' title='Главная' className={styles.logo}>
      <div className={styles.logoSquare}></div>
      <span className={styles.logoText}>taskana</span>
    </a>
  );
};
