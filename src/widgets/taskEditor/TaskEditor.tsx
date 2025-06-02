import clsx from 'clsx';
import { useTaskEditorStore, useTaskStore } from '@/app/store/store';
import { useFormAndValidation } from '@/shared/hooks/useForm';
import { Button, Input } from '@/shared/ui';

import styles from './taskEditor.module.css';
import { RadioButton } from '@/shared/ui/radioButton/RadioButton';
import { priorityItems } from '@/shared/constants/priorityItems';

export const TaskEditor = () => {
  const { values, resetForm, handleChange } = useFormAndValidation();
  const { isOpenTaskEditor, toggleTaskEditor } = useTaskEditorStore(
    (state) => state
  );
  const { addTask } = useTaskStore((state) => state);

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
        <Input values={values} handleChange={handleChange} />

        <div className={styles.priority}>
          <div className={styles.inner}>
            <span className={styles.priorityTitle}>Приоритет</span>
            <fieldset className={styles.actions}>
              {priorityItems.map((item) => (
                <RadioButton
                  {...item}
                  key={item.id}
                  checked={Number(values?.priority) === item.value}
                  handleChange={handleChange}
                />
              ))}
            </fieldset>
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <Button
            label='Создать'
            className={styles.buttonCreate}
            type='submit'
            disabled={!values?.title}
          />
          <Button
            label='Отмена'
            className={styles.buttonCancel}
            onClick={handleCancel}
          />
        </div>
      </form>
    </div>
  );
};
