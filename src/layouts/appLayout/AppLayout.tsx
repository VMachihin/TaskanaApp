import { Header } from '@/widgets/header';
import { Content } from '@/widgets/content';

import styles from './appLayout.module.css';

export const AppLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Content />
    </div>
  );
};
