import { Statistic } from '@/widgets';
import styles from './sidebar.module.css';

export const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <Statistic />
    </aside>
  );
};
