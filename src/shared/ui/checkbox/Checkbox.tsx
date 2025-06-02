import { FC } from 'react';
import clsx from 'clsx';
import { checkboxMode } from '@/shared/lib/constants';

import styles from './checkbox.module.css';

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
