import { MainContainer } from '@/components/mainContainer';
import { Footer } from '@/components/footer';

import styles from './incoming-tasks.module.css';

export const IncomingTasks = () => {
  return (
    <div className={styles.incomingTask}>
      <MainContainer />
      <Footer />
    </div>
  );
};
