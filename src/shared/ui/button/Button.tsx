import { FC, ReactElement, useState } from 'react';
import { Icon } from '@/shared/ui/icon';

import styles from './button.module.css';

interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  label?: string;
  icon?: ReactElement;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  hasChevron?: boolean;
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    type = 'button',
    label,
    icon,
    className,
    onClick,
    disabled = false,
    hasChevron = false,
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
    >
      {isLoading ? (
        <Icon
          name='loading'
          className={`${styles.buttonLoader} ${
            isLoading ? styles.loading : ''
          }`}
        />
      ) : (
        <>
          {icon}
          {label && <span className={styles.label}>{label}</span>}
          {hasChevron && <Icon name='chevronBottom' />}
        </>
      )}
    </button>
  );
};
