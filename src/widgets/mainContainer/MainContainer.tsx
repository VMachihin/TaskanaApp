import { TaskList } from '@/widgets';
import styles from './mainContainer.module.css';

export const MainContainer = () => {
  return (
    <main className={styles.main}>
      <h1>Входящие</h1>

      <TaskList />
    </main>
  );
};
