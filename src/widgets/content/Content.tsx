import { IncomingTasks } from '@/pages/incomingTasks';
import { NavBar, SideBar, TaskEditor } from '@/widgets';
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
