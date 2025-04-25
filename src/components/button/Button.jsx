import { useState } from 'react';
import { Icon } from '@/components/icon';

import styles from './button.module.css';

export const Button = (props) => {
  const {
    type = 'button',
    label,
    icon,
    className,
    onClick,
    disabled = false,
    checked = false,
  } = props;
  const [isLoading] = useState(false);

  return (
    <button
      type={type}
      className={`${styles.button} ${
        isLoading ? styles.loading : ''
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
      checked={checked}
    >
      {isLoading ? (
        <Icon
          name='loading'
          className={`${styles.button__loader} ${
            isLoading ? styles.loading : ''
          }`}
        />
      ) : (
        <>
          {' '}
          {icon}
          {label && <span className={styles.button__text}>{label}</span>}
        </>
      )}
    </button>
  );
};
