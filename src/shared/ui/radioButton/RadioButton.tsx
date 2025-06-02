import { type FC } from 'react';
import clsx from 'clsx';
import { Icon } from '../icon';

import styles from './radioButton.module.css';

interface IRadioButtonProps {
  id: string;
  value: number;
  icon: string;
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton: FC<IRadioButtonProps> = ({
  id,
  value,
  icon,
  handleChange,
  checked,
}) => {
  return (
    <label className={clsx(styles.actionsButton, styles[icon])} htmlFor={id}>
      <input
        type='radio'
        id={id}
        name='priority'
        value={value}
        onChange={handleChange}
        checked={checked}
      />
      <Icon name={icon} />
    </label>
  );
};
