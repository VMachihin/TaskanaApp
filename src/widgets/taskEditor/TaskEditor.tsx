import { FormEvent, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { useTaskEditorStore, useTaskStore } from '@/app/store/store';
import { useFormAndValidation } from '@/shared/hooks/useForm';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon';

import styles from './taskEditor.module.css';

export const TaskEditor = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { values, resetForm, handleChange } = useFormAndValidation();
  const { isOpenTaskEditor, toggleTaskEditor } = useTaskEditorStore(
    (state) => state
  );
  const { addTask } = useTaskStore((state) => state);

  useEffect(() => {
    if (isOpenTaskEditor && inputRef.current) {
      const inputElement = inputRef.current;

      setTimeout(() => {
        inputElement.focus();
      }, 200);
    }
  }, [isOpenTaskEditor]);

  const handleCancel = () => {
    toggleTaskEditor();
    resetForm();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    addTask(values);
    handleCancel();
  };

  return (
    <div className={clsx(styles.taskEditor, isOpenTaskEditor && styles.isOpen)}>
      <form className={styles.formTask} onSubmit={handleSubmit}>
        <div className={styles.input_wrapper}>
          <h2 className={styles.title}>Создание задачи</h2>

          <label htmlFor='' className={styles.label}>
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
              onClick={resetForm}
            >
              <Icon name='reset' />
            </button>
          )}
        </div>

        <div className={styles.priority}>
          <div className={styles.inner}>
            <span className={styles.priority_title}>Приоритет</span>
            <fieldset className={styles.actions}>
              <label
                className={clsx(styles.actions_button, styles.minus)}
                htmlFor='lowest_priority'
              >
                <input
                  type='radio'
                  id='lowest_priority'
                  name='priority'
                  value={1}
                  onChange={handleChange}
                  checked={values?.priority === 1}
                />
                <Icon name='minus' />
              </label>
              <label
                className={clsx(styles.actions_button, styles.chevronTop)}
                htmlFor='medium_priority'
              >
                <input
                  type='radio'
                  id='medium_priority'
                  name='priority'
                  value={2}
                  onChange={handleChange}
                  checked={values?.priority === 2}
                />
                <Icon name='chevronTop' />
              </label>

              <label
                className={clsx(styles.actions_button, styles.arrowTwo)}
                htmlFor='high_priority'
              >
                <input
                  type='radio'
                  id='high_priority'
                  name='priority'
                  value={3}
                  onChange={handleChange}
                  checked={values?.priority === 3}
                />
                <Icon name='arrowTwo' />
              </label>
            </fieldset>
          </div>
        </div>

        <div className={styles.button_wrapper}>
          <Button
            label='Создать'
            className={styles.button_create}
            type='submit'
            disabled={!values?.title}
          />
          <Button
            label='Отмена'
            className={styles.button_cancel}
            onClick={handleCancel}
          />
        </div>
      </form>
    </div>
  );
};
