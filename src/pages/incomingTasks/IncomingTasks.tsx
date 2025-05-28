import { MainContainer } from '@/widgets/mainContainer';
import { Footer } from '@/widgets/footer';

import styles from './incomingTasks.module.css';

export const IncomingTasks = () => {
  return (
    <div className={styles.incomingTask}>
      <MainContainer />
      <Footer />
    </div>
  );
};
