import { Header } from '@/components/header';
import { Content } from '@/components/content';

import styles from './appLayout.module.css';

export const AppLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Content />
    </div>
  );
};
