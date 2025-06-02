import { FC } from 'react';
import { type Task } from '@/shared/types/task';
import { Button, Checkbox, Icon } from '@/shared/ui';

import styles from './taskItem.module.css';
import { useTaskEditorStore, useTaskStore } from '@/app/store/store';

interface ITaskProps {
  task: Task;
}

export const TaskItem: FC<ITaskProps> = ({ task }) => {
  // const { toggleTaskEditor } = useTaskEditorStore();

  // const onOpenTaskEditor = useCallback(
  //   (id) => {
  //     handleOpenTaskEditor(TYPE_TASK.edit, id);
  //   },
  //   [handleOpenTaskEditor]
  // );

  return (
    <li className={styles.item} key={task.id}>
      <div className={styles.inner}>
        <Checkbox id={task.id} priority={task.priority} />
        <span className={styles.titleTask}>{task.title}</span>
      </div>

      <Button
        icon={<Icon name='edit' />}
        className={styles.taskEdit}
        // onClick={() => onOpenTaskEditor(task.id)}
      />
    </li>
  );
};
