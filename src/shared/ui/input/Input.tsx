import { type FC, useEffect, useRef } from 'react';
import { useTaskEditorStore } from '@/app/store/store';
import { Task } from '@/shared/types/task';
import { Icon } from '../icon';

import styles from './input.module.css';

interface IInputProps {
  values: Task;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInputProps> = ({ values, handleChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { isOpenTaskEditor } = useTaskEditorStore((state) => state);

  useEffect(() => {
    if (isOpenTaskEditor && inputRef.current) {
      const inputElement = inputRef.current;

      setTimeout(() => {
        inputElement.focus();
      }, 200);
    }
  }, [isOpenTaskEditor]);

  console.log(values.title);

  return (
    <div className={styles.inputWrapper}>
      <h2 className={styles.title}>Создание задачи</h2>

      <label htmlFor='title' className={styles.label}>
        Название <span>*</span>
      </label>

      <input
        type='text'
        name='title'
        id='title'
        placeholder='Название задачи'
        className={styles.input}
        onChange={handleChange}
        value={values?.title || ''}
        ref={inputRef}
      />

      {values?.title && (
        <button
          type='reset'
          className={styles.resetBtn}
          onClick={() => {
            handleChange({
              target: {
                name: 'title',
                value: '',
              },
            } as React.ChangeEvent<HTMLInputElement>);
          }}
        >
          <Icon name='reset' />
        </button>
      )}
    </div>
  );
};
