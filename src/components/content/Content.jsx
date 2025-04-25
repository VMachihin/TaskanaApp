import { IncomingTasks } from '@/pages/incomingTasks';
import { NavBar } from '@/components/navBar';
import { SideBar } from '@/components/sideBar';
import { TaskEditor } from '@/components/taskEditor';

import styles from './content.module.css';

export const Content = () => {
  return (
    <section className={styles.content}>
      <NavBar />
      <IncomingTasks />
      <SideBar />
      <TaskEditor />
    </section>
  );
};
