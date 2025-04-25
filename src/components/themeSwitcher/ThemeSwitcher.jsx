import { useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Icon } from '@/components/icon';

import styles from './themeSwitcher.module.css';

export const ThemeSwitcher = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { target } = event;

      if (
        target.tagName === 'INPUT' &&
        (event.key === ' ' || event.key === 'Enter')
      ) {
        event.preventDefault();
        toggleTheme();
      }
    };

    const input = document.querySelector('input[name="theme"]');
    input.addEventListener('keydown', handleKeyDown);

    return () => {
      input.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleTheme]);

  return (
    <div className={styles.toggle_switch}>
      <label className={styles.switch_label}>
        <Icon
          name='sun'
          className={`${styles.icon} ${styles.sun} ${
            !isDarkTheme ? styles.isActive : null
          }`}
        />
        <input
          type='checkbox'
          className={styles.checkbox}
          tabIndex='0'
          name='theme'
          checked={isDarkTheme}
          onChange={toggleTheme}
          aria-label={`Переключить ${isDarkTheme ? 'light' : 'dark'} тему`}
        />
        <span className={styles.slider}></span>
        <Icon
          name='moon'
          className={`${styles.icon} ${styles.moon} ${
            isDarkTheme ? styles.isActive : null
          }`}
        />
      </label>
    </div>
  );
};
