import { Statistic } from "@/components/statistic";

import styles from "./sideBar.module.css";

export const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <Statistic />
    </aside>
  );
};
