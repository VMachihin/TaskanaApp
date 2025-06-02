import { FC } from 'react';
import clsx from 'clsx';

import styles from './icon.module.css';

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: FC<IconProps> = ({ name, className }) => {
  return (
    <span className={clsx(styles.icon, className)}>
      <svg aria-hidden='true'>
        <use href={`#icon-${name}`} />
      </svg>
    </span>
  );
};
