import { FC } from 'react';
import { type Task } from '@/shared/types/task';
import { Checkbox } from '@/shared/ui';

import styles from './taskItem.module.css';

interface ITaskProps {
  task: Task;
}

export const TaskItem: FC<ITaskProps> = ({ task }) => {
  return (
    <li className={styles.item} key={task.id}>
      <Checkbox {...task} />
      <span className={styles.title_task}>{task.title}</span>
    </li>
  );
};
