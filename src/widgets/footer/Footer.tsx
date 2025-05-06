import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>Проект выполнен в рамках стажировки </span>
        <a
          href='https://preax.ru'
          className={styles.link}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='PREAX'
          title='PREAX'
        >
          PREAX
        </a>
      </div>
    </footer>
  );
};
