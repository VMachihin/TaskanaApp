import { Statistic } from '@/components/statistic';

import styles from './sidebar.module.css';

export const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <Statistic />
    </aside>
  );
};
