import { IncomingTasks } from '@/pages/incomingTasks';

import { NavBar } from '@/widgets/navBar';
import { SideBar } from '@/widgets/sideBar';
import { TaskEditor } from '@/widgets/taskEditor';

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
