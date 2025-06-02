import { TaskList } from '@/widgets';
import { Dropdown } from '@/features/dropdown';

import styles from './mainContainer.module.css';

export const MainContainer = () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Входящие</h1>
        <Dropdown />
      </div>

      <TaskList />
    </main>
  );
};
