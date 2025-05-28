import { FC } from 'react';
import { checkboxMode } from '@/shared/lib/constants';

import styles from './checkbox.module.css';
import clsx from 'clsx';

interface ICheckbox {
  id: string;
  priority: number;
}

export const Checkbox: FC<ICheckbox> = ({ id, priority }) => {
  return (
    <input
      type='checkbox'
      id={id}
      className={clsx(
        styles.checkbox,
        styles[checkboxMode[priority as keyof typeof checkboxMode]]
      )}
    />
  );
};
