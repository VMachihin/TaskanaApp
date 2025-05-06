import { TaskList } from '@/widgets/taskList';

import styles from './main-container.module.css';

export const MainContainer = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Входящие</h1>

      <TaskList />
    </main>
  );
};
