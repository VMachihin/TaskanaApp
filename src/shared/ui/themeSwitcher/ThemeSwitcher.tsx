import { ChangeEvent, useEffect, useRef } from 'react';
import { useTheme } from '@/shared/hooks/useTheme';
import { Icon } from '@/shared/ui/icon';

import styles from './themeSwitcher.module.css';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;

      if (
        target.tagName === 'INPUT' &&
        (event.key === ' ' || event.key === 'Enter')
      ) {
        event.preventDefault();
        toggleTheme();
      }
    };

    const currentInput = checkboxRef.current;
    currentInput?.addEventListener('keydown', handleKeyDown);

    return () => {
      currentInput?.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleTheme]);

  return (
    <div className={styles.toggle_switch}>
      <label className={styles.switch_label}>
        <Icon
          name='sun'
          className={`${styles.icon} ${styles.sun} ${
            theme === 'light' ? styles.isActive : null
          }`}
        />
        <input
          type='checkbox'
          className={styles.checkbox}
          tabIndex={0}
          name='theme'
          ref={checkboxRef}
          checked={theme === 'dark'}
          onChange={toggleTheme}
          aria-label={`Переключить ${
            theme === 'light' ? 'light' : 'dark'
          } тему`}
        />
        <span className={styles.slider}></span>
        <Icon
          name='moon'
          className={`${styles.icon} ${styles.moon} ${
            theme === 'dark' ? styles.isActive : null
          }`}
        />
      </label>
    </div>
  );
};
