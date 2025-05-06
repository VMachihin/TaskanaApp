import { Icon } from '@/shared/ui/icon';

import styles from './navbar.module.css';

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href='##' className={styles.link}>
            <Icon name='inbox' className={styles.icon} />
            <span>Входящие</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
