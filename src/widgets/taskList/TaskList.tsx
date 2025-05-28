import { useTaskStore } from '@/app/store/store';
import { Illustration } from '@/shared/ui';
import { TaskItem } from '@/widgets';

import styles from './taskList.module.css';

export const TaskList = () => {
  const { tasks } = useTaskStore((state) => state);

  return (
    <>
      <section className={styles.tasks}>
        {!tasks.length ? (
          <div className={styles.empty_task_content}>
            <h2 className={styles.title}>
              Все твои задачи организованы как надо
            </h2>
            <span className={styles.description}>
              Отличная работа! Ты&nbsp;большой молодец!
            </span>

            <Illustration
              name='tasksImg'
              className={styles.image}
              colorBase={'var(--color-neutral-900)'}
              colorAccent={'var(--color-neutral-300)'}
            />
          </div>
        ) : (
          <ul className={styles.list}>
            {tasks?.map((task) => (
              <TaskItem task={task} key={task.id} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
};
