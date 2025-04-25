import { useTasks } from '@/hooks/useTasks';
import { Illustration } from '@/components/illustration';

import styles from './taskList.module.css';

export const TaskList = () => {
  const { tasks } = useTasks();
  const checkboxMode = { 1: 'lowest', 2: 'medium', 3: 'high' };

  console.log(tasks);
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
            {tasks.map((task) => (
              <li className={styles.item} key={task.id}>
                <input
                  type='checkbox'
                  id={task.id}
                  className={`${styles.checkbox} ${
                    styles[checkboxMode[task.priority]]
                  }`}
                />
                <span className={styles.title_task}>{task.title}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};
